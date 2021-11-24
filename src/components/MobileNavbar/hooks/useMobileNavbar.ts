import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import setLanguage from '../../Dictionary';
import { LocalStorage } from '../../../constants/constants';

export const useMobileNavigator = () => {
  const { language } = useTypedSelector((state) => state.language);
  const dict = setLanguage(language);
  const { setLang } = useActions();
  const selectLanguage = (lang: string) => {
    setLang(lang);
    localStorage.setItem(LocalStorage.LANGUAGE, lang);
  };

  return { language, dict, selectLanguage };
};
