import { Component, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   //variables globales
  products: any[] = [];
  menuType: string =  'desayuno';
  selectedTable:string = '';
  productsFilter: any[] = []; // trae los productos filtrados para mostrar
  itemsCart = this.cartService.getItems(); //trae los productos del carrito

  constructor(private service: BurgerQueenDBService, // DB de Firebase
    private shareData: ShareDataService, // Servicio para compartir información
    private cartService: CartService) {  //Servicio del Carrito y Orden
  }
 // Ejecuta funciones al cargar vista
  ngOnInit() {
    //se inicializan valores
    this.getProducts();
     console.log(this.itemsCart); //el tímido
    this.shareData.sharedMessage.subscribe(message => this.selectedTable = message) // trae la data message del servicio
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  // Trae el listado de productos
  getProducts() {
    this.service.getProducts().subscribe((data: any[]) => {
      this.products = [];
      data.forEach((element:any) => {
        this.products.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        })
      });
      this.productsFilter = this.getBreakfastItem();
    });
  }

  // Trae elementos del menú que coinciden con tipo Desayuno
  getBreakfastItem() {
    if (this.menuType==='desayuno'){
      return this.products.filter((item) => item.tipo == 'desayuno');
    }
    else return this.products.filter((item) => item.tipo == 'menu');
  }
  
  // cambia estado de menu a mostrar(cambio de estado)
  changeTypeMenu(type: string){
    this.menuType = type;
    this.productsFilter = this.getBreakfastItem();
  }

}
