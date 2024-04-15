import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
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
					<Card className='cursor-pointer flex flex-col h-[600px]'>
						<CardHeader>
							<CardTitle>{artist.user?.display_name}</CardTitle>
						</CardHeader>
						<CardContent className='grow'>
							<div className='flex flex-col items-center justify-between h-full'>
								<div>
									<Avatar className='w-[200px] h-[200px] m-5'>
										<AvatarImage
											src={
												artist.user?.profile?.profile_picture?.url ??
												"https://picsum.photos/200/200"
											}
										/>
									</Avatar>
									<div className='text-4xl flex justify-center items-center'>
										{artist.projects_aggregate.aggregate?.count}
										<Image src='/images/collection.png' width={60} height={40} alt='Collections' />
									</div>
								</div>
								<CardDescription>
									{artist.user?.profile?.bio
										? `${artist.user.profile.bio.substring(0, 150)}${
												artist.user.profile.bio.length > 150 ? "..." : ""
										  }`
										: ""}
								</CardDescription>

								{public_address && (
									<Button className='m-3' onClick={handleFollow}>
										{followedArtists.includes(public_address) ? "Following" : "Follow +"}
									</Button>
								)}
							</div>
						</CardContent>
					</Card>
				</Link>
			</div>
		)
	);
};

export { ArtistCard };
