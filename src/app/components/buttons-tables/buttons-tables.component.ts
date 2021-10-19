import { Component, Input, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-buttons-tables',
  templateUrl: './buttons-tables.component.html',
  styleUrls: ['./buttons-tables.component.css']
})
export class ButtonsTablesComponent implements OnInit {
  //traen los datos de booking.component.html
  @Input() table: any;
  selectedTable:any;

  constructor(private service: BurgerQueenDBService,
              private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.shareData.sharedMessage.subscribe(message => this.selectedTable = message)
  }

  updateStatusTable(){
    const idTable=this.table.id;
    const statusTable=this.table.status;
    const objTable = {status:statusTable};
    this.service.updateTable(idTable,objTable);
  }

  // envía información a ser transmitida desde el botón de Mesa
  sendSelectedTable() {
    // trae la data completa de la mesa y no solo el nombre
    this.shareData.nextMessage(this.table)
  }
}
