import { Component, Input, OnInit } from '@angular/core';
import { Article, Gender, TypeArticle } from '../../models/Article';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data:Article={
    id:0,
    name:"titre",
    price:150,
    quantity:0,
    color:"",
    createAt:"",
    endAt:"",
    type:TypeArticle.LENTILLE_CORRECTRICE,
    gender:Gender.Homme,
    // brande:"marque",
    image:"https://images.generale-optique.com/gvfrance?set=angle%5B1%5D,articleNumber%5B306026%5D,company%5Bgdo%5D,finalSize%5Bproductdetails%5D,brandname%5BIBLOCK%5D&call=url%5Bfile%3Acommon%2Fgvf%2FgvfProduct%5D",
  };
  constructor() { }

  ngOnInit(): void {
    // console.log(this.data.title);
  }

}
