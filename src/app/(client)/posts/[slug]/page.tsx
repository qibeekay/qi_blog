import { client } from '@/app/lib/sanity';
import { Post } from '@/app/utils/Interface';
import { BodyPage, CommentPage, PageHeader } from '@/components';

interface Params {
	params: {
		slug: string;
	};
}

async function getPost(slug: string) {
	const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
        title,
        slug,
		_id,
        publishedAt,
        image,
		body,
        excerpt,
		author ->,
		"comments":*[_type == "comment" && post._ref == ^._id],
        tags[] -> {
            _id,
            slug,
            name
        }
    }
    `;
	const post = await client.fetch(query);
	return post;
}

export default async function SinglePage({ params }: Params) {
	console.log(params, 'params');
	const post: Post = await getPost(params?.slug);
	console.log(post, 'Post');
	return (
		<div>
			<PageHeader post={post} />
			<BodyPage post={post} />
			<CommentPage post={post} />
		</div>
	);
}
