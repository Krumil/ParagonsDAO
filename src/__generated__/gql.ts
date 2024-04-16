/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery GetArtistCount {\n\t\tartists_aggregate {\n\t\t\taggregate {\n\t\t\t\tcount\n\t\t\t}\n\t\t}\n\t}\n": types.GetArtistCountDocument,
    "\n\tquery GetArtistsWithDetails($limit: Int, $offset: Int, $search: String) {\n\t\tartists(\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\twhere: { user: { display_name: { _ilike: $search } } }\n\t\t\torder_by: { user: { display_name: asc } }\n\t\t) {\n\t\t\tprojects_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tdisplay_name\n\t\t\t\tpublic_address\n\t\t\t\tprofile {\n\t\t\t\t\tbio\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tprofile_picture {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetArtistsWithDetailsDocument,
    "\n\tquery GetArtistByAddress($address: String!) {\n\t\tartists (\n\t\t\twhere: { public_address: { _eq: $address } }\n\t\t) {\n\t\t\tprojects_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tdisplay_name\n\t\t\t\tpublic_address\n\t\t\t\tprofile {\n\t\t\t\t\tbio\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tprofile_picture {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\ttwitter_username\n\t\t\t\t}\n\t\t\t}\n\t\t\tprojects {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tfeatured_token {\n\t\t\t\t\tmedia_url\n\t\t\t\t}\n\t\t\t\tartist_name\n\t\t\t\tcontract_address\n\t\t\t}\t\t\t\n\t\t}\n\t}\n": types.GetArtistByAddressDocument,
    "\n\tquery GetCollectionDetails($id: String!) {\n\t\tprojects_metadata(where: { id: { _eq: $id } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tfeatured_token {\n\t\t\t\tmedia_url\n\t\t\t}\n\t\t\tartist_name\n\t\t\tcontract_address\n\t\t}\n\t}\n": types.GetCollectionDetailsDocument,
    "\n\tquery GetCollectionTokens($limit: Int!, $offset: Int!, $project_id: String!) {\n\t\ttokens_metadata(\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\twhere: {project_id: {_eq: $project_id}}\n\t\t) {\n\t\t\tid\n\t\t\timage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tgif {\n\t\t\t\turl\n\t\t\t}\t\t\t\n\t\t}\n\t}\n": types.GetCollectionTokensDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetArtistCount {\n\t\tartists_aggregate {\n\t\t\taggregate {\n\t\t\t\tcount\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetArtistCount {\n\t\tartists_aggregate {\n\t\t\taggregate {\n\t\t\t\tcount\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetArtistsWithDetails($limit: Int, $offset: Int, $search: String) {\n\t\tartists(\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\twhere: { user: { display_name: { _ilike: $search } } }\n\t\t\torder_by: { user: { display_name: asc } }\n\t\t) {\n\t\t\tprojects_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tdisplay_name\n\t\t\t\tpublic_address\n\t\t\t\tprofile {\n\t\t\t\t\tbio\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tprofile_picture {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetArtistsWithDetails($limit: Int, $offset: Int, $search: String) {\n\t\tartists(\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\twhere: { user: { display_name: { _ilike: $search } } }\n\t\t\torder_by: { user: { display_name: asc } }\n\t\t) {\n\t\t\tprojects_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tdisplay_name\n\t\t\t\tpublic_address\n\t\t\t\tprofile {\n\t\t\t\t\tbio\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tprofile_picture {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetArtistByAddress($address: String!) {\n\t\tartists (\n\t\t\twhere: { public_address: { _eq: $address } }\n\t\t) {\n\t\t\tprojects_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tdisplay_name\n\t\t\t\tpublic_address\n\t\t\t\tprofile {\n\t\t\t\t\tbio\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tprofile_picture {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\ttwitter_username\n\t\t\t\t}\n\t\t\t}\n\t\t\tprojects {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tfeatured_token {\n\t\t\t\t\tmedia_url\n\t\t\t\t}\n\t\t\t\tartist_name\n\t\t\t\tcontract_address\n\t\t\t}\t\t\t\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetArtistByAddress($address: String!) {\n\t\tartists (\n\t\t\twhere: { public_address: { _eq: $address } }\n\t\t) {\n\t\t\tprojects_aggregate {\n\t\t\t\taggregate {\n\t\t\t\t\tcount\n\t\t\t\t}\n\t\t\t}\n\t\t\tuser {\n\t\t\t\tdisplay_name\n\t\t\t\tpublic_address\n\t\t\t\tprofile {\n\t\t\t\t\tbio\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tprofile_picture {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\ttwitter_username\n\t\t\t\t}\n\t\t\t}\n\t\t\tprojects {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tdescription\n\t\t\t\tfeatured_token {\n\t\t\t\t\tmedia_url\n\t\t\t\t}\n\t\t\t\tartist_name\n\t\t\t\tcontract_address\n\t\t\t}\t\t\t\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetCollectionDetails($id: String!) {\n\t\tprojects_metadata(where: { id: { _eq: $id } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tfeatured_token {\n\t\t\t\tmedia_url\n\t\t\t}\n\t\t\tartist_name\n\t\t\tcontract_address\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetCollectionDetails($id: String!) {\n\t\tprojects_metadata(where: { id: { _eq: $id } }) {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tfeatured_token {\n\t\t\t\tmedia_url\n\t\t\t}\n\t\t\tartist_name\n\t\t\tcontract_address\n\t\t}\n\t}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetCollectionTokens($limit: Int!, $offset: Int!, $project_id: String!) {\n\t\ttokens_metadata(\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\twhere: {project_id: {_eq: $project_id}}\n\t\t) {\n\t\t\tid\n\t\t\timage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tgif {\n\t\t\t\turl\n\t\t\t}\t\t\t\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetCollectionTokens($limit: Int!, $offset: Int!, $project_id: String!) {\n\t\ttokens_metadata(\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\twhere: {project_id: {_eq: $project_id}}\n\t\t) {\n\t\t\tid\n\t\t\timage {\n\t\t\t\turl\n\t\t\t}\n\t\t\tgif {\n\t\t\t\turl\n\t\t\t}\t\t\t\n\t\t}\n\t}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;