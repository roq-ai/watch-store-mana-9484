import axios from 'axios';
import queryString from 'query-string';
import { ManagerInterface, ManagerGetQueryInterface } from 'interfaces/manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getManagers = async (query?: ManagerGetQueryInterface): Promise<PaginatedInterface<ManagerInterface>> => {
  const response = await axios.get('/api/managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createManager = async (manager: ManagerInterface) => {
  const response = await axios.post('/api/managers', manager);
  return response.data;
};

export const updateManagerById = async (id: string, manager: ManagerInterface) => {
  const response = await axios.put(`/api/managers/${id}`, manager);
  return response.data;
};

export const getManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteManagerById = async (id: string) => {
  const response = await axios.delete(`/api/managers/${id}`);
  return response.data;
};
