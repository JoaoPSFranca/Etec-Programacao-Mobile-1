import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'logado',
    loadChildren: () => import('./logado/logado.module').then( m => m.LogadoPageModule)
  },
  {
    path: 'loguin',
    loadChildren: () => import('./loguin/loguin.module').then( m => m.LoguinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
