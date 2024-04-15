"use client";

import { FC } from "react";
import { Card, CardContent, CardFooter, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

import type { GetArtistByAddressQuery } from "@/src/__generated__/graphql";
type Artist = GetArtistByAddressQuery["artists"][0]["user"];

const ProfileSidebar: FC<{ artist: Artist; className?: string }> = ({ artist, className }) => {
	const bio =
		artist?.profile?.bio && artist?.profile?.bio?.length > 400
			? artist?.profile?.bio?.substring(0, 400) + "..."
			: artist?.profile?.bio;
	return (
		artist && (
			<Card className={`w-[300px] h-[700px] flex flex-col text-center ${className}`}>
				<CardHeader className='flex flex-col items-center justify-between'>
					<Avatar className='w-[200px] h-[200px] m-3'>
						<AvatarImage
							src={
								artist.profile?.profile_picture?.url ??
								"https://api.dicebear.com/8.x/notionists-neutral/svg"
							}
						/>
					</Avatar>
				</CardHeader>
				<CardContent className='flex flex-col items-center grow'>
					<CardTitle>{artist.display_name}</CardTitle>
					<div className='mt-2 mb-4'>
						{artist.public_address.slice(0, 9) + "..." + artist.public_address.slice(-6)}
					</div>
					<CardDescription>{bio}</CardDescription>
				</CardContent>
				<CardFooter className='flex justify-center'>
					{artist.profile?.twitter_username && (
						<Button
							className='m-3'
							onClick={() => {
								window.open(`https://twitter.com/${artist.profile?.twitter_username}`, "_blank");
							}}>
							<svg
								className='fill-white'
								height='23'
								viewBox='0 0 1200 1227'
								width='23'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z' />
							</svg>
						</Button>
					)}
				</CardFooter>
			</Card>
		)
	);
};

export { ProfileSidebar };
