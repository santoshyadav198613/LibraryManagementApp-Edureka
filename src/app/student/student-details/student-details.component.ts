import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentId: number;
  constructor(private routeService: ActivatedRoute) { }

  ngOnInit() {
    this.routeService.paramMap.subscribe((data) => this.studentId = + data.get('id'));
  }

}
