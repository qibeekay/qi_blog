'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ThemeSwitch from './ThemeSwitch';
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/clerk-react';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [search, setSearch] = useState(false);
	const [isSignedIn, setIsSignedIn] = useState(false);

	const { user, isLoaded } = useUser();

	useEffect(() => {
		if (isLoaded) {
			setIsSignedIn(user !== null);
		}
	}, [isLoaded, user]);

	// console.log(user);

	// console.log(user?.fullName);
	// console.log(user?.emailAddresses[0].emailAddress);
	// console.log(user?.id);

	const toggleNav = () => {
		setNav(!nav);
	};

	const toggleSearch = () => {
		setSearch(!search);
	};

	// if (!isSignedIn) {
	// 	return <div>Hello Please sign in</div>;
	// }

	return (
		<nav
			className={` text-dark dark:text-light w-full relative z-[100] font-body ${
				!nav ? '' : 'bg-white dark:bg-dark'
			}`}>
			<div className='flex items-center justify-between py-5 max-w-6xl mx-auto px-4'>
				{/* logo / navs */}
				<div className='flex items-center gap-10'>
					{/* logo */}
					<div className='flex items-center gap-4'>
						<button
							onClick={toggleNav}
							className='flex lg:hidden flex-col gap-[1.2px] justify-center'>
							<span
								className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
									nav ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
								}`}></span>
							<span
								className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm my-0.5 ${
									nav ? 'opacity-0' : 'opacity-100'
								}`}></span>
							<span
								className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 rounded-sm ${
									nav ? '-rotate-45 -translate-y-1 w-6' : 'translate-y-0.5 w-3'
								}`}></span>
						</button>
						<div>
							<Link
								href={'/'}
								className='font-bold font-logo text-xl sm:text-3xl dark:text-purple-500'>
								Qi's
								<span className='text-purple-500 dark:text-light'>_Blog</span>.
							</Link>
						</div>
					</div>

					{/* link */}
					<ul className='hidden lg:flex items-center gap-7 font-semibold text-lg'>
						<li className='a'>
							<Link href={''}>Articles</Link>
						</li>
						<li className='a'>
							<Link href={''}>Top Stories</Link>
						</li>
						<li className='a'>
							<Link href={''}>About</Link>
						</li>
						<li className='a'>
							<Link href={''}>Be a writer</Link>
						</li>
						<li>
							<Link
								href={''}
								className=' a hover:text-dark/70 dark:hover:text-light'>
								Talk to us
							</Link>
						</li>
					</ul>
				</div>

				{/* search / auths */}
				<div className='flex items-center gap-1.5 sm:gap-5'>
					{/* theme switch */}
					{/* <div> */}
					<ThemeSwitch />
					{/* </div> */}
					{/* search */}
					<div className='relative'>
						<div
							className=' bg-dark dark:bg-white text-white dark:text-dark aspect-square w-[2.05rem] rounded-full grid items-center justify-center cursor-pointer'
							onClick={toggleSearch}>
							<div>
								<FiSearch size={20} />
							</div>
						</div>

						<div
							className={`absolute z-[999] -right-[5rem] sm:-right-14 ms:right-0 top-[3rem] rounded-xl p-4 w-[13rem] xs:w-[18rem] sm:w-[20rem] bg-white shadow dark:shadow-md dark:shadow-purple-900 ${
								search ? 'grid' : 'hidden'
							}`}>
							{/* search */}
							<div className='mb-4'>
								<label htmlFor='' className='text-dark'>
									Search Topics
								</label>
								<div className='flex items-center gap-4 mt-2'>
									<input
										type='text'
										className='w-full outline-none rounded-full border px-4 py-2 dark:bg-white text-dark'
										placeholder='Enter keyword'
									/>
									<div className='bg-dark text-white p-3 rounded-md cursor-pointer'>
										<FiSearch />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* get started */}
					{!isSignedIn && (
						<div className='flex items-center gap-3 sm:gap-5'>
							{/* login */}
							<div className='hidden lg:grid'>
								<Link
									href={'/sign-in'}
									className='text-sm font-semibold hover:text-dark/70 dark:hover:text-purple-700'>
									Log in
								</Link>
							</div>
							{/* Signup */}
							<div className='hidden sm:grid'>
								<Link
									className='border-2 border-dark dark:border-purple-500 rounded-full py-2 px-3 sm:py-2 sm:px-6 hover:text-white hover:bg-dark dark:hover:bg-purple-500/20'
									href={'/sign-up'}>
									Sign up
								</Link>
							</div>
						</div>
					)}

					<div className='ml-auto'>
						<UserButton afterSignOutUrl='/' />
					</div>
				</div>
			</div>

			{/* Appear on nav true */}
			{/* mobile nav */}
			<div
				className={`fixed duration-300 ${
					nav ? 'left-0 ease-in opacity-100' : '-left-full ease-out opacity-0'
				} w-full bg-white dark:bg-dark border-t  border-dark/20`}>
				<div className='px-5 py-7'>
					{/* link */}
					<ul className=' flex flex-col gap-7 font-semibold text-sm'>
						<li className=' w-fit a hover:text-purple-500 duration-700 ease-in-out text-3xl'>
							<Link href={''}>Articles</Link>
						</li>
						<li className=' w-fit a hover:text-purple-500 duration-700 ease-in-out text-3xl'>
							<Link href={''}>Top Stories</Link>
						</li>
						<li className='w-fit a hover:text-purple-500 duration-700 ease-in-out text-3xl'>
							<Link href={''}>About</Link>
						</li>
						<li className='w-fit a hover:text-purple-500 duration-700 ease-in-out text-3xl'>
							<Link href={''}>Be a writer</Link>
						</li>
						<li>
							<Link
								href={''}
								className=' a hover:text-purple-500 duration-700 ease-in-out text-3xl'>
								Talk to us
							</Link>
						</li>
					</ul>

					<div className='mt-8 text-xl flex items-center gap-4'>
						<Link
							href={'/sign-in'}
							className='border-2 border-dark dark:border-purple-500 rounded-full py-2 px-3 sm:py-2 sm:px-6 hover:text-white hover:bg-dark dark:hover:bg-purple-500/20 '>
							Log in
						</Link>

						<Link
							className='border-2 border-dark dark:border-purple-500 rounded-full py-2 px-3 sm:py-2 sm:px-6 hover:text-white hover:bg-dark dark:hover:bg-purple-500/20'
							href={'/sign-up'}>
							Sign up
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
