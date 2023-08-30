const mapping: Record<string, string> = {
  guests: 'guest',
  inventories: 'inventory',
  managers: 'manager',
  organizations: 'organization',
  'sales-associates': 'sales_associate',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
