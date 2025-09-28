import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';

export const routes: Routes = [
    // Route pour la page d'accueil
  { path: 'home', component: Home, title: 'Home - KMD-Pharmacy' },
  {path: 'contact', component: Contact, title: 'Contact - KMD-Pharmacy' }
];
