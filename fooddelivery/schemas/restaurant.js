import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of Restaurant',
     },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of Restaurant',
      
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of Restaurant',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter rating from(1-5 stars)',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a value between 1 and 5"),
    },
    {
      name: 'type',
      type: "reference",
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{type: "category"}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type:"reference", to: [{type:"dish"}] }],
    },
    ],

 
})
