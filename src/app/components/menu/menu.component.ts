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
  productsFilter: any[] = []; // trae los productos filtrados para mostrar
  menuType: string = 'desayuno';
  selectedTable: any;
  itemsCart = this.cartService.getItems(); //trae los productos del carrito
  username: string = '';

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
      data.forEach((element: any) => {
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
    if (this.menuType === 'desayuno') {
      return this.products.filter((item) => item.tipo == 'desayuno');
    }
    else return this.products.filter((item) => item.tipo == 'menu');
  }

  // cambia estado de menu a mostrar(cambio de estado)
  changeTypeMenu(type: string) {
    this.menuType = type;
    this.productsFilter = this.getBreakfastItem();
  }

  makeOrder() {
    const date = new Date();
    const newDate = date.toString();
    const saveOrder = {
      cliente: this.username,
      total: this.getTotal(),
      mesa: this.selectedTable.name,
      mesaID: this.selectedTable.id,
      status: 0,
      fecha: newDate,
      detalle: this.itemsCart,
      tiempo: ''
    }
    this.itemsCart = [];// limpia el contenido del carrito
    this.username = '';
    this.selectedTable = '';
    this.service.createOrder(saveOrder);
  }

  // Limpia el status de la mesa si vuelve a booking
  clearTable() {
    const idTable = this.selectedTable.id;
    const objTable = { status: false };
    this.service.updateTable(idTable, objTable);
    // console.log(this.selectedTable);
  }

}
