import {defineField, defineType, defineArrayMember} from 'sanity'

/**
 * Reusable list item for an ISACA sidebar card
 */
const isacaSidebarListItem = defineType({
  name: 'isacaSidebarListItem',
  title: 'ISACA Sidebar List Item',
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
 * for ISACA certification exam taker and proxy services information
 */
const isacaSidebarCard = defineType({
  name: 'isacaSidebarCard',
  title: 'ISACA Sidebar Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
      description: 'e.g. "Why Hire Our ISACA Exam Takers" or "Our Proxy Services Features"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [defineArrayMember({type: 'isacaSidebarListItem'})],
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
 * Top-level section schema for ISACA-focused content pages
 * Used to display IT governance and security certification information
 * alongside sidebar cards featuring exam taker and proxy service details
 */
const isacaFocusedContentSection = defineType({
  name: 'isacaFocusedContentSection',
  title: 'ISACA Content-Focused Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'e.g. "The Secure Way to Pass Your CISA, CISM, or CRISC Exam with Professional Exam Takers"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'array',
      description: 'Main paragraph(s) of copy under the heading explaining ISACA certification benefits and proxy services',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sidebarCards',
      title: 'Sidebar Cards',
      type: 'array',
      description: 'Thematic information cards shown in the right-hand column featuring exam taker services and proxy solutions',
      of: [defineArrayMember({type: 'isacaSidebarCard'})],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})

export const isacaFocusedSchemaTypes = [isacaSidebarListItem, isacaSidebarCard, isacaFocusedContentSection]
export default isacaFocusedContentSection