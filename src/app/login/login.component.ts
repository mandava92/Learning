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
  }

  onLogin() {
    let user:User = this.loginForm.value;
    console.log(user);
    this.loginService.login(user).subscribe(
      data => {
        localStorage.setItem("user",JSON.stringify(user));
        this.roleRouting(user.role);
      },
      error => {
        localStorage.setItem("user",JSON.stringify(user));
        this.roleRouting(user.role);
      }
    );   
    
  }

  roleRouting(role:string) {
    if(role == "Admin")
        this.router.navigate(['/admin/course']);
    if(role == "Trainee")
        this.router.navigate(['/trainee']);
    if(role == "Mentor") 
        this.router.navigate(['/mentor']);       
  }
}
