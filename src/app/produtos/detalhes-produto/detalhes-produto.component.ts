import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { Produto, ProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produto | undefined
  quantidade: number = 1

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const idProduto = Number(routeParams.get("id"))

    this.produto = this.produtosService.getProduto(idProduto)
  }

  adicionarItemCarrinho() {
    const produto: ProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }

    this.carrinhoService.addItemCarrinho(produto)
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho!")
  }
}
