import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {
    TraineeCompletedComponent
} from './trainee-completed.component';

describe('TraineeCompletedComponent', () => {
    let component: TraineeCompletedComponent;
    let fixture: ComponentFixture < TraineeCompletedComponent > ;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
                declarations: [TraineeCompletedComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TraineeCompletedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});