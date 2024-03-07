// In comment.js

import { Rule, defineType } from 'sanity';

export const comment = defineType({
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		{
			name: 'name',
			// title: 'Name',
			type: 'string',
		},
		{
			name: 'email',
			type: 'string',
		},
		{
			name: 'image',
			type: 'text',
		},
		{
			name: 'comment',
			type: 'text',
		},
		{
			name: 'post',
			type: 'reference',
			to: [{ type: 'post' }],
		},
	],
});
