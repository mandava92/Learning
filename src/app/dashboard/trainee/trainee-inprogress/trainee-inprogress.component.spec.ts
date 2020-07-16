import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {
    TraineeInprogressComponent
} from './trainee-inprogress.component';

describe('TraineeInprogressComponent', () => {
    let component: TraineeInprogressComponent;
    let fixture: ComponentFixture < TraineeInprogressComponent > ;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
                declarations: [TraineeInprogressComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TraineeInprogressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});