import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Event, Router, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { IStaticMethods } from 'preline/preline';
import { CommonModule } from '@angular/common';


declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, MainNavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'shop';
  router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }

}
