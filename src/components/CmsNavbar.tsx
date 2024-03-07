import Link from 'next/link';
import React from 'react';
import { BackIcon } from './Icons';

const CmsNavbar = () => {
	return (
		<div className='py-3 px-5'>
			<Link href={'/'} className='flex justify-between items-center'>
				<div>
					<BackIcon />
				</div>
				<div className=' text-3xl dark:text-amber-50 font-logo'>
					Dev<span className='text-purple-500'>Blog</span>
				</div>
			</Link>
		</div>
	);
};

export default CmsNavbar;
