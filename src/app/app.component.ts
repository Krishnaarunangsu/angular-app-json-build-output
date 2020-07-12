import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, of, from} from "rxjs";

// Observable
const myObservable = of('apple', 'mango', 'banana');
// Observer
const myObserver = {
  next : (x: string) => console.log('Observer got a next value:', x),
  error : (err: string) => console.log('Observer got an error', err),
  complete :() => console.log('Observer got a complete notification'),
};

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:
    `
    <div>
    <table class="blueTable">
    <thead>
        <tr>
            <th scope="col" rowspan="2">Timestamp</th>
            <th scope="col" rowspan="2">Job Name</th>
            <th scope="col" colspan="2" align="center">Metric
            <table>
             <tr>
              <thead>
               <th scope="col">Parameter</th>
               <th scope="col">Value</th>
             </thead>
            </tr>
            </table>
            </th>
        <tr>
    </thead>
<tbody>
    <tr *ngFor="let n of myarray[0]['status']">
    <td>{{n.timestamp}}</td>
    <td>{{n.component_name}}</td>
    <td >
      <table  *ngFor="let m of n.metric | keyvalue">
        <tbody>
         <tr align="center">
            <td align="center">{{m.key}}</td><td>{{m.value}}</td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  </tbody>
  </table>
</div>
  `,
styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy{
  title = 'angular-app-json-build-output';

  //experimentDetailStatusMulti:
  myColor: string;
  bordermy: string;
  myarray;
  // constructor() {
  //   this.myColor = 'red';
  //   this.bordermy = '2px solid red';
  //   this.myarray = {
  //     "name": "Jagannath",
  //     "age": 100,
  //     "cars": [
  //       { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
  //       { "name": "BMW", "models": ["320", "X3", "X5"] },
  //       { "name": "Fiat", "models": ["500", "Panda"] }
  //     ]
  //   }
  // }

// Add a variable that declare the RxJS timer
source = timer(1000, 2000);

// Subscribe the RxJS timer then print out to Javascript console
subscriber = this.source.subscribe(val => console.log('Subscribed:',val));

// Add a function that will unsubscribe the RxJS timer

//setTimeout(() => { this.subscriber.unsubscribe();}, 10000 );


  constructor() {

    //Subscribe-> Observable is subscribed to its observer
    myObservable.subscribe(myObserver);
    
    this.myColor = 'red';
    this.bordermy = '2px solid red';
    this.myarray = [ 
      { 
        "status": [
           { 
             "timestamp": "2020-03-21 15:19:52", 
             "component_name": "job2", 
             "status": 
             { 
               "message": "Component Started" }, 
               "metric": 
               { "accuracy": 95.55555555555556,
               "epoch":3
              } 
            }, 
            { 
              "timestamp": "2020-03-21 14:19:52", 
              "component_name": "job2", 
              "status": 
              { 
                "message": "Component Running" 
              }, 
              "metric": 
              { "accuracy": 96.5555555555555,
              "loss":2
            } 
          },
          { 
            "timestamp": "2020-03-21 13:19:52", 
            "component_name": "job2", 
            "status": 
            { 
              "message": "Component Running" 
            }
        },
        { 
          "timestamp": "2020-03-21 13:20:52", 
          "component_name": "job2", 
          "status": 
          { 
            "message": "Component Running" 
          }
      }    
        ] 
      } 
    ]

    setTimeout(() => { this.subscriber.unsubscribe(); }, 10000);
  }
    ngOnInit(){

    }

    ngOnDestroy(){
      this.subscriber.unsubscribe();
    }

  }
