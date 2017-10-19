import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList: any[];
  @Input() title: string;
  @Output() message: EventEmitter<string> = new EventEmitter<string>();
  @Output() isVisible: EventEmitter<boolean>= new  EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    this.message.emit('This message is from child component');
    this.isVisible.emit(true);
  }

}
