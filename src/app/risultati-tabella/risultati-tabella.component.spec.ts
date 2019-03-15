import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisultatiTabellaComponent } from './risultati-tabella.component';

describe('RisultatiTabellaComponent', () => {
  let component: RisultatiTabellaComponent;
  let fixture: ComponentFixture<RisultatiTabellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisultatiTabellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisultatiTabellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
