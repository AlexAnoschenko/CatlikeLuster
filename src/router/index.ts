import Landing from '../pages/Landing/Landing';
import Contacts from '../pages/Contacts/Contacts';
import Parents from '../pages/Parents/Parents';
import Kittens from '../pages/Kittens/Kittens';
import Gallery from '../pages/Gallery/Gallery';
import Info from '../pages/Info/Info';
import { RouteName } from '../constants';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const routes: IRoute[] = [
    { path: RouteName.LANDING_PAGE, component: Landing, exact: true },
    { path: RouteName.PARENTS_PAGE, component: Parents, exact: true },
    { path: RouteName.KITTENS_PAGE, component: Kittens, exact: true },
    { path: RouteName.GALLERY_PAGE, component: Gallery, exact: true },
    { path: RouteName.INFO_PAGE, component: Info, exact: true },
    {
        path: RouteName.CONTACTS_PAGE,
        component: Contacts,
        exact: true,
    },
];
