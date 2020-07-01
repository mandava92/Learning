import { NgModule } from '@angular/core';
import { RatingsComponent } from './ratings/ratings.component';
import { SharedGeneralModule } from './shared-general.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    RatingsComponent
  ],
  imports: [  
    CommonModule,
    SharedGeneralModule
  ],
  exports:[
    RatingsComponent
   
  ]
})
export class SharedModule { }
