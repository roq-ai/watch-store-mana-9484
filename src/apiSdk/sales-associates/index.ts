import axios from 'axios';
import queryString from 'query-string';
import { SalesAssociateInterface, SalesAssociateGetQueryInterface } from 'interfaces/sales-associate';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalesAssociates = async (
  query?: SalesAssociateGetQueryInterface,
): Promise<PaginatedInterface<SalesAssociateInterface>> => {
  const response = await axios.get('/api/sales-associates', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSalesAssociate = async (salesAssociate: SalesAssociateInterface) => {
  const response = await axios.post('/api/sales-associates', salesAssociate);
  return response.data;
};

export const updateSalesAssociateById = async (id: string, salesAssociate: SalesAssociateInterface) => {
  const response = await axios.put(`/api/sales-associates/${id}`, salesAssociate);
  return response.data;
};

export const getSalesAssociateById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/sales-associates/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSalesAssociateById = async (id: string) => {
  const response = await axios.delete(`/api/sales-associates/${id}`);
  return response.data;
};
