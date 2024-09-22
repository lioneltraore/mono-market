import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css',
})
export class MainNavComponent {
  hidden = true;

  toggleNavbar() {
    this.hidden = !this.hidden;
  }
}
