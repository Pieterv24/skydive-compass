export interface Canopy {
  slug: string;
  manufacturerSlug: string;
  name: string;
  cells?: number;
  category?: number;
  common: boolean;
  xBraced: boolean;
  firstYearOfProduction?: number;
  lastYearOfProduction?: number;
  minSize?: number;
  maxSize?: number;
  url?: string;
  remarks?: { [key: string]: string };
  links: { name: string; url: string }[];
}
