import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommableCreateComponent } from './consommable-create.component';

describe('ConsommableCreateComponent', () => {
  let component: ConsommableCreateComponent;
  let fixture: ComponentFixture<ConsommableCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsommableCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsommableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
