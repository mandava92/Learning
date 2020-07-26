import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from 'src/app/Models/batch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  _url = "/api/admin/batch";

  constructor(private _http:HttpClient) { }

  getBatches(): Observable<Batch[]> {
    return this._http.get<Batch[]>(`${environment.apiUrl}/api/admin/batch`);
  }

  getBatchById(): Observable<Batch> {
    return this._http.get<Batch>(this._url);
  }
  
  createBatch(batch:Batch): Observable<Batch> {
    return this._http.post<any>(this._url, batch);
  }

  updateBatch(batch:Batch): Observable<Batch> {
    return this._http.put<any>(this._url, batch);
  }
}
