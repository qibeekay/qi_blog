import { urlFor } from '@/app/lib/sanity';
import { Post } from '@/app/utils/Interface';
import { url } from 'inspector';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { PiCursorClickBold } from 'react-icons/pi';
import { PiCursorClick } from 'react-icons/pi';

interface Props {
	post: Post;
}

const HeroSection = ({ post }: Props) => {
	return (
		<div className='relative w-full py-[4rem] text-dark'>
			<div className='max-w-6xl mx-auto px-4'>
				<div
					className={`h-screen bg-cover bg-center rounded-[1.5rem] p-4 sm:p-10 grid items-end`}
					style={{ backgroundImage: `url(${urlFor(post?.image).url()})` }}>
					{/* text */}
					<div className='bg-light w-full ms:w-fit p-5 rounded-2xl'>
						<div>
							{/* dates */}
							<div>
								{/* date */}
								<div className='border-[1.5px] border-dark bg-dark text-light rounded-full px-3 py-0.5 w-fit'>
									<p className='text-sm font-semibold'>
										{new Date(post?.publishedAt).toDateString()}
									</p>
								</div>
							</div>

							{/* categories */}
							<div className='flex items-center gap-2 mt-3'>
								{/* category */}
								{post?.tags.map((tag) => (
									<div
										key={tag?._id}
										className='border-[1.5px] border-dark rounded-full px-3 py-0.5 flex items-center gap-2'>
										<div className='h-1.5 w-1.5 rounded-full bg-dark'></div>
										<p className='text-sm font-semibold'>{tag?.name}</p>
									</div>
								))}
							</div>
						</div>
						<h1 className='text-lg sm:text-2xl ms:text-3xl font-semibold w-full ms:w-[30rem] mt-5 a'>
							<Link href={`/posts/${post?.slug?.current}`}>{post?.title}</Link>
						</h1>

						<div className='flex items-center justify-between mt-5'>
							{/* author */}
							<div className='flex items-center gap-4'>
								{/* image */}
								<div className='w-[2.5rem] aspect-square rounded-full overflow-hidden'>
									<img
										className='w-full h-full'
										src={`${urlFor(post?.author?.image?.asset?._ref).url()}`}
										alt={post?.author?.alt}
									/>
								</div>

								{/* name */}
								<p className='font-semibold'>{post?.author.name}</p>
							</div>

							{/* icon */}
							<div className=' bg-dark text-white aspect-square w-[2.4rem] rounded-full grid items-center justify-center'>
								<div>
									<PiCursorClick size={20} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
