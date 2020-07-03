import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../register/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles = ["Admin","Mentor","Trainee"];
  // loginForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   role: new FormControl('Trainee')
  // });

  constructor(private loginService:LoginService,
    private formBuilder:FormBuilder,
    private authService: AuthService,
    private router: Router) { }
  
  loginForm = this.formBuilder.group({
    userName: ["", Validators.required],
    password: ['', Validators.required],
    role: ['',Validators.required]
  })  

  ngOnInit(): void {
    // document.body.classList.add("bg-img");
  }

  onLogin() {
    console.log(this.loginForm.value);
    let user = new User();
    user.role = "Admin";   
    //this.authService.userValue.next(user);
    this.roleRouting(user.role);
  }

  roleRouting(role) {
    if(role == "Admin")
        this.router.navigate(['dashboard/admin/course']);
    if(role == "Trainee")
        this.router.navigate(['dashboard/trainee']);
    if(role == "Mentor") 
        this.router.navigate(['dashboard/mentor']);       
  }

}
