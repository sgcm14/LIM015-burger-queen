import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-template-products',
  templateUrl: './template-products.component.html',
  styleUrls: ['./template-products.component.css']
})
export class TemplateProductsComponent implements OnInit {
  @Input () productName: string | any;
  @Input () productPrice: number | any;
  @Input () productType: string | any;
  infoProduct: string= '';
  // infoProduct: any[] = [];
  productList: any[] = [];

  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
    // this.shareData.getProduct.subscribe(message => this.infoProduct = message) // trae la data message del servicio

    this.shareData.getProduct.subscribe(message => this.productList = message) // trae la data message del servicio
    // console.log(this.infoProduct);
  }
  sendInfoProduct() { // de acá envío información
    // this.shareData.productOrder(this.infoProduct=this.productName)
    this.productList = [];
    // this.productList.unshift({ //añade la info al principio
      this.productList.push({
      name: this.productName,
      price: this.productPrice,
      // ...this.productList
    })
    console.log(this.productList);
    this.shareData.productOrder(this.productList)
  }
}
