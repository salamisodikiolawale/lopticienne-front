import { Component, DoCheck, OnInit } from '@angular/core';
import { GlobalComponentService } from '../../services/global-component.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  btnCount:string="Mon compte";
  btnCountColor:string="primary"
  btnPanier:string="Mon panier";
  btnPanierColor:string="Mon panier";

  //For the pipe
  public searchInput: string="1000";
  public searchInputTypeMonture: string="";
  public searchInputVisage: string="";
  public searchInputGenre: string="";

  constructor(private globaleService: GlobalComponentService) { }
  

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.globaleService.updateApprovalPrice(this.searchInput);    
    this.globaleService.updateApprovalTypeMonture(this.searchInputTypeMonture);    
    // this.globaleService.updateApprovalVisage(this.searchInputTypeMonture);    
    // this.globaleService.updateApprovalGenre(this.searchInputTypeMonture);    
  }

}
