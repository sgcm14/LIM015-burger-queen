import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-template-products',
  templateUrl: './template-products.component.html',
  styleUrls: ['./template-products.component.css']
})
export class TemplateProductsComponent implements OnInit {
  @Input () productName: string | any;
  @Input () productPrice: number | any;
  @Input () productType: string | any;

  product = this.cartService.getItems(); //trae la data del service del carrito

  constructor(private cartService: CartService) { }

  ngOnInit(): void {    }

  addToCart(product: any, price:any) {
    this.cartService.addToCart(product,price);
  }
  
}
