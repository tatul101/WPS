import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpsDemoComponentComponent } from './wps-demo-component.component';

describe('WpsDemoComponentComponent', () => {
  let component: WpsDemoComponentComponent;
  let fixture: ComponentFixture<WpsDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpsDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpsDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
