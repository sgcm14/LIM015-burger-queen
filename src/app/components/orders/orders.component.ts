import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  time: any = Date.now();
  order: any[] = [];
  orderName: any;
  orderQuantity: any;
  orderId: any;
  orderStatus: any;
  tableID: any;


  constructor(private service: BurgerQueenDBService) { }

  ngOnInit(): void {
    // Actualiza la hora
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.getOrderKitchen();
  }

  getOrderKitchen() {
    this.service.getOrderKitchen().subscribe(data => {
      this.order = [];
      data.forEach((element: any) => {
        this.order = [...this.order, {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        }];
      });
      for (let j = 0; j < this.order.length; j++) {
        this.orderStatus = this.order[j].status;
        for (let k = 0; k < this.order[j].detalle.length; k++) {
          this.orderName += this.order[j].detalle[k].nombre;
          this.orderQuantity = this.order[j].detalle[k].cantidad;
        }
      }
    });
  }

  getOrderPending() {
    return this.order.filter((item) => item.status == 1);
  }
  getOrderDone() {
    return this.order.filter((item) => item.status == 2);
  }

  drop(event: CdkDragDrop<any[]>) {
    // Permite mover en la misma columna
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // detecta cambio de columna al hacer el drop
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      // variables reasignadas
      this.orderId = event.container.data[event.currentIndex].id;
      this.tableID = event.container.data[event.currentIndex].mesaID
      this.getOrderDone();

      // Limpia el status de la mesa si vuelve a booking
      const clearTable = () => {
        const idTable = this.tableID;
        const objTable = { status: false };
        this.service.updateTable(idTable, objTable);
        // console.log(this.selectedTable);
      }
      // Actualiza el estado del pedido con el drop de 1 a 2
      if (this.orderStatus === 1) {
        const objOrder = { status: 2 };
        this.service.updateStatusOrder(this.orderId, objOrder);
        clearTable();
      }

      // Actualiza el estado del pedido con el drop de 2 a 1
      if (this.orderStatus === 2) {
        const objOrder = { status: 1 };
        this.service.updateStatusOrder(this.orderId, objOrder);
      }
    }
  }
}
