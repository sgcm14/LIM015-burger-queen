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
  // Actualiza el status de las mesas
  updateTable(id: string, status: Object) {
    return this.firestore.collection('mesas').doc(id).update(status);
  }

  // Trae la colección de Productos FB
  getProducts(): Observable<any> {
    return this.firestore.collection('productos').snapshotChanges();
  }

  // Trae la colección de Pedidos FB
  getOrderKitchen(): Observable<any> {
    return this.firestore.collection('pedido').snapshotChanges();
  }

  // Permite crear una orden y enviar a FB
  createOrder(order: any) {
    return this.firestore.collection('pedido').add(order);
  }

  // Actualiza el status del pedido
  updateStatusOrder(id: string, status: Object) {
    return this.firestore.collection('pedido').doc(id).update(status);
  }

  // Actualiza el tiempo de preparación del pedido
  updatePreparationTime(id: string, tiempo: Object) {
    return this.firestore.collection('pedido').doc(id).update(tiempo);
  }
}
