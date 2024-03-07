// route.ts
import json from 'node-fetch';

import { createClient } from '@sanity/client';

const client = createClient({
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: true,
	token: process.env.SANITY_API_TOKEN,
	apiVersion: '2024-03-01', // Add API version here
});

// export const config = {
// 	api: {
// 		bodyParser: false, // Disable Next.js bodyParser to parse large payloads
// 	},
// };

interface CommentProps {
	body: {
		_id: string;
		name: string;
		email: string;
		image: string;
		comment: string;
	};
}

export const POST = async (req: Request) => {
	const body = await req.json();

	const { _id, name, email, image, comment } = body;

	try {
		await client.create({
			_type: 'comment',
			post: {
				_type: 'reference',
				_ref: _id,
			},
			name,
			email,
			image,
			comment,
		});
	} catch (error) {
		// console.error(error);
		console.log(error);
		return new Response("Couldn't submit comment", { status: 500 });
	}
	console.log(body);
	return new Response('Comment Submitted', { status: 200 });
};
