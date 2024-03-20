import { Injectable } from '@angular/core';
import { ProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: ProdutoCarrinho[] = []

  constructor() { }

  getCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]")
    return this.itens
  }

  addItemCarrinho(produto: ProdutoCarrinho) {
    this.itens.push(produto)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  removeItemCarrinho(idProduto: number) {
    this.itens = this.itens.filter(item => idProduto !== item.id)
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho() {
    this.itens = []
    localStorage.clear()
  }
}
