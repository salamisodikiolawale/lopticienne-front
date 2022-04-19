import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shares/article.service';
import { Article, Gender, TypeArticle } from '../shares/models/Article';

@Component({
  selector: 'app-lentilles',
  templateUrl: './lentilles.component.html',
  styleUrls: ['./lentilles.component.scss']
})
export class LentillesComponent implements OnInit {

  datas:Article[] = []
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( (articles:Article[]) => {
      articles.forEach( article => {
        if(article.type === TypeArticle.LENTILLE_CORRECTRICE || article.type === TypeArticle.LENTILLE_DE_COULEUR || article.type === TypeArticle.LENTILLE_JOURNALIERE){
          this.datas.push(article);
        }
      });
    })
    // console.log("lentille", this.datas);
    
  }

}
