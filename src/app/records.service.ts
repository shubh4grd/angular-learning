import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  student1: string[] = ['Sanket Sinha', '1802305035', 'Nepal'];
  student2: string[] = ['Rishav Jaiswal', '1902305033', 'Bihar'];
  student3: string[] = ['Abhishek Kumar', '1802305001', 'Kanpur'];

  getStudent1(): string[]{
    return this.student1
  }
  getStudent2(): string[]{
    return this.student2
  }
  getStudent3(): string[]{
    return this.student3
  }

  constructor() { }
}
