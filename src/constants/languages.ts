import { defaultLocale, locales } from "../../translations.config";

export type ILanguagesType = "en";

export const defaultLanguage: ILanguagesType = defaultLocale as ILanguagesType;
export const allLanguages: ILanguagesType[] = locales as ILanguagesType[];
