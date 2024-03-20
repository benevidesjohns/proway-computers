import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { ProdutoCarrinho } from '../produtos';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: ProdutoCarrinho[] = []
  total: number = 0

  constructor(
    private carrinhoService: CarrinhoService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.getCarrinho()
    this.calcularTotalCarrinho()
  }

  removeItemCarrinho(idProduto: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => idProduto !== item.id)
    this.carrinhoService.removeItemCarrinho(idProduto)
    this.calcularTotalCarrinho()
  }

  calcularTotalCarrinho() {
    this.total = this.itensCarrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0)
  }

  comprarItensCarrinho() {
    this.snackBar.open("Compra efetuada com sucesso!", "OK", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    })

    this.carrinhoService.limparCarrinho()
    this.router.navigate(["produtos"])
  }
}
