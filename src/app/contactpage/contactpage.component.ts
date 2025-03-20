import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilService } from '../profil.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css'
})

export class ContactpageComponent {

  constructor(private profilService: ProfilService) { }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const contactData = contactForm.value;
      this.profilService.sendMessage(contactData).subscribe({
        next: () => {
          alert('Besked sendt og gemt i databasen!');
          contactForm.reset();
        },
        error: (err) => console.error('Fejl:', err),
      });
    } else {
      alert('Venligst udfyld alle felter korrekt!');
    }
  }
}
