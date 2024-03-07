'use client';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
	id: string;
}

interface IformInput {
	_id: string;
	reply: string;
}
const Reply = ({ id }: Props) => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const { user, isLoaded } = useUser();

	const [isReplyExpanded, setIsReplyExpanded] = useState(false);
	const [isFormExpanded, setIsFormExpanded] = useState(false);

	const handleReplyToggle = () => {
		setIsReplyExpanded(!isReplyExpanded);
	};

	// get user details from clerk
	useEffect(() => {
		if (isLoaded) {
			setIsSignedIn(user !== null);
		}
	}, [isLoaded, user]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IformInput>();

	const onSubmit: SubmitHandler<IformInput> = async (data) => {
		const userData = {
			image: user?.imageUrl,
			email: user?.emailAddresses[0].emailAddress,
			name: user?.fullName,
		};

		const postData = { ...data, ...userData };

		console.log(postData);
		fetch('/api/replyComment', {
			method: 'POST',
			body: JSON.stringify(postData),
		})
			.then((res) => {
				if (res.ok) {
					console.log(postData);
				} else {
					console.log('not ok');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<div className='flex gap-4 mt-2 mb-2'>
				<button className='a'>View More</button>
				<button className='a' onClick={handleReplyToggle}>
					Reply
				</button>
			</div>
			<div
				className={`form-container mt-5 bg-white dark:bg-purple-500 shadow-lg px-4 rounded ${
					isReplyExpanded ? 'expanded' : ''
				}`}>
				<form className='' onSubmit={handleSubmit(onSubmit)}>
					{/* profile */}
					<div className='flex items-center gap-4'>
						{/* image */}
						<div className='w-[3rem] h-[3rem] rounded-full overflow-hidden'>
							<img
								className='w-full h-full object-cover object-center'
								src={user?.imageUrl}
								alt='profile image'
							/>
						</div>

						{/* users name */}
						<h1>{user?.fullName}</h1>
					</div>

					<input {...register('_id')} type='hidden' name='_id' value={id} />

					{/* input */}
					<div className='py-4'>
						<textarea
							{...register('reply', { required: true })}
							name='reply'
							id='reply'
							className='w-full bg-transparent outline-none border-2 border-dark p-2 rounded-md placeholder:text-slate-100'
							placeholder='Share your Thoughts'></textarea>
					</div>

					<div className='flex items-center gap-3 sm:gap-5 justify-end pb-4'>
						{/* login */}
						<div className='hidden lg:grid'>
							<button
								onClick={handleReplyToggle}
								className='text-sm font-semibold hover:text-dark/70'>
								Cancel
							</button>
						</div>
						{/* Signup */}
						<div className=''>
							<button className='border-2 border-dark rounded-full py-2 px-3 sm:py-2 sm:px-6 hover:text-white hover:bg-dark'>
								Reply
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Reply;
