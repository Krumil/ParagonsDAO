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
		<div className='flex flex-col grow'>
			<h2 className='text-3xl font-bold mb-4'>Projects</h2>
			<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Carousel
				opts={{
					align: "start"
				}}
				className='w-full max-w-screen-xl mx-10'>
				<CarouselContent>
					{filteredProjects.map((project, index) => (
						<CarouselItem key={project.id} className='md:basis-1/2 lg:basis-1/4'>
							<div className='p-1'>
								<ProjectCard project={project} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				{filteredProjects.length > 0 && <CarouselPrevious />}
				{filteredProjects.length > 0 && <CarouselNext />}
			</Carousel>
		</div>
	);
};

export { ProjectsCarousel };
