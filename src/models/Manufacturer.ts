export interface Manufacturer {
  slug: string; // Unique identifier for the manufacturer, a URL-friendly string (no spaces, special characters)
  name: string; // Full name of the manufacturer
  shortName: string; // Short name or abbreviation of the manufacturer
  countryCode: string; // ISO 3166-1 alpha-2 country code of the manufacturer
  url?: string; // Optional URL for the manufacturer's website
  remarks?: { [key: string]: string }; // Optional remarks or additional information about the manufacturer, stored as key-value pairs where the key is a country code for what language the remarks are in
}
