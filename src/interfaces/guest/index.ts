import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  visit_date: any;
  visit_duration: number;
  interest_level: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
