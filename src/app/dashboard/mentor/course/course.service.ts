// import { Injectable } from '@angular/core';
// import { Subject, BehaviorSubject } from 'rxjs';
// import { Course } from 'src/app/Models/course';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class CourseService {
//   behaviour = new BehaviorSubject<Course>(null);
//   constructor(private _http:HttpClient) { }

//   getCourseById(id) {
//     return this._http.get<any>(`${environment.apiUrl}/api/admin/course/`+id);
//   }

//   getAllCourses() {
//     return this._http.get<any>(`${environment.apiUrl}/api/search/courses`);
//   }

//   createCourse(course:Course) {
//     return this._http.post<any>(`${environment.apiUrl}/api/admin/course`,course);
//   }

//   updateCourse(course:Course) {
//     return this._http.put<any>(`${environment.apiUrl}/api/admin/course`,course);
//   }

//   deleteCourse(id){
//     return this._http.delete<any>(`${environment.apiUrl}/api/admin/course/`+id);
//   }

  
  
// }
