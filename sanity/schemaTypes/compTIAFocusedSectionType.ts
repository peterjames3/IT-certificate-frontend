import {defineField, defineType, defineArrayMember} from 'sanity'

/**
 * Reusable list item for a sidebar card
 * e.g. "Take my CompTIA CySA+ Exam for Me"
 */
const sidebarListItem = defineType({
  name: 'sidebarListItem',
  title: 'List Item',
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
 * A green-headed sidebar card containing a title and a bullet list,
 * e.g. "CompTIA Exam Certifications We Take for Clients"
 * or "Why We're #1 for IT Exam Help"
 */
const sidebarCard = defineType({
  name: 'sidebarCard',
  title: 'Sidebar Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Card Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [defineArrayMember({type: 'sidebarListItem'})],
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
 * Top-level section schema matching the screenshot:
 * left column = heading + intro paragraph(s),
 * right column = one or more sidebar cards
 */
const compTIAFocusedContentSection = defineType({
  name: 'compTIAFocusedContentSection',
  title: 'CompTIA  Content-Focused Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'e.g. "Pay and Pass CompTIA Exams No Months Of Prep Needed"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'array',
      description: 'Main paragraph(s) of copy under the heading',
      of: [defineArrayMember({type: 'block'})],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sidebarCards',
      title: 'Sidebar Cards',
      type: 'array',
      description: 'Green-headed cards shown in the right-hand column',
      of: [defineArrayMember({type: 'sidebarCard'})],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})

export const compTIAFocusedSchemaTypes = [sidebarListItem, sidebarCard, compTIAFocusedContentSection]
export default compTIAFocusedContentSection