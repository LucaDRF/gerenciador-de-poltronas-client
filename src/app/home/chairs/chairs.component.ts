import { Component } from '@angular/core';
import { UserAssignmentComponent } from './user-assignment/user-assignment.component';

@Component({
  selector: 'app-chairs',
  standalone: true,
  imports: [UserAssignmentComponent],
  templateUrl: './chairs.component.html',
  styleUrl: './chairs.component.css'
})
export class ChairsComponent {

}
