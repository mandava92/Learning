import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';

@Component({
  selector: 'app-search-trainings',
  templateUrl: './search-trainings.component.html',
  styleUrls: ['./search-trainings.component.css']
})
export class SearchTrainingsComponent implements OnInit {
  courses: Course[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getTrainings();
  }

  registerTraining(courseId:number) {
    console.log(courseId);
  }

  getTrainings(){
    let st = new Course();
    st.couseId = "1";
    st.courseName = "Advanced Java";
    st.batchName = "weekend";   
    this.courses.push(st);
    st = new Course();
    st.couseId = "1";
    st.courseName = "Advanced Java";
    st.batchName = "weekend";   
    this.courses.push(st);
    st = new Course();
    st.couseId = "1";
    st.courseName = "Complete UI";
    st.batchName = "weekend";   
    this.courses.push(st);
    st = new Course();
    st.couseId = "1";
    st.courseName = "Complete UI";
    st.batchName = "weekend";   
    this.courses.push(st);
    st = new Course();
    st.couseId = "1";
    st.courseName = "Complete UI";
    st.batchName = "weekend";   
    this.courses.push(st);
   
  }


}
