import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Aniello Bagno';
  age = 20;
  indirizzo = "Via Carlo Tramontano 78";
  cap = 84016;
  residenza = "Pagani";
  diploma = 'Perito Informatico (Diploma 2018-2023)';
  license = 'B (Disponibile a spostamenti)';
}
