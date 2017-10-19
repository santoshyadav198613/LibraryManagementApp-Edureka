import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  empName = 'Pavan';
  isVisible: boolean = false;
  empRole: string = 'Admin';
  empList: any[] = [
    { id: 1, name: 'Venkata', address: 'Mumbai' },
    { id: 2, name: 'Dileep', address: 'Pune' },
    { id: 3, name: 'Anu', address: 'Banglore' }
  ];

  constructor() { }

  toggle() {
    this.isVisible = !this.isVisible;
  }

}
