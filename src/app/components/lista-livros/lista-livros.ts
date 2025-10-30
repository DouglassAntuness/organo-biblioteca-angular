import { Component, type OnInit } from '@angular/core';
import type { IGeneroLiterario, ILivro } from '../livro/livro.type';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
})
export class ListaLivrosComponent implements OnInit {
  generos: IGeneroLiterario[] = [];
  livrosPorGenero: Map<string, ILivro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id;

      // se nao existir o genero, seta o genero novo
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }

      // se existir vai setar o livro no genero existente
      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    this.generos = [
      {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get("tecnicos") ?? []
      },
    ]
  }
}
