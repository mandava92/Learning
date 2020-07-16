import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
} from '@angular/core';
import {
    TraineeService
} from '../trainee.service';
import {
    StudentTrainings
} from 'src/app/Models/student-trainings';

@Component({
    selector: 'app-trainee-completed',
    templateUrl: './trainee-completed.component.html',
    styleUrls: ['./trainee-completed.component.css']
})
export class TraineeCompletedComponent implements OnInit {

    completedTrainings: StudentTrainings[] = [];

    constructor(private trainingService: TraineeService) {}

    ngOnInit(): void {
        this.getCompletedTrainings();
    }

    getCompletedTrainings() {
        this.trainingService.getCompletedTrainings(123)
            .subscribe(
                data => {
                    this.completedTrainings = data;
                },
                error => {
                    let st = new StudentTrainings();
                    st.courseName = "test";
                    st.mentorName = "Maya";
                    st.batchName = "Mornings";
                    st.studentFee = 123;
                    st.ratings = 2.5;
                    this.completedTrainings.push(st);
                }
            );
    }

    cal(num) {
        console.log("fghjkl");
        console.log(num);
    }

}