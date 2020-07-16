import {
    Injectable
} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import {
    Observable
} from 'rxjs';
import {
    User
} from '../register/user';
import {
    AuthService
} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let user: User = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        console.log(route.data.roles.indexOf("Admin"));
        if (route.data.roles && route.data.roles.indexOf(user.role) >= 0) {
            return true;
        }
        return false;
    }

}