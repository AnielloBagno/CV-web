import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Importiamo anche Routes per avere il tipo corretto
import { AppComponent } from './app/app.component'; // AppComponent è il componente principale
import { AboutComponent } from './app/about/about.component';
import { ObjectiveComponent } from './app/objective/objective.component';
import { SkillsComponent } from './app/skills/skills.component';
import { ContactComponent } from './app/contact/contact.component';

// Configurazione delle rotte
const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'objective', component: ObjectiveComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // Assicurati che pathMatch sia "full"
];

// Bootstrap dell'applicazione con RouterModule
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(appRoutes))  // Configuriamo il router correttamente
  ]
});
