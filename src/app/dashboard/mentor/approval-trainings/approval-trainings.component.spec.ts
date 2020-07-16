import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {
    ApprovalTrainingsComponent
} from './approval-trainings.component';

describe('ApprovalTrainingsComponent', () => {
    let component: ApprovalTrainingsComponent;
    let fixture: ComponentFixture < ApprovalTrainingsComponent > ;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
                declarations: [ApprovalTrainingsComponent]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ApprovalTrainingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});