import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article, Gender, TypeArticle } from './models/Article';
import { MakeArticle } from './models/MakeArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  datas:BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([{
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
  }])
  
  makesData:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([{}]);

  private urlArticles = "http://127.0.0.1:8080/api/articles";

  private urtlMakeArticle = "http://127.0.0.1:8080/api/make_articles";


  constructor(private http:HttpClient) { }

  getArticles():Observable<Article[]>{

    this.http.get<Article[]>(this.urlArticles).subscribe( (articles:Article[]) => {
      const article_str  = JSON.stringify(articles);
      const article_obj = JSON.parse(article_str);
      const hydraMember = article_obj["hydra:member"];
      this.datas.next(hydraMember);
    })
    return this.datas;
  }

  getMarkes():Observable<MakeArticle[]>{

    this.http.get<MakeArticle[]>(this.urtlMakeArticle).subscribe( (makes:MakeArticle[]) => {
      const make_str  = JSON.stringify(makes);
      const make_obj = JSON.parse(make_str);
      const hydraMember = make_obj["hydra:member"];
      this.makesData.next(hydraMember);
    })
    return this.makesData;
  }
}
