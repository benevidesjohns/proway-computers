import { Injectable } from '@angular/core';
import { ProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: ProdutoCarrinho[] = []

  constructor() { }

  getCarrinho = () => JSON.parse(localStorage.getItem("carrinho") || "[]")

  addItemCarrinho(produto: ProdutoCarrinho) {
    this.itens.push(produto)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho() {
    this.itens = []
    localStorage.clear()
  }
}
