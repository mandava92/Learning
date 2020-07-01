import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Course } from 'src/app/Models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  behaviour = new BehaviorSubject<Course>(null);
  constructor() { }

  getCourseById(id) {

  }

  createCourse(course:Course) {

  }

  updateCourse(course:Course) {

  }

  deleteCourse(id){

  }

  getCourses() {

  }
  
}
