import { Component, inject, Input } from '@angular/core';
import { Chair } from '../../../interfaces/chair.interface';
import { ChairsService } from '../../../services/chairs.service';
import { lines } from '../../../utils/chairs-location';

@Component({
  selector: 'app-chair-detailed',
  standalone: true,
  imports: [],
  templateUrl: './chair-detailed.component.html',
  styleUrl: './chair-detailed.component.css'
})
export class ChairDetailedComponent {
  @Input({required: true}) chair: Chair = {} as Chair;
  @Input({required: true}) loadingData: { loading: boolean } = { loading: false };

  private chairsService = inject(ChairsService);

  public lines = lines;

  async cancelBooking() {
    this.loadingData.loading = true;

    await this.chairsService.cancelBooking(this.chair.id);

    const chairUpdated = await this.chairsService.getChairDetail(this.chair.id);

    this.chair = Object.assign(this.chair, chairUpdated);
    this.loadingData.loading = false;
  }
}
