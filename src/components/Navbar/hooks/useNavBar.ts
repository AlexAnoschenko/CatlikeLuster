import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import setLanguage from '../../Dictionary';
import { LocalStorage } from '../../../constants/constants';

export const useNavbar = () => {
  const router = useHistory();
  const { pathname } = router.location;
  const [selectedPage, setSelectedPage] = useState(pathname);
  const { language } = useTypedSelector((state) => state.language);
  const dict = setLanguage(language);
  const { setLang } = useActions();
  const isMobile = useIsMobile();

  const selectPage = (page: string) => {
    setSelectedPage(page);
  };

  const selectLanguage = (lang: string) => {
    setLang(lang);
    localStorage.setItem(LocalStorage.LANGUAGE, lang);
  };

  return {
    selectedPage,
    selectPage,
    dict,
    language,
    isMobile,
    selectLanguage,
  };
};
