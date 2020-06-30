import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
    private formBuilder:FormBuilder) { }
  
  loginForm = this.formBuilder.group({
    userName: ["", Validators.required],
    password: ['', Validators.required],
    role: ['',Validators.required]
  })  

  ngOnInit(): void {
  }

  onLogin(){
   

  }

}
