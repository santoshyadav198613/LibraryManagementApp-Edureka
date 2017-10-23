import { Component, EventEmitter, Input, OnChanges, OnInit, Output ,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit , OnChanges {
  @Input() employeeList: any[];
  @Input() title: string;
  @Output() message: EventEmitter<string> = new EventEmitter<string>();
  @Output() isVisible: EventEmitter<boolean>= new  EventEmitter<boolean>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void{
      console.log(changes);
  }

  ngOnInit() {
  }

  sendToParent() {
    this.message.emit('This message is from child component');
    this.isVisible.emit(true);
  }

}
