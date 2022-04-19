import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shares/article.service';
import { Article, TypeArticle } from '../shares/models/Article';

@Component({
  selector: 'app-lunettes',
  templateUrl: './lunettes.component.html',
  styleUrls: ['./lunettes.component.scss']
})
export class LunettesComponent implements OnInit {

  datas:Article[] = []
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( (articles:Article[]) => {
      articles.forEach( article => {
        if(article.type === TypeArticle.LUNETTE_DE_SOLEIL || article.type === TypeArticle.LUNETTE_DE_VUE){
          this.datas.push(article);
        }
      });
    })
    // console.log("lentille", this.datas);
    
  }
}
