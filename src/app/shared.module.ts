import { NgModule } from '@angular/core';
import { RatingsComponent } from './ratings/ratings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    
  ],
  imports: [  
    // CommonModule
    
    
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
   
  ]
})
export class SharedModule { }
