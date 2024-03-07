import { type SchemaTypeDefinition } from 'sanity';
import { post } from './schemas/post';
import { tag } from './schemas/tag';
import { author } from './schemas/author';
import { comment } from './schemas/comment';
import { reply } from './schemas/reply';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, tag, author, comment],
};
