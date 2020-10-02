import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YgoCardFormComponent } from './ygo-card-form.component';

describe('YgoCardFormComponent', () => {
  let component: YgoCardFormComponent;
  let fixture: ComponentFixture<YgoCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YgoCardFormComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YgoCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
