import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../register/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authService: AuthService
) {}
  canActivate() : boolean {
    let user = new User();
    this.authService.userValue.subscribe(
      data =>{
        user = data;
      }
    );
    if (user && user.role && user.role == "Admin") {      
      this.router.navigate(['/dashboard/admin']);
      return true;      
    }      
    this.router.navigate(['/login']);
    return false;
  }
}
