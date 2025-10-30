import { Component, input } from '@angular/core';
import { LivroCompoent } from "../livro/livro";
import { livros } from '../../mock-livros';
import type { IGeneroLiterario } from '../livro/livro.type';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroCompoent],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterarioComponent {

  genero = input.required<IGeneroLiterario>();
  

}
