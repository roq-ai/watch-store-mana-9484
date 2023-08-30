import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ManagerInterface {
  id?: string;
  department: string;
  employees_managed: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  department?: string;
  user_id?: string;
}
