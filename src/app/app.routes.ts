import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfilpageComponent } from './profilpage/profilpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';


export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'profil', component: ProfilpageComponent },
    { path: 'contact', component: ContactpageComponent },
];
