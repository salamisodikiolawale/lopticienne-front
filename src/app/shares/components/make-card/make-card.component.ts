import { Component, Input, OnInit } from '@angular/core';
import { MakeArticle } from '../../models/MakeArticle';

@Component({
  selector: 'app-make-card',
  templateUrl: './make-card.component.html',
  styleUrls: ['./make-card.component.scss']
})
export class MakeCardComponent implements OnInit {

  @Input() makesData:MakeArticle = {
      id:0,
      name:"",
      description:""
    }

  constructor() { }

  ngOnInit(): void {
    
  }

}
