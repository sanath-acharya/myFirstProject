import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testPractice';
  addTwo(a:number,b:number):number{
    return a+b;
  }

  static addThree(a:number,b:number):number{
    return a+b;
  }
  myfun(a:any,b:any):number{
    return a+b;

  }

}

