import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalComponentService {

  
  constructor() { }

  private approvalStagePrice = new BehaviorSubject("");
  currentApprovalStagePrice = this.approvalStagePrice.asObservable();

  private approvalStageTypeMonture = new BehaviorSubject("");
  currentApprovalStageTypeMonture = this.approvalStageTypeMonture.asObservable();

  private approvalStageGenre = new BehaviorSubject("");
  currentApprovalStageGenre = this.approvalStageGenre.asObservable();

  private approvalStageVisage = new BehaviorSubject("");
  currentApprovalStageVisage = this.approvalStageVisage.asObservable();


  updateApprovalPrice(price: string) {
    this.approvalStagePrice.next(price);
  }

  updateApprovalTypeMonture(typeMonture: string) {
    this.approvalStageTypeMonture.next(typeMonture);
  }

  // updateApprovalVisage(visage: string) {
  //   this.approvalStageVisage.next(visage);
  // }

  // updateApprovalGenre(genre: string) {
  //   this.approvalStageGenre.next(genre);
  // }

  
}
