import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../register/user';
import {Role} from '../Models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles =[{"rolename":"Admin","roleId":Role.Admin}, 
{"rolename":"Mentor", "roleId":Role.Mentor},
{"rolename":"Trainee", "roleId":Role.Trainee},
]
  // loginForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   role: new FormControl('Trainee')
  // });

  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService,
    private router: Router) { }
  
  loginForm = this.formBuilder.group({
    userName: ["", Validators.required],
    password: ['', Validators.required],
    role: ['',Validators.required]
  })  

  ngOnInit(): void {
  }

  onLogin() {
    let user:User = this.loginForm.value;
    this.authService.login(user.userName, user.password).subscribe(
      data => {
        this.roleRouting(user.role); // change later
      }
    );   
    
  }

  roleRouting(role:string) {
    if(role == Role.Admin)
        this.router.navigate(['/admin/course']);
    if(role == Role.Trainee)
        this.router.navigate(['/trainee']);
    if(role == Role.Mentor) 
        this.router.navigate(['/mentor']);       
  }
}
