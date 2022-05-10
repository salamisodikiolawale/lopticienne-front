import { Pipe, PipeTransform } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/Article';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 
  transform(articles: Article[], searchInput: string, searchInputypeMonture:string): any[] {
    if(!searchInput || !searchInputypeMonture) {
      return  articles;
    }
    return articles.filter(
      x => x.price < parseInt(searchInput) && x.type === searchInputypeMonture
    )
  }

}
