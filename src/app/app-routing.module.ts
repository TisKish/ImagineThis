import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { YgoCardFormComponent } from './ygo-card-form/ygo-card-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'yugioh',
    loadChildren: () => import('./yugioh/yugioh.module').then(m => m.YugiohPageModule)
  },
  {
    path: 'ygo-card-form', component: YgoCardFormComponent  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
