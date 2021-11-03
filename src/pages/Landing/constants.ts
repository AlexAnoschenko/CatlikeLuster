import { RouteName } from '../../constants';

export interface ISingleCard {
  image?: string;
  title: string;
  description?: string;
  path: string;
}

export const SingleCards: ISingleCard[] = [
  {
    image:
      'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'CATS',
    description: 'description',
    path: '',
  },
  {
    image:
      'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'KITTENS',
    description: 'description',
    path: '',
  },
  {
    image:
      'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    title: 'CONTACTS',
    description: 'description',
    path: RouteName.CONTACTS_PAGE,
  },
];
