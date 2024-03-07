'use client';
import { Post } from '@/app/utils/Interface';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Reply } from '..';
// import { formatDistance, subDays } from 'date-fns';
// import { formatDistanceToNow } from 'date-fns';

interface IformInput {
	_id: string;
	comment: string;
}

interface Props {
	post: Post;
}

const CommentPage = ({ post }: Props) => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	const { user, isLoaded } = useUser();

	const [isFormExpanded, setIsFormExpanded] = useState(false);

	const handleFormToggle = () => {
		setIsFormExpanded(!isFormExpanded);
	};

	// get user details from clerk
	useEffect(() => {
		if (isLoaded) {
			setIsSignedIn(user !== null);
		}
	}, [isLoaded, user]);

	// handle form submission
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
		fetch('/api/createComment', {
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
		<div className='bg-white dark:bg-[#141414] py-20' id='comments-section'>
			<div className='w-[95%] sm:w-[80%] ms:w-[70%] mx-auto'>
				{/* discuss */}
				<div>
					<p>Discussions (43)</p>
					<div className='w-full h-1 bg-black dark:bg-purple-500 my-2'> </div>
				</div>

				{/* comment form */}
				<div className='mt-10 bg-white dark:bg-purple-500 shadow-lg rounded border-dark px-4 '>
					{/* Show/hide form button */}
					<p className='py-4 cursor-pointer' onClick={handleFormToggle}>
						Share your Thoughts
					</p>

					{/* Form */}
					<div className={`form-container ${isFormExpanded ? 'expanded' : ''}`}>
						<form onSubmit={handleSubmit(onSubmit)} className=''>
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

							<input
								{...register('_id')}
								type='hidden'
								name='_id'
								value={post?._id}
							/>

							{/* input */}
							<div className='py-4'>
								<textarea
									{...register('comment', { required: true })}
									name='comment'
									id='comment'
									className='w-full bg-transparent outline-none border-2 border-dark p-2 rounded-md placeholder:text-slate-100'
									placeholder='Share your Thoughts'></textarea>
							</div>

							{/* errors will return when field validation fails */}
							<div>
								{errors.comment && (
									<span className='text-red-500'>
										- The Comment Field is required
									</span>
								)}
							</div>

							<div className='flex items-center gap-3 sm:gap-5 justify-end pb-4'>
								{/* cancel */}
								<div className='hidden lg:grid'>
									<button
										onClick={handleFormToggle}
										className='text-sm font-semibold hover:text-dark/70'>
										Cancel
									</button>
								</div>
								{/* Posts */}
								<div className=''>
									<button className='border-2 border-dark rounded-full py-2 px-3 sm:py-2 sm:px-6 hover:text-white hover:bg-dark'>
										Respond
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>

				{/* comments and replies */}
				{post?.comments.map((comment) => (
					<div className='' key={comment._id}>
						{/* comment */}
						<div className='mt-10'>
							{/* profile */}
							<div className='flex items-center gap-4'>
								{/* image */}
								<div className='w-[3rem] h-[3rem] rounded-full overflow-hidden'>
									<img
										className='w-full h-full object-cover object-center'
										src={comment.image}
										alt=''
									/>
								</div>

								<div>
									<p className='font-semibold'>{comment.name}</p>
									<p>
										{moment(comment._createdAt).fromNow().toLowerCase()}
										{/* {formatDistanceToNow(new Date(comment._createdAt), {
											addSuffix: true,
										})} */}
									</p>
								</div>
							</div>

							{/* message */}
							<div>
								<p className='text-sm sm:text-base mt-4 font-medium'>
									{comment.comment}
								</p>

								<Reply id={comment?._id} />
								{/* reply button */}
							</div>
						</div>

						{/* reply comment */}
						<div className='w-[90%] ml-auto mt-4'>
							<p>Replies (20)</p>
							{/* profile */}
							<div className='flex items-center gap-4 mt-3'>
								{/* image */}
								<div className='w-[3rem] h-[3rem] rounded-full overflow-hidden'>
									<img
										className='w-full h-full object-cover object-center'
										src='/bg.jpg'
										alt=''
									/>
								</div>

								<div>
									<p className='font-semibold'>Evans qibeekay</p>
									<p>4 days ago</p>
								</div>
							</div>

							{/* message */}
							<div className=''>
								<p className='text-sm sm:text-base mt-4 font-medium'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Fugit iste laudantium, at ut vitae autem aut. Ipsum
									exercitationem dicta fuga quibusdam totam iusto deleniti.
									Nobis illo, excepturi tempora, ab nesciunt architecto totam
									ducimus qui cum aliquam aperiam sapiente hic est.
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CommentPage;
