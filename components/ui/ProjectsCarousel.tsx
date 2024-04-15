"use client";

import { FC, useState, useEffect } from "react";
import { SearchInput } from "@/components/ui/SearchInput";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";

import type { GetArtistByAddressQuery } from "@/src/__generated__/graphql";
type Projects = GetArtistByAddressQuery["artists"][0]["projects"];

const ProjectsCarousel: FC<{ projects: Projects }> = ({ projects }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProjects, setFilteredProjects] = useState<Projects>(projects);

	useEffect(() => {
		const filteredProjects = projects.filter(
			project =>
				(project.name && project.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
				(project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()))
		);
		setFilteredProjects(filteredProjects);
	}, [searchTerm, projects]);

	return (
		<div className='flex flex-col mx-4'>
			<h2 className='text-3xl font-bold mb-4'>Projects</h2>
			<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Carousel
				opts={{
					align: "start"
				}}
				className='w-full max-w-screen  hidden md:block'>
				<CarouselContent>
					{filteredProjects.map(project => (
						<CarouselItem key={project.id} className='md:basis-1/4 basis-1/1'>
							<div className='p-1'>
								<ProjectCard project={project} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className='md:hidden mb-4'>
				{filteredProjects.map(project => (
					<div key={project.id} className='p-1 '>
						<ProjectCard project={project} />
					</div>
				))}
			</div>
		</div>
	);
};

export { ProjectsCarousel };
