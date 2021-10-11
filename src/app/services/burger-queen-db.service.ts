import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  // Actualiza el status de las mesas
  updateTable(id: string, status:Object){
    return this.firestore.collection('mesas').doc(id).update(status);
  }

  // Trae la colección de Productos FB
  getProducts(): Observable<any> {
    return this.firestore.collection('productos').snapshotChanges();
  }

  // prueba(){
  //   const tipo$ = new Subject<string>();
  // const queryObservable = tipo$.pipe(
  // switchMap((tipo: any) =>
  //   this.firestore.collection('items', ref => ref.where('desayuno', '==', tipo)).valueChanges()
  // )
  // );
  // }
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