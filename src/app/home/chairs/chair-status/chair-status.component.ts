import { Component, Input } from '@angular/core';
import { Chair } from '../../../interfaces/chair.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-chair-status',
  standalone: true,
  imports: [NgIf],
  templateUrl: './chair-status.component.html',
  styleUrl: './chair-status.component.css'
})
export class ChairStatusComponent {
  @Input({required: true}) chair: Chair = {} as Chair;
}
