import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ObjectiveComponent } from './objective/objective.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'objective', component: ObjectiveComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
