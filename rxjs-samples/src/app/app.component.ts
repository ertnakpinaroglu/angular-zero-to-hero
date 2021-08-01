import { Component, OnInit } from '@angular/core';
import { Observable,interval, of } from 'rxjs';
import {  first, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-samples';

  numberData:number=0;

  ngOnInit(): void {
    const observable = new Observable(x => {
      x.next(1);
      x.next(2);
      x.next(3);

      setTimeout(() => {
        x.next(4);
        x.complete();
      }, 1000);
    });

    console.log("Subsribe olmadan önce");


    const observer = {
      next(x) { console.log("X ", x); },
      error(err) { console.log("ERrr", err) },
      complete(){console.log("Completed")}
    };

    observable.subscribe(observer);

    const foo = new Observable(subscriber=>{
      console.log("Hi");
      subscriber.next(42);
    });

    

    foo.subscribe(x=>{
      console.log(x);
    });

    foo.subscribe(y=>{
      console.log(y);
    });


    of(1,2,3).pipe(map(x=>x *x)).subscribe(x=>console.log(x));
    of(1,2,3).pipe(first()).subscribe(x=>console.log(x));

    const myData = interval(1000).subscribe(y=>this.numberData = y);

    myData.unsubscribe();
    
  }



}
