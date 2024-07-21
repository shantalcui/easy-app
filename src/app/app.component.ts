import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-app';
}
