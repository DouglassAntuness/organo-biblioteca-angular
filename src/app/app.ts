import { Component, signal } from '@angular/core';
import { CabecalhoComponent } from './components/cabecalho/cabecalho';
import { FooterComponent } from './components/footer/footer';
import { LivroCompoent } from './components/livro/livro';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    FooterComponent,
    ListaLivrosComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
