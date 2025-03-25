import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ObjectiveComponent } from './objective/objective.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router'; // Importa il RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Aggiungi RouterModule agli imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculum Vitae di Aniello Bagno';
}
