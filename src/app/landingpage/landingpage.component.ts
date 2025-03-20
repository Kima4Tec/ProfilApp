import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilService } from '../profil.service';

@Component({
  selector: 'app-landingpage',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements OnInit {
  profiles: any[] = [];

  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profilService.getProfiles().subscribe((data: any[]) => {
      this.profiles = data;
    });
  }
}

