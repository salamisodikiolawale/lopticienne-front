import { Component, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from '../shares/article.service';
import { Article } from '../shares/models/Article';

@Component({
  selector: 'app-arccueil',
  templateUrl: './arccueil.component.html',
  styleUrls: ['./arccueil.component.scss']
})
export class ArccueilComponent implements OnInit {

 datas:Article[] = []
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles:Article[])=>{
      this.datas = articles
      console.log(articles);
      
    })
  }

  
}
