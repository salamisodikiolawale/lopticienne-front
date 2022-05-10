import { Component, Input, OnInit, Output } from '@angular/core';
import { ArticleService } from '../shares/article.service';
import { Article } from '../shares/models/Article';
import { GlobalComponentService } from '../shares/services/global-component.service';

@Component({
  selector: 'app-arccueil',
  templateUrl: './arccueil.component.html',
  styleUrls: ['./arccueil.component.scss']
})
export class ArccueilComponent implements OnInit {

 public datas:Article[] = [];
 public searchInput:string="";
 public searchInputypeMonture:string="";
 public spinner:boolean = true;
 
  constructor(
    private articleService:ArticleService, 
    private globaleService: GlobalComponentService
  ) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((articles:Article[])=>{
      this.datas = articles;
      this.spinner = false;
    })

    this.globaleService.currentApprovalStagePrice.subscribe(price => this.searchInput = price);
    this.globaleService.currentApprovalStageTypeMonture.subscribe(typeMonture => this.searchInputypeMonture = typeMonture);
  }

  
}
