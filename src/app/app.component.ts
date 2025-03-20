import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProfilApp';
  constructor(public authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Omdiriger til login-siden
  }
}
