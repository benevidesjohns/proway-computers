import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: '',
    redirectTo: "produtos",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
