import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quantity:number=1;
  i=1;
  plus(){
    if(this.i){
      this.i++;
      this.quantity=this.i;
    }
  }

  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }

}
