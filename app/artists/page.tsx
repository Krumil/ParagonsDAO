"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ARTISTS_WITH_DETAILS } from "@/app/queries";
import { SearchInput } from "@/components/ui/SearchInput";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { Spinner } from "@/components/ui/Spinner";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
	initial: { opacity: 0, y: 50 },
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: index * 0.1,
			duration: 0.3
		}
	}),
	exit: { opacity: 0, y: 50 }
};

const Artists = () => {
	const [followedArtists, setFollowedArtists] = useState<string[]>([]);
	const [loadingMore, setLoadingMore] = useState(true);
	const [loadingMoreDisabled, setLoadingMoreDisabled] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const observerRef = useRef(null);

	const { data, fetchMore } = useQuery(GET_ARTISTS_WITH_DETAILS, {
		variables: {
			limit: 12,
			offset: 0,
			search: `%${searchTerm}%`
		}
	});

	const toggleFollow = (address: string) => {
		setFollowedArtists(current =>
			current.includes(address) ? current.filter(addr => addr !== address) : [...current, address]
		);
	};

	useEffect(() => {
		if (data?.artists?.length) {
			setLoadingMore(false);
		}
	}, [data?.artists?.length]);

	useEffect(() => {
		setLoadingMoreDisabled(false);
	}, [searchTerm]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				const first = entries[0];
				if (first.isIntersecting && !loadingMore && data?.artists?.length && !loadingMoreDisabled) {
					setLoadingMore(true);
					fetchMore({
						variables: {
							limit: 12,
							offset: data?.artists?.length,
							search: `%${searchTerm}%`
						},
						updateQuery: (prev, { fetchMoreResult }) => {
							setLoadingMore(false);

							if (!fetchMoreResult || fetchMoreResult.artists.length < 12) {
								setLoadingMoreDisabled(true);
							}

							return fetchMoreResult
								? { ...prev, artists: [...(prev.artists || []), ...fetchMoreResult.artists] }
								: prev;
						}
					});
				}
			},
			{ threshold: 0.1 }
		);

		const currentElement = observerRef.current;
		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [fetchMore, data?.artists?.length, searchTerm, loadingMore, loadingMoreDisabled]);

	return (
		<div className='m-auto min-h-full p-4'>
			<div className='mb-4 grid grid-cols-1 md:grid-cols-2'>
				<h1 className='text-3xl font-bold mb-4 md:mb-0'>Discover Artists</h1>
				<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>
			<AnimatePresence>
				<div className='grid grid-cols-2 md:grid-cols-6 gap-4 pb-4'>
					{data?.artists?.map((artist, index) => (
						<motion.div
							key={artist.user?.public_address}
							variants={cardVariants}
							initial='initial'
							animate='animate'
							custom={index}
							exit='exit'
							layout>
							<ArtistCard
								key={artist.user?.public_address}
								artist={artist}
								followedArtists={followedArtists}
								toggleFollow={toggleFollow}
							/>
						</motion.div>
					))}
				</div>
			</AnimatePresence>
			<div ref={observerRef} className='h-1 w-full'></div>
			<div className='my-4'>{loadingMore && <Spinner />}</div>
		</div>
	);
};

export default Artists;
