import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs:'appDropDown'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleopen() {
  //    console.log(1);
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('mouseout') toggleOpen() {
    this.isOpen = false;
  }
  @HostListener('click') toggleOpen1() {
    this.isOpen = true;
  }
}