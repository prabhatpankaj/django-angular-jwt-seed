import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  template: `
    <app-top-bar></app-top-bar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class DashboardLayoutComponent {
}
