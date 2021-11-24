import { useEffect } from 'react';
import { useActions } from './useActions';
import { useIsMobile } from './useIsMobile';
import { LocalStorage } from '../constants/constants';

export const useLanguageAndMobile = () => {
  const { setLang } = useActions();
  const isMobile = useIsMobile();

  useEffect(() => {
    const lang = localStorage.getItem(LocalStorage.LANGUAGE);
    setLang(lang || 'en');
  }, [setLang]);

  return { isMobile };
};
