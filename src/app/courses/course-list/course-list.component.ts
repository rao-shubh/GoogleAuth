import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { COURSE_LIST } from 'src/assets/data/courses.property';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courses = COURSE_LIST;
  public selectedId: any | null;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = params.get('id')!;
      this.selectedId = id;
    });
  }

  onSelect(course: any) {
    this.router.navigate(['/course', course.id]);
  }

  isSelected(course: any) {
    return course.id == this.selectedId;
    
  }

}
