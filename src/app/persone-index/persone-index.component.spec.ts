import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneIndexComponent } from './persone-index.component';

describe('PersoneIndexComponent', () => {
  let component: PersoneIndexComponent;
  let fixture: ComponentFixture<PersoneIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoneIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoneIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
