import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/Models/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminRole=false;
  mentorRole=false;
  traineeRole=false;
  user;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.user=this.authService.currentUserValue;
    if(this.user.roles.includes(Role.Admin)){
      this.adminRole= true; 
    }
    if(this.user.roles.includes(Role.Mentor)){
      this.mentorRole= true;
    }
    if(this.user.roles.includes(Role.Trainee)){
      this.traineeRole= true;
    }
    
  }
  logout(){
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
