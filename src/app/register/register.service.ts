import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    User
} from './user';
import {
    Observable
} from 'rxjs';
import {
    catchError
} from 'rxjs/operators';
import {
    throwError
} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    _url: string = "http://localhost:8080/api/user";
    constructor(private _http: HttpClient) {}

    register(user: User): Observable < any > {
        return this._http.post < any > (this._url, user);
    }

    getUser(userName: string) {
        return this._http.get(this._url);
    }

}