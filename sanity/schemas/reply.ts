// In comment.js

import { Rule, defineType } from 'sanity';

export const reply = defineType({
	name: 'reply',
	title: 'Reply',
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
			name: 'reply',
			type: 'text',
		},
		{
			name: 'comment',
			type: 'reference',
			to: [{ type: 'comment' }],
		},
	],
});
