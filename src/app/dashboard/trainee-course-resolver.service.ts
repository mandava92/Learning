import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TraineeService } from './trainee/trainee.service'
import { CourseService } from './admin/admin-course/course.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TraineeCourseResolverService implements Resolve<any> {



    constructor(private service: CourseService, private authService: AuthService) {}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
      return this.service.studentNewCourses(this.authService.currentUserValue.userName);
      }


}
