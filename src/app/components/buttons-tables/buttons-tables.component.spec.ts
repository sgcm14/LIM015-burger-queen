import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsTablesComponent } from './buttons-tables.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

describe('ButtonsTablesComponent', () => {
  let component: ButtonsTablesComponent;
  let fixture: ComponentFixture<ButtonsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule
      ],
      declarations: [ButtonsTablesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
