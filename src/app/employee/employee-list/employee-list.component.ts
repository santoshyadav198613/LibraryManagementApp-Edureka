import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList: any[];
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
