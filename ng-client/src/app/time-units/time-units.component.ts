import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


import { TimeUnit } from './TimeUnit';

@Component({
  selector: 'app-time-units',
  templateUrl: 'time-units.component.html',
  styleUrls: ['time-units.component.scss']
})
export class TimeUnitsComponent {

  @Input()
  timeUnits: TimeUnit[];

  @Input()
  timesheetId: string;

  constructor(private router: Router) {
  }

  logTime() {
    this.router.navigateByUrl(`/home/timesheets/${this.timesheetId}/entry`);
  }
}
