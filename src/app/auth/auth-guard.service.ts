import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { User } from '../register/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    let user:User = JSON.parse(localStorage.getItem("user"));
    if(user) {
      return true;
    }
    return false;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return this.canActivate(route,state);
}
}
