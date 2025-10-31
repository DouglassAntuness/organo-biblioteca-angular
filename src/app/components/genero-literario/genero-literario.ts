import { Component, input } from '@angular/core';
import { LivroCompoent } from "../livro/livro";
import type { IGeneroLiterario } from '../livro/livro.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [
    LivroCompoent, 
    CommonModule
  ],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterarioComponent {

  genero = input.required<IGeneroLiterario>();
  

}
