import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProdutosComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
