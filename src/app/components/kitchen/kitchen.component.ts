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
        // this.order = [];
        this.order.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
          // statusPrueba: 'pendiente',
        })
      });
      console.log(this.order); // imprime data completa con las propiedades de FS
      // console.log(this.order[1].detalle[0].nombre);
      // console.log(this.order[1].detalle[0].cantidad);

      for (let j = 0; j < this.order.length; j++) {
        // console.log(j);
        for (let k = 0; k < this.order[j].detalle.length; k++) {
          this.orderName += this.order[j].detalle[k].nombre;
          // console.log(this.order[j].detalle[k].nombre);
          this.orderQuantity = this.order[j].detalle[k].cantidad;
          // console.log(this.order[j].detalle[k].cantidad);
        }
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      // actualizar status de orden en firebase
    }
  }

  // Actualizar status de pedido en FB
  // prueba(orderStatus: string){
  //   return orderStatus === 'pendiente';
  // }

}
