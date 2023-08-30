import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SalesAssociateInterface {
  id?: string;
  sales_target: number;
  sales_achieved: number;
  commission_rate: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SalesAssociateGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
