import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='w-full relative bg-dark text-light py-[5rem]'>
			<div className='max-w-6xl mx-auto px-4'>
				<div className='flex gap-10 justify-between flex-wrap w-full'>
					{/* flex-1 */}
					<div className='w-[30%]'>
						{/* header */}
						<div>
							<Link href={'/'} className='font-bold text-xl sm:text-3xl'>
								X-Blog.
							</Link>
						</div>

						<div className='mt-5'>
							<p>
								Did you come here for something in particular or just general
								Riker
							</p>
						</div>

						{/* mails / phone */}
						<div className='mt-5'>
							<p className='font-semibold '>
								Email:{' '}
								<span className='font-normal text-base'>support@gmail.com</span>
							</p>
							<p className='font-semibold'>
								Phone:{' '}
								<span className='font-normal text-base'>+234 918238423</span>
							</p>
						</div>
					</div>

					{/* flex 2 */}
					<div className=''>
						{/* header */}
						<div>
							<p className='text-xl font-semibold'>Blogs</p>
						</div>

						{/* links */}
						<ul className='mt-5 grid gap-2'>
							<li>
								<Link
									href={''}
									className=' a hover:text-[#7b00d3] duration-200 ease-in'>
									Travel
								</Link>
							</li>
							<li>
								<Link
									href={''}
									className=' a hover:text-[#7b00d3] duration-200 ease-in'>
									Technology
								</Link>
							</li>
							<li>
								<Link
									href={''}
									className=' a hover:text-[#7b00d3] duration-200 ease-in'>
									Lifestyle
								</Link>
							</li>
							<li>
								<Link
									href={''}
									className=' a hover:text-[#7b00d3] duration-200 ease-in'>
									Fashion
								</Link>
							</li>
						</ul>
					</div>

					{/* flex 3 */}
					<div className=''>
						{/* header */}
						<div>
							<p className='text-xl font-semibold'>Quick Links</p>
						</div>

						{/* links */}
						<ul className='mt-5 grid gap-2'>
							<li>
								<Link
									href={''}
									className=' a hover:text-[#7b00d3] duration-200 ease-in'>
									About
								</Link>
							</li>
							<li>
								<Link
									href={''}
									className=' a hover:text-[#7b00d3] duration-200 ease-in'>
									Be a writer
								</Link>
							</li>
							<li>
								<Link
									href={''}
									className=' a hover:text-[#7b00d3] duration-200 ease-in'>
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href={''}
									className=' a hover:text-[#7b00d3] duration-200 ease-in'>
									Talk to us
								</Link>
							</li>
						</ul>
					</div>

					{/* flex 4 */}
					<div className=''>
						{/* header */}
						<div>
							<p className='text-xl font-semibold'>Subscribe For Newsletter</p>
						</div>

						{/* form */}
						<div className='mt-5'>
							{/* search */}
							<div className='mb-4'>
								<label htmlFor=''>Search Topics</label>
								<div className='flex items-center gap-4 mt-2'>
									<input
										type='text'
										className='w-full outline-none border-red rounded-full border px-4 py-2'
										placeholder='Enter keyword'
									/>
									<div className='bg-light text-dark p-3 rounded-md cursor-pointer'>
										<FiSearch />
									</div>
								</div>
							</div>
						</div>

						{/* follow */}
						<div className='mt-7'>
							<p>Follow On:</p>

							<div className='flex gap-3 items-center mt-3'>
								{/* facebook */}
								<div className=''>
									<Link
										href={''}
										className='w-[1.7rem] aspect-square rounded bg-light text-dark grid items-center justify-center'>
										<FaFacebookF />
									</Link>
								</div>

								{/* twitter */}
								<div className=''>
									<Link
										href={''}
										className='w-[1.7rem] aspect-square rounded bg-light text-dark grid items-center justify-center'>
										<FaTwitter />
									</Link>
								</div>

								{/* instagram */}
								<div className=''>
									<Link
										href={''}
										className='w-[1.7rem] aspect-square rounded bg-light text-dark grid items-center justify-center'>
										<FaInstagram />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* line */}
				<div className='my-10 w-full h-[0.5px] bg-light/20'></div>

				{/* copyright */}
				<div className='text-center'>
					<p className='text-sm'>Copyright © 2023-2024 X-blog.</p>
					<p className='text-sm'>
						Developed by{' '}
						<Link className=' text-[#7b00d3]' href={''}>
							qi-beekay
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
