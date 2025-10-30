import { Component } from '@angular/core';
import { LivroCompoent } from "../livro/livro";
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroCompoent],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterario {

  livro = livros[0];
  

}
