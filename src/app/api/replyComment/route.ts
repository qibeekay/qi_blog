// route.ts
import { createClient } from '@sanity/client';

const client = createClient({
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: true,
	token: process.env.SANITY_API_TOKEN,
	apiVersion: '2024-03-01', // Add API version here
});

export const POST = async (req: Request) => {
	const body = await req.json();

	const { _id, name, email, image, reply } = body;

	try {
		await client.create({
			_type: 'reply',
			comment: {
				_type: 'reference',
				_ref: _id,
			},
			name,
			email,
			image,
			reply,
		});
	} catch (error) {
		// console.error(error);
		console.log(error);
		return new Response("Couldn't submit reply", { status: 500 });
	}
	console.log(body);
	return new Response('Reply Submitted', { status: 200 });
};
