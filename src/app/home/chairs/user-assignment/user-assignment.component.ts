import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Chair } from '../../../interfaces/chair.interface';
import { lines } from '../../../utils/chairs-location';
import { ChairsService } from '../../../services/chairs.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-assignment',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './user-assignment.component.html',
  styleUrl: './user-assignment.component.css'
})
export class UserAssignmentComponent {
  @Input() chair: Chair = {} as Chair;
  @Input({required: true}) loadingData: { loading: boolean } = { loading: false };

  private chairsService = inject(ChairsService);

  public lines = lines;
  public name: string = '';
  public formError: boolean = false;

  async assignUserToChair() {
    if (!this.name) {
      this.formError = true;
      return;
    }

    this.loadingData.loading = true;

    await this.chairsService.bookChair(this.chair.id, this.name);

    const chairUpdated = await this.chairsService.getChairDetail(this.chair.id);

    this.chair = Object.assign(this.chair, chairUpdated);
    this.loadingData.loading = false;
  }
}
