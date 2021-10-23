import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';
import { interval, timer } from 'rxjs';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  // Información de las Órdenes
  order:any[] = [];
  orderName: any;
  orderQuantity: any;
  orderId: any;
  orderStatus: any;
  orderDate: any;

  // Hora actual, Horas para calculo de tiempo de preparación
  time: any = Date.now(); // Reloj
  dateFb: any; // Almacenará Fecha (orderDateconvertida a string)
  dateFbParsed: Date | any; //Fecha (dateFb convertido de string a tipo fecha)
  preparationTime: any; // Calculo de tiempo de preparación
  preparationOrder: any; // preparationTime enviado a FB


  constructor(private service: BurgerQueenDBService) { }

  ngOnInit(): void {
    // Actualiza la hora
    setInterval(() => {
      this.time = new Date();
    }, 1000);

    // trae la colección de órdenes
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
      this.orderId= event.container.data[event.currentIndex].id;
      this.orderDate = event.container.data[event.currentIndex].fecha;

      // Tiempo de preparación
      const getTimePreparation = () => {
      const finalDate = new Date();
      this.dateFb = Date.parse(this.orderDate); // VIENE DE FB
      this.dateFbParsed = new Date(this.dateFb); // COVIERTE FECHA DE FB(string) A FECHA(date)

      const difference = finalDate.getTime() - this.dateFbParsed.getTime(); //calcular la direncia entre la finalizacion del pedido y la hora de inicio
      // const days = Math.floor(difference / 86400000); // conversion de milisegundos a días
      const hours = Math.floor((difference % 86400000) / 3600000); // conversión de milisegundos a hora
      const minutes = Math.round(((difference % 86400000) % 3600000) / 60000); // calcular minutos

      this.preparationTime = ` ${hours} hs  ${minutes} min `; // tiempo total de preparación
      return this.preparationTime;
      }

      // Actualiza el estado del pedido con el drop de 0 a 1
      this.getOrderDone();
      if (this.orderStatus === 0) {
        const objOrder = {status:1};
        this.service.updateStatusOrder(this.orderId,objOrder);
        this.preparationOrder = {tiempo: getTimePreparation()}
        this.service.updatePreparationTime(this.orderId, this.preparationOrder);
      }
      // Actualiza el estado del pedido con el drop de 1 a 0
      if (this.orderStatus === 1) {
        const objOrder = {status:0};
        this.service.updateStatusOrder(this.orderId,objOrder);
      }

    }
  }

}
