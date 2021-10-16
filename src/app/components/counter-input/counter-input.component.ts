import { Component,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  //variables globales
  @Input () itemName: string | any;
  @Input () itemPrice: number | any;

  quantity:number=1;
  i=1;
  total:number=0;

  constructor() {   }

  ngOnInit(): void {  

    //se inicializan valores
    this.total = this.quantity * this.itemPrice;
   }

  
  plus(){
    if(this.i){
      this.i++;
      this.quantity=this.i;
      this.total=this.itemPrice*this.quantity;
    }
  }

  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
      this.total = this.total - this.itemPrice;
    }
  }

}
