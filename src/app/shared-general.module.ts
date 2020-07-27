import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@NgModule({
  declarations: [
  ],
  imports: [  
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule
  ]
})
export class SharedGeneralModule { }
