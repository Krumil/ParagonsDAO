import { gql } from "@/src/__generated__/gql";

export const GET_ARTIST_COUNT = gql(`
	query GetArtistCount {
		artists_aggregate {
			aggregate {
				count
			}
		}
	}
`);

export const GET_ARTISTS_WITH_DETAILS = gql(`
	query GetArtistsWithDetails($limit: Int, $offset: Int, $search: String) {
		artists(
			limit: $limit
			offset: $offset
			where: { user: { display_name: { _ilike: $search } } }
			order_by: { user: { display_name: asc } }
		) {
			projects_aggregate {
				aggregate {
					count
				}
			}
			user {
				display_name
				public_address
				profile {
					bio
					id
					name
					profile_picture {
						url
					}
				}
			}
		}
	}
`);

export const GET_ARTIST_BY_ADDRESS = gql(`
	query GetArtistByAddress($address: String!) {
		artists (
			where: { public_address: { _eq: $address } }
		) {
			user {
				display_name
				public_address
				profile {
					bio
					id
					name
					profile_picture {
						url
					}
					twitter_username
				}
			}
			projects {
				id
				name
				description
				featured_token {
					media_url
				}
				artist_name
				contract_address
			}			
		}
	}
`);

export const GET_COLLECTION_DETAILS = gql(`
	query GetCollectionDetails($id: String!) {
		projects_metadata(where: { id: { _eq: $id } }) {
			id
			name
			description
			featured_token {
				media_url
			}
			artist_name
			contract_address
		}
	}
`);

export const GET_COLLECTION_TOKENS = gql(`
	query GetCollectionTokens($limit: Int!, $offset: Int!, $project_id: String!) {
		tokens_metadata(
			limit: $limit
			offset: $offset
			where: {project_id: {_eq: $project_id}}
		) {
			id
			image {
				url
			}
			gif {
				url
			}			
		}
	}
`);
