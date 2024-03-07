import { Rule } from 'sanity';
export const post = {
	name: 'post',
	title: 'Post',
	type: 'document',

	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},
		{
			name: 'image',
			title: 'Title Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
				},
			],
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			validation: (Rule: Rule) => Rule.max(300).error('Max 500 characters'),
		},
		{
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					fields: [{ type: 'text', name: 'alt', title: 'Alt' }],
				},
			],
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'tag' }] }],
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' }, // Reference to the author document type
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
		},
	],
	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'image',
		},
		prepare(selection: { author?: any }) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
};
