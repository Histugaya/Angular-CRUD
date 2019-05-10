import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  this.operatorDemo()
  }

  number=of(1,2,3,4,5,6,7,8,9)
        .pipe(
            filter(x=> x%2==0 && x<=10)
          );
  
  operatorDemo(){
    console.log("even number less than 10");
    this.number.subscribe(
      data => console.log(data)
    )
  }

}
