import { Component } from '@angular/core';
import { Login } from './login/login';
import { Header } from './header/header';
import { Registro } from './registro/registro';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Dashboard } from './dashboard/dashboard';

@Component({
  imports: [Header, Login,Registro,RouterOutlet,Footer,Dashboard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
