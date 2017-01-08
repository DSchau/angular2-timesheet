import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExtHttp } from '../shared';
import { User } from '../auth';
import { Timesheet } from './Timesheet';
import { TimeUnit } from '../time-units';

@Injectable()
export default class TimesheetService {

  constructor(private http: ExtHttp) {
  }

  getTimesheets(user: User): Observable<Timesheet[]> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  // Add getTimesheet()

}
