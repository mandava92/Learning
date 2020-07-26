import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Skill } from 'src/app/Models/skill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  _url = "/api/admin/skill";

  constructor(private _http:HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this._http.get<Skill[]>(`${environment.apiUrl}/api/admin/skill/getSkills`);
  }

  getSkillById(): Observable<Skill> {
    return this._http.get<Skill>(this._url);
  }
  
  createSkill(skill:Skill): Observable<Skill> {
    return this._http.post<any>(this._url, skill);
  }

  updateSkill(skill:Skill): Observable<Skill> {
    return this._http.put<any>(this._url, skill);
  }


}
