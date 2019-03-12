import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerRootComponent } from './computer-root.component';

describe('ComputerRootComponent', () => {
  let component: ComputerRootComponent;
  let fixture: ComponentFixture<ComputerRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
