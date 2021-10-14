import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private selectedTable = new BehaviorSubject('');
  sharedMessage = this.selectedTable.asObservable();

  // private infoProduct = new BehaviorSubject(<Array <any>>[]); //Este trae la info del nombre
  // getProduct = this.infoProduct.asObservable();
  private productList = new BehaviorSubject(<Array <any>>[]); //Este trae la info del nombre
  getProduct = this.productList.asObservable();

  constructor() { }

  nextMessage(message: string) {
    this.selectedTable.next(message)
  }

  // productOrder(message: Array<any>): void {
  //   this.infoProduct.next(message)
  // }
  productOrder(message: Array<any>): void {
    this.productList.next(message)
  }

}

