import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public courseId: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /* let id = this.route.snapshot.paramMap.get('id');
    this.courseId = id; */
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = params.get('id');
      this.courseId = id;
    });
    /* const id: Observable<string> = this.route.params.pipe(map(p => p.id));
    id.subscribe(data => {
      this.courseId = parseInt(data);
    }); */
  }

  goPrevious() {
    let previousId = parseInt(this.courseId) - 1;
    this.router.navigate(['/course', previousId]);
  }

  goNext() {
    let nextId = parseInt(this.courseId) + 1;
    this.router.navigate(['/course', nextId]);
  }

  gotoCourseList() {
    let selectedId = this.courseId ? this.courseId : null;
    this.router.navigate(['/course-list', {id: selectedId}]);
  }

}

