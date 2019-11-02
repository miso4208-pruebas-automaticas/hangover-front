import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicDataComponent } from './dinamic-data.component';

describe('DinamicDataComponent', () => {
  let component: DinamicDataComponent;
  let fixture: ComponentFixture<DinamicDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinamicDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
