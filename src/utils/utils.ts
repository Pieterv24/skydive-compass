export function stringToUrlString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with a single hy
    .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
}
