import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProdutosComponent
  },
  {
    path: ":id",
    component: DetalhesProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
