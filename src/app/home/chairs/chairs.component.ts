import { Component, inject, OnInit } from '@angular/core';
import { UserAssignmentComponent } from './user-assignment/user-assignment.component';
import { ChairStatusComponent } from "./chair-status/chair-status.component";
import { CommonModule } from '@angular/common';
import { Chair, Chairs } from '../../interfaces/chair.interface';
import { ChairsService } from '../../services/chairs.service';
import { ChairDetailedComponent } from './chair-detailed/chair-detailed.component';

@Component({
  selector: 'app-chairs',
  standalone: true,
  imports: [UserAssignmentComponent, ChairStatusComponent, ChairDetailedComponent, CommonModule],
  templateUrl: './chairs.component.html',
  styleUrl: './chairs.component.css'
})
export class ChairsComponent implements OnInit {
  private chairsService = inject(ChairsService);

  public chairsByLine: Chairs[] = [];
  public selectedChair: any;
  public chairs: Chairs = [];
  public loading = false;
  public actionsLoading = { loading: false };

  async ngOnInit() {
    this.loading = true;
    this.chairs = await this.chairsService.getChairsStatus();
    this.loading = false;

    this.verifyEachChair();
  }

  verifyEachChair() {
    this.chairs.forEach((chair: Chair) => {
      if (!this.chairsByLine[chair.line_value]) {
        this.chairsByLine[chair.line_value] = [];
      }

      this.chairsByLine[chair.line_value][chair.column_value] = chair;
    });
  }
}
