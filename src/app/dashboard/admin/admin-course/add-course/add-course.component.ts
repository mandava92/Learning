import {
    Component,
    OnInit
} from '@angular/core';
import {
    Skill
} from 'src/app/Models/skill';
import {
    Batch
} from 'src/app/Models/batch';
import {
    Course
} from 'src/app/Models/course';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';
import {
    CourseService
} from '../course.service';
import {
    SkillService
} from '../../admin-skill/skill.service';
import {
    BatchService
} from '../../admin-batch/batch.service';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

    skills: Skill[] = [];
    batches: Batch[] = [];

    constructor(private skillService: SkillService,
        private batchService: BatchService,
        private formBuilder: FormBuilder,
        private courseService: CourseService) {}

    courseForm = this.formBuilder.group({
        courseName: ["", Validators.required],
        skillId: ["", Validators.required],
        batchId: ["", Validators.required],
        mentorShare: ["", Validators.required],
        studentFee: ["", Validators.required]
    });

    ngOnInit(): void {
        this.loadSkills();
        this.loadBatches();
    }

    loadSkills() {
        this.skillService.getSkills().subscribe(
            data => {
                this.skills = data;
            },
            error => {
                let skill = new Skill();
                skill.id = 1;
                skill.name = "Java";
                this.skills.push(skill);
            })
    }

    loadBatches() {
        this.batchService.getBatches().subscribe(
            data => {
                this.batches = data;
            },
            error => {
                let skill = new Batch();
                skill.id = 1;
                skill.name = "Weekend";
                this.batches.push(skill);
            })

    }


    createCourse() {
        console.log(this.courseForm.value);
        this.courseService.createCourse(this.courseForm.value);
    }

}