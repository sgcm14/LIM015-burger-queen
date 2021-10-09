import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgerQueenDBService {

  constructor(private firestore: AngularFirestore) {
  }

  // Trae la colección de Mesas FB
  getTables(): Observable<any> {
    return this.firestore.collection('mesas').snapshotChanges();
  }

  updateTable(id: string, status:Object){
    return this.firestore.collection('mesas').doc(id).update(status);
  }
}
/*
export class AppComponent implements OnInit {
  title = 'burger-queen';

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    // this.items = firestore.collection('productos').valueChanges();
    this.items = firestore.collection('mesas').valueChanges();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}

*/