import { provideRouter, RouterConfig } from '@angular/router';
import { TimesheetsComponent } from './timesheets';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation'
import { ProjectListComponent } from './project-list'
import { EmployeeListComponent } from './employee-list'

export const routes: RouterConfig = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'projects', component: ProjectListComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'timesheets', component: TimesheetsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home/projects'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];