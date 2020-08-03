import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TraineeService } from './trainee/trainee.service'
import { CourseService } from './admin/admin-course/course.service';

@Injectable({
  providedIn: 'root'
})
export class MentorCourseResolverService implements Resolve<any> {



    constructor(private service: CourseService) {}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
      return this.service.getAllCourses();
      }


}
