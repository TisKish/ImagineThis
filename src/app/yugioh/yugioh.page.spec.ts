import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YugiohPage } from './yugioh.page';

describe('YugiohPage', () => {
  let component: YugiohPage;
  let fixture: ComponentFixture<YugiohPage>;
  let yugiohPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YugiohPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YugiohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    yugiohPage = fixture.nativeElement;
    const items = yugiohPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
