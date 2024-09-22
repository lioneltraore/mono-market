import { Component, inject } from '@angular/core';
import { NavigationEnd, Event, Router, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { IStaticMethods } from 'preline/preline';


declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  standalone: true,
  imports: [RouterModule, MainNavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
