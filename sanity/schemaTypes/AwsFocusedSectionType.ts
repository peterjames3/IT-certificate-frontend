import {defineField, defineType, defineArrayMember} from 'sanity'

/**
 * Reusable list item for an AWS sidebar card
 */
const awsSidebarListItem = defineType({
  name: 'awsSidebarListItem', // Changed from sidebarListItem
  title: 'AWS Sidebar List Item',
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
 * An brand-headed sidebar card containing a title and an itemized bullet list
 */
const awsSidebarCard = defineType({
  name: 'awsSidebarCard', // Changed from sidebarCard
  title: 'AWS Sidebar Card',
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
      of: [defineArrayMember({type: 'awsSidebarListItem'})], // Points to the new name
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
 * Top-level section schema tracking standard layouts
 */
const awsFocusedContentSection = defineType({
  name: 'awsFocusedContentSection',
  title: 'AWS Content-Focused Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'e.g. "The Secure Way to Pass the AWS Solutions Architect Professional Exam"',
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
      description: 'Thematic information cards shown in the right-hand column',
      of: [defineArrayMember({type: 'awsSidebarCard'})], // Points to the new name
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading'},
  },
})

export const awsFocusedSchemaTypes = [awsSidebarListItem, awsSidebarCard, awsFocusedContentSection]
export default awsFocusedContentSection