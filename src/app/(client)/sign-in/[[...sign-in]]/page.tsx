import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
	return (
		<div className='grid w-full items-center justify-center py-20 bg-dark/20 dark:bg-none'>
			<SignIn
				appearance={{
					elements: {
						formButtonPrimary: 'bg-purple-700 hover:bg-purple-800',
					},
				}}
			/>
		</div>
	);
}
