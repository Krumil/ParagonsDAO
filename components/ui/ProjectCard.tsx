"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import type { GetArtistByAddressQuery } from "@/src/__generated__/graphql";
type Project = GetArtistByAddressQuery["artists"][0]["projects"][0];

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
	const background = project.featured_token?.[0].media_url;
	const shortDescription =
		project.description?.substring(0, 150) +
		(project.description && project.description?.length > 150 ? "..." : "");

	return (
		<Link href={`/project/${project.id}`}>
			<Card className='h-[400px] mt-5 cursor-pointer relative overflow-hidden'>
				<Image
					src={background ?? "https://random.imagecdn.app/300/400"}
					alt='project image'
					quality={100}
					fill
					style={{
						objectFit: "cover",
						zIndex: 0
					}}
				/>
				<div
					className='relative z-1 h-[400px] flex flex-col justify-between'
					style={{
						background: "linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)"
					}}>
					<CardHeader>
						<CardTitle>{project.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className='text-white h-full'>{shortDescription}</CardDescription>
					</CardContent>
				</div>
			</Card>
		</Link>
	);
};

export { ProjectCard };
