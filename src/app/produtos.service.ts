import { Injectable } from '@angular/core';
import { Produto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: Produto[] = produtos

  constructor() { }

  getAll = () => this.produtos
  getProduto = (idProduto: number) => this.produtos.find(produto => produto.id == idProduto)
}
