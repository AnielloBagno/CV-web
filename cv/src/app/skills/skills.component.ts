import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent {
  competencies = {
    frontend: [
      'Angular 19 con Standalone Components',
      'HTML, CSS (Design responsive)',
      'JavaScript, TypeScript',
    ],
    backend: [
      'Java (Spring Boot, JPA, Hibernate)',
      'Conoscenze di Spring Security, RESTful API e gestione database',
      'Esperienza con H2 e MySQL (relational databases)',
    ],
    tools: ['Git (Version control)'],
    languages: ['Inglese (Ottima conoscenza scritta e parlata)'],
  };
}
