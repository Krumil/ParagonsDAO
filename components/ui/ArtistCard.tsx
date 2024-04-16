import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { FC, MouseEvent } from "react";

import type { GetArtistsWithDetailsQuery } from "@/src/__generated__/graphql";
type Artist = GetArtistsWithDetailsQuery["artists"][0];

interface ArtistCardProps {
	artist: Artist;
	followedArtists: string[];
	toggleFollow: (address: string) => void;
}

const ArtistCard: FC<ArtistCardProps> = ({ artist, followedArtists, toggleFollow }) => {
	const public_address = artist.user?.public_address;

	const handleFollow = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		toggleFollow(public_address as string);
	};

	return (
		artist && (
			<div className='w-full'>
				<Link href='/artist/[address]' as={`/artist/${public_address}`}>
					<div className='cursor-pointer flex flex-col h-[400px]  group flex flex-col items-center'>
						<Avatar className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] m-5 transition-all duration-300 ease-in-out group-hover:scale-110'>
							<AvatarImage
								src={artist.user?.profile?.profile_picture?.url ?? "https://picsum.photos/200/200"}
							/>
						</Avatar>
						<div className='text-center'>{artist.user?.display_name}</div>
						<div className='flex flex-col items-center justify-between h-full'>
							{public_address && (
								<Button
									className='m-3 shadow-md hover:shadow-lg hover:bg-foreground hover:text-background transition duration-300 ease-in-out'
									onClick={handleFollow}>
									{followedArtists.includes(public_address) ? "Following" : "Follow +"}
								</Button>
							)}
							{/* <div>
								<div className='text-4xl flex justify-center items-center'>
									{artist.projects_aggregate.aggregate?.count}
									<Image src='/images/collection.png' width={60} height={40} alt='Collections' />
								</div>
							</div> */}
							<div className='grow text-center'>
								{artist.user?.profile?.bio
									? `${artist.user.profile.bio.substring(0, 100)}${
											artist.user.profile.bio.length > 100 ? "..." : ""
									  }`
									: ""}
							</div>
						</div>
					</div>
				</Link>
			</div>
		)
	);
};

export { ArtistCard };
