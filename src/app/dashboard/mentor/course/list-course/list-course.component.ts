import { Component, OnInit, ViewChild,ChangeDetectorRef, ElementRef } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/Models/skill';
import { Batch } from 'src/app/Models/batch';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CourseService } from 'src/app/dashboard/admin/admin-course/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class MentorListCourseComponent implements OnInit {
  courses = new MatTableDataSource();
  show:boolean;
  skils: Skill[] = [];
  batches: Batch[]= [];
  displayedColumns: string[] = ['id', 'userName', 'courseName', 'skillName','batchName','mentorShare','studentFee','action'];
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
        this.courses.data.splice(index,1)
        this.courses = new MatTableDataSource(this.courses.data);
        this.courses.paginator = this.paginator;
        this.courses.sort = this.sort;
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
    this.router.navigate(['/mentor/course/editCourse', courseId ]);
  }

}
