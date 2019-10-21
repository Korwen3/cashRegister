import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommableListComponent } from './consommable-list.component';

describe('ConsommableListComponent', () => {
  let component: ConsommableListComponent;
  let fixture: ComponentFixture<ConsommableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsommableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsommableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
