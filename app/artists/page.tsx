"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { GET_ARTISTS_WITH_DETAILS } from "@/app/queries";
import { SearchInput } from "@/components/ui/SearchInput";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { Spinner } from "@/components/ui/Spinner";

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
		<div className='max-w-7xl m-auto min-h-full p-4 md:p-0'>
			<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<div className='grid grid-cols-1 md:grid-cols-4 gap-3 py-2'>
				{data?.artists?.map(artist => (
					<ArtistCard
						key={artist.user?.public_address}
						artist={artist}
						followedArtists={followedArtists}
						toggleFollow={toggleFollow}
					/>
				))}
			</div>
			<div ref={observerRef} className='h-1 w-full'></div>
			<div className='my-4'>{loadingMore && <Spinner />}</div>
		</div>
	);
};

export default Artists;
