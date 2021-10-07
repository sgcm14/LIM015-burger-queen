import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTablesComponent } from './buttons-tables.component';

describe('ButtonsTablesComponent', () => {
  let component: ButtonsTablesComponent;
  let fixture: ComponentFixture<ButtonsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsTablesComponent ]
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
