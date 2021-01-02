import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':lang/home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: navigator.language + '/home',
    pathMatch: 'full'
  },
  {
    path: ':lang/about',
    loadChildren: () => import('./modules/about/about.module').then( m => m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
