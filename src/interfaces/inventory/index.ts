import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  watch_name: string;
  watch_model: string;
  quantity: number;
  price: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  watch_name?: string;
  watch_model?: string;
  organization_id?: string;
}
