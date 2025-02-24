import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../enviroment';
import { Chair, Chairs } from '../interfaces/chair.interface';

@Injectable({
  providedIn: 'root'
})
export class ChairsService {
  constructor() { }

  async getChairsStatus(): Promise<Chairs> {
    const response = await axios.get(`${environment.apiUrl}/chairs-status`);

    return response.data;
  }

  async getChairDetail(id: string): Promise<Chair> {
    const response = await axios.post(`${environment.apiUrl}/chair-detail/${id}`);

    return response.data;
  }

  bookChair(id: string, name: string) {
    return axios.put(`${environment.apiUrl}/book-chair/${id}`, { name });
  }

  cancelBooking(id: string) {
    return axios.put(`${environment.apiUrl}/cancel-booking/${id}`);
  }
}
