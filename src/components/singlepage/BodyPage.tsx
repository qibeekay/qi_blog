import { urlFor } from '@/app/lib/sanity';
import { Post } from '@/app/utils/Interface';
import { PortableText } from '@portabletext/react';
import React from 'react';
import { BiSolidMessage } from 'react-icons/bi';

interface Props {
	post: Post;
}
const BodyPage = ({ post }: Props) => {
	return (
		<div className='relative '>
			<div>
				<div>
					{/* image */}
					<div className=' absolute -top-[14rem] left-[50%] -translate-x-[50%] z-10 w-[95%] ms:w-[80%]'>
						<div className='w-full h-[35rem]'>
							<img
								className='w-full h-full object-cover'
								src={`${urlFor(post?.image).url()}`}
								alt={post?.image?.alt}
							/>
						</div>
					</div>

					{/* paragraph */}
					<div className='pt-[25rem] w-[95%] ms:w-[80%] md:w-[65%] mx-auto grid gap-8 ms:text-xl font-semibold text-left pb-[7rem]'>
						<div className='prose prose-blue prose-xl dark:prose-invert prose-headings:underline'>
							<PortableText value={post?.body} />
						</div>
						{/* comment */}
						<div className='flex gap-2 cursor-pointer mt-7 text-[#7b00d3]/60'>
							<div>
								<BiSolidMessage size={30} />
							</div>
							<p className='text-lg font-semibold'>Start Discussion Below</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BodyPage;
