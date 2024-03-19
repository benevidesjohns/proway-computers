import { Component, OnInit } from '@angular/core';
import { Produto, produtos } from '../produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = produtos

  constructor() { }

  ngOnInit(): void {
  }

}
