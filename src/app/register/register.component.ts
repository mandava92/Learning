import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RegisterService } from './register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User("","","","","");
  resUser:User;
  roles = ["Admin","Mentor","Trainee"];
  alreadyExists = false;
  constructor(private registrationService: RegisterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(registrationForm:NgForm){
    console.log(registrationForm.value);
    this.registrationService.getUser(registrationForm.value.userName)
                            .subscribe(
                              data=>{

                              },
                              error=>{
                                this.alreadyExists = true;
                                this.router.navigate(["register"]);
                              }
                            );

    this.registrationService.register(registrationForm.value)
                            .subscribe(
                              data => {
                                this.resUser = data;
                                console.log(this.resUser);
                              },
                              error => {
                                this.resUser = error.statusText;
                                console.log(this.resUser);
                              });
  }

}
