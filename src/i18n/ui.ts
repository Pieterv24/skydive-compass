export const showDefaultLang = false;

export const languages = {
  en: 'English',
  nl: 'Nederlands',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'site.title': 'Skydive Compass',
    'nav.home': 'Home',
    'nav.compass': 'Compass',
    'nav.canopies': 'Canopies',
    'nav.manufacturers': 'Manufacturers',
    'compass.jump-count': 'Total jumps',
    'compass.recent-jump-count': 'Total jumps in the last 12 months',
    'compass.exit-weight': 'Exit Weight (Body weight + weight of rig)',
  },
  nl: {
    'site.title': 'Skydive Kompasroos',
    'nav.compass': 'Kompasroos',
    'nav.canopies': 'Koepels',
    'nav.manufacturers': 'Fabrikanten',
    'compass.jump-count': 'Totaal aantal sprongen',
    'compass.recent-jump-count': 'Aantal sprongen in de laatste 12 maanden',
    'compass.exit-weight': 'Exit gewicht (lichaamsgewicht + gewicht van set)',
  },
} as const;
