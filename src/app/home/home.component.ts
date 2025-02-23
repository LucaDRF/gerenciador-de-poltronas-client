import { Component } from '@angular/core';
import { ChairsComponent } from './chairs/chairs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChairsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
