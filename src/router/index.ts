import Landing from '../pages/Landing/Landing';
import Contacts from '../pages/Contacts/Contacts';
import { RouteName } from '../constants';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const routes: IRoute[] = [
  { path: RouteName.LANDING_PAGE, component: Landing, exact: true },
  { path: RouteName.CONTACTS_PAGE, component: Contacts, exact: true },
];
