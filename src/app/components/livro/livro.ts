import { Component, Input, input } from '@angular/core';
import type { ILivro } from './livro.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class LivroCompoent {

  // usamos input para o compoente receber uma informação de fora
  livro = input.required<ILivro>();
  // angular antigo
  // @Input({required: true}) livro!: ILivro;

  alterarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

}
