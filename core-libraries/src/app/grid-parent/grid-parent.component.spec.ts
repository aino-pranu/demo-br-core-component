import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridParentComponent } from './grid-parent.component';

describe('GridParentComponent', () => {
  let component: GridParentComponent;
  let fixture: ComponentFixture<GridParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
