import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomeBodyComponent,
    HomeFooterComponent,
    BookingComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
