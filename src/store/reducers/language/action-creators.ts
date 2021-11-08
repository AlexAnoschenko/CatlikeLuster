import { LanguageActionEnum, SetLanguageAction } from './types';

export const LanguageActionCreators = {
    setLang: (lang: string): SetLanguageAction => ({
        type: LanguageActionEnum.SET_LANGUAGE,
        payload: lang,
    }),
};
