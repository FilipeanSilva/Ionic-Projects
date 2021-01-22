import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBtnSubmit1() {
    this.router.navigate(['/tabs/tab2']);
  }
  onBtnSubmit2() {
    this.router.navigate(['/tab3']);
  }
  onBtnSubmit3() {
    this.router.navigate(['/tab4']);
  }
}
