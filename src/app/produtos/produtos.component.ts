import { Component, OnInit } from '@angular/core';
import { Produto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] | undefined

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const produtos = this.produtosService.getAll()

    this.route.queryParamMap.subscribe(params => {
      const descricaoProduto = params.get("descricao")?.toLowerCase()

      if (descricaoProduto) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricaoProduto))
        return;
      }

      this.produtos = produtos;
    })
  }

}
