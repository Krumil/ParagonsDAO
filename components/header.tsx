"use client";

import { ConnectButton } from "@/components/ui/ConnectButton";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

//
export default function Header() {
	const router = useRouter();
	const pathname = usePathname();
	const isHome = pathname === "/";
	return (
		<header className='flex justify-between items-center p-4 h-[74px]'>
			<div className='flex items-center'>
				{!isHome && (
					<div className='cursor-pointer' onClick={() => router.back()}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 mr-2'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M10 19l-7-7m0 0l7-7m-7 7h18'
							/>
						</svg>
					</div>
				)}
				<Link href='/'>
					<div className='text-2xl font-bold hidden md:block'>ParagonsDAO x Krumil</div>
				</Link>
			</div>
			<ConnectButton></ConnectButton>
		</header>
	);
}
