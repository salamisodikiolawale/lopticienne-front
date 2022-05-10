import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shares/article.service';
import { Article, TypeArticle } from '../shares/models/Article';
import { GlobalComponentService } from '../shares/services/global-component.service';

@Component({
  selector: 'app-lunettes',
  templateUrl: './lunettes.component.html',
  styleUrls: ['./lunettes.component.scss']
})
export class LunettesComponent implements OnInit {

  public datas:Article[] = [];
  public searchInput:string="";
  public searchInputypeMonture:string="";
  
  constructor(
    private articleService: ArticleService, 
    private globalService: GlobalComponentService,
  ) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( (articles:Article[]) => {
      articles.forEach( article => {
        if(article.type === TypeArticle.LUNETTE_DE_SOLEIL || article.type === TypeArticle.LUNETTE_DE_VUE){
          this.datas.push(article);
        }
      });
    })
    this.globalService.currentApprovalStagePrice.subscribe(price => this.searchInput = price);
    this.globalService.currentApprovalStageTypeMonture.subscribe(typeMonture => this.searchInputypeMonture = typeMonture);
  }
}
