import { slide as Menu } from 'react-burger-menu';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import setLanguage from '../Dictionary';
import { RouteName } from '../../constants';

const MobileNavbar = (props: any) => {
  const { language } = useTypedSelector((state) => state.language);
  const dict = setLanguage(language);

  return (
    <div className=''>
      <Menu {...props}>
        <a className='menu-item' href={RouteName.LANDING_PAGE}>
          {dict.main}
        </a>

        <a className='menu-item' href={RouteName.PARENTS_PAGE}>
          {dict.parents}
        </a>

        <a className='menu-item' href={RouteName.KITTENS_PAGE}>
          {dict.kittens}
        </a>

        <a className='menu-item' href={RouteName.GALLERY_PAGE}>
          {dict.gallery}
        </a>

        <a className='menu-item' href={RouteName.INFO_PAGE}>
          {dict.info}
        </a>

        <a className='menu-item' href={RouteName.CONTACTS_PAGE}>
          {dict.contacts}
        </a>
      </Menu>
    </div>
  );
};

export default MobileNavbar;
