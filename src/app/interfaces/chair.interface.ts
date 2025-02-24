import { User } from "./user.interface";

export interface Chair {
  id: string;
  line_value: number;
  column_value: number;
  occupied: boolean;
  user: User;
}

export type Chairs = Chair[];
