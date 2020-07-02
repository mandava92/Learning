import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTrainingsComponent } from './progress-trainings.component';

describe('ProgressTrainingsComponent', () => {
  let component: ProgressTrainingsComponent;
  let fixture: ComponentFixture<ProgressTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
