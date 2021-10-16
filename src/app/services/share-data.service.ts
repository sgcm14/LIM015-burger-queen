import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private selectedTable = new BehaviorSubject('');
  sharedMessage = this.selectedTable.asObservable();


  constructor() { }

  nextMessage(message: string) {
    this.selectedTable.next(message)
  }


}

