import Landing from '../pages/Landing/Landing';
import Contacts from '../pages/Contacts/Contacts';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteName {
  LANDING_PAGE = '/',
  CONTACTS_PAGE = '/contacts',
}

export const routes: IRoute[] = [
  { path: RouteName.LANDING_PAGE, component: Landing, exact: true },
  { path: RouteName.CONTACTS_PAGE, component: Contacts, exact: true },
];
