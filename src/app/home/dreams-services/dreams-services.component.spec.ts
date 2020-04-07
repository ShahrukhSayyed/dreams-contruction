import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsServicesComponent } from './dreams-services.component';

describe('DreamsServicesComponent', () => {
  let component: DreamsServicesComponent;
  let fixture: ComponentFixture<DreamsServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
