import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


// Components
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { BookingComponent } from './components/booking/booking.component';
import { MenuComponent } from './components/menu/menu.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ButtonsTablesComponent } from './components/buttons-tables/buttons-tables.component';
import { TemplateProductsComponent } from './components/template-products/template-products.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomeBodyComponent,
    HomeFooterComponent,
    BookingComponent,
    MenuComponent,
    KitchenComponent,
    OrdersComponent,
    ButtonsTablesComponent,
    TemplateProductsComponent,
    CounterInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
