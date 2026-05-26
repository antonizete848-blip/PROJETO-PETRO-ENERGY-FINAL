import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}