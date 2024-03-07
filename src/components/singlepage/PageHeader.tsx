'use client';
import React from 'react';
import { Navbar } from '..';
import { BiSolidMessage } from 'react-icons/bi';
import { Post } from '@/app/utils/Interface';
import { urlFor } from '@/app/lib/sanity';

interface Props {
	post: Post;
}
const PageHeader = ({ post }: Props) => {
	const handleScrollToComments = () => {
		// Scroll to comments section
		const commentsSection = document.getElementById('comments-section');
		if (commentsSection) {
			commentsSection.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<header className='w-full bg-[#8E65C0] text-dark'>
			<div>
				{/* nav */}
				{/* <Navbar /> */}

				<div className=' max-w-6xl mx-auto px-4 pt-[5rem] ms:pt-[7rem] pb-[17rem]'>
					{/* header */}
					<h1 className='font-bold text-3xl sm:text-4xl md:text-6xl ms:w-[75%] leading-[2.5rem]'>
						{[post?.title]}
					</h1>

					{/* summary */}
					<p className='font-semibold mt-5 text-dark/60 text-sm sm:text-lg ms:text-xl w-full ms:w-[85%]'>
						Quick Summary &#x21AC;{' '}
						<span className='text-dark'> {post?.excerpt}</span>
					</p>

					{/* details of author */}
					<div className='w-full flex flex-col sm:flex-row sm:items-center justify-between mt-7'>
						{/* author */}
						<div className='flex items-center gap-5'>
							{/* image */}
							<div className='w-[3.5rem] sm:w-[5rem] aspect-square overflow-hidden rounded-full'>
								<img
									className='w-full h-full'
									src={`${urlFor(post?.author?.image?.asset?._ref).url()}`}
									alt={post?.author?.alt}
								/>
							</div>
							{/* text */}
							<div>
								{/* name */}
								<p className='sm:text-lg'>
									By <span className='font-semibold'>{post?.author.name}</span>
								</p>
								{/* date */}
								<p className='sm:text-lg'>
									{new Date(post?.publishedAt).toDateString()}
								</p>
							</div>
						</div>

						{/* comment */}
						<div
							className='flex gap-2 cursor-pointer pt-5 sm:pt-0'
							onClick={handleScrollToComments}>
							<div>
								<BiSolidMessage size={30} />
							</div>
							<p className='text-lg font-semibold'>Start Discussing</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default PageHeader;
