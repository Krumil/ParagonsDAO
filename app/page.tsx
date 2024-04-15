import { Metadata } from "next";
import { getClient } from "@/apollo-client";
import { GET_ARTIST_COUNT } from "@/app/queries";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Art Blocks Explorer",
	description: "Surely the best Art Blocks explorer out there!"
};

export default async function Home() {
	const { data } = await getClient().query({ query: GET_ARTIST_COUNT });
	const artistCount = data.artists_aggregate?.aggregate?.count;
	return (
		<div
			className='flex flex-col justify-center items-center w-full h-[calc(100svh-74px)]'
			style={{
				backgroundImage:
					"linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('/images/background.png')",
				backgroundSize: "cover",
				backgroundPosition: "center"
			}}>
			<div className='overflow-hidden'>
				<h1 className='translate-y-full text-4xl font-bold animate-slide-up'>Welcome to Art Blocks Explorer</h1>
			</div>
			<div className='overflow-hidden my-3'>
				<div className='translate-y-full animate-delayed-slide-up text-2xl'>
					With over <span className='font-bold'>{artistCount}</span> artist, this is surely the best Art
					Blocks explorer out there!
				</div>
			</div>
			<Link href='/artists' className={`opacity-0 animate-fade-in ${buttonVariants({ variant: "outline" })}`}>
				Explore Artists
			</Link>
		</div>
	);
}
