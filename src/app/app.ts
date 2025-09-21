import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation-component/navigation-component";
import { CardComponent } from "./card-component/card-component";
import { MiddleComponent } from "./middle-component/middle-component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, CardComponent, MiddleComponent, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pharmacy');
}
