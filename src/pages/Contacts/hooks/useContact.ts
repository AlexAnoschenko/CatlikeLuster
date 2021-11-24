import { useIsMobile } from '../../../hooks/useIsMobile';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import setLanguage from '../../../components/Dictionary';

export const useContact = () => {
  const { language } = useTypedSelector((state) => state.language);
  const dict = setLanguage(language);
  const isMobile = useIsMobile();

  return { dict, isMobile };
};
