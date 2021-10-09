import { Component, Input, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';

@Component({
  selector: 'app-buttons-tables',
  templateUrl: './buttons-tables.component.html',
  styleUrls: ['./buttons-tables.component.css']
})
export class ButtonsTablesComponent implements OnInit {
  //traen los datos de booking.component.html
  @Input() tableName: string | undefined;
  @Input() tableStatus:boolean | any;
  @Input() tableId: number | any;
  //show:boolean=false;

  constructor(private service: BurgerQueenDBService) { }

  ngOnInit(): void {
    console.log(this.tableStatus); //quitar despues
  }

  updateStatusTable(){
    const idTable=this.tableId;
    const statusTable=this.tableStatus;
    const objTable = {status:statusTable};
    this.service.updateTable(idTable,objTable);
  }


}
