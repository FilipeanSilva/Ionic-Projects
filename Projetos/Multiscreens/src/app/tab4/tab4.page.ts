import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {
  itens: Array<Item> = new Array();
  palavra: string;
  numero: number = 0;
  imagem: string;

  constructor() {
    for (let i = 0; i < 16; i++) {
      this.palavra = "Imagem " + this.numero;
      this.imagem = "/assets/imagens/img" + this.numero + ".jpg";
      let item = new Item(this.numero, this.palavra, this.imagem)
      this.itens.push(item)
      this.numero++;
    }
  }
}