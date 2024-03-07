import Link from 'next/link';
import React from 'react';

const Categories = () => {
	return (
		<div className='w-full pb-[4rem]'>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='border border-dark/30 w-full py-5 rounded-2xl flex items-center gap-7 justify-center'>
					<h1 className='font-semibold text-xl'>Tags:</h1>
					<div className='flex flex-wrap items-center gap-4'>
						<div>
							<Link className='font-semibold text-sm text-[#4B6BFB]' href={''}>
								Technology
							</Link>
						</div>
						<div>
							<Link className='font-semibold text-sm text-[#4B6BFB]' href={''}>
								Technology
							</Link>
						</div>
						<div>
							<Link className='font-semibold text-sm text-[#4B6BFB]' href={''}>
								Technology
							</Link>
						</div>
						<div>
							<Link className='font-semibold text-sm text-[#4B6BFB]' href={''}>
								Technology
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
