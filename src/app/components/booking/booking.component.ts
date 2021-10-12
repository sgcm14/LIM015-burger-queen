import { Component, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  tables: any[] = [];

  constructor(private service: BurgerQueenDBService) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables() {
    this.service.getTables().subscribe(data => {
      this.tables = [];
      data.forEach((element:any) => { // Se puede usar map para recorrer
        // console.log(element.payload.doc.id); // trae colección por ID
        // console.log(element.payload.doc.data()); // trae la colección con contenido
        this.tables.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      // console.log(this.tables); // imprime data completa con las propiedades de FS
    });
  }

}
