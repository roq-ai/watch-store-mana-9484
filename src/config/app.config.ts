interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Manager', 'Sales Associate', 'Inventory Specialist'],
  tenantName: 'Organization',
  applicationName: 'watch store management application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read information about the organization',
    'Create, read, and update personal profile',
    'Read inventory records',
  ],
  ownerAbilities: [
    'Manage information about the organization',
    'Invite Managers, Sales Associates, and Inventory Specialists to the application',
  ],
};
