import { Component, OnInit, ViewChild,ChangeDetectorRef, ElementRef } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Skill } from 'src/app/Models/skill';
import { Batch } from 'src/app/Models/batch';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses = new MatTableDataSource();
  show:boolean;
  skils: Skill[] = [];
  batches: Batch[]= [];
  displayedColumns: string[] = ['id', 'courseName', 'skillName','batchName','mentorShare','studentFee','action'];
  pushData:boolean = false;
  courseId ;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild('myModal') modal: ElementRef;
  constructor(private router:Router, private courseService:CourseService, private route: ActivatedRoute,
    private  detector: ChangeDetectorRef) { }
 
  ngOnInit(): void {
    this.getAllCourses();
    this.show = false;
  }

  getAllCourses() {
    this.route.data.subscribe(
      data =>{
        console.log('Data :', data);
        this.courses.data = data.courses;
      } 
    );
  }
  ngAfterViewInit() {
    this.courses.paginator = this.paginator;
    this.courses.sort = this.sort;
    }
  deleteCourse() {
    this.courseService.deleteCourse(this.courseId).subscribe(
      data => {
        let index: number = this.courses.data.findIndex((e:Course) => e.couseId ==this.courseId);
        console.log(index);
        // let data1 = this.courses.data.filter((e:Course)=> {e.couseId != this.courseId});
        // console.log("test");
        // console.log(data1);/
        this.courses.data.splice(index,1)
        this.courses = new MatTableDataSource(this.courses.data);
        this.courses.paginator = this.paginator;
        this.courses.sort = this.sort;
        //this.courses.data= data1;
      }
    )
  }

  showModal(id) {
    this.show = true;
    this.courseId = id;
  }

  editCourse(courseId){
    console.log(courseId);
    this.courseService.behaviour.next(courseId);
    this.router.navigate(['/admin/course/editCourse', courseId ]);
  }

}
