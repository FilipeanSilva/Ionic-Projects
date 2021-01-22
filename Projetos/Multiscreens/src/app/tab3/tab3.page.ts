import { Component} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  palavras:Array<string>=new Array();
  
  constructor() {
    this.palavras.push('Ola','nos','somos','o','grupo','de','am','constituido','por','3','elementos',':','Bruno','Antonio','Filipe','e',
    'achamos','ionic','uma','ferramenta','bastante','util','para','o','desenvolvimento','de','uma','aplicação','damos','por','concluido','este','trabalho',
    'e','esperamos','ter','uma','boa','nota','obrigado','pela','vossa','disponiblidade');
  }
}
