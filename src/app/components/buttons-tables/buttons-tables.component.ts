import { Component, Input, OnInit } from '@angular/core';
import { BurgerQueenDBService } from 'src/app/services/burger-queen-db.service';

@Component({
  selector: 'app-buttons-tables',
  templateUrl: './buttons-tables.component.html',
  styleUrls: ['./buttons-tables.component.css']
})
export class ButtonsTablesComponent implements OnInit {
  @Input() tableName: string | undefined;
  //show:boolean=false;
  @Input() tableStatus:boolean | undefined;
  


  constructor() { }

  ngOnInit(): void {
    console.log(this.tableStatus);
  }


}
