"use client";

import { GET_ARTIST_BY_ADDRESS } from "@/app/queries";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useParams } from "next/navigation";
import { ProfileSidebar } from "@/components/ui/ProfileSidebar";
import { ProjectsCarousel } from "@/components/ui/ProjectsCarousel";

import Image from "next/image";

export default function ArtistPage() {
	const params = useParams<{ address: string }>();
	const { data } = useSuspenseQuery(GET_ARTIST_BY_ADDRESS, {
		variables: {
			address: params.address
		}
	});

	const artist = data?.artists[0].user;
	const profile_picture = artist?.profile?.profile_picture?.url ?? "https://random.imagecdn.app/1024/300";
	const projects = data?.artists[0].projects;

	return (
		<div className='relative'>
			<div className='absolute top-0 h-30v w-full overflow-hidden rounded-t-3xl'>
				<Image src={profile_picture} alt='' fill style={{ objectFit: "cover" }} />
			</div>
			<div className='relative z-10 flex justify-center md:justify-start'>
				<div className='hidden md:block'>
					{artist && <ProfileSidebar artist={artist} className='mt-10 ml-10' />}
				</div>
				<div className='mt-[300px] md:mx-10 grow'>{projects && <ProjectsCarousel projects={projects} />}</div>
			</div>
		</div>
	);
}
