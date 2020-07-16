import {
    Component,
    OnInit
} from '@angular/core';
import {
    TraineeService
} from '../trainee.service';
import {
    StudentTrainings
} from 'src/app/Models/student-trainings';

@Component({
    selector: 'app-trainee-inprogress',
    templateUrl: './trainee-inprogress.component.html',
    styleUrls: ['./trainee-inprogress.component.css']
})
export class TraineeInprogressComponent implements OnInit {

    currentTrainings: StudentTrainings[] = [];
    progress = 60;
    constructor(private traineeService: TraineeService) {}

    ngOnInit(): void {
        this.getCurrentTrainings();
    }

    getCurrentTrainings() {
        let userId: Number;
        this.traineeService.getCurrentTrainings(userId)
            .subscribe(
                data => {
                    this.currentTrainings = data;
                },
                error => {
                    let st = new StudentTrainings();
                    st.courseName = "Test";
                    st.batchName = "Test";
                    this.currentTrainings.push(st);
                }
            );
    }



}