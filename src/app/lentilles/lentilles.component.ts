import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shares/article.service';
import { Article, Gender, TypeArticle } from '../shares/models/Article';
import { GlobalComponentService } from '../shares/services/global-component.service';

@Component({
  selector: 'app-lentilles',
  templateUrl: './lentilles.component.html',
  styleUrls: ['./lentilles.component.scss']
})
export class LentillesComponent implements OnInit {

  datas:Article[] = [];
  public searchInput:string="";
  public searchInputypeMonture:string="";

  constructor(
    private articleService: ArticleService, 
    private globalService: GlobalComponentService,
  ) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( (articles:Article[]) => {
      articles.forEach( article => {
        if(article.type === TypeArticle.LENTILLE_CORRECTRICE || article.type === TypeArticle.LENTILLE_DE_COULEUR || article.type === TypeArticle.LENTILLE_JOURNALIERE){
          this.datas.push(article);
        }
      });
    })

    this.globalService.currentApprovalStagePrice.subscribe(price => this.searchInput = price);
    this.globalService.currentApprovalStageTypeMonture.subscribe(typeMonture => this.searchInputypeMonture = typeMonture);
  }

}
