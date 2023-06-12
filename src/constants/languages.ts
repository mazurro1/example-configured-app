import { defaultLocale, locales } from "../../translations.config";

export type T_Languages = "en";

export const defaultLanguage: T_Languages = defaultLocale as T_Languages;
export const allLanguages: T_Languages[] = locales as T_Languages[];
