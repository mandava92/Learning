import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminSkillComponent } from './admin-skill/admin-skill.component';
import { AdminBatchComponent } from './admin-batch/admin-batch.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AddCourseComponent } from './admin-course/add-course/add-course.component';
import { ListCourseComponent } from './admin-course/list-course/list-course.component';
import { EditCourseComponent } from './admin-course/edit-course/edit-course.component';
import { CourseComponent } from './Models/course/course.component';
import { SharedModule } from './shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedGeneralModule } from './shared-general.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminSkillComponent,
    AdminBatchComponent,
    AdminCourseComponent,
    AddCourseComponent,
    ListCourseComponent,
    EditCourseComponent,
    CourseComponent
    
  ],
  imports: [
    
    BrowserModule,
    SharedGeneralModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
