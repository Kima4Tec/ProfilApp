import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfilpageComponent } from './profilpage/profilpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RegisterComponent } from './registerpage/registerpage.component';
import { LoginComponent } from './loginpage/loginpage.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'profil', component: ProfilpageComponent },
    { path: 'contact', component: ContactpageComponent },
    { path: 'admin', component: AdminpageComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
