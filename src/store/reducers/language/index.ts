import {
    LanguageAction,
    LanguageActionEnum,
    LanguageState,
} from './types';

const initialState: LanguageState = {
    language: 'en',
};

export default function languageReducer(
    state = initialState,
    action: LanguageAction
): LanguageState {
    switch (action.type) {
        case LanguageActionEnum.SET_LANGUAGE:
            return { ...state, language: action.payload };
        default:
            return state;
    }
}
