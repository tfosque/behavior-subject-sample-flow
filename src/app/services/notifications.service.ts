import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }
}

/* import { from } from 'rxjs';

// Create an Observable out of a promise

const data = from(fetch('/api/endpoint'));
// Subscribe to begin listening for async result
data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
}); */


/* import { interval } from 'rxjs';

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
// Subscribe to begin publishing values
secondsCounter.subscribe(n =>
  console.log(`It's been ${n} seconds since subscribing!`)); */


/*   export class StopwatchComponent {

    stopwatchValue: number;
    stopwatchValue$: Observable<number>;

    start() {
      this.stopwatchValue$.subscribe(num =>
        this.stopwatchValue = num
      );
    }
  } */

// type ahead https://angular.io/guide/practical-observable-usage
// entry components https://angular.io/guide/entry-components
// feature module https://angular.io/guide/feature-modules
// provider https://angular.io/guide/feature-modules
// lazy loading https://angular.io/guide/lazy-loading-ngmodules
// sharing modules https://angular.io/guide/sharing-ngmodules
// FAQ https://angular.io/guide/ngmodule-faq
// routing https://angular.io/guide/router
// security https://angular.io/guide/security
// creating a class for data https://angular.io/guide/displaying-data
// ngSwitch Directive https://angular.io/guide/structural-directives
// ngFor DEEP https://angular.io/guide/structural-directives