import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='flex justify-between gap-5 my-10'>
			<Link href='/'>
				<Image src='/icons/logo.svg' alt='logo' width={40} height={40} />
			</Link>

			<ul className='flex flex-row items-center gap-8'>
				<li>
					<form
						action={async () => {
							'use server';

							await 'hello';
						}}
						className='mb-10'>
						<Button>Logout</Button>
					</form>
				</li>
			</ul>
		</header>
	);
};

export default Header;
