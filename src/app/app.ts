import { Component } from '@angular/core';
import { Login } from './features/login/login';
import { Header } from './shared/components/header/header';
import { Registro } from './features/registro/registro';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';
import { Dashboard } from './features/dashboard/dashboard';

@Component({
  imports: [Header, Login,Registro,RouterOutlet,Footer,Dashboard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
