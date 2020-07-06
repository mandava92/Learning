import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentTrainings } from 'src/app/Models/student-trainings';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  url="";

  constructor(private _http:HttpClient) { }

  getCurrentTrainings(userId) : Observable<StudentTrainings[]>{
    let searchParams = {
      "userId" : userId,
      "courseStatus" : "InProgress"
    };
    return this._http.get<StudentTrainings[]>(this.url,{params:searchParams});
  }

  getCompletedTrainings(userId): Observable<StudentTrainings[]> {
    let searchParams = {
      "userId" : userId,
      "courseStatus" : "Completed"
    };
    return this._http.get<StudentTrainings[]>(this.url,{params:searchParams});
  }

  getTraining(trainingId, userId) {
    
  }
}


