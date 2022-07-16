import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css'],
  providers: [RecordsService]
})
export class StudentInfoComponent implements OnInit {

  detailsReceived1: string[]=[];
  detailsReceived2: string[]=[];
  detailsReceived3: string[]=[];

  getDetailsFromServiceClass1(){
    this.detailsReceived1 = this.rservice.getStudent1()
  }
  getDetailsFromServiceClass2(){
    this.detailsReceived2 = this.rservice.getStudent2()
  }
  getDetailsFromServiceClass3(){
    this.detailsReceived3 = this.rservice.getStudent3()
  }

  constructor(private rservice :RecordsService) { }

  ngOnInit(): void {
  }

}
