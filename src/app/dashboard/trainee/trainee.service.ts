import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentTrainings } from 'src/app/Models/student-trainings';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  url="";

  constructor(private _http:HttpClient) { }
    
  proposeTrainings(courseMapping) {
    return this._http.post<any>(`${environment.apiUrl}/api/enroll`,courseMapping);
  }
 
  updateTrainingApprovalStatus(courseMapping) {
    return this._http.post<any>(`${environment.apiUrl}/api/enroll`,courseMapping);
  }


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


