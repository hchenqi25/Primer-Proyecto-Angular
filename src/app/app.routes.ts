import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:'',
    loadComponent:() => import("./features/login/login").then(c => c.Login)
  },
  {
    path: 'login',
    redirectTo: ''
  },

  {
    path: 'registro',
    loadComponent: () =>import("./features/registro/registro").then(c => c.Registro)
  },

  {
    path: "dashboard",
    loadComponent:() => import("./features/dashboard/dashboard").then(c => c.Dashboard)
  },

  {
    path: "mi-perfil",
    loadComponent:()=> import("./features/perfil/perfil").then(c => c.Perfil)
  },

  {
    path: "login",
    loadComponent:() => import("./features/login/login").then(c => c.Login)
  },


  {
    path:'**',
    loadComponent:() => import("./features/pagina-no-encontrada/pagina-no-encontrada").then(c => c.PaginaNoEncontrada)
  }



];
