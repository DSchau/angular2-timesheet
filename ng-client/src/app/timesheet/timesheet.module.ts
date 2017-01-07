import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'
import {MaterialModule} from '@angular/material';

import {TimeUnitsModule} from '../time-units'
import {IdentityService} from '../auth'

import TimesheetService from './timesheet.service'
import {TimesheetComponent} from './timesheet.component'
import {TimesheetNewComponent} from './timesheet-new';
import {TimesheetListComponent} from './timesheet-list';
import {TimesheetDetailComponent} from './timesheet-detail';
import {ReactiveFormsModule} from '@angular/forms';
import {TimeUnitService} from '../time-units';

@NgModule({
  declarations: [
    TimesheetComponent,
    TimesheetDetailComponent,
    TimesheetListComponent,
    TimesheetNewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    TimeUnitsModule,
    RouterModule,
    TimeUnitsModule
  ],
  providers: [TimesheetService, IdentityService, TimeUnitService],
  bootstrap: []
})
export class TimesheetModule {
}
