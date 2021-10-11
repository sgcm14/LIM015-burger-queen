import { Component, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: any[] = [];
  // breakfast: any[] = [];

  constructor(private _productsService: BurgerQueenDBService) {
  }

  ngOnInit() {
    // (this.getProducts());
    (this.getBreakfastItem())
  }

  // Trae el listado de productos
  getProducts() {
    this._productsService.getProducts().subscribe((data: any[]) => {
      this.products = [];
      data.forEach((element:any) => {
        this.products.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
      });
      return this.products; // imprime data completa con las propiedades de FS
      // console.log(this.products.filter((item) => item.tipo == 'desayuno'));
    });
  }

  // Trae elementos del menú que coinciden con tipo Desayuno
  getBreakfastItem() {
    this.getProducts();
    console.log(this.products.filter((item) => item.tipo == 'desayuno'));
  }

}
