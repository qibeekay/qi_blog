import { Rule, defineType } from 'sanity';

export const author = defineType({
	name: 'author',
	title: 'Author',
	type: 'document',

	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
			},
		},
		{
			name: 'image',
			title: 'Image',
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
			name: 'description',
			title: 'About Author',
			type: 'text',
			validation: (Rule: Rule) => Rule.max(200).error('Max 200 characters'),
		},
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
});
