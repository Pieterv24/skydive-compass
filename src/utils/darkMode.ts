const lsKey = 'theme';

export type Theme = 'dark' | 'light' | 'system';

export function getTheme(localStorageKey = lsKey): Theme {
  const userPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  return (window.localStorage.getItem(localStorageKey) ||
    (userPrefersDark ? 'dark' : 'light')) as Theme;
}

export function setTheme(theme: Theme, localStorageKey = lsKey) {
  if (theme === 'system') {
    window.localStorage.removeItem(localStorageKey);
    document.documentElement.setAttribute('theme', getTheme());
    return;
  } else {
    window.localStorage.setItem(localStorageKey, theme);
  }

  document.documentElement.setAttribute('theme', theme);
}
