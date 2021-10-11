import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-products',
  templateUrl: './template-products.component.html',
  styleUrls: ['./template-products.component.css']
})
export class TemplateProductsComponent implements OnInit {
  @Input () productName: string | undefined;
  @Input () productPrice: number | any;
  @Input () productType: string | any;

  constructor() { }

  ngOnInit(): void {
  }

}
