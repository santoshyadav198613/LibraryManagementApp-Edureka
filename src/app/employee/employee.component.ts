import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit, DoCheck, OnDestroy {

  empName = 'Pavan';
  isVisible: boolean = false;
  empRole: string = 'Admin';
  messageFromChild: string;
  @ViewChild(EmployeeListComponent)
  empComponent: EmployeeListComponent;

  @ViewChildren(EmployeeListComponent)
  empChildComponent: QueryList<EmployeeListComponent> = new QueryList<EmployeeListComponent>();
  empList: any[] = [];
  // [
  //   { id: 1, name: 'Venkata', address: 'Mumbai' },
  //   { id: 2, name: 'Dileep', address: 'Pune' },
  //   { id: 3, name: 'Anu', address: 'Banglore' }
  // ];

  constructor() { }

  ngOnInit() {
    // console.log(this.empChildComponent);
    //this.empComponent.employeeList = this.empList;
    this.empComponent.title = 'Employee List';
  }

  toggle() {
    this.empList = [
      { id: 1, name: 'Venkata', address: 'Mumbai' },
      { id: 2, name: 'Dileep', address: 'Pune' },
      { id: 3, name: 'Anu', address: 'Banglore' }
    ];
    //this.empComponent.employeeList = this.empList;
    this.isVisible = !this.isVisible;
    this.empComponent.sendToParent();
  }


  ngDoCheck(): void {
    //this.empList.length > 3
    console.log(this.empList);
  }

  ngAfterViewInit(): void {
    console.log(this.empChildComponent);
    // this.empChildComponent.forEach((data) => setTimeout(() => data.employeeList = this.empList, 0));
  }

  receiveFromParent(message: string) {
    this.messageFromChild = message;
  }

  fromChild(isTrue: boolean) {
    console.log(isTrue);
  }

  ngOnDestroy(): void {
    alert('Are you sure you want to move away from Employee?');
  }



}
