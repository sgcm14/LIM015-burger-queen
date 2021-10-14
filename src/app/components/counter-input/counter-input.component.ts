import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  // infoProduct: string= '';
  // infoPrice: number | any;
  infoProduct: any[] = [];
  productList: any[] = [];

  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
    // this.shareData.getProduct.subscribe(message => this.infoProduct = message) // trae la data message del servicio
    // console.log(this.infoProduct);
    this.shareData.getProduct.subscribe(message => this.productList = message) // trae la data message del servicio
    console.log(this.productList);
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
