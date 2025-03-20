import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilService } from '../profil.service';


@Component({
  selector: 'app-profilpage',
  imports: [CommonModule],
  templateUrl: './profilpage.component.html',
  styleUrl: './profilpage.component.css'
})
export class ProfilpageComponent implements OnInit {
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
