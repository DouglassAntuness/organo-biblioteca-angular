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
  isFavoritos: boolean = false;

  ngOnInit() {
    this.handleFavoritosOrAll(false);
  }

  handleFavoritosOrAll(isFavoritos: boolean) {
    this.livrosPorGenero = new Map();
    this.isFavoritos = isFavoritos;

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
        livros: isFavoritos ? this.livrosPorGenero.get("romance")?.filter((livro) => { return livro.favorito }) ?? [] :
          this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: isFavoritos ? this.livrosPorGenero.get("misterio")?.filter((livro) => { return livro.favorito }) ?? [] :
          this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: isFavoritos ? this.livrosPorGenero.get("fantasia")?.filter((livro) => { return livro.favorito }) ?? [] :
          this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: isFavoritos ? this.livrosPorGenero.get("ficcao-cientifica")?.filter((livro) => { return livro.favorito }) ?? [] :
          this.livrosPorGenero.get("ficcao-cientifica") ?? []
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: isFavoritos ? this.livrosPorGenero.get("tecnicos")?.filter((livro) => { return livro.favorito }) ?? [] :
          this.livrosPorGenero.get("tecnicos") ?? []
      },
    ]
  }
}
