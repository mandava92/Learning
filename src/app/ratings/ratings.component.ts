import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  totalRatings: number = 5;
  @Input() rating: number;
  blankStars: number[] = [];
  checkedStars: number[] = [];
  halfStar: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.rating == null)
      this.rating = 0;
    let blankStar = this.totalRatings - Math.round(this.rating);
    let checkedStar = Math.floor(this.rating);
    if ((this.rating - Math.floor(this.rating)) !== 0)
      this.halfStar = true;
    for(var i=0 ;i<blankStar;i++){
      this.blankStars.push(i);
    }
    for(var i=0 ;i<checkedStar;i++){
      this.checkedStars.push(i);
    }
  }

}
