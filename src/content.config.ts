import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import type { Manufacturer } from './models/Manufacturer';
import type { Canopy } from './models/Canopy';

const manufacturers = defineCollection({
  loader: file('src/data/manufacturers.json', {
    parser: content => {
      return JSON.parse(content).map((manufacturer: Manufacturer) => {
        return {
          id: manufacturer.slug,
          ...manufacturer,
        };
      });
    },
  }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    countrycode: z.string().optional(),
    shortname: z.string().optional(),
    remarks: z.record(z.string()).optional(),
    url: z.string().optional(),
  }),
});

const canopies = defineCollection({
  loader: file('src/data/canopies.json', {
    parser: content => {
      return JSON.parse(content).map((canopy: Canopy) => {
        return {
          id: canopy.manufacturerSlug + '-' + canopy.slug,
          ...canopy,
        };
      });
    },
  }),
  schema: z.object({
    slug: z.string(),
    manufacturerSlug: z.string(),
    // manufacturer: reference('manufacturers'),
    name: z.string(),
    cells: z.number().nullable().optional(),
    category: z.number().nullable().optional(),
    common: z.boolean(),
    xBraced: z.boolean(),
    firstYearOfProduction: z.number().optional(),
    lastYearOfProduction: z.number().optional(),
    minSize: z.number().optional(),
    maxSize: z.number().optional(),
    url: z.string().optional(),
    remarks: z.record(z.string()).optional(),
    // links: z.array(z.object({
    //   name: z.string(),
    //   url: z.string(),
    // })),
  }),
});

export const collections = { canopies, manufacturers };
