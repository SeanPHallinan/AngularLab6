import { Component, OnInit } from '@angular/core';
import {StudentsService} from './Services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'student-app';
  students:any = [];
  constructor(private service:StudentsService){

  }

  ngOnInit(){
    this.service.GetStudentData().subscribe( (data)=>{
      this.students = data.students;
      console.log(this.students);
    } );
  }

}
