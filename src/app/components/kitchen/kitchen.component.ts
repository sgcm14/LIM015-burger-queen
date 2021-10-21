import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  time: any = Date.now();
  order:any[] = [];
  orderName: any;
  orderQuantity: any;
  orderId: any;
  orderStatus: any;
  done: any[] = [];

  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  // time: number = Date.now(); Usar así para guardar hora del pedido
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
      data.forEach((element:any) => {
        this.order = [...this.order, {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        }];
      });
      for (let j = 0; j < this.order.length; j++) {
        this.orderId = this.order[j].id;
        this.orderStatus = this.order[j].status;
        for (let k = 0; k < this.order[j].detalle.length; k++) {
          this.orderName += this.order[j].detalle[k].nombre;
          this.orderQuantity = this.order[j].detalle[k].cantidad;
        }
      }
    });
  }

  getOrderPending() {
    return this.order.filter((item) => item.status == 0);
  }
  getOrderDone() {
    return this.order.filter((item) => item.status == 1);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.orderId= event.container.data[event.currentIndex].id;
        // console.log(this.orderId);
      const objOrder = {status:1};
      this.service.updateStatusOrder(this.orderId,objOrder);
      this.getOrderDone();
      if (this.orderStatus === 1) {
        const objOrder = {status:0};
        this.service.updateStatusOrder(this.orderId,objOrder);
      }
    }
  }

}
