// sanity/schemaTypes/azureFocusedContentSectionType.ts
import {defineField, defineType, defineArrayMember} from 'sanity'

/**
 * Reusable list item for an Azure sidebar card
 */
const azureSidebarListItem = defineType({
  name: 'azureSidebarListItem',
  title: 'Azure Sidebar List Item',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link (optional)',
      description: 'Where this list item should navigate to, if anywhere',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'text'},
  },
})

/**
 * A branded sidebar card containing a title and an itemized bullet list
 * for Azure certification exam taker and proxy services information
 */
const azureSidebarCard = defineType({
  name: 'azureSidebarCard',
  title: 'Azure Sidebar Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
      description: 'e.g. "Why Hire Our Azure Exam Takers" or "Our Azure Proxy Services Features"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [defineArrayMember({type: 'azureSidebarListItem'})],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'title', items: 'items'},
    prepare({title, items}) {
      return {
        title,
        subtitle: `${items?.length || 0} item(s)`,
      }
    },
  },
})

/**
 * Top-level section schema for Azure-focused content pages
 * Used to display Microsoft Azure certification information
 * alongside sidebar cards featuring exam taker and proxy service details
 */
const azureFocusedContentSection = defineType({
  name: 'azureFocusedContentSection',
  title: 'Azure Content-Focused Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'e.g. "The Secure Way to Pass Your AZ-900, AZ-104, or AZ-305 Exam with Professional Exam Takers"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'array',
      description: 'Main paragraph(s) of copy under the heading explaining Azure certification benefits and proxy services',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sidebarCards',
      title: 'Sidebar Cards',
      type: 'array',
      description: 'Thematic information cards shown in the right-hand column featuring exam taker services and proxy solutions for Azure certifications',
      of: [defineArrayMember({type: 'azureSidebarCard'})],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'Button text, e.g. "Get Azure Exam Help"',
        }),
        defineField({
          name: 'href',
          title: 'URL',
          type: 'string',
          description: 'Where the button should link to',
        }),
        defineField({
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [
              {title: 'Primary (Blue)', value: 'primary'},
              {title: 'Secondary (Gray)', value: 'secondary'},
              {title: 'Outline', value: 'outline'},
              {title: 'Azure (Custom)', value: 'azure'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Light Gray', value: 'gray'},
          {title: 'Azure Blue', value: 'azure'},
          {title: 'Dark Blue', value: 'dark'},
        ],
      },
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})

export const azureFocusedSchemaTypes = [
  azureSidebarListItem, 
  azureSidebarCard, 
  azureFocusedContentSection
]

export default azureFocusedContentSection