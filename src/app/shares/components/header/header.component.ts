import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  btnCount:string="Mon compte";
  btnCountColor:string="primary"
  btnPanier:string="Mon panier";
  btnPanierColor:string="Mon panier";

  constructor() { }

  ngOnInit(): void {
  }

}
