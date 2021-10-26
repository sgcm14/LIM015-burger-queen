import { TestBed } from '@angular/core/testing';
import { BurgerQueenDBService } from './burger-queen-db.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

describe('BurgerQueenDBService', () => {
  let service: BurgerQueenDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule
      ]
    });
    service = TestBed.inject(BurgerQueenDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
