import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../profil.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  profiles: any[] = [];
  profile: any = {
    id: null,
    name: '',
    intro: '',
    skills: '',
    education: '',
  };

  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    this.loadProfil();
  }


  loadProfil(): void {
    this.profilService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }


  createProfile(): void {
    this.profilService.createProfile(this.profile).subscribe((newProfile) => {
      this.profiles.push(newProfile);
      this.resetProfile();
    });
  }


  updateProfile(): void {
    if (this.profile.id) {
      this.profilService.updateProfile(this.profile.id, this.profile).subscribe((updatedProfile) => {
        const index = this.profiles.findIndex(p => p.id === updatedProfile.id);
        if (index !== -1) {
          this.profiles[index] = updatedProfile;
        }
        this.resetProfile();
      });
    }
  }

  deleteProfile(id: number): void {
    this.profilService.deleteProfile(id).subscribe(() => {
      this.profiles = this.profiles.filter(p => p.id !== id);
    });
  }
  resetProfile(): void {
    this.profile = { id: null, name: '', intro: '', skills: '', education: '' };
  }

  editProfile(profile: any): void {
    this.profile = { ...profile };
  }
}
