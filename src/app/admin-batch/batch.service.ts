import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Batch } from '../Models/batch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  _url = "";

  constructor(private _http:HttpClient) { }

  getBatches(): Observable<Batch[]> {
    return this._http.get<Batch[]>(this._url);
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
