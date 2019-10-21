import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommableEditComponent } from './consommable-edit.component';

describe('ConsommableEditComponent', () => {
  let component: ConsommableEditComponent;
  let fixture: ComponentFixture<ConsommableEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsommableEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsommableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
