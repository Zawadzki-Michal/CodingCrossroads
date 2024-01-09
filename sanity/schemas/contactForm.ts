import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactFormSubmission', // You can choose any name you prefer
  title: 'Contact Form Submission', // Title for the schema type
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
  ],
});