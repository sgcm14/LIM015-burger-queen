import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burger-queen';

  // items: Observable<any[]>;
  // constructor(firestore: AngularFirestore) {
  //   // this.items = firestore.collection('productos').valueChanges();
  //   this.items = firestore.collection('mesas').valueChanges();
  // }

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  // }
}
