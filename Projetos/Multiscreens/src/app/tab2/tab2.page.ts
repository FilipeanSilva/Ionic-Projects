import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  numeros:Array<number>=new Array()
  constructor() {
    for(let i=0; i<1000;i++){
      this.numeros.push(i+1);
    }
  }
}