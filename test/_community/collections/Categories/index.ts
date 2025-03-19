import type { CollectionConfig } from 'payload'

export const categoriesSlug = 'categories'

export const CategoriesCollection: CollectionConfig = {
  slug: categoriesSlug,
  access: {
    create: () => true,
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
      required: true,
    },
  ],
}
