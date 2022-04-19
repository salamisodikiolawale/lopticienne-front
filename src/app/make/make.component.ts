import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shares/article.service';
import { MakeArticle } from '../shares/models/MakeArticle';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.scss']
})
export class MakeComponent implements OnInit {

  datas:MakeArticle[] = []

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.getMarkes().subscribe( (makes:MakeArticle[]) => {
      // console.log("Make ",makes);
      this.datas = makes;
    })
  }

}
