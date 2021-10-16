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
  @Input() tableName: string = '';
  @Input() tableStatus:boolean | any;
  @Input() tableId: number | any;
  selectedTable:string = '';

  constructor(private service: BurgerQueenDBService,
              private shareData: ShareDataService) { }

  ngOnInit(): void {
    // console.log(this.tableStatus);
    // console.log(this.tableName);
    this.shareData.sharedMessage.subscribe(message => this.selectedTable = message)

  }

  updateStatusTable(){
    const idTable=this.tableId;
    const statusTable=this.tableStatus;
    const objTable = {status:statusTable};
    this.service.updateTable(idTable,objTable);
  }

  // envía información a ser transmitida desde el botón de Mesa
  sendSelectedTable() {
    this.shareData.nextMessage(this.tableName)
  }
}
