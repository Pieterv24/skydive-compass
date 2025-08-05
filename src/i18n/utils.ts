import { ui, defaultLang, showDefaultLang, languages } from './ui';

export function useTranslatedPath(input: keyof typeof ui | URL) {
  const lang = input instanceof URL ? getLangFromUrl(input) : input;

  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(input: keyof typeof ui | URL) {
  const lang = input instanceof URL ? getLangFromUrl(input) : input;

  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    const translations = ui[lang] as (typeof ui)[typeof defaultLang];
    return translations[key] || ui[defaultLang][key];
  };
}

export function t(url: URL) {
  const lang = getLangFromUrl(url);
  return useTranslations(lang);
}

export type Params = Record<string, string | undefined>;
export type Props = Record<string, unknown>;
export interface Route<P extends Params = Params, R extends Props = Props> {
  params: { [K in keyof P]: P[K] | number };
  props?: R;
}

export function buildStaticPaths<
  P extends Params = Params,
  R extends Props = Props,
>(routes: Route<P, R>[] = []) {
  const langRoutes = Object.keys(languages).map(lang => {
    if (!showDefaultLang && lang === defaultLang) {
      return { params: { lang: undefined } };
    }
    return { params: { lang } };
  });
  if (routes.length === 0) {
    return langRoutes;
  }

  return langRoutes.flatMap(lang => {
    return routes.map(route => {
      return {
        ...route,
        params: {
          ...route.params,
          ...lang.params,
        },
      };
    });
  });
}
