import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSearchComponent } from './trainee-search.component';

describe('TraineeSearchComponent', () => {
  let component: TraineeSearchComponent;
  let fixture: ComponentFixture<TraineeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
