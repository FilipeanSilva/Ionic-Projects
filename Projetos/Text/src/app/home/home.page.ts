import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  inputText: string;
  outputText: string;


  constructor() {
  }
  
  onBtnSubmit(){
    this.outputText = this.inputText;
  }
}
