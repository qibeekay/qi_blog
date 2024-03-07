'use client';
import React, { useEffect, useState } from 'react';
import { PiCursorClick } from 'react-icons/pi';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import { Post } from '@/app/utils/Interface';
import { urlFor } from '@/app/lib/sanity';

interface Props {
	posts: Post[];
}
const TrendingPost = ({ posts }: Props) => {
	const [trendingPosts, setTrendingPosts] = useState<Post[]>([]);

	useEffect(() => {
		if (posts.length > 0) {
			// Display the latest four posts
			setTrendingPosts(posts.slice(0, 4));
		}
	}, [posts]);
	return (
		<div className='w-full relative pb-[4rem]'>
			<div className='max-w-6xl mx-auto px-4'>
				{/* header */}
				<div className='mb-5'>
					<h1 className='text-center font-semibold xs:text-2xl sm:text-4xl md:text-5xl flex items-baseline gap-2'>
						Trending Posts{' '}
						<Link href={'/'} className='text-[12px] flex items-center gap-2'>
							See more post <BsArrowRight />
						</Link>
					</h1>
				</div>
				{/* grids */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{trendingPosts?.map((post) => (
						<div
							key={post._id}
							className=' hover:bg-white hover:shadow-md p-2 pb-7 relative duration-500 ease-in-out dark:hover:bg-dark dark:hover:shadows dark:shadow-purple-950'>
							<div>
								{/* image */}
								<div>
									<div className='h-[12rem]'>
										<img
											className='w-full h-full'
											src={`${urlFor(post?.image).url()}`}
											alt={post?.image?.alt}
										/>
									</div>
								</div>

								{/* categories */}
								<div className='flex items-center gap-2 my-5 flex-wrap'>
									{/* category */}
									{post?.tags.map((tag) => (
										<div
											key={tag._id}
											className='border-[1.5px] border-dark dark:border-purple-700 rounded-full px-3 py-0.5 flex items-center gap-2'>
											<div className='h-1.5 w-1.5 rounded-full bg-dark dark:bg-purple-500'></div>
											<p className='text-xs font-semibold'>{tag?.name}</p>
										</div>
									))}
								</div>

								{/* h1 */}
								<div className='flex items-center gap-3'>
									{/* line */}
									<div className='h-[3rem] w-1.5 bg-[#7b00d3]'></div>

									{/* text */}
									<h1 className='font-semibold w-full ms:w-[30rem] a line-clamp-2 py-1.5'>
										<Link href={`/posts/${post?.slug?.current}`}>
											{post?.title}
										</Link>
									</h1>
								</div>

								{/* author */}
								<div className='flex items-center justify-between mt-3'>
									{/* author */}
									<div className='flex items-center gap-4'>
										{/* image */}
										<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
											<img
												className='w-full h-full'
												src={`${urlFor(
													post?.author?.image?.asset?._ref
												).url()}`}
												alt={post?.author?.alt}
											/>
										</div>

										{/* name */}
										<p className='font-semibold'>{post?.author?.name}</p>
									</div>
								</div>

								{/* icon */}
								<div className=' bg-dark text-white aspect-square w-[2rem] rounded-full grid items-center justify-center absolute top-[10rem] right-4'>
									<div>
										<PiCursorClick size={18} />
									</div>
								</div>

								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit absolute top-[10.7rem] left-3'>
									<p className='text-[9px] font-semibold'>Dec 04 2023</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrendingPost;
