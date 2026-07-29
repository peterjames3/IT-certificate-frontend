import {defineField, defineType, defineArrayMember} from 'sanity'

/**
 * Reusable list item for an EC-Council sidebar card
 */
const eccouncilSidebarListItem = defineType({
  name: 'eccouncilSidebarListItem',
  title: 'EC-Council Sidebar List Item',
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
 * for EC-Council certification exam taker and proxy services information
 */
const eccouncilSidebarCard = defineType({
  name: 'eccouncilSidebarCard',
  title: 'EC-Council Sidebar Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
      description: 'e.g. "Why Hire Our EC-Council Exam Takers" or "Our Ethical Hacking Proxy Services Features"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [defineArrayMember({type: 'eccouncilSidebarListItem'})],
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
 * Top-level section schema for EC-Council-focused content pages
 * Used to display cybersecurity and ethical hacking certification information
 * alongside sidebar cards featuring exam taker and proxy service details
 */
const eccouncilFocusedContentSection = defineType({
  name: 'eccouncilFocusedContentSection',
  title: 'EC-Council Content-Focused Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'e.g. "The Secure Way to Pass Your CEH, ECSA, or CHFI Exam with Professional Ethical Hacking Exam Takers"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'array',
      description: 'Main paragraph(s) of copy under the heading explaining EC-Council certification benefits and ethical hacking proxy services',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sidebarCards',
      title: 'Sidebar Cards',
      type: 'array',
      description: 'Thematic information cards shown in the right-hand column featuring EC-Council exam taker services and proxy solutions',
      of: [defineArrayMember({type: 'eccouncilSidebarCard'})],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})

export const eccouncilFocusedSchemaTypes = [eccouncilSidebarListItem, eccouncilSidebarCard, eccouncilFocusedContentSection]
export default eccouncilFocusedContentSection