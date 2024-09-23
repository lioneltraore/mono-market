import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css',
})
export class MainNavComponent {
  hidden = true;

  toggleNavbar() {
    this.hidden = !this.hidden;
  }
}
