"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { FC } from "react";
import Image from "next/image";

import type { GetCollectionTokensQuery } from "@/src/__generated__/graphql";
type Token = GetCollectionTokensQuery["tokens_metadata"][0];

const TokenCard: FC<{ token: Token }> = ({ token }) => {
	const imageUrl = token.gif?.url || token.image?.url; // Prefer GIF, fallback to static image

	return (
		<Card className='h-[250px] md:h-[400px] mt-5 relative overflow-hidden'>
			<div className='relative z-1 h-full flex flex-col justify-between'>
				<CardContent>
					{imageUrl && (
						<Image
							src={imageUrl}
							quality={100}
							alt={token.id}
							fill
							sizes='(max-width: 768px) 50vw, 16vw'
							style={{
								objectFit: "cover"
							}}
						/>
					)}
				</CardContent>
			</div>
		</Card>
	);
};

export { TokenCard };
