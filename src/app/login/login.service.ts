import {
    Injectable
} from '@angular/core';
import {
    HttpClient,
    ɵangular_packages_common_http_http_a
} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    loginUrl = "";
    constructor(private _http: HttpClient) {}

    login(loginData) {
        return this._http.post < any > (this.loginUrl, loginData)
    }
}