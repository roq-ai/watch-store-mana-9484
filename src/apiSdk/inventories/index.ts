import axios from 'axios';
import queryString from 'query-string';
import { InventoryInterface, InventoryGetQueryInterface } from 'interfaces/inventory';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInventories = async (
  query?: InventoryGetQueryInterface,
): Promise<PaginatedInterface<InventoryInterface>> => {
  const response = await axios.get('/api/inventories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInventory = async (inventory: InventoryInterface) => {
  const response = await axios.post('/api/inventories', inventory);
  return response.data;
};

export const updateInventoryById = async (id: string, inventory: InventoryInterface) => {
  const response = await axios.put(`/api/inventories/${id}`, inventory);
  return response.data;
};

export const getInventoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/inventories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInventoryById = async (id: string) => {
  const response = await axios.delete(`/api/inventories/${id}`);
  return response.data;
};
