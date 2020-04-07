import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsProjectsComponent } from './dreams-projects.component';

describe('DreamsProjectsComponent', () => {
  let component: DreamsProjectsComponent;
  let fixture: ComponentFixture<DreamsProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamsProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
