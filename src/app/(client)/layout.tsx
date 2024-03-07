import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Provider from '../utils/Provider';
import { Footer, Navbar } from '@/components';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: " Qi's Blog",
	description: 'Bits & Bytes from qi_beekay',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className='dark:selection:bg-purple-500 bg-light dark:bg-[#121212]'>
					<Provider>
						<Navbar />
						{children}
						<Footer />
					</Provider>
				</body>
			</html>
		</ClerkProvider>
	);
}
