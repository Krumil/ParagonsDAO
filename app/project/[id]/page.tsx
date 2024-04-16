"use client";

import { GET_COLLECTION_DETAILS, GET_COLLECTION_TOKENS } from "@/app/queries";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useParams } from "next/navigation";
import { TokenCard } from "@/components/ui/TokenCard";
import { useEffect, useState, useRef } from "react";
import { Spinner } from "@/components/ui/Spinner";
import { StatsDisplay } from "@/components/ui/StatsDisplay";

interface TotalStats {
	volume: number;
	sales: number;
	average_price: number;
	num_owners: number;
	market_cap: number;
	floor_price: number;
	floor_price_symbol: string;
}

interface IntervalStats {
	interval: string;
	volume: number;
	volume_diff: number;
	volume_change: number;
	sales: number;
	sales_diff: number;
	average_price: number;
}

interface Stats {
	total: TotalStats;
	intervals: IntervalStats[];
}

export default function ProjectPage() {
	const [stats, setStats] = useState<Stats>();
	const [loadingMore, setLoadingMore] = useState(false);
	const [loadingMoreDisabled, setLoadingMoreDisabled] = useState(false);
	const params = useParams<{ id: string }>();
	const observerRef = useRef(null);

	const { data: colletionData } = useSuspenseQuery(GET_COLLECTION_DETAILS, {
		variables: { id: params.id }
	});
	const projectMetadata = colletionData?.projects_metadata?.[0];
	const collectionName = colletionData?.projects_metadata?.[0]?.name;
	const artistName = colletionData?.projects_metadata?.[0]?.artist_name;

	const { data: tokensData, fetchMore } = useSuspenseQuery(GET_COLLECTION_TOKENS, {
		variables: {
			project_id: params.id,
			offset: 0,
			limit: 12
		}
	});

	const tokens = tokensData?.tokens_metadata || [];

	useEffect(() => {
		const fetchData = async () => {
			if (collectionName && artistName) {
				const collectionSlug = collectionName.toLowerCase().replace(/ /g, "-");
				const formattedArtistName = artistName.toLowerCase().replace(/ /g, "-");
				const formattedSlug = `${collectionSlug}-by-${formattedArtistName}`;
				const apiKey = process.env.NEXT_PUBLIC_OPENSEA_API_KEY;
				const url = `https://api.opensea.io/api/v2/collections/${formattedSlug}/stats`;

				if (!apiKey) {
					console.error("API key not found");
					return;
				}

				try {
					const response = await fetch(url, {
						headers: {
							"X-API-KEY": apiKey
						}
					});
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					const data = await response.json();
					setStats(data);
				} catch (error) {
					console.error("Failed to fetch collection stats:", error);
				}
			}
		};
		fetchData();
	}, [collectionName, artistName]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting && !loadingMore) {
					setLoadingMore(true);
					fetchMore({
						variables: {
							limit: 12,
							offset: tokens.length || 0
						},
						updateQuery: (prev, { fetchMoreResult }) => {
							setLoadingMore(false);

							if (!fetchMoreResult || fetchMoreResult.tokens_metadata.length < 12) {
								setLoadingMoreDisabled(true);
							}

							return fetchMoreResult
								? {
										...prev,
										tokens_metadata: [
											...(prev.tokens_metadata || []),
											...fetchMoreResult.tokens_metadata
										]
								  }
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

		return () => observer.disconnect();
	}, [fetchMore, loadingMore, tokensData, tokens.length]);

	return (
		<div className='relative'>
			<div className='rounded-t-3xl p-5 justify-between '>
				<h1 className='text-6xl font-bold mb-6'>{projectMetadata.name}</h1>
				<div className='mt-6 grid grid-cols-12 gap-5'>
					<div className='col-span-12 md:col-span-8'>{projectMetadata.description}</div>
					<div className='col-span-12 md:col-span-4 md:justify-self-end md:align-self-end'>
						{stats && <StatsDisplay stats={stats} />}
					</div>
				</div>
			</div>
			<div className='grid grid-cols-2 gap-5 px-5 md:grid-cols-6'>
				{tokens.map(token => (
					<TokenCard key={token.image?.url} token={token} />
				))}
			</div>
			<div ref={observerRef} className='h-1 w-full'></div>
			<div className='my-4'>{loadingMore && <Spinner />}</div>
		</div>
	);
}
