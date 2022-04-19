import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.scss']
})
export class BanniereComponent implements OnInit {

  @Input()height:string="";

  constructor() { }

  ngOnInit(): void {
    // this.height="300px";
  }

}
