import {
    Injectable
} from '@angular/core';
import {
    BehaviorSubject
} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userValue = new BehaviorSubject(null);
    constructor() {}
}