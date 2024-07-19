import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      dashboard works!
    </p>
  `,
  styles: ``
})
export class DashboardComponent {
  constructor(private router: Router){
    
  }
}
