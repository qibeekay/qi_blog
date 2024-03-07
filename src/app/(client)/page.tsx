import { Categories, HeroSection, TrendingPost } from '@/components';
import { client } from '../../../sanity/lib/client';
import { Post } from '../utils/Interface';

async function getLatestPost() {
	const query = `
		*[_type == "post"] | order(_createdAt desc)[0] {
  			title,
    		excerpt,
    		slug,
			image,
    		publishedAt,
    		author ->,
			tags[] -> {
			_id,
			slug,
			name
			}
		}
	`;

	const data = await client.fetch(query);
	return data;
}

async function getPost() {
	const query = `
		*[_type == "post"] | order(_createdAt desc) {
  			title,
    		excerpt,
    		slug,
			image,
    		publishedAt,
    		author ->,
			tags[] -> {
			_id,
			slug,
			name
			}
		}
	`;

	const data = await client.fetch(query);
	return data;
}

export const revalidate = 60;

export default async function Home() {
	const latestPost: Post = await getLatestPost();
	const posts: Post[] = await getPost();
	// console.log('posts', posts);
	// console.log('latest posts', latestPost.author);
	return (
		<main>
			{latestPost && (
				<div key={latestPost._id}>
					<HeroSection post={latestPost} />
				</div>
			)}

			{/* all Tags */}
			<Categories />

			{/* grids */}
			<TrendingPost posts={posts} />
		</main>
	);
}
