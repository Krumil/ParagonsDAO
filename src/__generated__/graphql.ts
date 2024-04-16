/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  bigint: { input: any; output: any; }
  float8: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  jsonpath: { input: any; output: any; }
  numeric: { input: any; output: any; }
  seed_float: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  author?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Enum_Article_Category>;
  content?: Maybe<Scalars['String']['output']>;
  coverPhoto?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  embedURL?: Maybe<Scalars['String']['output']>;
  extraInfo?: Maybe<Scalars['String']['output']>;
  homePageLocation?: Maybe<Enum_Article_Homepagelocation>;
  originallyPublished?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seoMetaDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  tagline?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<StringFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  embedURL?: InputMaybe<StringFilterInput>;
  extraInfo?: InputMaybe<StringFilterInput>;
  homePageLocation?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  originallyPublished?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seoMetaDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tagline?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArtistEditorialPage = {
  __typename?: 'ArtistEditorialPage';
  ExhibitionsSection?: Maybe<ComponentArtistEditorialPageExhibitions>;
  FeaturedWorkSection?: Maybe<ComponentArtistEditorialPageFeaturedWork>;
  PressSection?: Maybe<ComponentArtistEditorialPagePress>;
  ReleasesSection?: Maybe<ComponentArtistEditorialPageProjectsCreated>;
  SpectrumArticlesSection?: Maybe<ComponentArtistEditorialPageSpectrumArticles>;
  artistName: Scalars['String']['output'];
  avatar?: Maybe<UploadFileEntityResponse>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  headerImage?: Maybe<UploadFileEntityResponse>;
  instagram?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seoMetaDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userProfileAddress?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ArtistEditorialPageEntity = {
  __typename?: 'ArtistEditorialPageEntity';
  attributes?: Maybe<ArtistEditorialPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArtistEditorialPageEntityResponse = {
  __typename?: 'ArtistEditorialPageEntityResponse';
  data?: Maybe<ArtistEditorialPageEntity>;
};

export type ArtistEditorialPageEntityResponseCollection = {
  __typename?: 'ArtistEditorialPageEntityResponseCollection';
  data: Array<ArtistEditorialPageEntity>;
  meta: ResponseCollectionMeta;
};

export type ArtistEditorialPageFiltersInput = {
  ExhibitionsSection?: InputMaybe<ComponentArtistEditorialPageExhibitionsFiltersInput>;
  FeaturedWorkSection?: InputMaybe<ComponentArtistEditorialPageFeaturedWorkFiltersInput>;
  PressSection?: InputMaybe<ComponentArtistEditorialPagePressFiltersInput>;
  ReleasesSection?: InputMaybe<ComponentArtistEditorialPageProjectsCreatedFiltersInput>;
  SpectrumArticlesSection?: InputMaybe<ComponentArtistEditorialPageSpectrumArticlesFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ArtistEditorialPageFiltersInput>>>;
  artistName?: InputMaybe<StringFilterInput>;
  bio?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  instagram?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ArtistEditorialPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArtistEditorialPageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seoMetaDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  twitter?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  userProfileAddress?: InputMaybe<StringFilterInput>;
  website?: InputMaybe<StringFilterInput>;
};

export type ArtistEditorialPageFiltersInput_Remote_Rel_Projects_MetadataartistPage = {
  ExhibitionsSection?: InputMaybe<ComponentArtistEditorialPageExhibitionsFiltersInput>;
  FeaturedWorkSection?: InputMaybe<ComponentArtistEditorialPageFeaturedWorkFiltersInput>;
  PressSection?: InputMaybe<ComponentArtistEditorialPagePressFiltersInput>;
  ReleasesSection?: InputMaybe<ComponentArtistEditorialPageProjectsCreatedFiltersInput_Remote_Rel_Projects_MetadataartistPage>;
  SpectrumArticlesSection?: InputMaybe<ComponentArtistEditorialPageSpectrumArticlesFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ArtistEditorialPageFiltersInput>>>;
  artistName?: InputMaybe<StringFilterInput>;
  bio?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  instagram?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ArtistEditorialPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArtistEditorialPageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seoMetaDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  twitter?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  userProfileAddress?: InputMaybe<StringFilterInput>;
  website?: InputMaybe<StringFilterInput>;
};

export type AuthMessageOutput = {
  __typename?: 'AuthMessageOutput';
  authMessage: Scalars['String']['output'];
};

export type AuthenticateInput = {
  contracts?: InputMaybe<Array<Scalars['String']['input']>>;
  message: Scalars['String']['input'];
  mixpanelId?: InputMaybe<Scalars['String']['input']>;
  publicAddress: Scalars['String']['input'];
  signature: Scalars['String']['input'];
};

export type AuthenticateOutput = {
  __typename?: 'AuthenticateOutput';
  expiration: Scalars['Int']['output'];
  jwt: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type ComponentArtistEditorialPageExhibitions = {
  __typename?: 'ComponentArtistEditorialPageExhibitions';
  exhibitionItem?: Maybe<Array<Maybe<ComponentGalleryGridItemGalleryGridItem>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArtistEditorialPageExhibitionsExhibitionItemArgs = {
  filters?: InputMaybe<ComponentGalleryGridItemGalleryGridItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArtistEditorialPageExhibitionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageExhibitionsFiltersInput>>>;
  exhibitionItem?: InputMaybe<ComponentGalleryGridItemGalleryGridItemFiltersInput>;
  not?: InputMaybe<ComponentArtistEditorialPageExhibitionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageExhibitionsFiltersInput>>>;
};

export type ComponentArtistEditorialPageFeaturedWork = {
  __typename?: 'ComponentArtistEditorialPageFeaturedWork';
  FeaturedWorkItem?: Maybe<Array<Maybe<ComponentImageWithCaptionImageWithCaption>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArtistEditorialPageFeaturedWorkFeaturedWorkItemArgs = {
  filters?: InputMaybe<ComponentImageWithCaptionImageWithCaptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArtistEditorialPageFeaturedWorkFiltersInput = {
  FeaturedWorkItem?: InputMaybe<ComponentImageWithCaptionImageWithCaptionFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageFeaturedWorkFiltersInput>>>;
  not?: InputMaybe<ComponentArtistEditorialPageFeaturedWorkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageFeaturedWorkFiltersInput>>>;
};

export type ComponentArtistEditorialPagePress = {
  __typename?: 'ComponentArtistEditorialPagePress';
  PressItem?: Maybe<Array<Maybe<ComponentPressItemPressItem>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArtistEditorialPagePressPressItemArgs = {
  filters?: InputMaybe<ComponentPressItemPressItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArtistEditorialPagePressFiltersInput = {
  PressItem?: InputMaybe<ComponentPressItemPressItemFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPagePressFiltersInput>>>;
  not?: InputMaybe<ComponentArtistEditorialPagePressFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPagePressFiltersInput>>>;
};

export type ComponentArtistEditorialPageProjectsCreated = {
  __typename?: 'ComponentArtistEditorialPageProjectsCreated';
  id: Scalars['ID']['output'];
  projectMetadata?: Maybe<Array<Maybe<ComponentProjectMetadataProjectMetadata>>>;
};


export type ComponentArtistEditorialPageProjectsCreatedProjectMetadataArgs = {
  filters?: InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArtistEditorialPageProjectsCreatedFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageProjectsCreatedFiltersInput>>>;
  not?: InputMaybe<ComponentArtistEditorialPageProjectsCreatedFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageProjectsCreatedFiltersInput>>>;
  projectMetadata?: InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>;
};

export type ComponentArtistEditorialPageProjectsCreatedFiltersInput_Remote_Rel_Projects_MetadataartistPage = {
  and?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageProjectsCreatedFiltersInput>>>;
  not?: InputMaybe<ComponentArtistEditorialPageProjectsCreatedFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageProjectsCreatedFiltersInput>>>;
  projectMetadata?: InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput_Remote_Rel_Projects_MetadataartistPage>;
};

export type ComponentArtistEditorialPageSpectrumArticles = {
  __typename?: 'ComponentArtistEditorialPageSpectrumArticles';
  SpectrumArticle?: Maybe<Array<Maybe<ComponentSpectrumArticleSpectrumArticle>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArtistEditorialPageSpectrumArticlesSpectrumArticleArgs = {
  filters?: InputMaybe<ComponentSpectrumArticleSpectrumArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArtistEditorialPageSpectrumArticlesFiltersInput = {
  SpectrumArticle?: InputMaybe<ComponentSpectrumArticleSpectrumArticleFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageSpectrumArticlesFiltersInput>>>;
  not?: InputMaybe<ComponentArtistEditorialPageSpectrumArticlesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArtistEditorialPageSpectrumArticlesFiltersInput>>>;
};

export type ComponentGalleryGridItemGalleryGridItem = {
  __typename?: 'ComponentGalleryGridItemGalleryGridItem';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentGalleryGridItemGalleryGridItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGalleryGridItemGalleryGridItemFiltersInput>>>;
  not?: InputMaybe<ComponentGalleryGridItemGalleryGridItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGalleryGridItemGalleryGridItemFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentImageWithCaptionImageWithCaption = {
  __typename?: 'ComponentImageWithCaptionImageWithCaption';
  caption?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentImageWithCaptionImageWithCaptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentImageWithCaptionImageWithCaptionFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentImageWithCaptionImageWithCaptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentImageWithCaptionImageWithCaptionFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentPressItemPressItem = {
  __typename?: 'ComponentPressItemPressItem';
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  publication?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentPressItemPressItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPressItemPressItemFiltersInput>>>;
  date?: InputMaybe<DateFilterInput>;
  not?: InputMaybe<ComponentPressItemPressItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPressItemPressItemFiltersInput>>>;
  publication?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentProjectMetadataProjectMetadata = {
  __typename?: 'ComponentProjectMetadataProjectMetadata';
  Project?: Maybe<Projects_Metadata>;
  id: Scalars['ID']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
};

export type ComponentProjectMetadataProjectMetadataFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>>>;
  not?: InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>>>;
  projectId?: InputMaybe<StringFilterInput>;
};

export type ComponentProjectMetadataProjectMetadataFiltersInput_Remote_Rel_Projects_MetadataartistPage = {
  and?: InputMaybe<Array<InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>>>;
  not?: InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>>>;
  projectId?: InputMaybe<StringFilterInput_Remote_Rel_Projects_MetadataartistPage>;
};

export type ComponentReleaseInfoReleaseInfo = {
  __typename?: 'ComponentReleaseInfoReleaseInfo';
  AuctionEndTime?: Maybe<Scalars['DateTime']['output']>;
  AuctionStartTime: Scalars['DateTime']['output'];
  CustomAuctionName?: Maybe<Scalars['String']['output']>;
  CustomDescription?: Maybe<Scalars['String']['output']>;
  EndPrice?: Maybe<Scalars['String']['output']>;
  MinterMaxInvocations?: Maybe<Scalars['Int']['output']>;
  MinterType: MinterInfoEntityResponse;
  StartPrice?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentReleaseInfoReleaseInfoFiltersInput = {
  AuctionEndTime?: InputMaybe<DateTimeFilterInput>;
  AuctionStartTime?: InputMaybe<DateTimeFilterInput>;
  CustomAuctionName?: InputMaybe<StringFilterInput>;
  CustomDescription?: InputMaybe<StringFilterInput>;
  EndPrice?: InputMaybe<StringFilterInput>;
  MinterMaxInvocations?: InputMaybe<IntFilterInput>;
  MinterType?: InputMaybe<MinterInfoFiltersInput>;
  StartPrice?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentReleaseInfoReleaseInfoFiltersInput>>>;
  not?: InputMaybe<ComponentReleaseInfoReleaseInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentReleaseInfoReleaseInfoFiltersInput>>>;
};

export type ComponentSpectrumArticleSpectrumArticle = {
  __typename?: 'ComponentSpectrumArticleSpectrumArticle';
  id: Scalars['ID']['output'];
  previewImage?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSpectrumArticleSpectrumArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSpectrumArticleSpectrumArticleFiltersInput>>>;
  not?: InputMaybe<ComponentSpectrumArticleSpectrumArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSpectrumArticleSpectrumArticleFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Article_Category {
  Education = 'EDUCATION',
  Interview = 'INTERVIEW',
  News = 'NEWS',
  Podcast = 'PODCAST',
  Video = 'VIDEO'
}

export enum Enum_Article_Homepagelocation {
  Bottom = 'bottom',
  Middle = 'middle',
  None = 'none',
  Top = 'top'
}

export type GenericMorph = Article | ArtistEditorialPage | ComponentArtistEditorialPageExhibitions | ComponentArtistEditorialPageFeaturedWork | ComponentArtistEditorialPagePress | ComponentArtistEditorialPageProjectsCreated | ComponentArtistEditorialPageSpectrumArticles | ComponentGalleryGridItemGalleryGridItem | ComponentImageWithCaptionImageWithCaption | ComponentPressItemPressItem | ComponentProjectMetadataProjectMetadata | ComponentReleaseInfoReleaseInfo | ComponentSpectrumArticleSpectrumArticle | MinterInfo | ProjectPage;

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type MinterInfo = {
  __typename?: 'MinterInfo';
  Description: Scalars['String']['output'];
  Name: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MinterInfoEntity = {
  __typename?: 'MinterInfoEntity';
  attributes?: Maybe<MinterInfo>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MinterInfoEntityResponse = {
  __typename?: 'MinterInfoEntityResponse';
  data?: Maybe<MinterInfoEntity>;
};

export type MinterInfoEntityResponseCollection = {
  __typename?: 'MinterInfoEntityResponseCollection';
  data: Array<MinterInfoEntity>;
  meta: ResponseCollectionMeta;
};

export type MinterInfoFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MinterInfoFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MinterInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MinterInfoFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OpenseaCollectionData = {
  __typename?: 'OpenseaCollectionData';
  projectId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectPage = {
  __typename?: 'ProjectPage';
  AuctionInfoRow?: Maybe<Array<Maybe<ComponentReleaseInfoReleaseInfo>>>;
  Quote?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  project: ComponentProjectMetadataProjectMetadata;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProjectPageAuctionInfoRowArgs = {
  filters?: InputMaybe<ComponentReleaseInfoReleaseInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectPageEntity = {
  __typename?: 'ProjectPageEntity';
  attributes?: Maybe<ProjectPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectPageEntityResponse = {
  __typename?: 'ProjectPageEntityResponse';
  data?: Maybe<ProjectPageEntity>;
};

export type ProjectPageEntityResponseCollection = {
  __typename?: 'ProjectPageEntityResponseCollection';
  data: Array<ProjectPageEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectPageFiltersInput = {
  AuctionInfoRow?: InputMaybe<ComponentReleaseInfoReleaseInfoFiltersInput>;
  Quote?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProjectPageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProjectPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectPageFiltersInput>>>;
  project?: InputMaybe<ComponentProjectMetadataProjectMetadataFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilterInput_Remote_Rel_Projects_MetadataartistPage = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

/** All Art Blocks artists. */
export type Artists = {
  __typename?: 'artists';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  is_ab_staff?: Maybe<Scalars['Boolean']['output']>;
  is_curator?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  most_recent_hosted_project?: Maybe<Projects_Metadata>;
  most_recent_hosted_project_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  most_recent_project?: Maybe<Projects_Metadata>;
  most_recent_project_id?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  projects: Array<Projects_Metadata>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Metadata_Aggregate;
  public_address?: Maybe<Scalars['String']['output']>;
  tos_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  viewed_warning_banner?: Maybe<Scalars['Boolean']['output']>;
};


/** All Art Blocks artists. */
export type ArtistsProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


/** All Art Blocks artists. */
export type ArtistsProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};

/** aggregated selection of "artists" */
export type Artists_Aggregate = {
  __typename?: 'artists_aggregate';
  aggregate?: Maybe<Artists_Aggregate_Fields>;
  nodes: Array<Artists>;
};

/** aggregate fields of "artists" */
export type Artists_Aggregate_Fields = {
  __typename?: 'artists_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Artists_Max_Fields>;
  min?: Maybe<Artists_Min_Fields>;
};


/** aggregate fields of "artists" */
export type Artists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Artists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "artists". All fields are combined with a logical 'AND'. */
export type Artists_Bool_Exp = {
  _and?: InputMaybe<Array<Artists_Bool_Exp>>;
  _not?: InputMaybe<Artists_Bool_Exp>;
  _or?: InputMaybe<Array<Artists_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  is_ab_staff?: InputMaybe<Boolean_Comparison_Exp>;
  is_curator?: InputMaybe<Boolean_Comparison_Exp>;
  most_recent_hosted_project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  most_recent_hosted_project_id?: InputMaybe<String_Comparison_Exp>;
  most_recent_project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  most_recent_project_id?: InputMaybe<String_Comparison_Exp>;
  projects?: InputMaybe<Projects_Metadata_Bool_Exp>;
  projects_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Bool_Exp>;
  public_address?: InputMaybe<String_Comparison_Exp>;
  tos_accepted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  viewed_warning_banner?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Artists_Max_Fields = {
  __typename?: 'artists_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  most_recent_hosted_project_id?: Maybe<Scalars['String']['output']>;
  most_recent_project_id?: Maybe<Scalars['String']['output']>;
  public_address?: Maybe<Scalars['String']['output']>;
  tos_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Artists_Min_Fields = {
  __typename?: 'artists_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  most_recent_hosted_project_id?: Maybe<Scalars['String']['output']>;
  most_recent_project_id?: Maybe<Scalars['String']['output']>;
  public_address?: Maybe<Scalars['String']['output']>;
  tos_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "artists". */
export type Artists_Order_By = {
  created_at?: InputMaybe<Order_By>;
  is_ab_staff?: InputMaybe<Order_By>;
  is_curator?: InputMaybe<Order_By>;
  most_recent_hosted_project?: InputMaybe<Projects_Metadata_Order_By>;
  most_recent_hosted_project_id?: InputMaybe<Order_By>;
  most_recent_project?: InputMaybe<Projects_Metadata_Order_By>;
  most_recent_project_id?: InputMaybe<Order_By>;
  projects_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Order_By>;
  public_address?: InputMaybe<Order_By>;
  tos_accepted_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  viewed_warning_banner?: InputMaybe<Order_By>;
};

/** select columns of table "artists" */
export enum Artists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IsAbStaff = 'is_ab_staff',
  /** column name */
  IsCurator = 'is_curator',
  /** column name */
  MostRecentHostedProjectId = 'most_recent_hosted_project_id',
  /** column name */
  MostRecentProjectId = 'most_recent_project_id',
  /** column name */
  PublicAddress = 'public_address',
  /** column name */
  TosAcceptedAt = 'tos_accepted_at',
  /** column name */
  ViewedWarningBanner = 'viewed_warning_banner'
}

/** Streaming cursor of the table "artists" */
export type Artists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Artists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Artists_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  is_ab_staff?: InputMaybe<Scalars['Boolean']['input']>;
  is_curator?: InputMaybe<Scalars['Boolean']['input']>;
  most_recent_hosted_project_id?: InputMaybe<Scalars['String']['input']>;
  most_recent_project_id?: InputMaybe<Scalars['String']['input']>;
  public_address?: InputMaybe<Scalars['String']['input']>;
  tos_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  viewed_warning_banner?: InputMaybe<Scalars['Boolean']['input']>;
};

/** columns and relationships of "bids_metadata" */
export type Bids_Metadata = {
  __typename?: 'bids_metadata';
  bid_value: Scalars['String']['output'];
  bidder_address: Scalars['String']['output'];
  /** An object relationship */
  core_contract: Contracts_Metadata;
  core_contract_address: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** An object relationship */
  minter: Minters_Metadata;
  minter_address: Scalars['String']['output'];
  /** An object relationship */
  project: Projects_Metadata;
  project_id: Scalars['String']['output'];
  time_of_bid: Scalars['timestamptz']['output'];
  /** An object relationship */
  token?: Maybe<Tokens_Metadata>;
  token_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  winning_bid?: Maybe<Scalars['Boolean']['output']>;
};

/** aggregated selection of "bids_metadata" */
export type Bids_Metadata_Aggregate = {
  __typename?: 'bids_metadata_aggregate';
  aggregate?: Maybe<Bids_Metadata_Aggregate_Fields>;
  nodes: Array<Bids_Metadata>;
};

export type Bids_Metadata_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Bids_Metadata_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Bids_Metadata_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Bids_Metadata_Aggregate_Bool_Exp_Count>;
};

export type Bids_Metadata_Aggregate_Bool_Exp_Bool_And = {
  arguments: Bids_Metadata_Select_Column_Bids_Metadata_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Bids_Metadata_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Bids_Metadata_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Bids_Metadata_Select_Column_Bids_Metadata_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Bids_Metadata_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Bids_Metadata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Bids_Metadata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "bids_metadata" */
export type Bids_Metadata_Aggregate_Fields = {
  __typename?: 'bids_metadata_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Bids_Metadata_Max_Fields>;
  min?: Maybe<Bids_Metadata_Min_Fields>;
};


/** aggregate fields of "bids_metadata" */
export type Bids_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "bids_metadata" */
export type Bids_Metadata_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bids_Metadata_Max_Order_By>;
  min?: InputMaybe<Bids_Metadata_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "bids_metadata". All fields are combined with a logical 'AND'. */
export type Bids_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Bids_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Bids_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Bids_Metadata_Bool_Exp>>;
  bid_value?: InputMaybe<String_Comparison_Exp>;
  bidder_address?: InputMaybe<String_Comparison_Exp>;
  core_contract?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  core_contract_address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  minter?: InputMaybe<Minters_Metadata_Bool_Exp>;
  minter_address?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  time_of_bid?: InputMaybe<Timestamptz_Comparison_Exp>;
  token?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  winning_bid?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Bids_Metadata_Max_Fields = {
  __typename?: 'bids_metadata_max_fields';
  bid_value?: Maybe<Scalars['String']['output']>;
  bidder_address?: Maybe<Scalars['String']['output']>;
  core_contract_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  minter_address?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  time_of_bid?: Maybe<Scalars['timestamptz']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "bids_metadata" */
export type Bids_Metadata_Max_Order_By = {
  bid_value?: InputMaybe<Order_By>;
  bidder_address?: InputMaybe<Order_By>;
  core_contract_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minter_address?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  time_of_bid?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bids_Metadata_Min_Fields = {
  __typename?: 'bids_metadata_min_fields';
  bid_value?: Maybe<Scalars['String']['output']>;
  bidder_address?: Maybe<Scalars['String']['output']>;
  core_contract_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  minter_address?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  time_of_bid?: Maybe<Scalars['timestamptz']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "bids_metadata" */
export type Bids_Metadata_Min_Order_By = {
  bid_value?: InputMaybe<Order_By>;
  bidder_address?: InputMaybe<Order_By>;
  core_contract_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minter_address?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  time_of_bid?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "bids_metadata". */
export type Bids_Metadata_Order_By = {
  bid_value?: InputMaybe<Order_By>;
  bidder_address?: InputMaybe<Order_By>;
  core_contract?: InputMaybe<Contracts_Metadata_Order_By>;
  core_contract_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minter?: InputMaybe<Minters_Metadata_Order_By>;
  minter_address?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
  time_of_bid?: InputMaybe<Order_By>;
  token?: InputMaybe<Tokens_Metadata_Order_By>;
  token_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  winning_bid?: InputMaybe<Order_By>;
};

/** select columns of table "bids_metadata" */
export enum Bids_Metadata_Select_Column {
  /** column name */
  BidValue = 'bid_value',
  /** column name */
  BidderAddress = 'bidder_address',
  /** column name */
  CoreContractAddress = 'core_contract_address',
  /** column name */
  Id = 'id',
  /** column name */
  MinterAddress = 'minter_address',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  TimeOfBid = 'time_of_bid',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  WinningBid = 'winning_bid'
}

/** select "bids_metadata_aggregate_bool_exp_bool_and_arguments_columns" columns of table "bids_metadata" */
export enum Bids_Metadata_Select_Column_Bids_Metadata_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  WinningBid = 'winning_bid'
}

/** select "bids_metadata_aggregate_bool_exp_bool_or_arguments_columns" columns of table "bids_metadata" */
export enum Bids_Metadata_Select_Column_Bids_Metadata_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  WinningBid = 'winning_bid'
}

/** Streaming cursor of the table "bids_metadata" */
export type Bids_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bids_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bids_Metadata_Stream_Cursor_Value_Input = {
  bid_value?: InputMaybe<Scalars['String']['input']>;
  bidder_address?: InputMaybe<Scalars['String']['input']>;
  core_contract_address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  minter_address?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  time_of_bid?: InputMaybe<Scalars['timestamptz']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  winning_bid?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  name: Scalars['String']['output'];
  /** An object relationship */
  project_vertical_category?: Maybe<Project_Vertical_Categories>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_vertical_category?: InputMaybe<Project_Vertical_Categories_Bool_Exp>;
};

export enum Categories_Enum {
  Collaborations = 'collaborations',
  Collections = 'collections',
  Engine = 'engine',
  Explorations = 'explorations',
  Unassigned = 'unassigned'
}

/** Boolean expression to compare columns of type "categories_enum". All fields are combined with logical 'AND'. */
export type Categories_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Categories_Enum>;
  _in?: InputMaybe<Array<Categories_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Categories_Enum>;
  _nin?: InputMaybe<Array<Categories_Enum>>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  name?: InputMaybe<Order_By>;
  project_vertical_category?: InputMaybe<Project_Vertical_Categories_Order_By>;
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Users who have write-access to a given Art Blocks or Engine smart contract. */
export type Contract_Allowlistings = {
  __typename?: 'contract_allowlistings';
  /** An object relationship */
  contract?: Maybe<Contracts_Metadata>;
  contract_address: Scalars['String']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_address: Scalars['String']['output'];
};

/** order by aggregate values of table "contract_allowlistings" */
export type Contract_Allowlistings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contract_Allowlistings_Max_Order_By>;
  min?: InputMaybe<Contract_Allowlistings_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "contract_allowlistings". All fields are combined with a logical 'AND'. */
export type Contract_Allowlistings_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Allowlistings_Bool_Exp>>;
  _not?: InputMaybe<Contract_Allowlistings_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Allowlistings_Bool_Exp>>;
  contract?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "contract_allowlistings" */
export type Contract_Allowlistings_Max_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "contract_allowlistings" */
export type Contract_Allowlistings_Min_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "contract_allowlistings". */
export type Contract_Allowlistings_Order_By = {
  contract?: InputMaybe<Contracts_Metadata_Order_By>;
  contract_address?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** select columns of table "contract_allowlistings" */
export enum Contract_Allowlistings_Select_Column {
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  UserAddress = 'user_address'
}

/** Streaming cursor of the table "contract_allowlistings" */
export type Contract_Allowlistings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Allowlistings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Allowlistings_Stream_Cursor_Value_Input = {
  contract_address?: InputMaybe<Scalars['String']['input']>;
  user_address?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "contract_type_names" */
export type Contract_Type_Names = {
  __typename?: 'contract_type_names';
  name: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "contract_type_names". All fields are combined with a logical 'AND'. */
export type Contract_Type_Names_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Type_Names_Bool_Exp>>;
  _not?: InputMaybe<Contract_Type_Names_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Type_Names_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

export enum Contract_Type_Names_Enum {
  GenArt721CoreV0 = 'GenArt721CoreV0',
  GenArt721CoreV1 = 'GenArt721CoreV1',
  GenArt721CoreV2EngineFlex = 'GenArt721CoreV2_ENGINE_FLEX',
  GenArt721CoreV2Pbab = 'GenArt721CoreV2_PBAB',
  GenArt721CoreV3 = 'GenArt721CoreV3',
  GenArt721CoreV3Engine = 'GenArt721CoreV3_Engine',
  GenArt721CoreV3EngineFlex = 'GenArt721CoreV3_Engine_Flex'
}

/** Boolean expression to compare columns of type "contract_type_names_enum". All fields are combined with logical 'AND'. */
export type Contract_Type_Names_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Contract_Type_Names_Enum>;
  _in?: InputMaybe<Array<Contract_Type_Names_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Contract_Type_Names_Enum>;
  _nin?: InputMaybe<Array<Contract_Type_Names_Enum>>;
};

/** Ordering options when selecting data from "contract_type_names". */
export type Contract_Type_Names_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** select columns of table "contract_type_names" */
export enum Contract_Type_Names_Select_Column {
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "contract_type_names" */
export type Contract_Type_Names_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Type_Names_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Type_Names_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "contract_types" */
export type Contract_Types = {
  __typename?: 'contract_types';
  abi?: Maybe<Scalars['jsonb']['output']>;
  project_configuration_schema?: Maybe<Scalars['jsonb']['output']>;
  type: Contract_Type_Names_Enum;
};


/** columns and relationships of "contract_types" */
export type Contract_TypesAbiArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "contract_types" */
export type Contract_TypesProject_Configuration_SchemaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "contract_types". All fields are combined with a logical 'AND'. */
export type Contract_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Types_Bool_Exp>>;
  _not?: InputMaybe<Contract_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Types_Bool_Exp>>;
  abi?: InputMaybe<Jsonb_Comparison_Exp>;
  project_configuration_schema?: InputMaybe<Jsonb_Comparison_Exp>;
  type?: InputMaybe<Contract_Type_Names_Enum_Comparison_Exp>;
};

/** Ordering options when selecting data from "contract_types". */
export type Contract_Types_Order_By = {
  abi?: InputMaybe<Order_By>;
  project_configuration_schema?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "contract_types" */
export enum Contract_Types_Select_Column {
  /** column name */
  Abi = 'abi',
  /** column name */
  ProjectConfigurationSchema = 'project_configuration_schema',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "contract_types" */
export type Contract_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Types_Stream_Cursor_Value_Input = {
  abi?: InputMaybe<Scalars['jsonb']['input']>;
  project_configuration_schema?: InputMaybe<Scalars['jsonb']['input']>;
  type?: InputMaybe<Contract_Type_Names_Enum>;
};

/** This table details the contract deployments & metadata for Art Blocks and all Engine partners. Updates are made when a core contract is deployed. */
export type Contracts_Metadata = {
  __typename?: 'contracts_metadata';
  address: Scalars['String']['output'];
  admin?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  allowlisted_users: Array<Contract_Allowlistings>;
  bucket_name?: Maybe<Scalars['String']['output']>;
  contract_type: Contract_Type_Names_Enum;
  curation_registry_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  default_vertical?: Maybe<Project_Verticals>;
  dependency_registry_address?: Maybe<Scalars['String']['output']>;
  generator_url?: Maybe<Scalars['String']['output']>;
  minter_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  minter_filter?: Maybe<Minter_Filters_Metadata>;
  minter_filter_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "new_projects_forbidden" */
  new_projects_forbidden?: Maybe<Scalars['Boolean']['output']>;
  new_projects_forbidden_offchain: Scalars['Boolean']['output'];
  new_projects_forbidden_onchain: Scalars['Boolean']['output'];
  partner_id?: Maybe<Scalars['Int']['output']>;
  preferred_arweave_gateway?: Maybe<Scalars['String']['output']>;
  preferred_ipfs_gateway?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  projects: Array<Projects_Metadata>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Metadata_Aggregate;
  render_provider_address?: Maybe<Scalars['String']['output']>;
  render_provider_percentage?: Maybe<Scalars['Int']['output']>;
  render_provider_secondary_sales_address?: Maybe<Scalars['String']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Int']['output']>;
  token_base_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  type?: Maybe<Contract_Types>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** A computed field, executes function "user_is_allowlisted" */
  user_is_allowlisted?: Maybe<Scalars['Boolean']['output']>;
};


/** This table details the contract deployments & metadata for Art Blocks and all Engine partners. Updates are made when a core contract is deployed. */
export type Contracts_MetadataAllowlisted_UsersArgs = {
  distinct_on?: InputMaybe<Array<Contract_Allowlistings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Allowlistings_Order_By>>;
  where?: InputMaybe<Contract_Allowlistings_Bool_Exp>;
};


/** This table details the contract deployments & metadata for Art Blocks and all Engine partners. Updates are made when a core contract is deployed. */
export type Contracts_MetadataProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


/** This table details the contract deployments & metadata for Art Blocks and all Engine partners. Updates are made when a core contract is deployed. */
export type Contracts_MetadataProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};

/** aggregated selection of "contracts_metadata" */
export type Contracts_Metadata_Aggregate = {
  __typename?: 'contracts_metadata_aggregate';
  aggregate?: Maybe<Contracts_Metadata_Aggregate_Fields>;
  nodes: Array<Contracts_Metadata>;
};

export type Contracts_Metadata_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Contracts_Metadata_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Contracts_Metadata_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Contracts_Metadata_Aggregate_Bool_Exp_Count>;
};

export type Contracts_Metadata_Aggregate_Bool_Exp_Bool_And = {
  arguments: Contracts_Metadata_Select_Column_Contracts_Metadata_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Contracts_Metadata_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Contracts_Metadata_Select_Column_Contracts_Metadata_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Contracts_Metadata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contracts_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contracts_metadata" */
export type Contracts_Metadata_Aggregate_Fields = {
  __typename?: 'contracts_metadata_aggregate_fields';
  avg?: Maybe<Contracts_Metadata_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contracts_Metadata_Max_Fields>;
  min?: Maybe<Contracts_Metadata_Min_Fields>;
  stddev?: Maybe<Contracts_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Contracts_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contracts_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Contracts_Metadata_Sum_Fields>;
  var_pop?: Maybe<Contracts_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Contracts_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Contracts_Metadata_Variance_Fields>;
};


/** aggregate fields of "contracts_metadata" */
export type Contracts_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contracts_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "contracts_metadata" */
export type Contracts_Metadata_Aggregate_Order_By = {
  avg?: InputMaybe<Contracts_Metadata_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contracts_Metadata_Max_Order_By>;
  min?: InputMaybe<Contracts_Metadata_Min_Order_By>;
  stddev?: InputMaybe<Contracts_Metadata_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contracts_Metadata_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contracts_Metadata_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contracts_Metadata_Sum_Order_By>;
  var_pop?: InputMaybe<Contracts_Metadata_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contracts_Metadata_Var_Samp_Order_By>;
  variance?: InputMaybe<Contracts_Metadata_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Contracts_Metadata_Avg_Fields = {
  __typename?: 'contracts_metadata_avg_fields';
  partner_id?: Maybe<Scalars['Float']['output']>;
  render_provider_percentage?: Maybe<Scalars['Float']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Avg_Order_By = {
  partner_id?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contracts_metadata". All fields are combined with a logical 'AND'. */
export type Contracts_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Contracts_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Contracts_Metadata_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  admin?: InputMaybe<String_Comparison_Exp>;
  allowlisted_users?: InputMaybe<Contract_Allowlistings_Bool_Exp>;
  bucket_name?: InputMaybe<String_Comparison_Exp>;
  contract_type?: InputMaybe<Contract_Type_Names_Enum_Comparison_Exp>;
  curation_registry_address?: InputMaybe<String_Comparison_Exp>;
  default_vertical?: InputMaybe<Project_Verticals_Bool_Exp>;
  dependency_registry_address?: InputMaybe<String_Comparison_Exp>;
  generator_url?: InputMaybe<String_Comparison_Exp>;
  minter_address?: InputMaybe<String_Comparison_Exp>;
  minter_filter?: InputMaybe<Minter_Filters_Metadata_Bool_Exp>;
  minter_filter_address?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  new_projects_forbidden?: InputMaybe<Boolean_Comparison_Exp>;
  new_projects_forbidden_offchain?: InputMaybe<Boolean_Comparison_Exp>;
  new_projects_forbidden_onchain?: InputMaybe<Boolean_Comparison_Exp>;
  partner_id?: InputMaybe<Int_Comparison_Exp>;
  preferred_arweave_gateway?: InputMaybe<String_Comparison_Exp>;
  preferred_ipfs_gateway?: InputMaybe<String_Comparison_Exp>;
  projects?: InputMaybe<Projects_Metadata_Bool_Exp>;
  projects_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Bool_Exp>;
  render_provider_address?: InputMaybe<String_Comparison_Exp>;
  render_provider_percentage?: InputMaybe<Int_Comparison_Exp>;
  render_provider_secondary_sales_address?: InputMaybe<String_Comparison_Exp>;
  render_provider_secondary_sales_bps?: InputMaybe<Int_Comparison_Exp>;
  token_base_url?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Contract_Types_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_is_allowlisted?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Contracts_Metadata_Max_Fields = {
  __typename?: 'contracts_metadata_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  admin?: Maybe<Scalars['String']['output']>;
  bucket_name?: Maybe<Scalars['String']['output']>;
  curation_registry_address?: Maybe<Scalars['String']['output']>;
  dependency_registry_address?: Maybe<Scalars['String']['output']>;
  generator_url?: Maybe<Scalars['String']['output']>;
  minter_address?: Maybe<Scalars['String']['output']>;
  minter_filter_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  partner_id?: Maybe<Scalars['Int']['output']>;
  preferred_arweave_gateway?: Maybe<Scalars['String']['output']>;
  preferred_ipfs_gateway?: Maybe<Scalars['String']['output']>;
  render_provider_address?: Maybe<Scalars['String']['output']>;
  render_provider_percentage?: Maybe<Scalars['Int']['output']>;
  render_provider_secondary_sales_address?: Maybe<Scalars['String']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Int']['output']>;
  token_base_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  bucket_name?: InputMaybe<Order_By>;
  curation_registry_address?: InputMaybe<Order_By>;
  dependency_registry_address?: InputMaybe<Order_By>;
  generator_url?: InputMaybe<Order_By>;
  minter_address?: InputMaybe<Order_By>;
  minter_filter_address?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  preferred_arweave_gateway?: InputMaybe<Order_By>;
  preferred_ipfs_gateway?: InputMaybe<Order_By>;
  render_provider_address?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_address?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
  token_base_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contracts_Metadata_Min_Fields = {
  __typename?: 'contracts_metadata_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  admin?: Maybe<Scalars['String']['output']>;
  bucket_name?: Maybe<Scalars['String']['output']>;
  curation_registry_address?: Maybe<Scalars['String']['output']>;
  dependency_registry_address?: Maybe<Scalars['String']['output']>;
  generator_url?: Maybe<Scalars['String']['output']>;
  minter_address?: Maybe<Scalars['String']['output']>;
  minter_filter_address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  partner_id?: Maybe<Scalars['Int']['output']>;
  preferred_arweave_gateway?: Maybe<Scalars['String']['output']>;
  preferred_ipfs_gateway?: Maybe<Scalars['String']['output']>;
  render_provider_address?: Maybe<Scalars['String']['output']>;
  render_provider_percentage?: Maybe<Scalars['Int']['output']>;
  render_provider_secondary_sales_address?: Maybe<Scalars['String']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Int']['output']>;
  token_base_url?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  bucket_name?: InputMaybe<Order_By>;
  curation_registry_address?: InputMaybe<Order_By>;
  dependency_registry_address?: InputMaybe<Order_By>;
  generator_url?: InputMaybe<Order_By>;
  minter_address?: InputMaybe<Order_By>;
  minter_filter_address?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  preferred_arweave_gateway?: InputMaybe<Order_By>;
  preferred_ipfs_gateway?: InputMaybe<Order_By>;
  render_provider_address?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_address?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
  token_base_url?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "contracts_metadata". */
export type Contracts_Metadata_Order_By = {
  address?: InputMaybe<Order_By>;
  admin?: InputMaybe<Order_By>;
  allowlisted_users_aggregate?: InputMaybe<Contract_Allowlistings_Aggregate_Order_By>;
  bucket_name?: InputMaybe<Order_By>;
  contract_type?: InputMaybe<Order_By>;
  curation_registry_address?: InputMaybe<Order_By>;
  default_vertical?: InputMaybe<Project_Verticals_Order_By>;
  dependency_registry_address?: InputMaybe<Order_By>;
  generator_url?: InputMaybe<Order_By>;
  minter_address?: InputMaybe<Order_By>;
  minter_filter?: InputMaybe<Minter_Filters_Metadata_Order_By>;
  minter_filter_address?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  new_projects_forbidden?: InputMaybe<Order_By>;
  new_projects_forbidden_offchain?: InputMaybe<Order_By>;
  new_projects_forbidden_onchain?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  preferred_arweave_gateway?: InputMaybe<Order_By>;
  preferred_ipfs_gateway?: InputMaybe<Order_By>;
  projects_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Order_By>;
  render_provider_address?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_address?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
  token_base_url?: InputMaybe<Order_By>;
  type?: InputMaybe<Contract_Types_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_is_allowlisted?: InputMaybe<Order_By>;
};

/** select columns of table "contracts_metadata" */
export enum Contracts_Metadata_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Admin = 'admin',
  /** column name */
  BucketName = 'bucket_name',
  /** column name */
  ContractType = 'contract_type',
  /** column name */
  CurationRegistryAddress = 'curation_registry_address',
  /** column name */
  DependencyRegistryAddress = 'dependency_registry_address',
  /** column name */
  GeneratorUrl = 'generator_url',
  /** column name */
  MinterAddress = 'minter_address',
  /** column name */
  MinterFilterAddress = 'minter_filter_address',
  /** column name */
  Name = 'name',
  /** column name */
  NewProjectsForbiddenOffchain = 'new_projects_forbidden_offchain',
  /** column name */
  NewProjectsForbiddenOnchain = 'new_projects_forbidden_onchain',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  PreferredArweaveGateway = 'preferred_arweave_gateway',
  /** column name */
  PreferredIpfsGateway = 'preferred_ipfs_gateway',
  /** column name */
  RenderProviderAddress = 'render_provider_address',
  /** column name */
  RenderProviderPercentage = 'render_provider_percentage',
  /** column name */
  RenderProviderSecondarySalesAddress = 'render_provider_secondary_sales_address',
  /** column name */
  RenderProviderSecondarySalesBps = 'render_provider_secondary_sales_bps',
  /** column name */
  TokenBaseUrl = 'token_base_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "contracts_metadata_aggregate_bool_exp_bool_and_arguments_columns" columns of table "contracts_metadata" */
export enum Contracts_Metadata_Select_Column_Contracts_Metadata_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  NewProjectsForbiddenOffchain = 'new_projects_forbidden_offchain',
  /** column name */
  NewProjectsForbiddenOnchain = 'new_projects_forbidden_onchain'
}

/** select "contracts_metadata_aggregate_bool_exp_bool_or_arguments_columns" columns of table "contracts_metadata" */
export enum Contracts_Metadata_Select_Column_Contracts_Metadata_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  NewProjectsForbiddenOffchain = 'new_projects_forbidden_offchain',
  /** column name */
  NewProjectsForbiddenOnchain = 'new_projects_forbidden_onchain'
}

/** aggregate stddev on columns */
export type Contracts_Metadata_Stddev_Fields = {
  __typename?: 'contracts_metadata_stddev_fields';
  partner_id?: Maybe<Scalars['Float']['output']>;
  render_provider_percentage?: Maybe<Scalars['Float']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Stddev_Order_By = {
  partner_id?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contracts_Metadata_Stddev_Pop_Fields = {
  __typename?: 'contracts_metadata_stddev_pop_fields';
  partner_id?: Maybe<Scalars['Float']['output']>;
  render_provider_percentage?: Maybe<Scalars['Float']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Stddev_Pop_Order_By = {
  partner_id?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contracts_Metadata_Stddev_Samp_Fields = {
  __typename?: 'contracts_metadata_stddev_samp_fields';
  partner_id?: Maybe<Scalars['Float']['output']>;
  render_provider_percentage?: Maybe<Scalars['Float']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Stddev_Samp_Order_By = {
  partner_id?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "contracts_metadata" */
export type Contracts_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contracts_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contracts_Metadata_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  admin?: InputMaybe<Scalars['String']['input']>;
  bucket_name?: InputMaybe<Scalars['String']['input']>;
  contract_type?: InputMaybe<Contract_Type_Names_Enum>;
  curation_registry_address?: InputMaybe<Scalars['String']['input']>;
  dependency_registry_address?: InputMaybe<Scalars['String']['input']>;
  generator_url?: InputMaybe<Scalars['String']['input']>;
  minter_address?: InputMaybe<Scalars['String']['input']>;
  minter_filter_address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  new_projects_forbidden_offchain?: InputMaybe<Scalars['Boolean']['input']>;
  new_projects_forbidden_onchain?: InputMaybe<Scalars['Boolean']['input']>;
  partner_id?: InputMaybe<Scalars['Int']['input']>;
  preferred_arweave_gateway?: InputMaybe<Scalars['String']['input']>;
  preferred_ipfs_gateway?: InputMaybe<Scalars['String']['input']>;
  render_provider_address?: InputMaybe<Scalars['String']['input']>;
  render_provider_percentage?: InputMaybe<Scalars['Int']['input']>;
  render_provider_secondary_sales_address?: InputMaybe<Scalars['String']['input']>;
  render_provider_secondary_sales_bps?: InputMaybe<Scalars['Int']['input']>;
  token_base_url?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Contracts_Metadata_Sum_Fields = {
  __typename?: 'contracts_metadata_sum_fields';
  partner_id?: Maybe<Scalars['Int']['output']>;
  render_provider_percentage?: Maybe<Scalars['Int']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Sum_Order_By = {
  partner_id?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Contracts_Metadata_Var_Pop_Fields = {
  __typename?: 'contracts_metadata_var_pop_fields';
  partner_id?: Maybe<Scalars['Float']['output']>;
  render_provider_percentage?: Maybe<Scalars['Float']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Var_Pop_Order_By = {
  partner_id?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contracts_Metadata_Var_Samp_Fields = {
  __typename?: 'contracts_metadata_var_samp_fields';
  partner_id?: Maybe<Scalars['Float']['output']>;
  render_provider_percentage?: Maybe<Scalars['Float']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Var_Samp_Order_By = {
  partner_id?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Contracts_Metadata_Variance_Fields = {
  __typename?: 'contracts_metadata_variance_fields';
  partner_id?: Maybe<Scalars['Float']['output']>;
  render_provider_percentage?: Maybe<Scalars['Float']['output']>;
  render_provider_secondary_sales_bps?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "contracts_metadata" */
export type Contracts_Metadata_Variance_Order_By = {
  partner_id?: InputMaybe<Order_By>;
  render_provider_percentage?: InputMaybe<Order_By>;
  render_provider_secondary_sales_bps?: InputMaybe<Order_By>;
};

export enum Curation_Statuses_Enum {
  Collaboration = 'collaboration',
  Curated = 'curated',
  Factory = 'factory',
  Playground = 'playground'
}

/** Boolean expression to compare columns of type "curation_statuses_enum". All fields are combined with logical 'AND'. */
export type Curation_Statuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Curation_Statuses_Enum>;
  _in?: InputMaybe<Array<Curation_Statuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Curation_Statuses_Enum>;
  _nin?: InputMaybe<Array<Curation_Statuses_Enum>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "dependencies_metadata" */
export type Dependencies_Metadata = {
  __typename?: 'dependencies_metadata';
  /** An array relationship */
  additional_cdns: Array<Dependency_Additional_Cdns>;
  /** An aggregate relationship */
  additional_cdns_aggregate: Dependency_Additional_Cdns_Aggregate;
  /** An array relationship */
  additional_repositories: Array<Dependency_Additional_Repositories>;
  /** An aggregate relationship */
  additional_repositories_aggregate: Dependency_Additional_Repositories_Aggregate;
  /** An object relationship */
  dependency_registry: Dependency_Registries;
  dependency_registry_address: Scalars['String']['output'];
  license_type: Scalars['String']['output'];
  name_and_version: Scalars['String']['output'];
  preferred_cdn?: Maybe<Scalars['String']['output']>;
  preferred_repository?: Maybe<Scalars['String']['output']>;
  script?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  scripts: Array<Dependency_Scripts>;
  /** An aggregate relationship */
  scripts_aggregate: Dependency_Scripts_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  updated_onchain_at: Scalars['timestamptz']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "dependencies_metadata" */
export type Dependencies_MetadataAdditional_CdnsArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Cdns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Cdns_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
};


/** columns and relationships of "dependencies_metadata" */
export type Dependencies_MetadataAdditional_Cdns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Cdns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Cdns_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
};


/** columns and relationships of "dependencies_metadata" */
export type Dependencies_MetadataAdditional_RepositoriesArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Repositories_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
};


/** columns and relationships of "dependencies_metadata" */
export type Dependencies_MetadataAdditional_Repositories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Repositories_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
};


/** columns and relationships of "dependencies_metadata" */
export type Dependencies_MetadataScriptsArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Scripts_Order_By>>;
  where?: InputMaybe<Dependency_Scripts_Bool_Exp>;
};


/** columns and relationships of "dependencies_metadata" */
export type Dependencies_MetadataScripts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Scripts_Order_By>>;
  where?: InputMaybe<Dependency_Scripts_Bool_Exp>;
};

/** aggregated selection of "dependencies_metadata" */
export type Dependencies_Metadata_Aggregate = {
  __typename?: 'dependencies_metadata_aggregate';
  aggregate?: Maybe<Dependencies_Metadata_Aggregate_Fields>;
  nodes: Array<Dependencies_Metadata>;
};

export type Dependencies_Metadata_Aggregate_Bool_Exp = {
  count?: InputMaybe<Dependencies_Metadata_Aggregate_Bool_Exp_Count>;
};

export type Dependencies_Metadata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Dependencies_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "dependencies_metadata" */
export type Dependencies_Metadata_Aggregate_Fields = {
  __typename?: 'dependencies_metadata_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Dependencies_Metadata_Max_Fields>;
  min?: Maybe<Dependencies_Metadata_Min_Fields>;
};


/** aggregate fields of "dependencies_metadata" */
export type Dependencies_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dependencies_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "dependencies_metadata" */
export type Dependencies_Metadata_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dependencies_Metadata_Max_Order_By>;
  min?: InputMaybe<Dependencies_Metadata_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "dependencies_metadata". All fields are combined with a logical 'AND'. */
export type Dependencies_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Dependencies_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Dependencies_Metadata_Bool_Exp>>;
  additional_cdns?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
  additional_cdns_aggregate?: InputMaybe<Dependency_Additional_Cdns_Aggregate_Bool_Exp>;
  additional_repositories?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
  additional_repositories_aggregate?: InputMaybe<Dependency_Additional_Repositories_Aggregate_Bool_Exp>;
  dependency_registry?: InputMaybe<Dependency_Registries_Bool_Exp>;
  dependency_registry_address?: InputMaybe<String_Comparison_Exp>;
  license_type?: InputMaybe<String_Comparison_Exp>;
  name_and_version?: InputMaybe<String_Comparison_Exp>;
  preferred_cdn?: InputMaybe<String_Comparison_Exp>;
  preferred_repository?: InputMaybe<String_Comparison_Exp>;
  script?: InputMaybe<String_Comparison_Exp>;
  scripts?: InputMaybe<Dependency_Scripts_Bool_Exp>;
  scripts_aggregate?: InputMaybe<Dependency_Scripts_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_onchain_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dependencies_Metadata_Max_Fields = {
  __typename?: 'dependencies_metadata_max_fields';
  dependency_registry_address?: Maybe<Scalars['String']['output']>;
  license_type?: Maybe<Scalars['String']['output']>;
  name_and_version?: Maybe<Scalars['String']['output']>;
  preferred_cdn?: Maybe<Scalars['String']['output']>;
  preferred_repository?: Maybe<Scalars['String']['output']>;
  script?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_onchain_at?: Maybe<Scalars['timestamptz']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "dependencies_metadata" */
export type Dependencies_Metadata_Max_Order_By = {
  dependency_registry_address?: InputMaybe<Order_By>;
  license_type?: InputMaybe<Order_By>;
  name_and_version?: InputMaybe<Order_By>;
  preferred_cdn?: InputMaybe<Order_By>;
  preferred_repository?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_onchain_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dependencies_Metadata_Min_Fields = {
  __typename?: 'dependencies_metadata_min_fields';
  dependency_registry_address?: Maybe<Scalars['String']['output']>;
  license_type?: Maybe<Scalars['String']['output']>;
  name_and_version?: Maybe<Scalars['String']['output']>;
  preferred_cdn?: Maybe<Scalars['String']['output']>;
  preferred_repository?: Maybe<Scalars['String']['output']>;
  script?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_onchain_at?: Maybe<Scalars['timestamptz']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "dependencies_metadata" */
export type Dependencies_Metadata_Min_Order_By = {
  dependency_registry_address?: InputMaybe<Order_By>;
  license_type?: InputMaybe<Order_By>;
  name_and_version?: InputMaybe<Order_By>;
  preferred_cdn?: InputMaybe<Order_By>;
  preferred_repository?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_onchain_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dependencies_metadata". */
export type Dependencies_Metadata_Order_By = {
  additional_cdns_aggregate?: InputMaybe<Dependency_Additional_Cdns_Aggregate_Order_By>;
  additional_repositories_aggregate?: InputMaybe<Dependency_Additional_Repositories_Aggregate_Order_By>;
  dependency_registry?: InputMaybe<Dependency_Registries_Order_By>;
  dependency_registry_address?: InputMaybe<Order_By>;
  license_type?: InputMaybe<Order_By>;
  name_and_version?: InputMaybe<Order_By>;
  preferred_cdn?: InputMaybe<Order_By>;
  preferred_repository?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
  scripts_aggregate?: InputMaybe<Dependency_Scripts_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_onchain_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** select columns of table "dependencies_metadata" */
export enum Dependencies_Metadata_Select_Column {
  /** column name */
  DependencyRegistryAddress = 'dependency_registry_address',
  /** column name */
  LicenseType = 'license_type',
  /** column name */
  NameAndVersion = 'name_and_version',
  /** column name */
  PreferredCdn = 'preferred_cdn',
  /** column name */
  PreferredRepository = 'preferred_repository',
  /** column name */
  Script = 'script',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedOnchainAt = 'updated_onchain_at',
  /** column name */
  Website = 'website'
}

/** Streaming cursor of the table "dependencies_metadata" */
export type Dependencies_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dependencies_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dependencies_Metadata_Stream_Cursor_Value_Input = {
  dependency_registry_address?: InputMaybe<Scalars['String']['input']>;
  license_type?: InputMaybe<Scalars['String']['input']>;
  name_and_version?: InputMaybe<Scalars['String']['input']>;
  preferred_cdn?: InputMaybe<Scalars['String']['input']>;
  preferred_repository?: InputMaybe<Scalars['String']['input']>;
  script?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_onchain_at?: InputMaybe<Scalars['timestamptz']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "dependency_additional_cdns" */
export type Dependency_Additional_Cdns = {
  __typename?: 'dependency_additional_cdns';
  cdn: Scalars['String']['output'];
  dependency_name_and_version: Scalars['String']['output'];
  index: Scalars['Int']['output'];
};

/** aggregated selection of "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Aggregate = {
  __typename?: 'dependency_additional_cdns_aggregate';
  aggregate?: Maybe<Dependency_Additional_Cdns_Aggregate_Fields>;
  nodes: Array<Dependency_Additional_Cdns>;
};

export type Dependency_Additional_Cdns_Aggregate_Bool_Exp = {
  count?: InputMaybe<Dependency_Additional_Cdns_Aggregate_Bool_Exp_Count>;
};

export type Dependency_Additional_Cdns_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Dependency_Additional_Cdns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Aggregate_Fields = {
  __typename?: 'dependency_additional_cdns_aggregate_fields';
  avg?: Maybe<Dependency_Additional_Cdns_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dependency_Additional_Cdns_Max_Fields>;
  min?: Maybe<Dependency_Additional_Cdns_Min_Fields>;
  stddev?: Maybe<Dependency_Additional_Cdns_Stddev_Fields>;
  stddev_pop?: Maybe<Dependency_Additional_Cdns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dependency_Additional_Cdns_Stddev_Samp_Fields>;
  sum?: Maybe<Dependency_Additional_Cdns_Sum_Fields>;
  var_pop?: Maybe<Dependency_Additional_Cdns_Var_Pop_Fields>;
  var_samp?: Maybe<Dependency_Additional_Cdns_Var_Samp_Fields>;
  variance?: Maybe<Dependency_Additional_Cdns_Variance_Fields>;
};


/** aggregate fields of "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dependency_Additional_Cdns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Aggregate_Order_By = {
  avg?: InputMaybe<Dependency_Additional_Cdns_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dependency_Additional_Cdns_Max_Order_By>;
  min?: InputMaybe<Dependency_Additional_Cdns_Min_Order_By>;
  stddev?: InputMaybe<Dependency_Additional_Cdns_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dependency_Additional_Cdns_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dependency_Additional_Cdns_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dependency_Additional_Cdns_Sum_Order_By>;
  var_pop?: InputMaybe<Dependency_Additional_Cdns_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dependency_Additional_Cdns_Var_Samp_Order_By>;
  variance?: InputMaybe<Dependency_Additional_Cdns_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dependency_Additional_Cdns_Avg_Fields = {
  __typename?: 'dependency_additional_cdns_avg_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dependency_additional_cdns". All fields are combined with a logical 'AND'. */
export type Dependency_Additional_Cdns_Bool_Exp = {
  _and?: InputMaybe<Array<Dependency_Additional_Cdns_Bool_Exp>>;
  _not?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
  _or?: InputMaybe<Array<Dependency_Additional_Cdns_Bool_Exp>>;
  cdn?: InputMaybe<String_Comparison_Exp>;
  dependency_name_and_version?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dependency_Additional_Cdns_Max_Fields = {
  __typename?: 'dependency_additional_cdns_max_fields';
  cdn?: Maybe<Scalars['String']['output']>;
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Max_Order_By = {
  cdn?: InputMaybe<Order_By>;
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dependency_Additional_Cdns_Min_Fields = {
  __typename?: 'dependency_additional_cdns_min_fields';
  cdn?: Maybe<Scalars['String']['output']>;
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Min_Order_By = {
  cdn?: InputMaybe<Order_By>;
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dependency_additional_cdns". */
export type Dependency_Additional_Cdns_Order_By = {
  cdn?: InputMaybe<Order_By>;
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** select columns of table "dependency_additional_cdns" */
export enum Dependency_Additional_Cdns_Select_Column {
  /** column name */
  Cdn = 'cdn',
  /** column name */
  DependencyNameAndVersion = 'dependency_name_and_version',
  /** column name */
  Index = 'index'
}

/** aggregate stddev on columns */
export type Dependency_Additional_Cdns_Stddev_Fields = {
  __typename?: 'dependency_additional_cdns_stddev_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dependency_Additional_Cdns_Stddev_Pop_Fields = {
  __typename?: 'dependency_additional_cdns_stddev_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dependency_Additional_Cdns_Stddev_Samp_Fields = {
  __typename?: 'dependency_additional_cdns_stddev_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dependency_Additional_Cdns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dependency_Additional_Cdns_Stream_Cursor_Value_Input = {
  cdn?: InputMaybe<Scalars['String']['input']>;
  dependency_name_and_version?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Dependency_Additional_Cdns_Sum_Fields = {
  __typename?: 'dependency_additional_cdns_sum_fields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Dependency_Additional_Cdns_Var_Pop_Fields = {
  __typename?: 'dependency_additional_cdns_var_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dependency_Additional_Cdns_Var_Samp_Fields = {
  __typename?: 'dependency_additional_cdns_var_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dependency_Additional_Cdns_Variance_Fields = {
  __typename?: 'dependency_additional_cdns_variance_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "dependency_additional_cdns" */
export type Dependency_Additional_Cdns_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** columns and relationships of "dependency_additional_repositories" */
export type Dependency_Additional_Repositories = {
  __typename?: 'dependency_additional_repositories';
  dependency_name_and_version: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  repository: Scalars['String']['output'];
};

/** aggregated selection of "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Aggregate = {
  __typename?: 'dependency_additional_repositories_aggregate';
  aggregate?: Maybe<Dependency_Additional_Repositories_Aggregate_Fields>;
  nodes: Array<Dependency_Additional_Repositories>;
};

export type Dependency_Additional_Repositories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Dependency_Additional_Repositories_Aggregate_Bool_Exp_Count>;
};

export type Dependency_Additional_Repositories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Dependency_Additional_Repositories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Aggregate_Fields = {
  __typename?: 'dependency_additional_repositories_aggregate_fields';
  avg?: Maybe<Dependency_Additional_Repositories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dependency_Additional_Repositories_Max_Fields>;
  min?: Maybe<Dependency_Additional_Repositories_Min_Fields>;
  stddev?: Maybe<Dependency_Additional_Repositories_Stddev_Fields>;
  stddev_pop?: Maybe<Dependency_Additional_Repositories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dependency_Additional_Repositories_Stddev_Samp_Fields>;
  sum?: Maybe<Dependency_Additional_Repositories_Sum_Fields>;
  var_pop?: Maybe<Dependency_Additional_Repositories_Var_Pop_Fields>;
  var_samp?: Maybe<Dependency_Additional_Repositories_Var_Samp_Fields>;
  variance?: Maybe<Dependency_Additional_Repositories_Variance_Fields>;
};


/** aggregate fields of "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dependency_Additional_Repositories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Aggregate_Order_By = {
  avg?: InputMaybe<Dependency_Additional_Repositories_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dependency_Additional_Repositories_Max_Order_By>;
  min?: InputMaybe<Dependency_Additional_Repositories_Min_Order_By>;
  stddev?: InputMaybe<Dependency_Additional_Repositories_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dependency_Additional_Repositories_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dependency_Additional_Repositories_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dependency_Additional_Repositories_Sum_Order_By>;
  var_pop?: InputMaybe<Dependency_Additional_Repositories_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dependency_Additional_Repositories_Var_Samp_Order_By>;
  variance?: InputMaybe<Dependency_Additional_Repositories_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dependency_Additional_Repositories_Avg_Fields = {
  __typename?: 'dependency_additional_repositories_avg_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dependency_additional_repositories". All fields are combined with a logical 'AND'. */
export type Dependency_Additional_Repositories_Bool_Exp = {
  _and?: InputMaybe<Array<Dependency_Additional_Repositories_Bool_Exp>>;
  _not?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
  _or?: InputMaybe<Array<Dependency_Additional_Repositories_Bool_Exp>>;
  dependency_name_and_version?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  repository?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dependency_Additional_Repositories_Max_Fields = {
  __typename?: 'dependency_additional_repositories_max_fields';
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Max_Order_By = {
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  repository?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dependency_Additional_Repositories_Min_Fields = {
  __typename?: 'dependency_additional_repositories_min_fields';
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  repository?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Min_Order_By = {
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  repository?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dependency_additional_repositories". */
export type Dependency_Additional_Repositories_Order_By = {
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  repository?: InputMaybe<Order_By>;
};

/** select columns of table "dependency_additional_repositories" */
export enum Dependency_Additional_Repositories_Select_Column {
  /** column name */
  DependencyNameAndVersion = 'dependency_name_and_version',
  /** column name */
  Index = 'index',
  /** column name */
  Repository = 'repository'
}

/** aggregate stddev on columns */
export type Dependency_Additional_Repositories_Stddev_Fields = {
  __typename?: 'dependency_additional_repositories_stddev_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dependency_Additional_Repositories_Stddev_Pop_Fields = {
  __typename?: 'dependency_additional_repositories_stddev_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dependency_Additional_Repositories_Stddev_Samp_Fields = {
  __typename?: 'dependency_additional_repositories_stddev_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dependency_Additional_Repositories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dependency_Additional_Repositories_Stream_Cursor_Value_Input = {
  dependency_name_and_version?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  repository?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Dependency_Additional_Repositories_Sum_Fields = {
  __typename?: 'dependency_additional_repositories_sum_fields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Dependency_Additional_Repositories_Var_Pop_Fields = {
  __typename?: 'dependency_additional_repositories_var_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dependency_Additional_Repositories_Var_Samp_Fields = {
  __typename?: 'dependency_additional_repositories_var_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dependency_Additional_Repositories_Variance_Fields = {
  __typename?: 'dependency_additional_repositories_variance_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "dependency_additional_repositories" */
export type Dependency_Additional_Repositories_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** columns and relationships of "dependency_registries" */
export type Dependency_Registries = {
  __typename?: 'dependency_registries';
  address: Scalars['String']['output'];
  /** An array relationship */
  dependencies: Array<Dependencies_Metadata>;
  /** An aggregate relationship */
  dependencies_aggregate: Dependencies_Metadata_Aggregate;
  owner: Scalars['String']['output'];
  /** An array relationship */
  supported_core_contracts: Array<Contracts_Metadata>;
  /** An aggregate relationship */
  supported_core_contracts_aggregate: Contracts_Metadata_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  updated_onchain_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "dependency_registries" */
export type Dependency_RegistriesDependenciesArgs = {
  distinct_on?: InputMaybe<Array<Dependencies_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependencies_Metadata_Order_By>>;
  where?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
};


/** columns and relationships of "dependency_registries" */
export type Dependency_RegistriesDependencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependencies_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependencies_Metadata_Order_By>>;
  where?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
};


/** columns and relationships of "dependency_registries" */
export type Dependency_RegistriesSupported_Core_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Metadata_Order_By>>;
  where?: InputMaybe<Contracts_Metadata_Bool_Exp>;
};


/** columns and relationships of "dependency_registries" */
export type Dependency_RegistriesSupported_Core_Contracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Metadata_Order_By>>;
  where?: InputMaybe<Contracts_Metadata_Bool_Exp>;
};

/** aggregated selection of "dependency_registries" */
export type Dependency_Registries_Aggregate = {
  __typename?: 'dependency_registries_aggregate';
  aggregate?: Maybe<Dependency_Registries_Aggregate_Fields>;
  nodes: Array<Dependency_Registries>;
};

/** aggregate fields of "dependency_registries" */
export type Dependency_Registries_Aggregate_Fields = {
  __typename?: 'dependency_registries_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Dependency_Registries_Max_Fields>;
  min?: Maybe<Dependency_Registries_Min_Fields>;
};


/** aggregate fields of "dependency_registries" */
export type Dependency_Registries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dependency_Registries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "dependency_registries". All fields are combined with a logical 'AND'. */
export type Dependency_Registries_Bool_Exp = {
  _and?: InputMaybe<Array<Dependency_Registries_Bool_Exp>>;
  _not?: InputMaybe<Dependency_Registries_Bool_Exp>;
  _or?: InputMaybe<Array<Dependency_Registries_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  dependencies?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
  dependencies_aggregate?: InputMaybe<Dependencies_Metadata_Aggregate_Bool_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  supported_core_contracts?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  supported_core_contracts_aggregate?: InputMaybe<Contracts_Metadata_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_onchain_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dependency_Registries_Max_Fields = {
  __typename?: 'dependency_registries_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_onchain_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dependency_Registries_Min_Fields = {
  __typename?: 'dependency_registries_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_onchain_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dependency_registries". */
export type Dependency_Registries_Order_By = {
  address?: InputMaybe<Order_By>;
  dependencies_aggregate?: InputMaybe<Dependencies_Metadata_Aggregate_Order_By>;
  owner?: InputMaybe<Order_By>;
  supported_core_contracts_aggregate?: InputMaybe<Contracts_Metadata_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_onchain_at?: InputMaybe<Order_By>;
};

/** select columns of table "dependency_registries" */
export enum Dependency_Registries_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedOnchainAt = 'updated_onchain_at'
}

/** Streaming cursor of the table "dependency_registries" */
export type Dependency_Registries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dependency_Registries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dependency_Registries_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_onchain_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "dependency_scripts" */
export type Dependency_Scripts = {
  __typename?: 'dependency_scripts';
  address: Scalars['String']['output'];
  dependency_name_and_version: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  script: Scalars['String']['output'];
};

/** aggregated selection of "dependency_scripts" */
export type Dependency_Scripts_Aggregate = {
  __typename?: 'dependency_scripts_aggregate';
  aggregate?: Maybe<Dependency_Scripts_Aggregate_Fields>;
  nodes: Array<Dependency_Scripts>;
};

export type Dependency_Scripts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Dependency_Scripts_Aggregate_Bool_Exp_Count>;
};

export type Dependency_Scripts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Dependency_Scripts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dependency_Scripts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "dependency_scripts" */
export type Dependency_Scripts_Aggregate_Fields = {
  __typename?: 'dependency_scripts_aggregate_fields';
  avg?: Maybe<Dependency_Scripts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dependency_Scripts_Max_Fields>;
  min?: Maybe<Dependency_Scripts_Min_Fields>;
  stddev?: Maybe<Dependency_Scripts_Stddev_Fields>;
  stddev_pop?: Maybe<Dependency_Scripts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dependency_Scripts_Stddev_Samp_Fields>;
  sum?: Maybe<Dependency_Scripts_Sum_Fields>;
  var_pop?: Maybe<Dependency_Scripts_Var_Pop_Fields>;
  var_samp?: Maybe<Dependency_Scripts_Var_Samp_Fields>;
  variance?: Maybe<Dependency_Scripts_Variance_Fields>;
};


/** aggregate fields of "dependency_scripts" */
export type Dependency_Scripts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dependency_Scripts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "dependency_scripts" */
export type Dependency_Scripts_Aggregate_Order_By = {
  avg?: InputMaybe<Dependency_Scripts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dependency_Scripts_Max_Order_By>;
  min?: InputMaybe<Dependency_Scripts_Min_Order_By>;
  stddev?: InputMaybe<Dependency_Scripts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dependency_Scripts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dependency_Scripts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dependency_Scripts_Sum_Order_By>;
  var_pop?: InputMaybe<Dependency_Scripts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dependency_Scripts_Var_Samp_Order_By>;
  variance?: InputMaybe<Dependency_Scripts_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dependency_Scripts_Avg_Fields = {
  __typename?: 'dependency_scripts_avg_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dependency_scripts". All fields are combined with a logical 'AND'. */
export type Dependency_Scripts_Bool_Exp = {
  _and?: InputMaybe<Array<Dependency_Scripts_Bool_Exp>>;
  _not?: InputMaybe<Dependency_Scripts_Bool_Exp>;
  _or?: InputMaybe<Array<Dependency_Scripts_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  dependency_name_and_version?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  script?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dependency_Scripts_Max_Fields = {
  __typename?: 'dependency_scripts_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  script?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dependency_Scripts_Min_Fields = {
  __typename?: 'dependency_scripts_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  script?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dependency_scripts". */
export type Dependency_Scripts_Order_By = {
  address?: InputMaybe<Order_By>;
  dependency_name_and_version?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
};

/** select columns of table "dependency_scripts" */
export enum Dependency_Scripts_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  DependencyNameAndVersion = 'dependency_name_and_version',
  /** column name */
  Index = 'index',
  /** column name */
  Script = 'script'
}

/** aggregate stddev on columns */
export type Dependency_Scripts_Stddev_Fields = {
  __typename?: 'dependency_scripts_stddev_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dependency_Scripts_Stddev_Pop_Fields = {
  __typename?: 'dependency_scripts_stddev_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dependency_Scripts_Stddev_Samp_Fields = {
  __typename?: 'dependency_scripts_stddev_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "dependency_scripts" */
export type Dependency_Scripts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dependency_Scripts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dependency_Scripts_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  dependency_name_and_version?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  script?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Dependency_Scripts_Sum_Fields = {
  __typename?: 'dependency_scripts_sum_fields';
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Dependency_Scripts_Var_Pop_Fields = {
  __typename?: 'dependency_scripts_var_pop_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dependency_Scripts_Var_Samp_Fields = {
  __typename?: 'dependency_scripts_var_samp_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dependency_Scripts_Variance_Fields = {
  __typename?: 'dependency_scripts_variance_fields';
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "dependency_scripts" */
export type Dependency_Scripts_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** This table stores rows of metadata tags associated with all projects. */
export type Entity_Tags = {
  __typename?: 'entity_tags';
  id: Scalars['Int']['output'];
  /** An object relationship */
  project?: Maybe<Projects_Metadata>;
  project_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  tag?: Maybe<Tags>;
  tag_name: Scalars['String']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_address?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "entity_tags" */
export type Entity_Tags_Aggregate_Order_By = {
  avg?: InputMaybe<Entity_Tags_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Entity_Tags_Max_Order_By>;
  min?: InputMaybe<Entity_Tags_Min_Order_By>;
  stddev?: InputMaybe<Entity_Tags_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Entity_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Entity_Tags_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Entity_Tags_Sum_Order_By>;
  var_pop?: InputMaybe<Entity_Tags_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Entity_Tags_Var_Samp_Order_By>;
  variance?: InputMaybe<Entity_Tags_Variance_Order_By>;
};

/** order by avg() on columns of table "entity_tags" */
export type Entity_Tags_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "entity_tags". All fields are combined with a logical 'AND'. */
export type Entity_Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Entity_Tags_Bool_Exp>>;
  _not?: InputMaybe<Entity_Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Entity_Tags_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tag_name?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "entity_tags" */
export type Entity_Tags_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  tag_name?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "entity_tags" */
export type Entity_Tags_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  tag_name?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "entity_tags". */
export type Entity_Tags_Order_By = {
  id?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tags_Order_By>;
  tag_name?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** select columns of table "entity_tags" */
export enum Entity_Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  TagName = 'tag_name',
  /** column name */
  UserAddress = 'user_address'
}

/** order by stddev() on columns of table "entity_tags" */
export type Entity_Tags_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "entity_tags" */
export type Entity_Tags_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "entity_tags" */
export type Entity_Tags_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "entity_tags" */
export type Entity_Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entity_Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entity_Tags_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  tag_name?: InputMaybe<Scalars['String']['input']>;
  user_address?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "entity_tags" */
export type Entity_Tags_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "entity_tags" */
export type Entity_Tags_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "entity_tags" */
export type Entity_Tags_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "entity_tags" */
export type Entity_Tags_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** This table lists a users’ favorites (tokens, projects, other users) */
export type Favorites = {
  __typename?: 'favorites';
  favorited_project_id?: Maybe<Scalars['String']['output']>;
  favorited_token_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  favorited_user?: Maybe<Users>;
  favorited_user_address?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  project_metadata?: Maybe<Projects_Metadata>;
  /** An object relationship */
  token_metadata?: Maybe<Tokens_Metadata>;
  /** An object relationship */
  user: Users;
  user_public_address: Scalars['String']['output'];
};

/** aggregated selection of "favorites" */
export type Favorites_Aggregate = {
  __typename?: 'favorites_aggregate';
  aggregate?: Maybe<Favorites_Aggregate_Fields>;
  nodes: Array<Favorites>;
};

export type Favorites_Aggregate_Bool_Exp = {
  count?: InputMaybe<Favorites_Aggregate_Bool_Exp_Count>;
};

export type Favorites_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Favorites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Favorites_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "favorites" */
export type Favorites_Aggregate_Fields = {
  __typename?: 'favorites_aggregate_fields';
  avg?: Maybe<Favorites_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Favorites_Max_Fields>;
  min?: Maybe<Favorites_Min_Fields>;
  stddev?: Maybe<Favorites_Stddev_Fields>;
  stddev_pop?: Maybe<Favorites_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Favorites_Stddev_Samp_Fields>;
  sum?: Maybe<Favorites_Sum_Fields>;
  var_pop?: Maybe<Favorites_Var_Pop_Fields>;
  var_samp?: Maybe<Favorites_Var_Samp_Fields>;
  variance?: Maybe<Favorites_Variance_Fields>;
};


/** aggregate fields of "favorites" */
export type Favorites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Favorites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "favorites" */
export type Favorites_Aggregate_Order_By = {
  avg?: InputMaybe<Favorites_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Favorites_Max_Order_By>;
  min?: InputMaybe<Favorites_Min_Order_By>;
  stddev?: InputMaybe<Favorites_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Favorites_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Favorites_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Favorites_Sum_Order_By>;
  var_pop?: InputMaybe<Favorites_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Favorites_Var_Samp_Order_By>;
  variance?: InputMaybe<Favorites_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Favorites_Avg_Fields = {
  __typename?: 'favorites_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "favorites" */
export type Favorites_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "favorites". All fields are combined with a logical 'AND'. */
export type Favorites_Bool_Exp = {
  _and?: InputMaybe<Array<Favorites_Bool_Exp>>;
  _not?: InputMaybe<Favorites_Bool_Exp>;
  _or?: InputMaybe<Array<Favorites_Bool_Exp>>;
  favorited_project_id?: InputMaybe<String_Comparison_Exp>;
  favorited_token_id?: InputMaybe<String_Comparison_Exp>;
  favorited_user?: InputMaybe<Users_Bool_Exp>;
  favorited_user_address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  project_metadata?: InputMaybe<Projects_Metadata_Bool_Exp>;
  token_metadata?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_public_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Favorites_Max_Fields = {
  __typename?: 'favorites_max_fields';
  favorited_project_id?: Maybe<Scalars['String']['output']>;
  favorited_token_id?: Maybe<Scalars['String']['output']>;
  favorited_user_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_public_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "favorites" */
export type Favorites_Max_Order_By = {
  favorited_project_id?: InputMaybe<Order_By>;
  favorited_token_id?: InputMaybe<Order_By>;
  favorited_user_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_public_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Favorites_Min_Fields = {
  __typename?: 'favorites_min_fields';
  favorited_project_id?: Maybe<Scalars['String']['output']>;
  favorited_token_id?: Maybe<Scalars['String']['output']>;
  favorited_user_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_public_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "favorites" */
export type Favorites_Min_Order_By = {
  favorited_project_id?: InputMaybe<Order_By>;
  favorited_token_id?: InputMaybe<Order_By>;
  favorited_user_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_public_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "favorites". */
export type Favorites_Order_By = {
  favorited_project_id?: InputMaybe<Order_By>;
  favorited_token_id?: InputMaybe<Order_By>;
  favorited_user?: InputMaybe<Users_Order_By>;
  favorited_user_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_metadata?: InputMaybe<Projects_Metadata_Order_By>;
  token_metadata?: InputMaybe<Tokens_Metadata_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_public_address?: InputMaybe<Order_By>;
};

/** select columns of table "favorites" */
export enum Favorites_Select_Column {
  /** column name */
  FavoritedProjectId = 'favorited_project_id',
  /** column name */
  FavoritedTokenId = 'favorited_token_id',
  /** column name */
  FavoritedUserAddress = 'favorited_user_address',
  /** column name */
  Id = 'id',
  /** column name */
  UserPublicAddress = 'user_public_address'
}

/** aggregate stddev on columns */
export type Favorites_Stddev_Fields = {
  __typename?: 'favorites_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "favorites" */
export type Favorites_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Favorites_Stddev_Pop_Fields = {
  __typename?: 'favorites_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "favorites" */
export type Favorites_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Favorites_Stddev_Samp_Fields = {
  __typename?: 'favorites_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "favorites" */
export type Favorites_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "favorites" */
export type Favorites_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Favorites_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Favorites_Stream_Cursor_Value_Input = {
  favorited_project_id?: InputMaybe<Scalars['String']['input']>;
  favorited_token_id?: InputMaybe<Scalars['String']['input']>;
  favorited_user_address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user_public_address?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Favorites_Sum_Fields = {
  __typename?: 'favorites_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "favorites" */
export type Favorites_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Favorites_Var_Pop_Fields = {
  __typename?: 'favorites_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "favorites" */
export type Favorites_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Favorites_Var_Samp_Fields = {
  __typename?: 'favorites_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "favorites" */
export type Favorites_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Favorites_Variance_Fields = {
  __typename?: 'favorites_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "favorites" */
export type Favorites_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "feature_flags" */
export type Feature_Flags = {
  __typename?: 'feature_flags';
  flag_name: Scalars['String']['output'];
  globally_enabled: Scalars['Boolean']['output'];
};

/** Boolean expression to filter rows from the table "feature_flags". All fields are combined with a logical 'AND'. */
export type Feature_Flags_Bool_Exp = {
  _and?: InputMaybe<Array<Feature_Flags_Bool_Exp>>;
  _not?: InputMaybe<Feature_Flags_Bool_Exp>;
  _or?: InputMaybe<Array<Feature_Flags_Bool_Exp>>;
  flag_name?: InputMaybe<String_Comparison_Exp>;
  globally_enabled?: InputMaybe<Boolean_Comparison_Exp>;
};

/** Ordering options when selecting data from "feature_flags". */
export type Feature_Flags_Order_By = {
  flag_name?: InputMaybe<Order_By>;
  globally_enabled?: InputMaybe<Order_By>;
};

/** select columns of table "feature_flags" */
export enum Feature_Flags_Select_Column {
  /** column name */
  FlagName = 'flag_name',
  /** column name */
  GloballyEnabled = 'globally_enabled'
}

/** Streaming cursor of the table "feature_flags" */
export type Feature_Flags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feature_Flags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feature_Flags_Stream_Cursor_Value_Input = {
  flag_name?: InputMaybe<Scalars['String']['input']>;
  globally_enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Featured_Token_Projects_Metadata_Args = {
  seed?: InputMaybe<Scalars['float8']['input']>;
};

export type Filter_Tokens_Metadata_By_Features_Args = {
  path?: InputMaybe<Scalars['jsonpath']['input']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

export type List_Projects_Metadata_Random_Args = {
  seed?: InputMaybe<Scalars['seed_float']['input']>;
};

/** This table details the rendered image files, and all other media assets, for Art Blocks and all Engine partners. */
export type Media = {
  __typename?: 'media';
  bucket_name: Scalars['String']['output'];
  /** A computed field, executes function "media_extension" */
  extension?: Maybe<Scalars['String']['output']>;
  file_path: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  owner_id?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "media_url" */
  url?: Maybe<Scalars['String']['output']>;
};


/** This table details the rendered image files, and all other media assets, for Art Blocks and all Engine partners. */
export type MediaMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "media". All fields are combined with a logical 'AND'. */
export type Media_Bool_Exp = {
  _and?: InputMaybe<Array<Media_Bool_Exp>>;
  _not?: InputMaybe<Media_Bool_Exp>;
  _or?: InputMaybe<Array<Media_Bool_Exp>>;
  bucket_name?: InputMaybe<String_Comparison_Exp>;
  extension?: InputMaybe<String_Comparison_Exp>;
  file_path?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "media". */
export type Media_Order_By = {
  bucket_name?: InputMaybe<Order_By>;
  extension?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "media" */
export enum Media_Select_Column {
  /** column name */
  BucketName = 'bucket_name',
  /** column name */
  FilePath = 'file_path',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  OwnerId = 'owner_id'
}

/** Streaming cursor of the table "media" */
export type Media_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Media_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Media_Stream_Cursor_Value_Input = {
  bucket_name?: InputMaybe<Scalars['String']['input']>;
  file_path?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
};

/** Enumeration of minter filter types */
export type Minter_Filter_Type_Names = {
  __typename?: 'minter_filter_type_names';
  name: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "minter_filter_type_names". All fields are combined with a logical 'AND'. */
export type Minter_Filter_Type_Names_Bool_Exp = {
  _and?: InputMaybe<Array<Minter_Filter_Type_Names_Bool_Exp>>;
  _not?: InputMaybe<Minter_Filter_Type_Names_Bool_Exp>;
  _or?: InputMaybe<Array<Minter_Filter_Type_Names_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

export enum Minter_Filter_Type_Names_Enum {
  MinterFilterV0 = 'MinterFilterV0',
  MinterFilterV1 = 'MinterFilterV1',
  MinterFilterV2 = 'MinterFilterV2',
  Unknown = 'UNKNOWN'
}

/** Boolean expression to compare columns of type "minter_filter_type_names_enum". All fields are combined with logical 'AND'. */
export type Minter_Filter_Type_Names_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Minter_Filter_Type_Names_Enum>;
  _in?: InputMaybe<Array<Minter_Filter_Type_Names_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Minter_Filter_Type_Names_Enum>;
  _nin?: InputMaybe<Array<Minter_Filter_Type_Names_Enum>>;
};

/** Ordering options when selecting data from "minter_filter_type_names". */
export type Minter_Filter_Type_Names_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** select columns of table "minter_filter_type_names" */
export enum Minter_Filter_Type_Names_Select_Column {
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "minter_filter_type_names" */
export type Minter_Filter_Type_Names_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Minter_Filter_Type_Names_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Minter_Filter_Type_Names_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Newly-deployed minters (ie. Set Price minter, Dutch Auction with Settlement minter, etc) must be approved by the Art Blocks minter-filter contract before they may be included for purchasing on an artist’s project. This table tracks a minter-filter’s approved contracts. */
export type Minter_Filters_Metadata = {
  __typename?: 'minter_filters_metadata';
  address: Scalars['String']['output'];
  core_registry_address?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "select_minterfilter_allowed_minters" */
  globally_allowed_minters?: Maybe<Array<Minters_Metadata>>;
  /** An array relationship */
  known_minters: Array<Minters_Metadata>;
  type?: Maybe<Minter_Filter_Type_Names_Enum>;
};


/** Newly-deployed minters (ie. Set Price minter, Dutch Auction with Settlement minter, etc) must be approved by the Art Blocks minter-filter contract before they may be included for purchasing on an artist’s project. This table tracks a minter-filter’s approved contracts. */
export type Minter_Filters_MetadataGlobally_Allowed_MintersArgs = {
  distinct_on?: InputMaybe<Array<Minters_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minters_Metadata_Order_By>>;
  where?: InputMaybe<Minters_Metadata_Bool_Exp>;
};


/** Newly-deployed minters (ie. Set Price minter, Dutch Auction with Settlement minter, etc) must be approved by the Art Blocks minter-filter contract before they may be included for purchasing on an artist’s project. This table tracks a minter-filter’s approved contracts. */
export type Minter_Filters_MetadataKnown_MintersArgs = {
  distinct_on?: InputMaybe<Array<Minters_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minters_Metadata_Order_By>>;
  where?: InputMaybe<Minters_Metadata_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "minter_filters_metadata". All fields are combined with a logical 'AND'. */
export type Minter_Filters_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Minter_Filters_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Minter_Filters_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Minter_Filters_Metadata_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  core_registry_address?: InputMaybe<String_Comparison_Exp>;
  globally_allowed_minters?: InputMaybe<Minters_Metadata_Bool_Exp>;
  known_minters?: InputMaybe<Minters_Metadata_Bool_Exp>;
  type?: InputMaybe<Minter_Filter_Type_Names_Enum_Comparison_Exp>;
};

/** Ordering options when selecting data from "minter_filters_metadata". */
export type Minter_Filters_Metadata_Order_By = {
  address?: InputMaybe<Order_By>;
  core_registry_address?: InputMaybe<Order_By>;
  globally_allowed_minters_aggregate?: InputMaybe<Minters_Metadata_Aggregate_Order_By>;
  known_minters_aggregate?: InputMaybe<Minters_Metadata_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "minter_filters_metadata" */
export enum Minter_Filters_Metadata_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CoreRegistryAddress = 'core_registry_address',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "minter_filters_metadata" */
export type Minter_Filters_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Minter_Filters_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Minter_Filters_Metadata_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  core_registry_address?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Minter_Filter_Type_Names_Enum>;
};

export enum Minter_Type_Names_Enum {
  MinterDaExpHolderV5 = 'MinterDAExpHolderV5',
  MinterDaExpSettlementV0 = 'MinterDAExpSettlementV0',
  MinterDaExpSettlementV1 = 'MinterDAExpSettlementV1',
  MinterDaExpSettlementV2 = 'MinterDAExpSettlementV2',
  MinterDaExpSettlementV3 = 'MinterDAExpSettlementV3',
  MinterDaExpV0 = 'MinterDAExpV0',
  MinterDaExpV1 = 'MinterDAExpV1',
  MinterDaExpV2 = 'MinterDAExpV2',
  MinterDaExpV4 = 'MinterDAExpV4',
  MinterDaExpV5 = 'MinterDAExpV5',
  MinterDaLinHolderV5 = 'MinterDALinHolderV5',
  MinterDaLinV0 = 'MinterDALinV0',
  MinterDaLinV1 = 'MinterDALinV1',
  MinterDaLinV2 = 'MinterDALinV2',
  MinterDaLinV3 = 'MinterDALinV3',
  MinterDaLinV4 = 'MinterDALinV4',
  MinterDaLinV5 = 'MinterDALinV5',
  MinterHolderV0 = 'MinterHolderV0',
  MinterHolderV1 = 'MinterHolderV1',
  MinterHolderV2 = 'MinterHolderV2',
  MinterHolderV4 = 'MinterHolderV4',
  MinterMerkleV0 = 'MinterMerkleV0',
  MinterMerkleV1 = 'MinterMerkleV1',
  MinterMerkleV2 = 'MinterMerkleV2',
  MinterMerkleV3 = 'MinterMerkleV3',
  MinterMerkleV5 = 'MinterMerkleV5',
  MinterPolyptychV0 = 'MinterPolyptychV0',
  MinterSeav0 = 'MinterSEAV0',
  MinterSetPriceErc20V0 = 'MinterSetPriceERC20V0',
  MinterSetPriceErc20V1 = 'MinterSetPriceERC20V1',
  MinterSetPriceErc20V2 = 'MinterSetPriceERC20V2',
  MinterSetPriceErc20V4 = 'MinterSetPriceERC20V4',
  MinterSetPriceErc20V5 = 'MinterSetPriceERC20V5',
  MinterSetPriceHolderV5 = 'MinterSetPriceHolderV5',
  MinterSetPriceMerkleV5 = 'MinterSetPriceMerkleV5',
  MinterSetPricePolyptychErc20V5 = 'MinterSetPricePolyptychERC20V5',
  MinterSetPricePolyptychV5 = 'MinterSetPricePolyptychV5',
  MinterSetPriceV0 = 'MinterSetPriceV0',
  MinterSetPriceV1 = 'MinterSetPriceV1',
  MinterSetPriceV2 = 'MinterSetPriceV2',
  MinterSetPriceV4 = 'MinterSetPriceV4',
  MinterSetPriceV5 = 'MinterSetPriceV5'
}

/** Boolean expression to compare columns of type "minter_type_names_enum". All fields are combined with logical 'AND'. */
export type Minter_Type_Names_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Minter_Type_Names_Enum>;
  _in?: InputMaybe<Array<Minter_Type_Names_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Minter_Type_Names_Enum>;
  _nin?: InputMaybe<Array<Minter_Type_Names_Enum>>;
};

/** Minters are versioned within this table, and the metadata (ie. labels & descriptions) describing the functionality/features of a particular minter version are listed here. Data is updated after the AB team deploys a new generic minter type to the blockchain and public subgraph. */
export type Minter_Types = {
  __typename?: 'minter_types';
  active: Scalars['Boolean']['output'];
  description_template: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  project_configuration_schema: Scalars['jsonb']['output'];
  type: Minter_Type_Names_Enum;
  /** A computed field, executes function "minter_type_unversioned" */
  unversioned_type?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "minter_type_version_number" */
  version_number?: Maybe<Scalars['Int']['output']>;
};


/** Minters are versioned within this table, and the metadata (ie. labels & descriptions) describing the functionality/features of a particular minter version are listed here. Data is updated after the AB team deploys a new generic minter type to the blockchain and public subgraph. */
export type Minter_TypesProject_Configuration_SchemaArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "minter_types". All fields are combined with a logical 'AND'. */
export type Minter_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Minter_Types_Bool_Exp>>;
  _not?: InputMaybe<Minter_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Minter_Types_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  description_template?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  project_configuration_schema?: InputMaybe<Jsonb_Comparison_Exp>;
  type?: InputMaybe<Minter_Type_Names_Enum_Comparison_Exp>;
  unversioned_type?: InputMaybe<String_Comparison_Exp>;
  version_number?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "minter_types". */
export type Minter_Types_Order_By = {
  active?: InputMaybe<Order_By>;
  description_template?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  project_configuration_schema?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  unversioned_type?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** select columns of table "minter_types" */
export enum Minter_Types_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  DescriptionTemplate = 'description_template',
  /** column name */
  Label = 'label',
  /** column name */
  ProjectConfigurationSchema = 'project_configuration_schema',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "minter_types" */
export type Minter_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Minter_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Minter_Types_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description_template?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  project_configuration_schema?: InputMaybe<Scalars['jsonb']['input']>;
  type?: InputMaybe<Minter_Type_Names_Enum>;
};

/** This table details the auction and metadata pertaining to Art Blocks “minters” - or, the varieties of purchasing mechanics available for projects. Data is updated after the AB team deploys a new generic minter type to the blockchain and public subgraph. */
export type Minters_Metadata = {
  __typename?: 'minters_metadata';
  address: Scalars['String']['output'];
  extra_minter_details?: Maybe<Scalars['jsonb']['output']>;
  is_globally_allowlisted_on_minter_filter: Scalars['Boolean']['output'];
  /** An object relationship */
  minter_filter?: Maybe<Minter_Filters_Metadata>;
  minter_filter_address: Scalars['String']['output'];
  minter_type: Minter_Type_Names_Enum;
  /** An array relationship */
  receipts: Array<Receipt_Metadata>;
  /** An aggregate relationship */
  receipts_aggregate: Receipt_Metadata_Aggregate;
  /** An object relationship */
  type?: Maybe<Minter_Types>;
};


/** This table details the auction and metadata pertaining to Art Blocks “minters” - or, the varieties of purchasing mechanics available for projects. Data is updated after the AB team deploys a new generic minter type to the blockchain and public subgraph. */
export type Minters_MetadataExtra_Minter_DetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** This table details the auction and metadata pertaining to Art Blocks “minters” - or, the varieties of purchasing mechanics available for projects. Data is updated after the AB team deploys a new generic minter type to the blockchain and public subgraph. */
export type Minters_MetadataReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


/** This table details the auction and metadata pertaining to Art Blocks “minters” - or, the varieties of purchasing mechanics available for projects. Data is updated after the AB team deploys a new generic minter type to the blockchain and public subgraph. */
export type Minters_MetadataReceipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};

/** order by aggregate values of table "minters_metadata" */
export type Minters_Metadata_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Minters_Metadata_Max_Order_By>;
  min?: InputMaybe<Minters_Metadata_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "minters_metadata". All fields are combined with a logical 'AND'. */
export type Minters_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Minters_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Minters_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Minters_Metadata_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  extra_minter_details?: InputMaybe<Jsonb_Comparison_Exp>;
  is_globally_allowlisted_on_minter_filter?: InputMaybe<Boolean_Comparison_Exp>;
  minter_filter?: InputMaybe<Minter_Filters_Metadata_Bool_Exp>;
  minter_filter_address?: InputMaybe<String_Comparison_Exp>;
  minter_type?: InputMaybe<Minter_Type_Names_Enum_Comparison_Exp>;
  receipts?: InputMaybe<Receipt_Metadata_Bool_Exp>;
  receipts_aggregate?: InputMaybe<Receipt_Metadata_Aggregate_Bool_Exp>;
  type?: InputMaybe<Minter_Types_Bool_Exp>;
};

/** order by max() on columns of table "minters_metadata" */
export type Minters_Metadata_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  minter_filter_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "minters_metadata" */
export type Minters_Metadata_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  minter_filter_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "minters_metadata". */
export type Minters_Metadata_Order_By = {
  address?: InputMaybe<Order_By>;
  extra_minter_details?: InputMaybe<Order_By>;
  is_globally_allowlisted_on_minter_filter?: InputMaybe<Order_By>;
  minter_filter?: InputMaybe<Minter_Filters_Metadata_Order_By>;
  minter_filter_address?: InputMaybe<Order_By>;
  minter_type?: InputMaybe<Order_By>;
  receipts_aggregate?: InputMaybe<Receipt_Metadata_Aggregate_Order_By>;
  type?: InputMaybe<Minter_Types_Order_By>;
};

/** select columns of table "minters_metadata" */
export enum Minters_Metadata_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ExtraMinterDetails = 'extra_minter_details',
  /** column name */
  IsGloballyAllowlistedOnMinterFilter = 'is_globally_allowlisted_on_minter_filter',
  /** column name */
  MinterFilterAddress = 'minter_filter_address',
  /** column name */
  MinterType = 'minter_type'
}

/** Streaming cursor of the table "minters_metadata" */
export type Minters_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Minters_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Minters_Metadata_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  extra_minter_details?: InputMaybe<Scalars['jsonb']['input']>;
  is_globally_allowlisted_on_minter_filter?: InputMaybe<Scalars['Boolean']['input']>;
  minter_filter_address?: InputMaybe<Scalars['String']['input']>;
  minter_type?: InputMaybe<Minter_Type_Names_Enum>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  authenticate?: Maybe<AuthenticateOutput>;
};


/** mutation root */
export type Mutation_RootAuthenticateArgs = {
  input: AuthenticateInput;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** Table for out-of-bounds tokens created for previewing upcoming projects */
export type Oob_Tokens_Metadata = {
  __typename?: 'oob_tokens_metadata';
  /** An object relationship */
  contract: Contracts_Metadata;
  contract_address: Scalars['String']['output'];
  /** An object relationship */
  gif?: Maybe<Media>;
  gif_id?: Maybe<Scalars['Int']['output']>;
  hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** An object relationship */
  image?: Maybe<Media>;
  image_id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "oob_live_view_path" */
  live_view_path?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_live_view_url" */
  live_view_url?: Maybe<Scalars['String']['output']>;
  /** a computed field that returns the media proxy url for this OOB token's statically rendered image */
  media_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_preview_asset_url" */
  preview_asset_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_primary_asset_url" */
  primary_asset_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  project: Projects_Metadata;
  project_id: Scalars['String']['output'];
  token_id: Scalars['Int']['output'];
  /** An object relationship */
  video?: Maybe<Media>;
  video_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Aggregate = {
  __typename?: 'oob_tokens_metadata_aggregate';
  aggregate?: Maybe<Oob_Tokens_Metadata_Aggregate_Fields>;
  nodes: Array<Oob_Tokens_Metadata>;
};

export type Oob_Tokens_Metadata_Aggregate_Bool_Exp = {
  count?: InputMaybe<Oob_Tokens_Metadata_Aggregate_Bool_Exp_Count>;
};

export type Oob_Tokens_Metadata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Aggregate_Fields = {
  __typename?: 'oob_tokens_metadata_aggregate_fields';
  avg?: Maybe<Oob_Tokens_Metadata_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Oob_Tokens_Metadata_Max_Fields>;
  min?: Maybe<Oob_Tokens_Metadata_Min_Fields>;
  stddev?: Maybe<Oob_Tokens_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Oob_Tokens_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Oob_Tokens_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Oob_Tokens_Metadata_Sum_Fields>;
  var_pop?: Maybe<Oob_Tokens_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Oob_Tokens_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Oob_Tokens_Metadata_Variance_Fields>;
};


/** aggregate fields of "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Aggregate_Order_By = {
  avg?: InputMaybe<Oob_Tokens_Metadata_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Oob_Tokens_Metadata_Max_Order_By>;
  min?: InputMaybe<Oob_Tokens_Metadata_Min_Order_By>;
  stddev?: InputMaybe<Oob_Tokens_Metadata_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Oob_Tokens_Metadata_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Oob_Tokens_Metadata_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Oob_Tokens_Metadata_Sum_Order_By>;
  var_pop?: InputMaybe<Oob_Tokens_Metadata_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Oob_Tokens_Metadata_Var_Samp_Order_By>;
  variance?: InputMaybe<Oob_Tokens_Metadata_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Oob_Tokens_Metadata_Avg_Fields = {
  __typename?: 'oob_tokens_metadata_avg_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Avg_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "oob_tokens_metadata". All fields are combined with a logical 'AND'. */
export type Oob_Tokens_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Oob_Tokens_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Oob_Tokens_Metadata_Bool_Exp>>;
  contract?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  gif?: InputMaybe<Media_Bool_Exp>;
  gif_id?: InputMaybe<Int_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<Media_Bool_Exp>;
  image_id?: InputMaybe<Int_Comparison_Exp>;
  live_view_path?: InputMaybe<String_Comparison_Exp>;
  live_view_url?: InputMaybe<String_Comparison_Exp>;
  media_url?: InputMaybe<String_Comparison_Exp>;
  preview_asset_url?: InputMaybe<String_Comparison_Exp>;
  primary_asset_url?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<Int_Comparison_Exp>;
  video?: InputMaybe<Media_Bool_Exp>;
  video_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Oob_Tokens_Metadata_Max_Fields = {
  __typename?: 'oob_tokens_metadata_max_fields';
  contract_address?: Maybe<Scalars['String']['output']>;
  gif_id?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "oob_live_view_path" */
  live_view_path?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_live_view_url" */
  live_view_url?: Maybe<Scalars['String']['output']>;
  /** a computed field that returns the media proxy url for this OOB token's statically rendered image */
  media_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_preview_asset_url" */
  preview_asset_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_primary_asset_url" */
  primary_asset_url?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  video_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Max_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  gif_id?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Oob_Tokens_Metadata_Min_Fields = {
  __typename?: 'oob_tokens_metadata_min_fields';
  contract_address?: Maybe<Scalars['String']['output']>;
  gif_id?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "oob_live_view_path" */
  live_view_path?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_live_view_url" */
  live_view_url?: Maybe<Scalars['String']['output']>;
  /** a computed field that returns the media proxy url for this OOB token's statically rendered image */
  media_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_preview_asset_url" */
  preview_asset_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "oob_primary_asset_url" */
  primary_asset_url?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  video_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Min_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  gif_id?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "oob_tokens_metadata". */
export type Oob_Tokens_Metadata_Order_By = {
  contract?: InputMaybe<Contracts_Metadata_Order_By>;
  contract_address?: InputMaybe<Order_By>;
  gif?: InputMaybe<Media_Order_By>;
  gif_id?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Media_Order_By>;
  image_id?: InputMaybe<Order_By>;
  live_view_path?: InputMaybe<Order_By>;
  live_view_url?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  preview_asset_url?: InputMaybe<Order_By>;
  primary_asset_url?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video?: InputMaybe<Media_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** select columns of table "oob_tokens_metadata" */
export enum Oob_Tokens_Metadata_Select_Column {
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  GifId = 'gif_id',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  VideoId = 'video_id'
}

/** aggregate stddev on columns */
export type Oob_Tokens_Metadata_Stddev_Fields = {
  __typename?: 'oob_tokens_metadata_stddev_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Stddev_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Oob_Tokens_Metadata_Stddev_Pop_Fields = {
  __typename?: 'oob_tokens_metadata_stddev_pop_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Stddev_Pop_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Oob_Tokens_Metadata_Stddev_Samp_Fields = {
  __typename?: 'oob_tokens_metadata_stddev_samp_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Stddev_Samp_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Oob_Tokens_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Oob_Tokens_Metadata_Stream_Cursor_Value_Input = {
  contract_address?: InputMaybe<Scalars['String']['input']>;
  gif_id?: InputMaybe<Scalars['Int']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['Int']['input']>;
  video_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Oob_Tokens_Metadata_Sum_Fields = {
  __typename?: 'oob_tokens_metadata_sum_fields';
  gif_id?: Maybe<Scalars['Int']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  video_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Sum_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Oob_Tokens_Metadata_Var_Pop_Fields = {
  __typename?: 'oob_tokens_metadata_var_pop_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Var_Pop_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Oob_Tokens_Metadata_Var_Samp_Fields = {
  __typename?: 'oob_tokens_metadata_var_samp_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Var_Samp_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Oob_Tokens_Metadata_Variance_Fields = {
  __typename?: 'oob_tokens_metadata_variance_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "oob_tokens_metadata" */
export type Oob_Tokens_Metadata_Variance_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Stores details about a token's primary purchase */
export type Primary_Purchases = {
  __typename?: 'primary_purchases';
  currency_address?: Maybe<Scalars['String']['output']>;
  currency_symbol?: Maybe<Scalars['String']['output']>;
  minter_address?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  token: Tokens_Metadata;
  token_id: Scalars['String']['output'];
  transaction_hash: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "primary_purchases". All fields are combined with a logical 'AND'. */
export type Primary_Purchases_Bool_Exp = {
  _and?: InputMaybe<Array<Primary_Purchases_Bool_Exp>>;
  _not?: InputMaybe<Primary_Purchases_Bool_Exp>;
  _or?: InputMaybe<Array<Primary_Purchases_Bool_Exp>>;
  currency_address?: InputMaybe<String_Comparison_Exp>;
  currency_symbol?: InputMaybe<String_Comparison_Exp>;
  minter_address?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "primary_purchases". */
export type Primary_Purchases_Order_By = {
  currency_address?: InputMaybe<Order_By>;
  currency_symbol?: InputMaybe<Order_By>;
  minter_address?: InputMaybe<Order_By>;
  token?: InputMaybe<Tokens_Metadata_Order_By>;
  token_id?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "primary_purchases" */
export enum Primary_Purchases_Select_Column {
  /** column name */
  CurrencyAddress = 'currency_address',
  /** column name */
  CurrencySymbol = 'currency_symbol',
  /** column name */
  MinterAddress = 'minter_address',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** Streaming cursor of the table "primary_purchases" */
export type Primary_Purchases_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Primary_Purchases_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Primary_Purchases_Stream_Cursor_Value_Input = {
  currency_address?: InputMaybe<Scalars['String']['input']>;
  currency_symbol?: InputMaybe<Scalars['String']['input']>;
  minter_address?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
};

/** This table tracks pending & completed "processing jobs" which are a batch of 40 tokens or less. Any given refresh request consists of one or many processing jobs. */
export type Processing_Jobs = {
  __typename?: 'processing_jobs';
  asset_type?: Maybe<Refresh_Asset_Types_Enum>;
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  refresh_request_id: Scalars['uuid']['output'];
  status: Processing_Jobs_Status_Types_Enum;
  submitted_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by aggregate values of table "processing_jobs" */
export type Processing_Jobs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Processing_Jobs_Max_Order_By>;
  min?: InputMaybe<Processing_Jobs_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "processing_jobs". All fields are combined with a logical 'AND'. */
export type Processing_Jobs_Bool_Exp = {
  _and?: InputMaybe<Array<Processing_Jobs_Bool_Exp>>;
  _not?: InputMaybe<Processing_Jobs_Bool_Exp>;
  _or?: InputMaybe<Array<Processing_Jobs_Bool_Exp>>;
  asset_type?: InputMaybe<Refresh_Asset_Types_Enum_Comparison_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  refresh_request_id?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<Processing_Jobs_Status_Types_Enum_Comparison_Exp>;
  submitted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "processing_jobs" */
export type Processing_Jobs_Max_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  refresh_request_id?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "processing_jobs" */
export type Processing_Jobs_Min_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  refresh_request_id?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "processing_jobs". */
export type Processing_Jobs_Order_By = {
  asset_type?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  refresh_request_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
};

/** select columns of table "processing_jobs" */
export enum Processing_Jobs_Select_Column {
  /** column name */
  AssetType = 'asset_type',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RefreshRequestId = 'refresh_request_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubmittedAt = 'submitted_at'
}

export enum Processing_Jobs_Status_Types_Enum {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** Boolean expression to compare columns of type "processing_jobs_status_types_enum". All fields are combined with logical 'AND'. */
export type Processing_Jobs_Status_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Processing_Jobs_Status_Types_Enum>;
  _in?: InputMaybe<Array<Processing_Jobs_Status_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Processing_Jobs_Status_Types_Enum>;
  _nin?: InputMaybe<Array<Processing_Jobs_Status_Types_Enum>>;
};

/** Streaming cursor of the table "processing_jobs" */
export type Processing_Jobs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Processing_Jobs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Processing_Jobs_Stream_Cursor_Value_Input = {
  asset_type?: InputMaybe<Refresh_Asset_Types_Enum>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  refresh_request_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Processing_Jobs_Status_Types_Enum>;
  submitted_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** This table stores metadata for accessing an external dependency for any given Engine Flex project. */
export type Project_External_Asset_Dependencies = {
  __typename?: 'project_external_asset_dependencies';
  bytecode_address?: Maybe<Scalars['String']['output']>;
  cid: Scalars['String']['output'];
  data?: Maybe<Scalars['String']['output']>;
  dependency_type: Project_External_Asset_Dependency_Types_Enum;
  index: Scalars['Int']['output'];
  /** An object relationship */
  project: Projects_Metadata;
  project_id: Scalars['String']['output'];
};

/** order by aggregate values of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Aggregate_Order_By = {
  avg?: InputMaybe<Project_External_Asset_Dependencies_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_External_Asset_Dependencies_Max_Order_By>;
  min?: InputMaybe<Project_External_Asset_Dependencies_Min_Order_By>;
  stddev?: InputMaybe<Project_External_Asset_Dependencies_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_External_Asset_Dependencies_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_External_Asset_Dependencies_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_External_Asset_Dependencies_Sum_Order_By>;
  var_pop?: InputMaybe<Project_External_Asset_Dependencies_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_External_Asset_Dependencies_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_External_Asset_Dependencies_Variance_Order_By>;
};

/** order by avg() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_external_asset_dependencies". All fields are combined with a logical 'AND'. */
export type Project_External_Asset_Dependencies_Bool_Exp = {
  _and?: InputMaybe<Array<Project_External_Asset_Dependencies_Bool_Exp>>;
  _not?: InputMaybe<Project_External_Asset_Dependencies_Bool_Exp>;
  _or?: InputMaybe<Array<Project_External_Asset_Dependencies_Bool_Exp>>;
  bytecode_address?: InputMaybe<String_Comparison_Exp>;
  cid?: InputMaybe<String_Comparison_Exp>;
  data?: InputMaybe<String_Comparison_Exp>;
  dependency_type?: InputMaybe<Project_External_Asset_Dependency_Types_Enum_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Max_Order_By = {
  bytecode_address?: InputMaybe<Order_By>;
  cid?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Min_Order_By = {
  bytecode_address?: InputMaybe<Order_By>;
  cid?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "project_external_asset_dependencies". */
export type Project_External_Asset_Dependencies_Order_By = {
  bytecode_address?: InputMaybe<Order_By>;
  cid?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  dependency_type?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** select columns of table "project_external_asset_dependencies" */
export enum Project_External_Asset_Dependencies_Select_Column {
  /** column name */
  BytecodeAddress = 'bytecode_address',
  /** column name */
  Cid = 'cid',
  /** column name */
  Data = 'data',
  /** column name */
  DependencyType = 'dependency_type',
  /** column name */
  Index = 'index',
  /** column name */
  ProjectId = 'project_id'
}

/** order by stddev() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_External_Asset_Dependencies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_External_Asset_Dependencies_Stream_Cursor_Value_Input = {
  bytecode_address?: InputMaybe<Scalars['String']['input']>;
  cid?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dependency_type?: InputMaybe<Project_External_Asset_Dependency_Types_Enum>;
  index?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "project_external_asset_dependencies" */
export type Project_External_Asset_Dependencies_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

export enum Project_External_Asset_Dependency_Types_Enum {
  Arweave = 'ARWEAVE',
  Ipfs = 'IPFS',
  Onchain = 'ONCHAIN'
}

/** Boolean expression to compare columns of type "project_external_asset_dependency_types_enum". All fields are combined with logical 'AND'. */
export type Project_External_Asset_Dependency_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Project_External_Asset_Dependency_Types_Enum>;
  _in?: InputMaybe<Array<Project_External_Asset_Dependency_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Project_External_Asset_Dependency_Types_Enum>;
  _nin?: InputMaybe<Array<Project_External_Asset_Dependency_Types_Enum>>;
};

/** This table holds metadata related to a minter that’s been configured by an artist for their project. Rows are added when an artist selects & assigns a minter type to their project that they’ve not previously used for the project in question. */
export type Project_Minter_Configurations = {
  __typename?: 'project_minter_configurations';
  /** A computed field, executes function "project_minter_config_auction_end_time" */
  auction_end_time?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "project_minter_config_auction_start_time" */
  auction_start_time?: Maybe<Scalars['timestamptz']['output']>;
  base_price?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_minter_configuration_complete" */
  complete?: Maybe<Scalars['Boolean']['output']>;
  currency_address: Scalars['String']['output'];
  currency_symbol: Scalars['String']['output'];
  extra_minter_details?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['String']['output'];
  max_invocations?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  minter?: Maybe<Minters_Metadata>;
  minter_id: Scalars['String']['output'];
  offchain_extra_minter_details?: Maybe<Scalars['jsonb']['output']>;
  price_is_configured: Scalars['Boolean']['output'];
  /** An object relationship */
  project?: Maybe<Projects_Metadata>;
  project_id: Scalars['String']['output'];
  properties_updated_at: Scalars['jsonb']['output'];
  purchase_to_disabled: Scalars['Boolean']['output'];
};


/** This table holds metadata related to a minter that’s been configured by an artist for their project. Rows are added when an artist selects & assigns a minter type to their project that they’ve not previously used for the project in question. */
export type Project_Minter_ConfigurationsExtra_Minter_DetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** This table holds metadata related to a minter that’s been configured by an artist for their project. Rows are added when an artist selects & assigns a minter type to their project that they’ve not previously used for the project in question. */
export type Project_Minter_ConfigurationsOffchain_Extra_Minter_DetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** This table holds metadata related to a minter that’s been configured by an artist for their project. Rows are added when an artist selects & assigns a minter type to their project that they’ve not previously used for the project in question. */
export type Project_Minter_ConfigurationsProperties_Updated_AtArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "project_minter_configurations". All fields are combined with a logical 'AND'. */
export type Project_Minter_Configurations_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Minter_Configurations_Bool_Exp>>;
  _not?: InputMaybe<Project_Minter_Configurations_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Minter_Configurations_Bool_Exp>>;
  auction_end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  auction_start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  base_price?: InputMaybe<String_Comparison_Exp>;
  complete?: InputMaybe<Boolean_Comparison_Exp>;
  currency_address?: InputMaybe<String_Comparison_Exp>;
  currency_symbol?: InputMaybe<String_Comparison_Exp>;
  extra_minter_details?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  max_invocations?: InputMaybe<Int_Comparison_Exp>;
  minter?: InputMaybe<Minters_Metadata_Bool_Exp>;
  minter_id?: InputMaybe<String_Comparison_Exp>;
  offchain_extra_minter_details?: InputMaybe<Jsonb_Comparison_Exp>;
  price_is_configured?: InputMaybe<Boolean_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  properties_updated_at?: InputMaybe<Jsonb_Comparison_Exp>;
  purchase_to_disabled?: InputMaybe<Boolean_Comparison_Exp>;
};

/** Ordering options when selecting data from "project_minter_configurations". */
export type Project_Minter_Configurations_Order_By = {
  auction_end_time?: InputMaybe<Order_By>;
  auction_start_time?: InputMaybe<Order_By>;
  base_price?: InputMaybe<Order_By>;
  complete?: InputMaybe<Order_By>;
  currency_address?: InputMaybe<Order_By>;
  currency_symbol?: InputMaybe<Order_By>;
  extra_minter_details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  minter?: InputMaybe<Minters_Metadata_Order_By>;
  minter_id?: InputMaybe<Order_By>;
  offchain_extra_minter_details?: InputMaybe<Order_By>;
  price_is_configured?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
  properties_updated_at?: InputMaybe<Order_By>;
  purchase_to_disabled?: InputMaybe<Order_By>;
};

/** select columns of table "project_minter_configurations" */
export enum Project_Minter_Configurations_Select_Column {
  /** column name */
  BasePrice = 'base_price',
  /** column name */
  CurrencyAddress = 'currency_address',
  /** column name */
  CurrencySymbol = 'currency_symbol',
  /** column name */
  ExtraMinterDetails = 'extra_minter_details',
  /** column name */
  Id = 'id',
  /** column name */
  MaxInvocations = 'max_invocations',
  /** column name */
  MinterId = 'minter_id',
  /** column name */
  OffchainExtraMinterDetails = 'offchain_extra_minter_details',
  /** column name */
  PriceIsConfigured = 'price_is_configured',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  PropertiesUpdatedAt = 'properties_updated_at',
  /** column name */
  PurchaseToDisabled = 'purchase_to_disabled'
}

/** Streaming cursor of the table "project_minter_configurations" */
export type Project_Minter_Configurations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Minter_Configurations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Minter_Configurations_Stream_Cursor_Value_Input = {
  base_price?: InputMaybe<Scalars['String']['input']>;
  currency_address?: InputMaybe<Scalars['String']['input']>;
  currency_symbol?: InputMaybe<Scalars['String']['input']>;
  extra_minter_details?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  max_invocations?: InputMaybe<Scalars['Int']['input']>;
  minter_id?: InputMaybe<Scalars['String']['input']>;
  offchain_extra_minter_details?: InputMaybe<Scalars['jsonb']['input']>;
  price_is_configured?: InputMaybe<Scalars['Boolean']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  properties_updated_at?: InputMaybe<Scalars['jsonb']['input']>;
  purchase_to_disabled?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This table holds the artist script files used for all projects (all scripts are primarily stored on-chain, and this table exists here for convenience purposes). Note that multiple scripts are combined when multiple indexes exist for a given projectID. This table is updated when an artist uploads, edits, or deletes a script in their project shell. */
export type Project_Scripts = {
  __typename?: 'project_scripts';
  index: Scalars['Int']['output'];
  /** An object relationship */
  project?: Maybe<Projects_Metadata>;
  project_id: Scalars['String']['output'];
  script: Scalars['String']['output'];
};

/** order by aggregate values of table "project_scripts" */
export type Project_Scripts_Aggregate_Order_By = {
  avg?: InputMaybe<Project_Scripts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Scripts_Max_Order_By>;
  min?: InputMaybe<Project_Scripts_Min_Order_By>;
  stddev?: InputMaybe<Project_Scripts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_Scripts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_Scripts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_Scripts_Sum_Order_By>;
  var_pop?: InputMaybe<Project_Scripts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_Scripts_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_Scripts_Variance_Order_By>;
};

/** order by avg() on columns of table "project_scripts" */
export type Project_Scripts_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_scripts". All fields are combined with a logical 'AND'. */
export type Project_Scripts_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Scripts_Bool_Exp>>;
  _not?: InputMaybe<Project_Scripts_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Scripts_Bool_Exp>>;
  index?: InputMaybe<Int_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  script?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "project_scripts" */
export type Project_Scripts_Max_Order_By = {
  index?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "project_scripts" */
export type Project_Scripts_Min_Order_By = {
  index?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "project_scripts". */
export type Project_Scripts_Order_By = {
  index?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
};

/** select columns of table "project_scripts" */
export enum Project_Scripts_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Script = 'script'
}

/** order by stddev() on columns of table "project_scripts" */
export type Project_Scripts_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "project_scripts" */
export type Project_Scripts_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "project_scripts" */
export type Project_Scripts_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "project_scripts" */
export type Project_Scripts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Scripts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Scripts_Stream_Cursor_Value_Input = {
  index?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  script?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "project_scripts" */
export type Project_Scripts_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "project_scripts" */
export type Project_Scripts_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "project_scripts" */
export type Project_Scripts_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "project_scripts" */
export type Project_Scripts_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** columns and relationships of "project_series" */
export type Project_Series = {
  __typename?: 'project_series';
  id: Scalars['Int']['output'];
  /** An array relationship */
  projects: Array<Projects_Metadata>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Metadata_Aggregate;
};


/** columns and relationships of "project_series" */
export type Project_SeriesProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


/** columns and relationships of "project_series" */
export type Project_SeriesProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};

/** aggregated selection of "project_series" */
export type Project_Series_Aggregate = {
  __typename?: 'project_series_aggregate';
  aggregate?: Maybe<Project_Series_Aggregate_Fields>;
  nodes: Array<Project_Series>;
};

/** aggregate fields of "project_series" */
export type Project_Series_Aggregate_Fields = {
  __typename?: 'project_series_aggregate_fields';
  avg?: Maybe<Project_Series_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Project_Series_Max_Fields>;
  min?: Maybe<Project_Series_Min_Fields>;
  stddev?: Maybe<Project_Series_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Series_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Series_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Series_Sum_Fields>;
  var_pop?: Maybe<Project_Series_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Series_Var_Samp_Fields>;
  variance?: Maybe<Project_Series_Variance_Fields>;
};


/** aggregate fields of "project_series" */
export type Project_Series_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Series_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Project_Series_Avg_Fields = {
  __typename?: 'project_series_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "project_series". All fields are combined with a logical 'AND'. */
export type Project_Series_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Series_Bool_Exp>>;
  _not?: InputMaybe<Project_Series_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Series_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  projects?: InputMaybe<Projects_Metadata_Bool_Exp>;
  projects_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Project_Series_Max_Fields = {
  __typename?: 'project_series_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Project_Series_Min_Fields = {
  __typename?: 'project_series_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "project_series". */
export type Project_Series_Order_By = {
  id?: InputMaybe<Order_By>;
  projects_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Order_By>;
};

/** select columns of table "project_series" */
export enum Project_Series_Select_Column {
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Project_Series_Stddev_Fields = {
  __typename?: 'project_series_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Project_Series_Stddev_Pop_Fields = {
  __typename?: 'project_series_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Project_Series_Stddev_Samp_Fields = {
  __typename?: 'project_series_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "project_series" */
export type Project_Series_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Series_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Series_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Project_Series_Sum_Fields = {
  __typename?: 'project_series_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Project_Series_Var_Pop_Fields = {
  __typename?: 'project_series_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Project_Series_Var_Samp_Fields = {
  __typename?: 'project_series_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Project_Series_Variance_Fields = {
  __typename?: 'project_series_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "project_vertical_categories" */
export type Project_Vertical_Categories = {
  __typename?: 'project_vertical_categories';
  /** An object relationship */
  category: Categories;
  hosted: Scalars['Boolean']['output'];
  name: Categories_Enum;
  /** An array relationship */
  verticals: Array<Project_Verticals>;
};


/** columns and relationships of "project_vertical_categories" */
export type Project_Vertical_CategoriesVerticalsArgs = {
  distinct_on?: InputMaybe<Array<Project_Verticals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Verticals_Order_By>>;
  where?: InputMaybe<Project_Verticals_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "project_vertical_categories". All fields are combined with a logical 'AND'. */
export type Project_Vertical_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Vertical_Categories_Bool_Exp>>;
  _not?: InputMaybe<Project_Vertical_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Vertical_Categories_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  hosted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<Categories_Enum_Comparison_Exp>;
  verticals?: InputMaybe<Project_Verticals_Bool_Exp>;
};

/** Ordering options when selecting data from "project_vertical_categories". */
export type Project_Vertical_Categories_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  hosted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  verticals_aggregate?: InputMaybe<Project_Verticals_Aggregate_Order_By>;
};

/** select columns of table "project_vertical_categories" */
export enum Project_Vertical_Categories_Select_Column {
  /** column name */
  Hosted = 'hosted',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "project_vertical_categories" */
export type Project_Vertical_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Vertical_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Vertical_Categories_Stream_Cursor_Value_Input = {
  hosted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Categories_Enum>;
};

/** columns and relationships of "project_verticals" */
export type Project_Verticals = {
  __typename?: 'project_verticals';
  active: Scalars['Boolean']['output'];
  /** An object relationship */
  category: Project_Vertical_Categories;
  category_name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  display_name: Scalars['String']['output'];
  name: Verticals_Enum;
  /** An array relationship */
  projects: Array<Projects_Metadata>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Metadata_Aggregate;
  /** An object relationship */
  vertical: Verticals;
};


/** columns and relationships of "project_verticals" */
export type Project_VerticalsProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


/** columns and relationships of "project_verticals" */
export type Project_VerticalsProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};

/** order by aggregate values of table "project_verticals" */
export type Project_Verticals_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Verticals_Max_Order_By>;
  min?: InputMaybe<Project_Verticals_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "project_verticals". All fields are combined with a logical 'AND'. */
export type Project_Verticals_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Verticals_Bool_Exp>>;
  _not?: InputMaybe<Project_Verticals_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Verticals_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  category?: InputMaybe<Project_Vertical_Categories_Bool_Exp>;
  category_name?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<Verticals_Enum_Comparison_Exp>;
  projects?: InputMaybe<Projects_Metadata_Bool_Exp>;
  projects_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Bool_Exp>;
  vertical?: InputMaybe<Verticals_Bool_Exp>;
};

/** order by max() on columns of table "project_verticals" */
export type Project_Verticals_Max_Order_By = {
  category_name?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "project_verticals" */
export type Project_Verticals_Min_Order_By = {
  category_name?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "project_verticals". */
export type Project_Verticals_Order_By = {
  active?: InputMaybe<Order_By>;
  category?: InputMaybe<Project_Vertical_Categories_Order_By>;
  category_name?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  projects_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Order_By>;
  vertical?: InputMaybe<Verticals_Order_By>;
};

/** select columns of table "project_verticals" */
export enum Project_Verticals_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "project_verticals" */
export type Project_Verticals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Verticals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Verticals_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  category_name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Verticals_Enum>;
};

/** Artists may choose to name arbitrary traits & patterns (“features”) within the outputs of their project. These features are listed here and calculated via the features_script. This table is updated when an artist uploads, edits, or deletes a feature in their project shell. */
export type Projects_Features = {
  __typename?: 'projects_features';
  enable_artist_update_after_completion: Scalars['Boolean']['output'];
  feature_fields?: Maybe<Scalars['jsonb']['output']>;
  /** A computed field, executes function "projects_features_feature_fields_counts" */
  feature_fields_counts?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  project: Projects_Metadata;
  project_id: Scalars['String']['output'];
};


/** Artists may choose to name arbitrary traits & patterns (“features”) within the outputs of their project. These features are listed here and calculated via the features_script. This table is updated when an artist uploads, edits, or deletes a feature in their project shell. */
export type Projects_FeaturesFeature_FieldsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** Artists may choose to name arbitrary traits & patterns (“features”) within the outputs of their project. These features are listed here and calculated via the features_script. This table is updated when an artist uploads, edits, or deletes a feature in their project shell. */
export type Projects_FeaturesFeature_Fields_CountsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "projects_features". All fields are combined with a logical 'AND'. */
export type Projects_Features_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Features_Bool_Exp>>;
  _not?: InputMaybe<Projects_Features_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Features_Bool_Exp>>;
  enable_artist_update_after_completion?: InputMaybe<Boolean_Comparison_Exp>;
  feature_fields?: InputMaybe<Jsonb_Comparison_Exp>;
  feature_fields_counts?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "projects_features". */
export type Projects_Features_Order_By = {
  enable_artist_update_after_completion?: InputMaybe<Order_By>;
  feature_fields?: InputMaybe<Order_By>;
  feature_fields_counts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** select columns of table "projects_features" */
export enum Projects_Features_Select_Column {
  /** column name */
  EnableArtistUpdateAfterCompletion = 'enable_artist_update_after_completion',
  /** column name */
  FeatureFields = 'feature_fields',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id'
}

/** Streaming cursor of the table "projects_features" */
export type Projects_Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Projects_Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Features_Stream_Cursor_Value_Input = {
  enable_artist_update_after_completion?: InputMaybe<Scalars['Boolean']['input']>;
  feature_fields?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
};

/** This table holds entries for every project and information on all project-related settings. */
export type Projects_Metadata = {
  __typename?: 'projects_metadata';
  activated_at?: Maybe<Scalars['timestamptz']['output']>;
  active: Scalars['Boolean']['output'];
  additional_payee?: Maybe<Scalars['String']['output']>;
  additional_payee_percentage?: Maybe<Scalars['Int']['output']>;
  additional_payee_secondary_sales_address?: Maybe<Scalars['String']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  additional_payee_splitter?: Maybe<Split_Atomic_Contracts>;
  /** An object relationship */
  artist: Users;
  artistPage?: Maybe<ArtistEditorialPageEntityResponseCollection>;
  artist_address: Scalars['String']['output'];
  artist_display_notes?: Maybe<Scalars['String']['output']>;
  artist_featured_token_id?: Maybe<Scalars['String']['output']>;
  artist_interview?: Maybe<Scalars['String']['output']>;
  artist_name?: Maybe<Scalars['String']['output']>;
  aspect_ratio: Scalars['numeric']['output'];
  /** A computed field, executes function "project_auction_end_time" */
  auction_end_time?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "project_auction_start_time" */
  auction_start_time?: Maybe<Scalars['timestamptz']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  bids: Array<Bids_Metadata>;
  /** An aggregate relationship */
  bids_aggregate: Bids_Metadata_Aggregate;
  canvas_mode?: Maybe<Scalars['Boolean']['output']>;
  charitable_giving_details?: Maybe<Scalars['String']['output']>;
  complete: Scalars['Boolean']['output'];
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  contract: Contracts_Metadata;
  contract_address: Scalars['String']['output'];
  creative_credit?: Maybe<Scalars['String']['output']>;
  curation_status: Curation_Statuses_Enum;
  /** A computed field, executes function "curation_status_display" */
  curation_status_display?: Maybe<Scalars['String']['output']>;
  curation_status_override?: Maybe<Curation_Statuses_Enum>;
  currency_address?: Maybe<Scalars['String']['output']>;
  currency_decimals?: Maybe<Scalars['Int']['output']>;
  currency_symbol?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  dependency?: Maybe<Dependencies_Metadata>;
  /** Returns 'script_type_and_version_override' for the project if available; otherwise, falls back to 'script_type_and_version' */
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  disable_auto_image_format?: Maybe<Scalars['Boolean']['output']>;
  disable_sample_generator: Scalars['Boolean']['output'];
  display_static: Scalars['Boolean']['output'];
  /** An array relationship */
  external_asset_dependencies: Array<Project_External_Asset_Dependencies>;
  external_asset_dependencies_locked?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_favorited_by_user" */
  favorited_by_user?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  favorites: Array<Favorites>;
  /** An aggregate relationship */
  favorites_aggregate: Favorites_Aggregate;
  /** A computed field, executes function "project_featured_token" */
  featured_token?: Maybe<Array<Tokens_Metadata>>;
  /** An object relationship */
  features?: Maybe<Projects_Features>;
  /** A computed field, executes function "first_token_minted_at" */
  first_token_minted_at?: Maybe<Scalars['timestamptz']['output']>;
  generate_video_assets: Scalars['Boolean']['output'];
  /** A computed field, executes function "project_heritage_status" */
  heritage_curation_status?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  ipfs_hash?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_is_flagship" */
  is_artblocks?: Maybe<Scalars['Boolean']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  link_to_license?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "calc_locked" */
  locked?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations: Scalars['Int']['output'];
  /** An object relationship */
  minter_configuration?: Maybe<Project_Minter_Configurations>;
  minter_configuration_id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  oob_tokens: Array<Oob_Tokens_Metadata>;
  /** An aggregate relationship */
  oob_tokens_aggregate: Oob_Tokens_Metadata_Aggregate;
  paused: Scalars['Boolean']['output'];
  preview_render_type: Render_Types_Enum;
  price_per_token_in_wei?: Maybe<Scalars['String']['output']>;
  primary_render_type: Render_Types_Enum;
  project_id: Scalars['String']['output'];
  properties_updated_at: Scalars['jsonb']['output'];
  /** An object relationship */
  proposed_artist_addresses_and_split?: Maybe<Proposed_Artist_Addresses_And_Splits>;
  proposed_artists_and_splits_id?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_random_oob_token" */
  random_oob_token?: Maybe<Array<Oob_Tokens_Metadata>>;
  /** A computed field, executes function "project_random_token" */
  random_token?: Maybe<Array<Tokens_Metadata>>;
  read_only_addresses?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  receipts: Array<Receipt_Metadata>;
  /** An aggregate relationship */
  receipts_aggregate: Receipt_Metadata_Aggregate;
  /** An array relationship */
  refresh_requests: Array<Refresh_Requests>;
  /** A computed field, executes function "project_render_complete" */
  render_complete?: Maybe<Scalars['Boolean']['output']>;
  render_delay?: Maybe<Scalars['Int']['output']>;
  render_with_gpu?: Maybe<Scalars['Boolean']['output']>;
  royalty_percentage?: Maybe<Scalars['Int']['output']>;
  sales_notes?: Maybe<Scalars['String']['output']>;
  script?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  script_json?: Maybe<Scalars['jsonb']['output']>;
  /** Indicates the script type and version (e.g., p5@1.0.0) assigned to the project on its core contract */
  script_type_and_version?: Maybe<Scalars['String']['output']>;
  /** Specifies the script type and version override for the project, as set on the Art Blocks dependency registry contract */
  script_type_and_version_override?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  scripts: Array<Project_Scripts>;
  /** A computed field, executes function "second_token_minted_at" */
  second_token_minted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  series?: Maybe<Project_Series>;
  series_id?: Maybe<Scalars['Int']['output']>;
  start_datetime?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  tags: Array<Entity_Tags>;
  /** An array relationship */
  tokens: Array<Tokens_Metadata>;
  /** An aggregate relationship */
  tokens_aggregate: Tokens_Metadata_Aggregate;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** A computed field, executes function "user_is_artist" */
  user_is_artist?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  vertical: Project_Verticals;
  vertical_name: Scalars['String']['output'];
  video_aspect_ratio?: Maybe<Scalars['numeric']['output']>;
  video_duration?: Maybe<Scalars['Int']['output']>;
  video_fps?: Maybe<Scalars['Int']['output']>;
  video_render_delay?: Maybe<Scalars['Int']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataArtistPageArgs = {
  filters?: InputMaybe<ArtistEditorialPageFiltersInput_Remote_Rel_Projects_MetadataartistPage>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataBidsArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataBids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataExternal_Asset_DependenciesArgs = {
  distinct_on?: InputMaybe<Array<Project_External_Asset_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_External_Asset_Dependencies_Order_By>>;
  where?: InputMaybe<Project_External_Asset_Dependencies_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataFavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataFavorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataFeatured_TokenArgs = {
  args?: InputMaybe<Featured_Token_Projects_Metadata_Args>;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataOob_TokensArgs = {
  distinct_on?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oob_Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataOob_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oob_Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataProperties_Updated_AtArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataRandom_Oob_TokenArgs = {
  args?: InputMaybe<Random_Oob_Token_Projects_Metadata_Args>;
  distinct_on?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oob_Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataRandom_TokenArgs = {
  args?: InputMaybe<Random_Token_Projects_Metadata_Args>;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataRead_Only_AddressesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataReceipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataRefresh_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refresh_Requests_Order_By>>;
  where?: InputMaybe<Refresh_Requests_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataScript_JsonArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataScriptsArgs = {
  distinct_on?: InputMaybe<Array<Project_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Scripts_Order_By>>;
  where?: InputMaybe<Project_Scripts_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataTagsArgs = {
  distinct_on?: InputMaybe<Array<Entity_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Tags_Order_By>>;
  where?: InputMaybe<Entity_Tags_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataTokensArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


/** This table holds entries for every project and information on all project-related settings. */
export type Projects_MetadataTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};

/** aggregated selection of "projects_metadata" */
export type Projects_Metadata_Aggregate = {
  __typename?: 'projects_metadata_aggregate';
  aggregate?: Maybe<Projects_Metadata_Aggregate_Fields>;
  nodes: Array<Projects_Metadata>;
};

export type Projects_Metadata_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Projects_Metadata_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Projects_Metadata_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Projects_Metadata_Aggregate_Bool_Exp_Count>;
};

export type Projects_Metadata_Aggregate_Bool_Exp_Bool_And = {
  arguments: Projects_Metadata_Select_Column_Projects_Metadata_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Projects_Metadata_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Projects_Metadata_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Projects_Metadata_Select_Column_Projects_Metadata_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Projects_Metadata_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Projects_Metadata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Projects_Metadata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "projects_metadata" */
export type Projects_Metadata_Aggregate_Fields = {
  __typename?: 'projects_metadata_aggregate_fields';
  avg?: Maybe<Projects_Metadata_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Projects_Metadata_Max_Fields>;
  min?: Maybe<Projects_Metadata_Min_Fields>;
  stddev?: Maybe<Projects_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Projects_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Projects_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Projects_Metadata_Sum_Fields>;
  var_pop?: Maybe<Projects_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Projects_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Projects_Metadata_Variance_Fields>;
};


/** aggregate fields of "projects_metadata" */
export type Projects_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "projects_metadata" */
export type Projects_Metadata_Aggregate_Order_By = {
  avg?: InputMaybe<Projects_Metadata_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Projects_Metadata_Max_Order_By>;
  min?: InputMaybe<Projects_Metadata_Min_Order_By>;
  stddev?: InputMaybe<Projects_Metadata_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Projects_Metadata_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Projects_Metadata_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Projects_Metadata_Sum_Order_By>;
  var_pop?: InputMaybe<Projects_Metadata_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Projects_Metadata_Var_Samp_Order_By>;
  variance?: InputMaybe<Projects_Metadata_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Projects_Metadata_Avg_Fields = {
  __typename?: 'projects_metadata_avg_fields';
  additional_payee_percentage?: Maybe<Scalars['Float']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Float']['output']>;
  aspect_ratio?: Maybe<Scalars['Float']['output']>;
  currency_decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Float']['output']>;
  render_delay?: Maybe<Scalars['Float']['output']>;
  royalty_percentage?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
  video_aspect_ratio?: Maybe<Scalars['Float']['output']>;
  video_duration?: Maybe<Scalars['Float']['output']>;
  video_fps?: Maybe<Scalars['Float']['output']>;
  video_render_delay?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "projects_metadata" */
export type Projects_Metadata_Avg_Order_By = {
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "projects_metadata". All fields are combined with a logical 'AND'. */
export type Projects_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Projects_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Metadata_Bool_Exp>>;
  activated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  additional_payee?: InputMaybe<String_Comparison_Exp>;
  additional_payee_percentage?: InputMaybe<Int_Comparison_Exp>;
  additional_payee_secondary_sales_address?: InputMaybe<String_Comparison_Exp>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Int_Comparison_Exp>;
  additional_payee_splitter?: InputMaybe<Split_Atomic_Contracts_Bool_Exp>;
  artist?: InputMaybe<Users_Bool_Exp>;
  artist_address?: InputMaybe<String_Comparison_Exp>;
  artist_display_notes?: InputMaybe<String_Comparison_Exp>;
  artist_featured_token_id?: InputMaybe<String_Comparison_Exp>;
  artist_interview?: InputMaybe<String_Comparison_Exp>;
  artist_name?: InputMaybe<String_Comparison_Exp>;
  aspect_ratio?: InputMaybe<Numeric_Comparison_Exp>;
  auction_end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  auction_start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  base_uri?: InputMaybe<String_Comparison_Exp>;
  bids?: InputMaybe<Bids_Metadata_Bool_Exp>;
  bids_aggregate?: InputMaybe<Bids_Metadata_Aggregate_Bool_Exp>;
  canvas_mode?: InputMaybe<Boolean_Comparison_Exp>;
  charitable_giving_details?: InputMaybe<String_Comparison_Exp>;
  complete?: InputMaybe<Boolean_Comparison_Exp>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  contract?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  creative_credit?: InputMaybe<String_Comparison_Exp>;
  curation_status?: InputMaybe<Curation_Statuses_Enum_Comparison_Exp>;
  curation_status_display?: InputMaybe<String_Comparison_Exp>;
  curation_status_override?: InputMaybe<Curation_Statuses_Enum_Comparison_Exp>;
  currency_address?: InputMaybe<String_Comparison_Exp>;
  currency_decimals?: InputMaybe<Int_Comparison_Exp>;
  currency_symbol?: InputMaybe<String_Comparison_Exp>;
  dependency?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
  dependency_name_and_version?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  disable_auto_image_format?: InputMaybe<Boolean_Comparison_Exp>;
  disable_sample_generator?: InputMaybe<Boolean_Comparison_Exp>;
  display_static?: InputMaybe<Boolean_Comparison_Exp>;
  external_asset_dependencies?: InputMaybe<Project_External_Asset_Dependencies_Bool_Exp>;
  external_asset_dependencies_locked?: InputMaybe<Boolean_Comparison_Exp>;
  external_asset_dependency_count?: InputMaybe<Bigint_Comparison_Exp>;
  favorited_by_user?: InputMaybe<Boolean_Comparison_Exp>;
  favorites?: InputMaybe<Favorites_Bool_Exp>;
  favorites_aggregate?: InputMaybe<Favorites_Aggregate_Bool_Exp>;
  features?: InputMaybe<Projects_Features_Bool_Exp>;
  first_token_minted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  generate_video_assets?: InputMaybe<Boolean_Comparison_Exp>;
  heritage_curation_status?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  invocations?: InputMaybe<Bigint_Comparison_Exp>;
  ipfs_hash?: InputMaybe<String_Comparison_Exp>;
  is_artblocks?: InputMaybe<Boolean_Comparison_Exp>;
  license?: InputMaybe<String_Comparison_Exp>;
  link_to_license?: InputMaybe<String_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  lowest_listing?: InputMaybe<Float8_Comparison_Exp>;
  max_invocations?: InputMaybe<Int_Comparison_Exp>;
  minter_configuration?: InputMaybe<Project_Minter_Configurations_Bool_Exp>;
  minter_configuration_id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  oob_tokens?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
  oob_tokens_aggregate?: InputMaybe<Oob_Tokens_Metadata_Aggregate_Bool_Exp>;
  paused?: InputMaybe<Boolean_Comparison_Exp>;
  preview_render_type?: InputMaybe<Render_Types_Enum_Comparison_Exp>;
  price_per_token_in_wei?: InputMaybe<String_Comparison_Exp>;
  primary_render_type?: InputMaybe<Render_Types_Enum_Comparison_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  properties_updated_at?: InputMaybe<Jsonb_Comparison_Exp>;
  proposed_artist_addresses_and_split?: InputMaybe<Proposed_Artist_Addresses_And_Splits_Bool_Exp>;
  proposed_artists_and_splits_id?: InputMaybe<String_Comparison_Exp>;
  read_only_addresses?: InputMaybe<Jsonb_Comparison_Exp>;
  receipts?: InputMaybe<Receipt_Metadata_Bool_Exp>;
  receipts_aggregate?: InputMaybe<Receipt_Metadata_Aggregate_Bool_Exp>;
  refresh_requests?: InputMaybe<Refresh_Requests_Bool_Exp>;
  render_complete?: InputMaybe<Boolean_Comparison_Exp>;
  render_delay?: InputMaybe<Int_Comparison_Exp>;
  render_with_gpu?: InputMaybe<Boolean_Comparison_Exp>;
  royalty_percentage?: InputMaybe<Int_Comparison_Exp>;
  sales_notes?: InputMaybe<String_Comparison_Exp>;
  script?: InputMaybe<String_Comparison_Exp>;
  script_count?: InputMaybe<Bigint_Comparison_Exp>;
  script_json?: InputMaybe<Jsonb_Comparison_Exp>;
  script_type_and_version?: InputMaybe<String_Comparison_Exp>;
  script_type_and_version_override?: InputMaybe<String_Comparison_Exp>;
  scripts?: InputMaybe<Project_Scripts_Bool_Exp>;
  second_token_minted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  series?: InputMaybe<Project_Series_Bool_Exp>;
  series_id?: InputMaybe<Int_Comparison_Exp>;
  start_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  tags?: InputMaybe<Entity_Tags_Bool_Exp>;
  tokens?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  tokens_aggregate?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_is_artist?: InputMaybe<Boolean_Comparison_Exp>;
  vertical?: InputMaybe<Project_Verticals_Bool_Exp>;
  vertical_name?: InputMaybe<String_Comparison_Exp>;
  video_aspect_ratio?: InputMaybe<Numeric_Comparison_Exp>;
  video_duration?: InputMaybe<Int_Comparison_Exp>;
  video_fps?: InputMaybe<Int_Comparison_Exp>;
  video_render_delay?: InputMaybe<Int_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Projects_Metadata_Max_Fields = {
  __typename?: 'projects_metadata_max_fields';
  activated_at?: Maybe<Scalars['timestamptz']['output']>;
  additional_payee?: Maybe<Scalars['String']['output']>;
  additional_payee_percentage?: Maybe<Scalars['Int']['output']>;
  additional_payee_secondary_sales_address?: Maybe<Scalars['String']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Int']['output']>;
  artist_address?: Maybe<Scalars['String']['output']>;
  artist_display_notes?: Maybe<Scalars['String']['output']>;
  artist_featured_token_id?: Maybe<Scalars['String']['output']>;
  artist_interview?: Maybe<Scalars['String']['output']>;
  artist_name?: Maybe<Scalars['String']['output']>;
  aspect_ratio?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "project_auction_end_time" */
  auction_end_time?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "project_auction_start_time" */
  auction_start_time?: Maybe<Scalars['timestamptz']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  charitable_giving_details?: Maybe<Scalars['String']['output']>;
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  contract_address?: Maybe<Scalars['String']['output']>;
  creative_credit?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "curation_status_display" */
  curation_status_display?: Maybe<Scalars['String']['output']>;
  currency_address?: Maybe<Scalars['String']['output']>;
  currency_decimals?: Maybe<Scalars['Int']['output']>;
  currency_symbol?: Maybe<Scalars['String']['output']>;
  /** Returns 'script_type_and_version_override' for the project if available; otherwise, falls back to 'script_type_and_version' */
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "first_token_minted_at" */
  first_token_minted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "project_heritage_status" */
  heritage_curation_status?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  ipfs_hash?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  link_to_license?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Int']['output']>;
  minter_configuration_id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price_per_token_in_wei?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  proposed_artists_and_splits_id?: Maybe<Scalars['String']['output']>;
  render_delay?: Maybe<Scalars['Int']['output']>;
  royalty_percentage?: Maybe<Scalars['Int']['output']>;
  sales_notes?: Maybe<Scalars['String']['output']>;
  script?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  /** Indicates the script type and version (e.g., p5@1.0.0) assigned to the project on its core contract */
  script_type_and_version?: Maybe<Scalars['String']['output']>;
  /** Specifies the script type and version override for the project, as set on the Art Blocks dependency registry contract */
  script_type_and_version_override?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "second_token_minted_at" */
  second_token_minted_at?: Maybe<Scalars['timestamptz']['output']>;
  series_id?: Maybe<Scalars['Int']['output']>;
  start_datetime?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  vertical_name?: Maybe<Scalars['String']['output']>;
  video_aspect_ratio?: Maybe<Scalars['numeric']['output']>;
  video_duration?: Maybe<Scalars['Int']['output']>;
  video_fps?: Maybe<Scalars['Int']['output']>;
  video_render_delay?: Maybe<Scalars['Int']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "projects_metadata" */
export type Projects_Metadata_Max_Order_By = {
  activated_at?: InputMaybe<Order_By>;
  additional_payee?: InputMaybe<Order_By>;
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_address?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  artist_address?: InputMaybe<Order_By>;
  artist_display_notes?: InputMaybe<Order_By>;
  artist_featured_token_id?: InputMaybe<Order_By>;
  artist_interview?: InputMaybe<Order_By>;
  artist_name?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  charitable_giving_details?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  contract_address?: InputMaybe<Order_By>;
  creative_credit?: InputMaybe<Order_By>;
  currency_address?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  currency_symbol?: InputMaybe<Order_By>;
  /** Returns 'script_type_and_version_override' for the project if available; otherwise, falls back to 'script_type_and_version' */
  dependency_name_and_version?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  ipfs_hash?: InputMaybe<Order_By>;
  license?: InputMaybe<Order_By>;
  link_to_license?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  minter_configuration_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price_per_token_in_wei?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  proposed_artists_and_splits_id?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  sales_notes?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
  /** Indicates the script type and version (e.g., p5@1.0.0) assigned to the project on its core contract */
  script_type_and_version?: InputMaybe<Order_By>;
  /** Specifies the script type and version override for the project, as set on the Art Blocks dependency registry contract */
  script_type_and_version_override?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vertical_name?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Projects_Metadata_Min_Fields = {
  __typename?: 'projects_metadata_min_fields';
  activated_at?: Maybe<Scalars['timestamptz']['output']>;
  additional_payee?: Maybe<Scalars['String']['output']>;
  additional_payee_percentage?: Maybe<Scalars['Int']['output']>;
  additional_payee_secondary_sales_address?: Maybe<Scalars['String']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Int']['output']>;
  artist_address?: Maybe<Scalars['String']['output']>;
  artist_display_notes?: Maybe<Scalars['String']['output']>;
  artist_featured_token_id?: Maybe<Scalars['String']['output']>;
  artist_interview?: Maybe<Scalars['String']['output']>;
  artist_name?: Maybe<Scalars['String']['output']>;
  aspect_ratio?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "project_auction_end_time" */
  auction_end_time?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "project_auction_start_time" */
  auction_start_time?: Maybe<Scalars['timestamptz']['output']>;
  base_uri?: Maybe<Scalars['String']['output']>;
  charitable_giving_details?: Maybe<Scalars['String']['output']>;
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  contract_address?: Maybe<Scalars['String']['output']>;
  creative_credit?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "curation_status_display" */
  curation_status_display?: Maybe<Scalars['String']['output']>;
  currency_address?: Maybe<Scalars['String']['output']>;
  currency_decimals?: Maybe<Scalars['Int']['output']>;
  currency_symbol?: Maybe<Scalars['String']['output']>;
  /** Returns 'script_type_and_version_override' for the project if available; otherwise, falls back to 'script_type_and_version' */
  dependency_name_and_version?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "first_token_minted_at" */
  first_token_minted_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "project_heritage_status" */
  heritage_curation_status?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  ipfs_hash?: Maybe<Scalars['String']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  link_to_license?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Int']['output']>;
  minter_configuration_id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price_per_token_in_wei?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  proposed_artists_and_splits_id?: Maybe<Scalars['String']['output']>;
  render_delay?: Maybe<Scalars['Int']['output']>;
  royalty_percentage?: Maybe<Scalars['Int']['output']>;
  sales_notes?: Maybe<Scalars['String']['output']>;
  script?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  /** Indicates the script type and version (e.g., p5@1.0.0) assigned to the project on its core contract */
  script_type_and_version?: Maybe<Scalars['String']['output']>;
  /** Specifies the script type and version override for the project, as set on the Art Blocks dependency registry contract */
  script_type_and_version_override?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "second_token_minted_at" */
  second_token_minted_at?: Maybe<Scalars['timestamptz']['output']>;
  series_id?: Maybe<Scalars['Int']['output']>;
  start_datetime?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  vertical_name?: Maybe<Scalars['String']['output']>;
  video_aspect_ratio?: Maybe<Scalars['numeric']['output']>;
  video_duration?: Maybe<Scalars['Int']['output']>;
  video_fps?: Maybe<Scalars['Int']['output']>;
  video_render_delay?: Maybe<Scalars['Int']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "projects_metadata" */
export type Projects_Metadata_Min_Order_By = {
  activated_at?: InputMaybe<Order_By>;
  additional_payee?: InputMaybe<Order_By>;
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_address?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  artist_address?: InputMaybe<Order_By>;
  artist_display_notes?: InputMaybe<Order_By>;
  artist_featured_token_id?: InputMaybe<Order_By>;
  artist_interview?: InputMaybe<Order_By>;
  artist_name?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  charitable_giving_details?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  contract_address?: InputMaybe<Order_By>;
  creative_credit?: InputMaybe<Order_By>;
  currency_address?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  currency_symbol?: InputMaybe<Order_By>;
  /** Returns 'script_type_and_version_override' for the project if available; otherwise, falls back to 'script_type_and_version' */
  dependency_name_and_version?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  ipfs_hash?: InputMaybe<Order_By>;
  license?: InputMaybe<Order_By>;
  link_to_license?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  minter_configuration_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price_per_token_in_wei?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  proposed_artists_and_splits_id?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  sales_notes?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
  /** Indicates the script type and version (e.g., p5@1.0.0) assigned to the project on its core contract */
  script_type_and_version?: InputMaybe<Order_By>;
  /** Specifies the script type and version override for the project, as set on the Art Blocks dependency registry contract */
  script_type_and_version_override?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vertical_name?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "projects_metadata". */
export type Projects_Metadata_Order_By = {
  activated_at?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  additional_payee?: InputMaybe<Order_By>;
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_address?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  additional_payee_splitter?: InputMaybe<Split_Atomic_Contracts_Order_By>;
  artist?: InputMaybe<Users_Order_By>;
  artist_address?: InputMaybe<Order_By>;
  artist_display_notes?: InputMaybe<Order_By>;
  artist_featured_token_id?: InputMaybe<Order_By>;
  artist_interview?: InputMaybe<Order_By>;
  artist_name?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  auction_end_time?: InputMaybe<Order_By>;
  auction_start_time?: InputMaybe<Order_By>;
  base_uri?: InputMaybe<Order_By>;
  bids_aggregate?: InputMaybe<Bids_Metadata_Aggregate_Order_By>;
  canvas_mode?: InputMaybe<Order_By>;
  charitable_giving_details?: InputMaybe<Order_By>;
  complete?: InputMaybe<Order_By>;
  completed_at?: InputMaybe<Order_By>;
  contract?: InputMaybe<Contracts_Metadata_Order_By>;
  contract_address?: InputMaybe<Order_By>;
  creative_credit?: InputMaybe<Order_By>;
  curation_status?: InputMaybe<Order_By>;
  curation_status_display?: InputMaybe<Order_By>;
  curation_status_override?: InputMaybe<Order_By>;
  currency_address?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  currency_symbol?: InputMaybe<Order_By>;
  dependency?: InputMaybe<Dependencies_Metadata_Order_By>;
  dependency_name_and_version?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  disable_auto_image_format?: InputMaybe<Order_By>;
  disable_sample_generator?: InputMaybe<Order_By>;
  display_static?: InputMaybe<Order_By>;
  external_asset_dependencies_aggregate?: InputMaybe<Project_External_Asset_Dependencies_Aggregate_Order_By>;
  external_asset_dependencies_locked?: InputMaybe<Order_By>;
  external_asset_dependency_count?: InputMaybe<Order_By>;
  favorited_by_user?: InputMaybe<Order_By>;
  favorites_aggregate?: InputMaybe<Favorites_Aggregate_Order_By>;
  features?: InputMaybe<Projects_Features_Order_By>;
  first_token_minted_at?: InputMaybe<Order_By>;
  generate_video_assets?: InputMaybe<Order_By>;
  heritage_curation_status?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  invocations?: InputMaybe<Order_By>;
  ipfs_hash?: InputMaybe<Order_By>;
  is_artblocks?: InputMaybe<Order_By>;
  license?: InputMaybe<Order_By>;
  link_to_license?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  lowest_listing?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  minter_configuration?: InputMaybe<Project_Minter_Configurations_Order_By>;
  minter_configuration_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  oob_tokens_aggregate?: InputMaybe<Oob_Tokens_Metadata_Aggregate_Order_By>;
  paused?: InputMaybe<Order_By>;
  preview_render_type?: InputMaybe<Order_By>;
  price_per_token_in_wei?: InputMaybe<Order_By>;
  primary_render_type?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  properties_updated_at?: InputMaybe<Order_By>;
  proposed_artist_addresses_and_split?: InputMaybe<Proposed_Artist_Addresses_And_Splits_Order_By>;
  proposed_artists_and_splits_id?: InputMaybe<Order_By>;
  read_only_addresses?: InputMaybe<Order_By>;
  receipts_aggregate?: InputMaybe<Receipt_Metadata_Aggregate_Order_By>;
  refresh_requests_aggregate?: InputMaybe<Refresh_Requests_Aggregate_Order_By>;
  render_complete?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  render_with_gpu?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  sales_notes?: InputMaybe<Order_By>;
  script?: InputMaybe<Order_By>;
  script_count?: InputMaybe<Order_By>;
  script_json?: InputMaybe<Order_By>;
  script_type_and_version?: InputMaybe<Order_By>;
  script_type_and_version_override?: InputMaybe<Order_By>;
  scripts_aggregate?: InputMaybe<Project_Scripts_Aggregate_Order_By>;
  second_token_minted_at?: InputMaybe<Order_By>;
  series?: InputMaybe<Project_Series_Order_By>;
  series_id?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  tags_aggregate?: InputMaybe<Entity_Tags_Aggregate_Order_By>;
  tokens_aggregate?: InputMaybe<Tokens_Metadata_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_is_artist?: InputMaybe<Order_By>;
  vertical?: InputMaybe<Project_Verticals_Order_By>;
  vertical_name?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** select columns of table "projects_metadata" */
export enum Projects_Metadata_Select_Column {
  /** column name */
  ActivatedAt = 'activated_at',
  /** column name */
  Active = 'active',
  /** column name */
  AdditionalPayee = 'additional_payee',
  /** column name */
  AdditionalPayeePercentage = 'additional_payee_percentage',
  /** column name */
  AdditionalPayeeSecondarySalesAddress = 'additional_payee_secondary_sales_address',
  /** column name */
  AdditionalPayeeSecondarySalesPercentage = 'additional_payee_secondary_sales_percentage',
  /** column name */
  ArtistAddress = 'artist_address',
  /** column name */
  ArtistDisplayNotes = 'artist_display_notes',
  /** column name */
  ArtistFeaturedTokenId = 'artist_featured_token_id',
  /** column name */
  ArtistInterview = 'artist_interview',
  /** column name */
  ArtistName = 'artist_name',
  /** column name */
  AspectRatio = 'aspect_ratio',
  /** column name */
  BaseUri = 'base_uri',
  /** column name */
  CanvasMode = 'canvas_mode',
  /** column name */
  CharitableGivingDetails = 'charitable_giving_details',
  /** column name */
  Complete = 'complete',
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  CreativeCredit = 'creative_credit',
  /** column name */
  CurationStatus = 'curation_status',
  /** column name */
  CurationStatusOverride = 'curation_status_override',
  /** column name */
  CurrencyAddress = 'currency_address',
  /** column name */
  CurrencyDecimals = 'currency_decimals',
  /** column name */
  CurrencySymbol = 'currency_symbol',
  /** column name */
  DependencyNameAndVersion = 'dependency_name_and_version',
  /** column name */
  Description = 'description',
  /** column name */
  DisableAutoImageFormat = 'disable_auto_image_format',
  /** column name */
  DisableSampleGenerator = 'disable_sample_generator',
  /** column name */
  DisplayStatic = 'display_static',
  /** column name */
  ExternalAssetDependenciesLocked = 'external_asset_dependencies_locked',
  /** column name */
  GenerateVideoAssets = 'generate_video_assets',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  IpfsHash = 'ipfs_hash',
  /** column name */
  License = 'license',
  /** column name */
  LinkToLicense = 'link_to_license',
  /** column name */
  MaxInvocations = 'max_invocations',
  /** column name */
  MinterConfigurationId = 'minter_configuration_id',
  /** column name */
  Name = 'name',
  /** column name */
  Paused = 'paused',
  /** column name */
  PreviewRenderType = 'preview_render_type',
  /** column name */
  PricePerTokenInWei = 'price_per_token_in_wei',
  /** column name */
  PrimaryRenderType = 'primary_render_type',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  PropertiesUpdatedAt = 'properties_updated_at',
  /** column name */
  ProposedArtistsAndSplitsId = 'proposed_artists_and_splits_id',
  /** column name */
  ReadOnlyAddresses = 'read_only_addresses',
  /** column name */
  RenderDelay = 'render_delay',
  /** column name */
  RenderWithGpu = 'render_with_gpu',
  /** column name */
  RoyaltyPercentage = 'royalty_percentage',
  /** column name */
  SalesNotes = 'sales_notes',
  /** column name */
  Script = 'script',
  /** column name */
  ScriptJson = 'script_json',
  /** column name */
  ScriptTypeAndVersion = 'script_type_and_version',
  /** column name */
  ScriptTypeAndVersionOverride = 'script_type_and_version_override',
  /** column name */
  SeriesId = 'series_id',
  /** column name */
  StartDatetime = 'start_datetime',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VerticalName = 'vertical_name',
  /** column name */
  VideoAspectRatio = 'video_aspect_ratio',
  /** column name */
  VideoDuration = 'video_duration',
  /** column name */
  VideoFps = 'video_fps',
  /** column name */
  VideoRenderDelay = 'video_render_delay',
  /** column name */
  Website = 'website'
}

/** select "projects_metadata_aggregate_bool_exp_bool_and_arguments_columns" columns of table "projects_metadata" */
export enum Projects_Metadata_Select_Column_Projects_Metadata_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  CanvasMode = 'canvas_mode',
  /** column name */
  Complete = 'complete',
  /** column name */
  DisableAutoImageFormat = 'disable_auto_image_format',
  /** column name */
  DisableSampleGenerator = 'disable_sample_generator',
  /** column name */
  DisplayStatic = 'display_static',
  /** column name */
  ExternalAssetDependenciesLocked = 'external_asset_dependencies_locked',
  /** column name */
  GenerateVideoAssets = 'generate_video_assets',
  /** column name */
  Paused = 'paused',
  /** column name */
  RenderWithGpu = 'render_with_gpu'
}

/** select "projects_metadata_aggregate_bool_exp_bool_or_arguments_columns" columns of table "projects_metadata" */
export enum Projects_Metadata_Select_Column_Projects_Metadata_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  CanvasMode = 'canvas_mode',
  /** column name */
  Complete = 'complete',
  /** column name */
  DisableAutoImageFormat = 'disable_auto_image_format',
  /** column name */
  DisableSampleGenerator = 'disable_sample_generator',
  /** column name */
  DisplayStatic = 'display_static',
  /** column name */
  ExternalAssetDependenciesLocked = 'external_asset_dependencies_locked',
  /** column name */
  GenerateVideoAssets = 'generate_video_assets',
  /** column name */
  Paused = 'paused',
  /** column name */
  RenderWithGpu = 'render_with_gpu'
}

/** aggregate stddev on columns */
export type Projects_Metadata_Stddev_Fields = {
  __typename?: 'projects_metadata_stddev_fields';
  additional_payee_percentage?: Maybe<Scalars['Float']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Float']['output']>;
  aspect_ratio?: Maybe<Scalars['Float']['output']>;
  currency_decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Float']['output']>;
  render_delay?: Maybe<Scalars['Float']['output']>;
  royalty_percentage?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
  video_aspect_ratio?: Maybe<Scalars['Float']['output']>;
  video_duration?: Maybe<Scalars['Float']['output']>;
  video_fps?: Maybe<Scalars['Float']['output']>;
  video_render_delay?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "projects_metadata" */
export type Projects_Metadata_Stddev_Order_By = {
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Projects_Metadata_Stddev_Pop_Fields = {
  __typename?: 'projects_metadata_stddev_pop_fields';
  additional_payee_percentage?: Maybe<Scalars['Float']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Float']['output']>;
  aspect_ratio?: Maybe<Scalars['Float']['output']>;
  currency_decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Float']['output']>;
  render_delay?: Maybe<Scalars['Float']['output']>;
  royalty_percentage?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
  video_aspect_ratio?: Maybe<Scalars['Float']['output']>;
  video_duration?: Maybe<Scalars['Float']['output']>;
  video_fps?: Maybe<Scalars['Float']['output']>;
  video_render_delay?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "projects_metadata" */
export type Projects_Metadata_Stddev_Pop_Order_By = {
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Projects_Metadata_Stddev_Samp_Fields = {
  __typename?: 'projects_metadata_stddev_samp_fields';
  additional_payee_percentage?: Maybe<Scalars['Float']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Float']['output']>;
  aspect_ratio?: Maybe<Scalars['Float']['output']>;
  currency_decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Float']['output']>;
  render_delay?: Maybe<Scalars['Float']['output']>;
  royalty_percentage?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
  video_aspect_ratio?: Maybe<Scalars['Float']['output']>;
  video_duration?: Maybe<Scalars['Float']['output']>;
  video_fps?: Maybe<Scalars['Float']['output']>;
  video_render_delay?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "projects_metadata" */
export type Projects_Metadata_Stddev_Samp_Order_By = {
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "projects_metadata" */
export type Projects_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Projects_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Metadata_Stream_Cursor_Value_Input = {
  activated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  additional_payee?: InputMaybe<Scalars['String']['input']>;
  additional_payee_percentage?: InputMaybe<Scalars['Int']['input']>;
  additional_payee_secondary_sales_address?: InputMaybe<Scalars['String']['input']>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Scalars['Int']['input']>;
  artist_address?: InputMaybe<Scalars['String']['input']>;
  artist_display_notes?: InputMaybe<Scalars['String']['input']>;
  artist_featured_token_id?: InputMaybe<Scalars['String']['input']>;
  artist_interview?: InputMaybe<Scalars['String']['input']>;
  artist_name?: InputMaybe<Scalars['String']['input']>;
  aspect_ratio?: InputMaybe<Scalars['numeric']['input']>;
  base_uri?: InputMaybe<Scalars['String']['input']>;
  canvas_mode?: InputMaybe<Scalars['Boolean']['input']>;
  charitable_giving_details?: InputMaybe<Scalars['String']['input']>;
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  contract_address?: InputMaybe<Scalars['String']['input']>;
  creative_credit?: InputMaybe<Scalars['String']['input']>;
  curation_status?: InputMaybe<Curation_Statuses_Enum>;
  curation_status_override?: InputMaybe<Curation_Statuses_Enum>;
  currency_address?: InputMaybe<Scalars['String']['input']>;
  currency_decimals?: InputMaybe<Scalars['Int']['input']>;
  currency_symbol?: InputMaybe<Scalars['String']['input']>;
  /** Returns 'script_type_and_version_override' for the project if available; otherwise, falls back to 'script_type_and_version' */
  dependency_name_and_version?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disable_auto_image_format?: InputMaybe<Scalars['Boolean']['input']>;
  disable_sample_generator?: InputMaybe<Scalars['Boolean']['input']>;
  display_static?: InputMaybe<Scalars['Boolean']['input']>;
  external_asset_dependencies_locked?: InputMaybe<Scalars['Boolean']['input']>;
  generate_video_assets?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  ipfs_hash?: InputMaybe<Scalars['String']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  link_to_license?: InputMaybe<Scalars['String']['input']>;
  max_invocations?: InputMaybe<Scalars['Int']['input']>;
  minter_configuration_id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  paused?: InputMaybe<Scalars['Boolean']['input']>;
  preview_render_type?: InputMaybe<Render_Types_Enum>;
  price_per_token_in_wei?: InputMaybe<Scalars['String']['input']>;
  primary_render_type?: InputMaybe<Render_Types_Enum>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  properties_updated_at?: InputMaybe<Scalars['jsonb']['input']>;
  proposed_artists_and_splits_id?: InputMaybe<Scalars['String']['input']>;
  read_only_addresses?: InputMaybe<Scalars['jsonb']['input']>;
  render_delay?: InputMaybe<Scalars['Int']['input']>;
  render_with_gpu?: InputMaybe<Scalars['Boolean']['input']>;
  royalty_percentage?: InputMaybe<Scalars['Int']['input']>;
  sales_notes?: InputMaybe<Scalars['String']['input']>;
  script?: InputMaybe<Scalars['String']['input']>;
  script_json?: InputMaybe<Scalars['jsonb']['input']>;
  /** Indicates the script type and version (e.g., p5@1.0.0) assigned to the project on its core contract */
  script_type_and_version?: InputMaybe<Scalars['String']['input']>;
  /** Specifies the script type and version override for the project, as set on the Art Blocks dependency registry contract */
  script_type_and_version_override?: InputMaybe<Scalars['String']['input']>;
  series_id?: InputMaybe<Scalars['Int']['input']>;
  start_datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  vertical_name?: InputMaybe<Scalars['String']['input']>;
  video_aspect_ratio?: InputMaybe<Scalars['numeric']['input']>;
  video_duration?: InputMaybe<Scalars['Int']['input']>;
  video_fps?: InputMaybe<Scalars['Int']['input']>;
  video_render_delay?: InputMaybe<Scalars['Int']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Projects_Metadata_Sum_Fields = {
  __typename?: 'projects_metadata_sum_fields';
  additional_payee_percentage?: Maybe<Scalars['Int']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Int']['output']>;
  aspect_ratio?: Maybe<Scalars['numeric']['output']>;
  currency_decimals?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Int']['output']>;
  render_delay?: Maybe<Scalars['Int']['output']>;
  royalty_percentage?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  series_id?: Maybe<Scalars['Int']['output']>;
  video_aspect_ratio?: Maybe<Scalars['numeric']['output']>;
  video_duration?: Maybe<Scalars['Int']['output']>;
  video_fps?: Maybe<Scalars['Int']['output']>;
  video_render_delay?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "projects_metadata" */
export type Projects_Metadata_Sum_Order_By = {
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Projects_Metadata_Var_Pop_Fields = {
  __typename?: 'projects_metadata_var_pop_fields';
  additional_payee_percentage?: Maybe<Scalars['Float']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Float']['output']>;
  aspect_ratio?: Maybe<Scalars['Float']['output']>;
  currency_decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Float']['output']>;
  render_delay?: Maybe<Scalars['Float']['output']>;
  royalty_percentage?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
  video_aspect_ratio?: Maybe<Scalars['Float']['output']>;
  video_duration?: Maybe<Scalars['Float']['output']>;
  video_fps?: Maybe<Scalars['Float']['output']>;
  video_render_delay?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "projects_metadata" */
export type Projects_Metadata_Var_Pop_Order_By = {
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Projects_Metadata_Var_Samp_Fields = {
  __typename?: 'projects_metadata_var_samp_fields';
  additional_payee_percentage?: Maybe<Scalars['Float']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Float']['output']>;
  aspect_ratio?: Maybe<Scalars['Float']['output']>;
  currency_decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Float']['output']>;
  render_delay?: Maybe<Scalars['Float']['output']>;
  royalty_percentage?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
  video_aspect_ratio?: Maybe<Scalars['Float']['output']>;
  video_duration?: Maybe<Scalars['Float']['output']>;
  video_fps?: Maybe<Scalars['Float']['output']>;
  video_render_delay?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "projects_metadata" */
export type Projects_Metadata_Var_Samp_Order_By = {
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Projects_Metadata_Variance_Fields = {
  __typename?: 'projects_metadata_variance_fields';
  additional_payee_percentage?: Maybe<Scalars['Float']['output']>;
  additional_payee_secondary_sales_percentage?: Maybe<Scalars['Float']['output']>;
  aspect_ratio?: Maybe<Scalars['Float']['output']>;
  currency_decimals?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_external_asset_dependency_count" */
  external_asset_dependency_count?: Maybe<Scalars['bigint']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_invocations" */
  invocations?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "project_lowest_listing" */
  lowest_listing?: Maybe<Scalars['float8']['output']>;
  max_invocations?: Maybe<Scalars['Float']['output']>;
  render_delay?: Maybe<Scalars['Float']['output']>;
  royalty_percentage?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "project_script_count" */
  script_count?: Maybe<Scalars['bigint']['output']>;
  series_id?: Maybe<Scalars['Float']['output']>;
  video_aspect_ratio?: Maybe<Scalars['Float']['output']>;
  video_duration?: Maybe<Scalars['Float']['output']>;
  video_fps?: Maybe<Scalars['Float']['output']>;
  video_render_delay?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "projects_metadata" */
export type Projects_Metadata_Variance_Order_By = {
  additional_payee_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  aspect_ratio?: InputMaybe<Order_By>;
  currency_decimals?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  max_invocations?: InputMaybe<Order_By>;
  render_delay?: InputMaybe<Order_By>;
  royalty_percentage?: InputMaybe<Order_By>;
  series_id?: InputMaybe<Order_By>;
  video_aspect_ratio?: InputMaybe<Order_By>;
  video_duration?: InputMaybe<Order_By>;
  video_fps?: InputMaybe<Order_By>;
  video_render_delay?: InputMaybe<Order_By>;
};

/** Currently proposed artist and address splits */
export type Proposed_Artist_Addresses_And_Splits = {
  __typename?: 'proposed_artist_addresses_and_splits';
  additional_payee_primary_sales: Scalars['String']['output'];
  additional_payee_primary_sales_percentage: Scalars['Int']['output'];
  additional_payee_secondary_sales: Scalars['String']['output'];
  additional_payee_secondary_sales_percentage: Scalars['Int']['output'];
  /** An object relationship */
  additional_payee_splitter?: Maybe<Split_Atomic_Contracts>;
  artist_address: Scalars['String']['output'];
  /** An object relationship */
  project: Projects_Metadata;
  project_id: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "proposed_artist_addresses_and_splits". All fields are combined with a logical 'AND'. */
export type Proposed_Artist_Addresses_And_Splits_Bool_Exp = {
  _and?: InputMaybe<Array<Proposed_Artist_Addresses_And_Splits_Bool_Exp>>;
  _not?: InputMaybe<Proposed_Artist_Addresses_And_Splits_Bool_Exp>;
  _or?: InputMaybe<Array<Proposed_Artist_Addresses_And_Splits_Bool_Exp>>;
  additional_payee_primary_sales?: InputMaybe<String_Comparison_Exp>;
  additional_payee_primary_sales_percentage?: InputMaybe<Int_Comparison_Exp>;
  additional_payee_secondary_sales?: InputMaybe<String_Comparison_Exp>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Int_Comparison_Exp>;
  additional_payee_splitter?: InputMaybe<Split_Atomic_Contracts_Bool_Exp>;
  artist_address?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "proposed_artist_addresses_and_splits". */
export type Proposed_Artist_Addresses_And_Splits_Order_By = {
  additional_payee_primary_sales?: InputMaybe<Order_By>;
  additional_payee_primary_sales_percentage?: InputMaybe<Order_By>;
  additional_payee_secondary_sales?: InputMaybe<Order_By>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Order_By>;
  additional_payee_splitter?: InputMaybe<Split_Atomic_Contracts_Order_By>;
  artist_address?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposed_artist_addresses_and_splits" */
export enum Proposed_Artist_Addresses_And_Splits_Select_Column {
  /** column name */
  AdditionalPayeePrimarySales = 'additional_payee_primary_sales',
  /** column name */
  AdditionalPayeePrimarySalesPercentage = 'additional_payee_primary_sales_percentage',
  /** column name */
  AdditionalPayeeSecondarySales = 'additional_payee_secondary_sales',
  /** column name */
  AdditionalPayeeSecondarySalesPercentage = 'additional_payee_secondary_sales_percentage',
  /** column name */
  ArtistAddress = 'artist_address',
  /** column name */
  ProjectId = 'project_id'
}

/** Streaming cursor of the table "proposed_artist_addresses_and_splits" */
export type Proposed_Artist_Addresses_And_Splits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposed_Artist_Addresses_And_Splits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposed_Artist_Addresses_And_Splits_Stream_Cursor_Value_Input = {
  additional_payee_primary_sales?: InputMaybe<Scalars['String']['input']>;
  additional_payee_primary_sales_percentage?: InputMaybe<Scalars['Int']['input']>;
  additional_payee_secondary_sales?: InputMaybe<Scalars['String']['input']>;
  additional_payee_secondary_sales_percentage?: InputMaybe<Scalars['Int']['input']>;
  artist_address?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  artistEditorialPage?: Maybe<ArtistEditorialPageEntityResponse>;
  artistEditorialPages?: Maybe<ArtistEditorialPageEntityResponseCollection>;
  /** fetch data from the table: "artists" */
  artists: Array<Artists>;
  /** fetch aggregated fields from the table: "artists" */
  artists_aggregate: Artists_Aggregate;
  /** fetch data from the table: "bids_metadata" */
  bids_metadata: Array<Bids_Metadata>;
  /** fetch aggregated fields from the table: "bids_metadata" */
  bids_metadata_aggregate: Bids_Metadata_Aggregate;
  /** fetch data from the table: "bids_metadata" using primary key columns */
  bids_metadata_by_pk?: Maybe<Bids_Metadata>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "contract_allowlistings" */
  contract_allowlistings: Array<Contract_Allowlistings>;
  /** fetch data from the table: "contract_allowlistings" using primary key columns */
  contract_allowlistings_by_pk?: Maybe<Contract_Allowlistings>;
  /** fetch data from the table: "contract_type_names" */
  contract_type_names: Array<Contract_Type_Names>;
  /** fetch data from the table: "contract_type_names" using primary key columns */
  contract_type_names_by_pk?: Maybe<Contract_Type_Names>;
  /** fetch data from the table: "contract_types" */
  contract_types: Array<Contract_Types>;
  /** fetch data from the table: "contract_types" using primary key columns */
  contract_types_by_pk?: Maybe<Contract_Types>;
  /** fetch data from the table: "contracts_metadata" */
  contracts_metadata: Array<Contracts_Metadata>;
  /** fetch aggregated fields from the table: "contracts_metadata" */
  contracts_metadata_aggregate: Contracts_Metadata_Aggregate;
  /** fetch data from the table: "contracts_metadata" using primary key columns */
  contracts_metadata_by_pk?: Maybe<Contracts_Metadata>;
  /** fetch data from the table: "dependencies_metadata" */
  dependencies_metadata: Array<Dependencies_Metadata>;
  /** fetch aggregated fields from the table: "dependencies_metadata" */
  dependencies_metadata_aggregate: Dependencies_Metadata_Aggregate;
  /** fetch data from the table: "dependencies_metadata" using primary key columns */
  dependencies_metadata_by_pk?: Maybe<Dependencies_Metadata>;
  /** fetch data from the table: "dependency_additional_cdns" */
  dependency_additional_cdns: Array<Dependency_Additional_Cdns>;
  /** fetch aggregated fields from the table: "dependency_additional_cdns" */
  dependency_additional_cdns_aggregate: Dependency_Additional_Cdns_Aggregate;
  /** fetch data from the table: "dependency_additional_cdns" using primary key columns */
  dependency_additional_cdns_by_pk?: Maybe<Dependency_Additional_Cdns>;
  /** fetch data from the table: "dependency_additional_repositories" */
  dependency_additional_repositories: Array<Dependency_Additional_Repositories>;
  /** fetch aggregated fields from the table: "dependency_additional_repositories" */
  dependency_additional_repositories_aggregate: Dependency_Additional_Repositories_Aggregate;
  /** fetch data from the table: "dependency_additional_repositories" using primary key columns */
  dependency_additional_repositories_by_pk?: Maybe<Dependency_Additional_Repositories>;
  /** fetch data from the table: "dependency_registries" */
  dependency_registries: Array<Dependency_Registries>;
  /** fetch aggregated fields from the table: "dependency_registries" */
  dependency_registries_aggregate: Dependency_Registries_Aggregate;
  /** fetch data from the table: "dependency_registries" using primary key columns */
  dependency_registries_by_pk?: Maybe<Dependency_Registries>;
  /** fetch data from the table: "dependency_scripts" */
  dependency_scripts: Array<Dependency_Scripts>;
  /** fetch aggregated fields from the table: "dependency_scripts" */
  dependency_scripts_aggregate: Dependency_Scripts_Aggregate;
  /** fetch data from the table: "dependency_scripts" using primary key columns */
  dependency_scripts_by_pk?: Maybe<Dependency_Scripts>;
  /** An array relationship */
  entity_tags: Array<Entity_Tags>;
  /** fetch data from the table: "entity_tags" using primary key columns */
  entity_tags_by_pk?: Maybe<Entity_Tags>;
  /** An array relationship */
  favorites: Array<Favorites>;
  /** An aggregate relationship */
  favorites_aggregate: Favorites_Aggregate;
  /** fetch data from the table: "favorites" using primary key columns */
  favorites_by_pk?: Maybe<Favorites>;
  /** fetch data from the table: "feature_flags" */
  feature_flags: Array<Feature_Flags>;
  /** fetch data from the table: "feature_flags" using primary key columns */
  feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** execute function "filter_tokens_metadata_by_features" which returns "tokens_metadata" */
  filter_tokens_metadata_by_features: Array<Tokens_Metadata>;
  /** execute function "filter_tokens_metadata_by_features" and query aggregates on result of table type "tokens_metadata" */
  filter_tokens_metadata_by_features_aggregate: Tokens_Metadata_Aggregate;
  getAuthMessage?: Maybe<AuthMessageOutput>;
  getOpenseaCollectionURL?: Maybe<OpenseaCollectionData>;
  isTokenFlagged?: Maybe<Scalars['Boolean']['output']>;
  /** execute function "list_projects_metadata_random" which returns "projects_metadata" */
  list_projects_metadata_random: Array<Projects_Metadata>;
  /** execute function "list_projects_metadata_random" and query aggregates on result of table type "projects_metadata" */
  list_projects_metadata_random_aggregate: Projects_Metadata_Aggregate;
  /** fetch data from the table: "media" */
  media: Array<Media>;
  /** fetch data from the table: "media" using primary key columns */
  media_by_pk?: Maybe<Media>;
  minterInfo?: Maybe<MinterInfoEntityResponse>;
  minterInfos?: Maybe<MinterInfoEntityResponseCollection>;
  /** fetch data from the table: "minter_filter_type_names" */
  minter_filter_type_names: Array<Minter_Filter_Type_Names>;
  /** fetch data from the table: "minter_filter_type_names" using primary key columns */
  minter_filter_type_names_by_pk?: Maybe<Minter_Filter_Type_Names>;
  /** fetch data from the table: "minter_filters_metadata" */
  minter_filters_metadata: Array<Minter_Filters_Metadata>;
  /** fetch data from the table: "minter_filters_metadata" using primary key columns */
  minter_filters_metadata_by_pk?: Maybe<Minter_Filters_Metadata>;
  /** fetch data from the table: "minter_types" */
  minter_types: Array<Minter_Types>;
  /** fetch data from the table: "minter_types" using primary key columns */
  minter_types_by_pk?: Maybe<Minter_Types>;
  /** fetch data from the table: "minters_metadata" */
  minters_metadata: Array<Minters_Metadata>;
  /** fetch data from the table: "minters_metadata" using primary key columns */
  minters_metadata_by_pk?: Maybe<Minters_Metadata>;
  /** fetch data from the table: "oob_tokens_metadata" */
  oob_tokens_metadata: Array<Oob_Tokens_Metadata>;
  /** fetch aggregated fields from the table: "oob_tokens_metadata" */
  oob_tokens_metadata_aggregate: Oob_Tokens_Metadata_Aggregate;
  /** fetch data from the table: "oob_tokens_metadata" using primary key columns */
  oob_tokens_metadata_by_pk?: Maybe<Oob_Tokens_Metadata>;
  /** fetch data from the table: "primary_purchases" */
  primary_purchases: Array<Primary_Purchases>;
  /** fetch data from the table: "primary_purchases" using primary key columns */
  primary_purchases_by_pk?: Maybe<Primary_Purchases>;
  /** An array relationship */
  processing_jobs: Array<Processing_Jobs>;
  /** fetch data from the table: "processing_jobs" using primary key columns */
  processing_jobs_by_pk?: Maybe<Processing_Jobs>;
  projectPage?: Maybe<ProjectPageEntityResponse>;
  projectPages?: Maybe<ProjectPageEntityResponseCollection>;
  /** fetch data from the table: "project_external_asset_dependencies" */
  project_external_asset_dependencies: Array<Project_External_Asset_Dependencies>;
  /** fetch data from the table: "project_external_asset_dependencies" using primary key columns */
  project_external_asset_dependencies_by_pk?: Maybe<Project_External_Asset_Dependencies>;
  /** fetch data from the table: "project_minter_configurations" */
  project_minter_configurations: Array<Project_Minter_Configurations>;
  /** fetch data from the table: "project_minter_configurations" using primary key columns */
  project_minter_configurations_by_pk?: Maybe<Project_Minter_Configurations>;
  /** fetch data from the table: "project_scripts" */
  project_scripts: Array<Project_Scripts>;
  /** fetch data from the table: "project_scripts" using primary key columns */
  project_scripts_by_pk?: Maybe<Project_Scripts>;
  /** fetch data from the table: "project_series" */
  project_series: Array<Project_Series>;
  /** fetch aggregated fields from the table: "project_series" */
  project_series_aggregate: Project_Series_Aggregate;
  /** fetch data from the table: "project_series" using primary key columns */
  project_series_by_pk?: Maybe<Project_Series>;
  /** fetch data from the table: "project_vertical_categories" */
  project_vertical_categories: Array<Project_Vertical_Categories>;
  /** fetch data from the table: "project_vertical_categories" using primary key columns */
  project_vertical_categories_by_pk?: Maybe<Project_Vertical_Categories>;
  /** fetch data from the table: "project_verticals" */
  project_verticals: Array<Project_Verticals>;
  /** fetch data from the table: "project_verticals" using primary key columns */
  project_verticals_by_pk?: Maybe<Project_Verticals>;
  /** fetch data from the table: "projects_features" */
  projects_features: Array<Projects_Features>;
  /** fetch data from the table: "projects_features" using primary key columns */
  projects_features_by_pk?: Maybe<Projects_Features>;
  /** fetch data from the table: "projects_metadata" */
  projects_metadata: Array<Projects_Metadata>;
  /** fetch aggregated fields from the table: "projects_metadata" */
  projects_metadata_aggregate: Projects_Metadata_Aggregate;
  /** fetch data from the table: "projects_metadata" using primary key columns */
  projects_metadata_by_pk?: Maybe<Projects_Metadata>;
  /** fetch data from the table: "proposed_artist_addresses_and_splits" */
  proposed_artist_addresses_and_splits: Array<Proposed_Artist_Addresses_And_Splits>;
  /** fetch data from the table: "proposed_artist_addresses_and_splits" using primary key columns */
  proposed_artist_addresses_and_splits_by_pk?: Maybe<Proposed_Artist_Addresses_And_Splits>;
  /** fetch data from the table: "receipt_metadata" */
  receipt_metadata: Array<Receipt_Metadata>;
  /** fetch aggregated fields from the table: "receipt_metadata" */
  receipt_metadata_aggregate: Receipt_Metadata_Aggregate;
  /** fetch data from the table: "receipt_metadata" using primary key columns */
  receipt_metadata_by_pk?: Maybe<Receipt_Metadata>;
  /** An array relationship */
  refresh_requests: Array<Refresh_Requests>;
  /** fetch data from the table: "refresh_requests" using primary key columns */
  refresh_requests_by_pk?: Maybe<Refresh_Requests>;
  /** fetch data from the table: "render_types" */
  render_types: Array<Render_Types>;
  /** fetch data from the table: "render_types" using primary key columns */
  render_types_by_pk?: Maybe<Render_Types>;
  /** execute function "search_projects" which returns "projects_metadata" */
  search_projects: Array<Projects_Metadata>;
  /** execute function "search_projects" and query aggregates on result of table type "projects_metadata" */
  search_projects_aggregate: Projects_Metadata_Aggregate;
  /** execute function "search_tags" which returns "tags" */
  search_tags: Array<Tags>;
  /** execute function "search_tokens" which returns "tokens_metadata" */
  search_tokens: Array<Tokens_Metadata>;
  /** execute function "search_tokens" and query aggregates on result of table type "tokens_metadata" */
  search_tokens_aggregate: Tokens_Metadata_Aggregate;
  /** execute function "search_users" which returns "user_profiles" */
  search_users: Array<User_Profiles>;
  /** execute function "search_users" and query aggregates on result of table type "user_profiles" */
  search_users_aggregate: User_Profiles_Aggregate;
  /** fetch data from the table: "split_atomic_contracts" */
  split_atomic_contracts: Array<Split_Atomic_Contracts>;
  /** fetch data from the table: "split_atomic_contracts" using primary key columns */
  split_atomic_contracts_by_pk?: Maybe<Split_Atomic_Contracts>;
  /** fetch data from the table: "split_atomic_factories" */
  split_atomic_factories: Array<Split_Atomic_Factories>;
  /** fetch data from the table: "split_atomic_factories" using primary key columns */
  split_atomic_factories_by_pk?: Maybe<Split_Atomic_Factories>;
  /** fetch data from the table: "split_payment_configurations" */
  split_payment_configurations: Array<Split_Payment_Configurations>;
  /** fetch data from the table: "split_payment_configurations" using primary key columns */
  split_payment_configurations_by_pk?: Maybe<Split_Payment_Configurations>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "tokens_metadata" */
  tokens_metadata: Array<Tokens_Metadata>;
  /** fetch aggregated fields from the table: "tokens_metadata" */
  tokens_metadata_aggregate: Tokens_Metadata_Aggregate;
  /** fetch data from the table: "tokens_metadata" using primary key columns */
  tokens_metadata_by_pk?: Maybe<Tokens_Metadata>;
  /** fetch data from the table: "user_profiles" */
  user_profiles: Array<User_Profiles>;
  /** fetch aggregated fields from the table: "user_profiles" */
  user_profiles_aggregate: User_Profiles_Aggregate;
  /** fetch data from the table: "user_profiles" using primary key columns */
  user_profiles_by_pk?: Maybe<User_Profiles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verticals" */
  verticals: Array<Verticals>;
  /** fetch data from the table: "verticals" using primary key columns */
  verticals_by_pk?: Maybe<Verticals>;
  /** fetch data from the table: "video_aspect_ratios" */
  video_aspect_ratios: Array<Video_Aspect_Ratios>;
  /** fetch data from the table: "video_aspect_ratios" using primary key columns */
  video_aspect_ratios_by_pk?: Maybe<Video_Aspect_Ratios>;
  /** fetch data from the table: "video_frame_rates" */
  video_frame_rates: Array<Video_Frame_Rates>;
  /** fetch data from the table: "video_frame_rates" using primary key columns */
  video_frame_rates_by_pk?: Maybe<Video_Frame_Rates>;
  /** fetch data from the table: "webflow_artist_info" */
  webflow_artist_info: Array<Webflow_Artist_Info>;
  /** fetch data from the table: "webflow_artist_info" using primary key columns */
  webflow_artist_info_by_pk?: Maybe<Webflow_Artist_Info>;
  /** fetch data from the table: "webflow_spectrum_articles" */
  webflow_spectrum_articles: Array<Webflow_Spectrum_Articles>;
  /** fetch data from the table: "webflow_spectrum_articles" using primary key columns */
  webflow_spectrum_articles_by_pk?: Maybe<Webflow_Spectrum_Articles>;
};


export type Query_RootArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type Query_RootArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Query_RootArtistEditorialPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type Query_RootArtistEditorialPagesArgs = {
  filters?: InputMaybe<ArtistEditorialPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Query_RootArtistsArgs = {
  distinct_on?: InputMaybe<Array<Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Artists_Order_By>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Query_RootArtists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Artists_Order_By>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Query_RootBids_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


export type Query_RootBids_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


export type Query_RootBids_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootContract_AllowlistingsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Allowlistings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Allowlistings_Order_By>>;
  where?: InputMaybe<Contract_Allowlistings_Bool_Exp>;
};


export type Query_RootContract_Allowlistings_By_PkArgs = {
  contract_address: Scalars['String']['input'];
  user_address: Scalars['String']['input'];
};


export type Query_RootContract_Type_NamesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Type_Names_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Type_Names_Order_By>>;
  where?: InputMaybe<Contract_Type_Names_Bool_Exp>;
};


export type Query_RootContract_Type_Names_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootContract_TypesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Types_Order_By>>;
  where?: InputMaybe<Contract_Types_Bool_Exp>;
};


export type Query_RootContract_Types_By_PkArgs = {
  type: Contract_Type_Names_Enum;
};


export type Query_RootContracts_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Metadata_Order_By>>;
  where?: InputMaybe<Contracts_Metadata_Bool_Exp>;
};


export type Query_RootContracts_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Metadata_Order_By>>;
  where?: InputMaybe<Contracts_Metadata_Bool_Exp>;
};


export type Query_RootContracts_Metadata_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootDependencies_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Dependencies_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependencies_Metadata_Order_By>>;
  where?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
};


export type Query_RootDependencies_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependencies_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependencies_Metadata_Order_By>>;
  where?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
};


export type Query_RootDependencies_Metadata_By_PkArgs = {
  name_and_version: Scalars['String']['input'];
};


export type Query_RootDependency_Additional_CdnsArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Cdns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Cdns_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
};


export type Query_RootDependency_Additional_Cdns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Cdns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Cdns_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
};


export type Query_RootDependency_Additional_Cdns_By_PkArgs = {
  dependency_name_and_version: Scalars['String']['input'];
  index: Scalars['Int']['input'];
};


export type Query_RootDependency_Additional_RepositoriesArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Repositories_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
};


export type Query_RootDependency_Additional_Repositories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Repositories_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
};


export type Query_RootDependency_Additional_Repositories_By_PkArgs = {
  dependency_name_and_version: Scalars['String']['input'];
  index: Scalars['Int']['input'];
};


export type Query_RootDependency_RegistriesArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Registries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Registries_Order_By>>;
  where?: InputMaybe<Dependency_Registries_Bool_Exp>;
};


export type Query_RootDependency_Registries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Registries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Registries_Order_By>>;
  where?: InputMaybe<Dependency_Registries_Bool_Exp>;
};


export type Query_RootDependency_Registries_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootDependency_ScriptsArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Scripts_Order_By>>;
  where?: InputMaybe<Dependency_Scripts_Bool_Exp>;
};


export type Query_RootDependency_Scripts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Scripts_Order_By>>;
  where?: InputMaybe<Dependency_Scripts_Bool_Exp>;
};


export type Query_RootDependency_Scripts_By_PkArgs = {
  dependency_name_and_version: Scalars['String']['input'];
  index: Scalars['Int']['input'];
};


export type Query_RootEntity_TagsArgs = {
  distinct_on?: InputMaybe<Array<Entity_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Tags_Order_By>>;
  where?: InputMaybe<Entity_Tags_Bool_Exp>;
};


export type Query_RootEntity_Tags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootFavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Query_RootFavorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Query_RootFavorites_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootFeature_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Feature_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Flags_Order_By>>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};


export type Query_RootFeature_Flags_By_PkArgs = {
  flag_name: Scalars['String']['input'];
};


export type Query_RootFilter_Tokens_Metadata_By_FeaturesArgs = {
  args: Filter_Tokens_Metadata_By_Features_Args;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Query_RootFilter_Tokens_Metadata_By_Features_AggregateArgs = {
  args: Filter_Tokens_Metadata_By_Features_Args;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Query_RootGetAuthMessageArgs = {
  domain: Scalars['String']['input'];
  publicAddress: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};


export type Query_RootGetOpenseaCollectionUrlArgs = {
  contractAddress: Scalars['String']['input'];
  projectId: Scalars['String']['input'];
};


export type Query_RootIsTokenFlaggedArgs = {
  contractAddress: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};


export type Query_RootList_Projects_Metadata_RandomArgs = {
  args?: InputMaybe<List_Projects_Metadata_Random_Args>;
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Query_RootList_Projects_Metadata_Random_AggregateArgs = {
  args?: InputMaybe<List_Projects_Metadata_Random_Args>;
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Query_RootMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Query_RootMedia_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMinterInfoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type Query_RootMinterInfosArgs = {
  filters?: InputMaybe<MinterInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Query_RootMinter_Filter_Type_NamesArgs = {
  distinct_on?: InputMaybe<Array<Minter_Filter_Type_Names_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minter_Filter_Type_Names_Order_By>>;
  where?: InputMaybe<Minter_Filter_Type_Names_Bool_Exp>;
};


export type Query_RootMinter_Filter_Type_Names_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootMinter_Filters_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Minter_Filters_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minter_Filters_Metadata_Order_By>>;
  where?: InputMaybe<Minter_Filters_Metadata_Bool_Exp>;
};


export type Query_RootMinter_Filters_Metadata_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootMinter_TypesArgs = {
  distinct_on?: InputMaybe<Array<Minter_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minter_Types_Order_By>>;
  where?: InputMaybe<Minter_Types_Bool_Exp>;
};


export type Query_RootMinter_Types_By_PkArgs = {
  type: Minter_Type_Names_Enum;
};


export type Query_RootMinters_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Minters_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minters_Metadata_Order_By>>;
  where?: InputMaybe<Minters_Metadata_Bool_Exp>;
};


export type Query_RootMinters_Metadata_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootOob_Tokens_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oob_Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
};


export type Query_RootOob_Tokens_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oob_Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
};


export type Query_RootOob_Tokens_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPrimary_PurchasesArgs = {
  distinct_on?: InputMaybe<Array<Primary_Purchases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Primary_Purchases_Order_By>>;
  where?: InputMaybe<Primary_Purchases_Bool_Exp>;
};


export type Query_RootPrimary_Purchases_By_PkArgs = {
  token_id: Scalars['String']['input'];
};


export type Query_RootProcessing_JobsArgs = {
  distinct_on?: InputMaybe<Array<Processing_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Processing_Jobs_Order_By>>;
  where?: InputMaybe<Processing_Jobs_Bool_Exp>;
};


export type Query_RootProcessing_Jobs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProjectPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type Query_RootProjectPagesArgs = {
  filters?: InputMaybe<ProjectPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Query_RootProject_External_Asset_DependenciesArgs = {
  distinct_on?: InputMaybe<Array<Project_External_Asset_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_External_Asset_Dependencies_Order_By>>;
  where?: InputMaybe<Project_External_Asset_Dependencies_Bool_Exp>;
};


export type Query_RootProject_External_Asset_Dependencies_By_PkArgs = {
  index: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
};


export type Query_RootProject_Minter_ConfigurationsArgs = {
  distinct_on?: InputMaybe<Array<Project_Minter_Configurations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Minter_Configurations_Order_By>>;
  where?: InputMaybe<Project_Minter_Configurations_Bool_Exp>;
};


export type Query_RootProject_Minter_Configurations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootProject_ScriptsArgs = {
  distinct_on?: InputMaybe<Array<Project_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Scripts_Order_By>>;
  where?: InputMaybe<Project_Scripts_Bool_Exp>;
};


export type Query_RootProject_Scripts_By_PkArgs = {
  index: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
};


export type Query_RootProject_SeriesArgs = {
  distinct_on?: InputMaybe<Array<Project_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Series_Order_By>>;
  where?: InputMaybe<Project_Series_Bool_Exp>;
};


export type Query_RootProject_Series_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Series_Order_By>>;
  where?: InputMaybe<Project_Series_Bool_Exp>;
};


export type Query_RootProject_Series_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProject_Vertical_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Project_Vertical_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Vertical_Categories_Order_By>>;
  where?: InputMaybe<Project_Vertical_Categories_Bool_Exp>;
};


export type Query_RootProject_Vertical_Categories_By_PkArgs = {
  name: Categories_Enum;
};


export type Query_RootProject_VerticalsArgs = {
  distinct_on?: InputMaybe<Array<Project_Verticals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Verticals_Order_By>>;
  where?: InputMaybe<Project_Verticals_Bool_Exp>;
};


export type Query_RootProject_Verticals_By_PkArgs = {
  name: Verticals_Enum;
};


export type Query_RootProjects_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<Projects_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Features_Order_By>>;
  where?: InputMaybe<Projects_Features_Bool_Exp>;
};


export type Query_RootProjects_Features_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProjects_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Query_RootProjects_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Query_RootProjects_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootProposed_Artist_Addresses_And_SplitsArgs = {
  distinct_on?: InputMaybe<Array<Proposed_Artist_Addresses_And_Splits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposed_Artist_Addresses_And_Splits_Order_By>>;
  where?: InputMaybe<Proposed_Artist_Addresses_And_Splits_Bool_Exp>;
};


export type Query_RootProposed_Artist_Addresses_And_Splits_By_PkArgs = {
  project_id: Scalars['String']['input'];
};


export type Query_RootReceipt_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


export type Query_RootReceipt_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


export type Query_RootReceipt_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootRefresh_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refresh_Requests_Order_By>>;
  where?: InputMaybe<Refresh_Requests_Bool_Exp>;
};


export type Query_RootRefresh_Requests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRender_TypesArgs = {
  distinct_on?: InputMaybe<Array<Render_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Render_Types_Order_By>>;
  where?: InputMaybe<Render_Types_Bool_Exp>;
};


export type Query_RootRender_Types_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootSearch_ProjectsArgs = {
  args: Search_Projects_Args;
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Query_RootSearch_Projects_AggregateArgs = {
  args: Search_Projects_Args;
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Query_RootSearch_TagsArgs = {
  args: Search_Tags_Args;
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootSearch_TokensArgs = {
  args: Search_Tokens_Args;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Query_RootSearch_Tokens_AggregateArgs = {
  args: Search_Tokens_Args;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Query_RootSearch_UsersArgs = {
  args: Search_Users_Args;
  distinct_on?: InputMaybe<Array<User_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profiles_Order_By>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Query_RootSearch_Users_AggregateArgs = {
  args: Search_Users_Args;
  distinct_on?: InputMaybe<Array<User_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profiles_Order_By>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Query_RootSplit_Atomic_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Split_Atomic_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Split_Atomic_Contracts_Order_By>>;
  where?: InputMaybe<Split_Atomic_Contracts_Bool_Exp>;
};


export type Query_RootSplit_Atomic_Contracts_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootSplit_Atomic_FactoriesArgs = {
  distinct_on?: InputMaybe<Array<Split_Atomic_Factories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Split_Atomic_Factories_Order_By>>;
  where?: InputMaybe<Split_Atomic_Factories_Bool_Exp>;
};


export type Query_RootSplit_Atomic_Factories_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Query_RootSplit_Payment_ConfigurationsArgs = {
  distinct_on?: InputMaybe<Array<Split_Payment_Configurations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Split_Payment_Configurations_Order_By>>;
  where?: InputMaybe<Split_Payment_Configurations_Bool_Exp>;
};


export type Query_RootSplit_Payment_Configurations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootTokens_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Query_RootTokens_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Query_RootTokens_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUser_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<User_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profiles_Order_By>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Query_RootUser_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profiles_Order_By>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Query_RootUser_Profiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  public_address: Scalars['String']['input'];
};


export type Query_RootVerticalsArgs = {
  distinct_on?: InputMaybe<Array<Verticals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verticals_Order_By>>;
  where?: InputMaybe<Verticals_Bool_Exp>;
};


export type Query_RootVerticals_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootVideo_Aspect_RatiosArgs = {
  distinct_on?: InputMaybe<Array<Video_Aspect_Ratios_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Aspect_Ratios_Order_By>>;
  where?: InputMaybe<Video_Aspect_Ratios_Bool_Exp>;
};


export type Query_RootVideo_Aspect_Ratios_By_PkArgs = {
  value: Scalars['numeric']['input'];
};


export type Query_RootVideo_Frame_RatesArgs = {
  distinct_on?: InputMaybe<Array<Video_Frame_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Frame_Rates_Order_By>>;
  where?: InputMaybe<Video_Frame_Rates_Bool_Exp>;
};


export type Query_RootVideo_Frame_Rates_By_PkArgs = {
  value: Scalars['Int']['input'];
};


export type Query_RootWebflow_Artist_InfoArgs = {
  distinct_on?: InputMaybe<Array<Webflow_Artist_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webflow_Artist_Info_Order_By>>;
  where?: InputMaybe<Webflow_Artist_Info_Bool_Exp>;
};


export type Query_RootWebflow_Artist_Info_By_PkArgs = {
  webflow_item_id: Scalars['String']['input'];
};


export type Query_RootWebflow_Spectrum_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Webflow_Spectrum_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webflow_Spectrum_Articles_Order_By>>;
  where?: InputMaybe<Webflow_Spectrum_Articles_Bool_Exp>;
};


export type Query_RootWebflow_Spectrum_Articles_By_PkArgs = {
  webflow_item_id: Scalars['String']['input'];
};

export type Random_Oob_Token_Projects_Metadata_Args = {
  seed?: InputMaybe<Scalars['float8']['input']>;
};

export type Random_Token_Projects_Metadata_Args = {
  seed?: InputMaybe<Scalars['float8']['input']>;
};

/** indexed data from subgraph Receipt entity, used by settlment minters */
export type Receipt_Metadata = {
  __typename?: 'receipt_metadata';
  /** Computed field defining approximate excess settlement funds available to be reclaimed on a given receipt, given latest purchase price on minter. May have minor rounding errors after 15 decimals. */
  excess_settlement_funds?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** An object relationship */
  minter: Minters_Metadata;
  minter_id: Scalars['String']['output'];
  net_posted: Scalars['String']['output'];
  num_purchased: Scalars['String']['output'];
  /** An object relationship */
  project: Projects_Metadata;
  project_id: Scalars['String']['output'];
  /** An object relationship */
  project_minter_configuration?: Maybe<Project_Minter_Configurations>;
  /** An object relationship */
  user: Users;
  user_address: Scalars['String']['output'];
};

/** aggregated selection of "receipt_metadata" */
export type Receipt_Metadata_Aggregate = {
  __typename?: 'receipt_metadata_aggregate';
  aggregate?: Maybe<Receipt_Metadata_Aggregate_Fields>;
  nodes: Array<Receipt_Metadata>;
};

export type Receipt_Metadata_Aggregate_Bool_Exp = {
  count?: InputMaybe<Receipt_Metadata_Aggregate_Bool_Exp_Count>;
};

export type Receipt_Metadata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Receipt_Metadata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "receipt_metadata" */
export type Receipt_Metadata_Aggregate_Fields = {
  __typename?: 'receipt_metadata_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Receipt_Metadata_Max_Fields>;
  min?: Maybe<Receipt_Metadata_Min_Fields>;
};


/** aggregate fields of "receipt_metadata" */
export type Receipt_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "receipt_metadata" */
export type Receipt_Metadata_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Receipt_Metadata_Max_Order_By>;
  min?: InputMaybe<Receipt_Metadata_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "receipt_metadata". All fields are combined with a logical 'AND'. */
export type Receipt_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Receipt_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Receipt_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Receipt_Metadata_Bool_Exp>>;
  excess_settlement_funds?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  minter?: InputMaybe<Minters_Metadata_Bool_Exp>;
  minter_id?: InputMaybe<String_Comparison_Exp>;
  net_posted?: InputMaybe<String_Comparison_Exp>;
  num_purchased?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  project_minter_configuration?: InputMaybe<Project_Minter_Configurations_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Receipt_Metadata_Max_Fields = {
  __typename?: 'receipt_metadata_max_fields';
  /** Computed field defining approximate excess settlement funds available to be reclaimed on a given receipt, given latest purchase price on minter. May have minor rounding errors after 15 decimals. */
  excess_settlement_funds?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  minter_id?: Maybe<Scalars['String']['output']>;
  net_posted?: Maybe<Scalars['String']['output']>;
  num_purchased?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "receipt_metadata" */
export type Receipt_Metadata_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  minter_id?: InputMaybe<Order_By>;
  net_posted?: InputMaybe<Order_By>;
  num_purchased?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Receipt_Metadata_Min_Fields = {
  __typename?: 'receipt_metadata_min_fields';
  /** Computed field defining approximate excess settlement funds available to be reclaimed on a given receipt, given latest purchase price on minter. May have minor rounding errors after 15 decimals. */
  excess_settlement_funds?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  minter_id?: Maybe<Scalars['String']['output']>;
  net_posted?: Maybe<Scalars['String']['output']>;
  num_purchased?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "receipt_metadata" */
export type Receipt_Metadata_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  minter_id?: InputMaybe<Order_By>;
  net_posted?: InputMaybe<Order_By>;
  num_purchased?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "receipt_metadata". */
export type Receipt_Metadata_Order_By = {
  excess_settlement_funds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minter?: InputMaybe<Minters_Metadata_Order_By>;
  minter_id?: InputMaybe<Order_By>;
  net_posted?: InputMaybe<Order_By>;
  num_purchased?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
  project_minter_configuration?: InputMaybe<Project_Minter_Configurations_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_address?: InputMaybe<Order_By>;
};

/** select columns of table "receipt_metadata" */
export enum Receipt_Metadata_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MinterId = 'minter_id',
  /** column name */
  NetPosted = 'net_posted',
  /** column name */
  NumPurchased = 'num_purchased',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UserAddress = 'user_address'
}

/** Streaming cursor of the table "receipt_metadata" */
export type Receipt_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Receipt_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Receipt_Metadata_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  minter_id?: InputMaybe<Scalars['String']['input']>;
  net_posted?: InputMaybe<Scalars['String']['input']>;
  num_purchased?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  user_address?: InputMaybe<Scalars['String']['input']>;
};

export enum Refresh_Asset_Types_Enum {
  Image = 'Image',
  None = 'None',
  Video = 'Video'
}

/** Boolean expression to compare columns of type "refresh_asset_types_enum". All fields are combined with logical 'AND'. */
export type Refresh_Asset_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Refresh_Asset_Types_Enum>;
  _in?: InputMaybe<Array<Refresh_Asset_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Refresh_Asset_Types_Enum>;
  _nin?: InputMaybe<Array<Refresh_Asset_Types_Enum>>;
};

export enum Refresh_Request_Types_Enum {
  Project = 'Project',
  Token = 'Token'
}

/** Boolean expression to compare columns of type "refresh_request_types_enum". All fields are combined with logical 'AND'. */
export type Refresh_Request_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Refresh_Request_Types_Enum>;
  _in?: InputMaybe<Array<Refresh_Request_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Refresh_Request_Types_Enum>;
  _nin?: InputMaybe<Array<Refresh_Request_Types_Enum>>;
};

/** This table tracks pending & completed requests to refresh the media assets for a project or token. Artists and staff may re-render the .png, .mp4 and .gif files for a collection of NFTs and this table maintains those requests. */
export type Refresh_Requests = {
  __typename?: 'refresh_requests';
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  processing_jobs: Array<Processing_Jobs>;
  project_id: Scalars['String']['output'];
  /** A computed field, executes function "refresh_requests_queue_weight" */
  queue_weight?: Maybe<Scalars['bigint']['output']>;
  request_type: Refresh_Request_Types_Enum;
  submitted_at: Scalars['timestamptz']['output'];
  token_ids?: Maybe<Scalars['jsonb']['output']>;
};


/** This table tracks pending & completed requests to refresh the media assets for a project or token. Artists and staff may re-render the .png, .mp4 and .gif files for a collection of NFTs and this table maintains those requests. */
export type Refresh_RequestsProcessing_JobsArgs = {
  distinct_on?: InputMaybe<Array<Processing_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Processing_Jobs_Order_By>>;
  where?: InputMaybe<Processing_Jobs_Bool_Exp>;
};


/** This table tracks pending & completed requests to refresh the media assets for a project or token. Artists and staff may re-render the .png, .mp4 and .gif files for a collection of NFTs and this table maintains those requests. */
export type Refresh_RequestsToken_IdsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "refresh_requests" */
export type Refresh_Requests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Refresh_Requests_Max_Order_By>;
  min?: InputMaybe<Refresh_Requests_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "refresh_requests". All fields are combined with a logical 'AND'. */
export type Refresh_Requests_Bool_Exp = {
  _and?: InputMaybe<Array<Refresh_Requests_Bool_Exp>>;
  _not?: InputMaybe<Refresh_Requests_Bool_Exp>;
  _or?: InputMaybe<Array<Refresh_Requests_Bool_Exp>>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  processing_jobs?: InputMaybe<Processing_Jobs_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  queue_weight?: InputMaybe<Bigint_Comparison_Exp>;
  request_type?: InputMaybe<Refresh_Request_Types_Enum_Comparison_Exp>;
  submitted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  token_ids?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** order by max() on columns of table "refresh_requests" */
export type Refresh_Requests_Max_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "refresh_requests" */
export type Refresh_Requests_Min_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "refresh_requests". */
export type Refresh_Requests_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  processing_jobs_aggregate?: InputMaybe<Processing_Jobs_Aggregate_Order_By>;
  project_id?: InputMaybe<Order_By>;
  queue_weight?: InputMaybe<Order_By>;
  request_type?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
  token_ids?: InputMaybe<Order_By>;
};

/** select columns of table "refresh_requests" */
export enum Refresh_Requests_Select_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  RequestType = 'request_type',
  /** column name */
  SubmittedAt = 'submitted_at',
  /** column name */
  TokenIds = 'token_ids'
}

/** Streaming cursor of the table "refresh_requests" */
export type Refresh_Requests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Refresh_Requests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Refresh_Requests_Stream_Cursor_Value_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  request_type?: InputMaybe<Refresh_Request_Types_Enum>;
  submitted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  token_ids?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "render_types" */
export type Render_Types = {
  __typename?: 'render_types';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "render_types". All fields are combined with a logical 'AND'. */
export type Render_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Render_Types_Bool_Exp>>;
  _not?: InputMaybe<Render_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Render_Types_Bool_Exp>>;
  label?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

export enum Render_Types_Enum {
  /** gif */
  Gif = 'gif',
  /** png */
  Image = 'image',
  /** generator live view */
  Live = 'live',
  /** mp4 */
  Video = 'video'
}

/** Boolean expression to compare columns of type "render_types_enum". All fields are combined with logical 'AND'. */
export type Render_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Render_Types_Enum>;
  _in?: InputMaybe<Array<Render_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Render_Types_Enum>;
  _nin?: InputMaybe<Array<Render_Types_Enum>>;
};

/** Ordering options when selecting data from "render_types". */
export type Render_Types_Order_By = {
  label?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "render_types" */
export enum Render_Types_Select_Column {
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** Streaming cursor of the table "render_types" */
export type Render_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Render_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Render_Types_Stream_Cursor_Value_Input = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Search_Projects_Args = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Search_Tags_Args = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Search_Tokens_Args = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Search_Users_Args = {
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Table for all indexed split atomic contracts */
export type Split_Atomic_Contracts = {
  __typename?: 'split_atomic_contracts';
  address: Scalars['String']['output'];
  implementation: Scalars['String']['output'];
  split_atomic_factory: Scalars['String']['output'];
  /** An array relationship */
  splits: Array<Split_Payment_Configurations>;
  type: Scalars['String']['output'];
};


/** Table for all indexed split atomic contracts */
export type Split_Atomic_ContractsSplitsArgs = {
  distinct_on?: InputMaybe<Array<Split_Payment_Configurations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Split_Payment_Configurations_Order_By>>;
  where?: InputMaybe<Split_Payment_Configurations_Bool_Exp>;
};

/** order by aggregate values of table "split_atomic_contracts" */
export type Split_Atomic_Contracts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Split_Atomic_Contracts_Max_Order_By>;
  min?: InputMaybe<Split_Atomic_Contracts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "split_atomic_contracts". All fields are combined with a logical 'AND'. */
export type Split_Atomic_Contracts_Bool_Exp = {
  _and?: InputMaybe<Array<Split_Atomic_Contracts_Bool_Exp>>;
  _not?: InputMaybe<Split_Atomic_Contracts_Bool_Exp>;
  _or?: InputMaybe<Array<Split_Atomic_Contracts_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  implementation?: InputMaybe<String_Comparison_Exp>;
  split_atomic_factory?: InputMaybe<String_Comparison_Exp>;
  splits?: InputMaybe<Split_Payment_Configurations_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "split_atomic_contracts" */
export type Split_Atomic_Contracts_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  implementation?: InputMaybe<Order_By>;
  split_atomic_factory?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "split_atomic_contracts" */
export type Split_Atomic_Contracts_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  implementation?: InputMaybe<Order_By>;
  split_atomic_factory?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "split_atomic_contracts". */
export type Split_Atomic_Contracts_Order_By = {
  address?: InputMaybe<Order_By>;
  implementation?: InputMaybe<Order_By>;
  split_atomic_factory?: InputMaybe<Order_By>;
  splits_aggregate?: InputMaybe<Split_Payment_Configurations_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "split_atomic_contracts" */
export enum Split_Atomic_Contracts_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Implementation = 'implementation',
  /** column name */
  SplitAtomicFactory = 'split_atomic_factory',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "split_atomic_contracts" */
export type Split_Atomic_Contracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Split_Atomic_Contracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Split_Atomic_Contracts_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  implementation?: InputMaybe<Scalars['String']['input']>;
  split_atomic_factory?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Contains all indexed split atomic factory contracts */
export type Split_Atomic_Factories = {
  __typename?: 'split_atomic_factories';
  abandoned: Scalars['Boolean']['output'];
  address: Scalars['String']['output'];
  implementation: Scalars['String']['output'];
  required_split_address?: Maybe<Scalars['String']['output']>;
  required_split_basis_points?: Maybe<Scalars['numeric']['output']>;
  /** fetch data from the table: "split_atomic_contracts" */
  split_atomic_contracts: Array<Split_Atomic_Contracts>;
  type: Scalars['String']['output'];
};


/** Contains all indexed split atomic factory contracts */
export type Split_Atomic_FactoriesSplit_Atomic_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Split_Atomic_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Split_Atomic_Contracts_Order_By>>;
  where?: InputMaybe<Split_Atomic_Contracts_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "split_atomic_factories". All fields are combined with a logical 'AND'. */
export type Split_Atomic_Factories_Bool_Exp = {
  _and?: InputMaybe<Array<Split_Atomic_Factories_Bool_Exp>>;
  _not?: InputMaybe<Split_Atomic_Factories_Bool_Exp>;
  _or?: InputMaybe<Array<Split_Atomic_Factories_Bool_Exp>>;
  abandoned?: InputMaybe<Boolean_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  implementation?: InputMaybe<String_Comparison_Exp>;
  required_split_address?: InputMaybe<String_Comparison_Exp>;
  required_split_basis_points?: InputMaybe<Numeric_Comparison_Exp>;
  split_atomic_contracts?: InputMaybe<Split_Atomic_Contracts_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "split_atomic_factories". */
export type Split_Atomic_Factories_Order_By = {
  abandoned?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  implementation?: InputMaybe<Order_By>;
  required_split_address?: InputMaybe<Order_By>;
  required_split_basis_points?: InputMaybe<Order_By>;
  split_atomic_contracts_aggregate?: InputMaybe<Split_Atomic_Contracts_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "split_atomic_factories" */
export enum Split_Atomic_Factories_Select_Column {
  /** column name */
  Abandoned = 'abandoned',
  /** column name */
  Address = 'address',
  /** column name */
  Implementation = 'implementation',
  /** column name */
  RequiredSplitAddress = 'required_split_address',
  /** column name */
  RequiredSplitBasisPoints = 'required_split_basis_points',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "split_atomic_factories" */
export type Split_Atomic_Factories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Split_Atomic_Factories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Split_Atomic_Factories_Stream_Cursor_Value_Input = {
  abandoned?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  implementation?: InputMaybe<Scalars['String']['input']>;
  required_split_address?: InputMaybe<Scalars['String']['input']>;
  required_split_basis_points?: InputMaybe<Scalars['numeric']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Table of all individual splits used by indexed split atomic contracts */
export type Split_Payment_Configurations = {
  __typename?: 'split_payment_configurations';
  basis_points: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  recipient: Scalars['String']['output'];
  split_atomic_contract: Scalars['String']['output'];
};

/** order by aggregate values of table "split_payment_configurations" */
export type Split_Payment_Configurations_Aggregate_Order_By = {
  avg?: InputMaybe<Split_Payment_Configurations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Split_Payment_Configurations_Max_Order_By>;
  min?: InputMaybe<Split_Payment_Configurations_Min_Order_By>;
  stddev?: InputMaybe<Split_Payment_Configurations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Split_Payment_Configurations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Split_Payment_Configurations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Split_Payment_Configurations_Sum_Order_By>;
  var_pop?: InputMaybe<Split_Payment_Configurations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Split_Payment_Configurations_Var_Samp_Order_By>;
  variance?: InputMaybe<Split_Payment_Configurations_Variance_Order_By>;
};

/** order by avg() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Avg_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "split_payment_configurations". All fields are combined with a logical 'AND'. */
export type Split_Payment_Configurations_Bool_Exp = {
  _and?: InputMaybe<Array<Split_Payment_Configurations_Bool_Exp>>;
  _not?: InputMaybe<Split_Payment_Configurations_Bool_Exp>;
  _or?: InputMaybe<Array<Split_Payment_Configurations_Bool_Exp>>;
  basis_points?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  recipient?: InputMaybe<String_Comparison_Exp>;
  split_atomic_contract?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Max_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Order_By>;
  split_atomic_contract?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Min_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Order_By>;
  split_atomic_contract?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "split_payment_configurations". */
export type Split_Payment_Configurations_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  recipient?: InputMaybe<Order_By>;
  split_atomic_contract?: InputMaybe<Order_By>;
};

/** select columns of table "split_payment_configurations" */
export enum Split_Payment_Configurations_Select_Column {
  /** column name */
  BasisPoints = 'basis_points',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  SplitAtomicContract = 'split_atomic_contract'
}

/** order by stddev() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Stddev_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Stddev_Pop_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Stddev_Samp_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "split_payment_configurations" */
export type Split_Payment_Configurations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Split_Payment_Configurations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Split_Payment_Configurations_Stream_Cursor_Value_Input = {
  basis_points?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  split_atomic_contract?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Sum_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Var_Pop_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Var_Samp_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "split_payment_configurations" */
export type Split_Payment_Configurations_Variance_Order_By = {
  basis_points?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "artists" */
  artists: Array<Artists>;
  /** fetch aggregated fields from the table: "artists" */
  artists_aggregate: Artists_Aggregate;
  /** fetch data from the table in a streaming manner: "artists" */
  artists_stream: Array<Artists>;
  /** fetch data from the table: "bids_metadata" */
  bids_metadata: Array<Bids_Metadata>;
  /** fetch aggregated fields from the table: "bids_metadata" */
  bids_metadata_aggregate: Bids_Metadata_Aggregate;
  /** fetch data from the table: "bids_metadata" using primary key columns */
  bids_metadata_by_pk?: Maybe<Bids_Metadata>;
  /** fetch data from the table in a streaming manner: "bids_metadata" */
  bids_metadata_stream: Array<Bids_Metadata>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "contract_allowlistings" */
  contract_allowlistings: Array<Contract_Allowlistings>;
  /** fetch data from the table: "contract_allowlistings" using primary key columns */
  contract_allowlistings_by_pk?: Maybe<Contract_Allowlistings>;
  /** fetch data from the table in a streaming manner: "contract_allowlistings" */
  contract_allowlistings_stream: Array<Contract_Allowlistings>;
  /** fetch data from the table: "contract_type_names" */
  contract_type_names: Array<Contract_Type_Names>;
  /** fetch data from the table: "contract_type_names" using primary key columns */
  contract_type_names_by_pk?: Maybe<Contract_Type_Names>;
  /** fetch data from the table in a streaming manner: "contract_type_names" */
  contract_type_names_stream: Array<Contract_Type_Names>;
  /** fetch data from the table: "contract_types" */
  contract_types: Array<Contract_Types>;
  /** fetch data from the table: "contract_types" using primary key columns */
  contract_types_by_pk?: Maybe<Contract_Types>;
  /** fetch data from the table in a streaming manner: "contract_types" */
  contract_types_stream: Array<Contract_Types>;
  /** fetch data from the table: "contracts_metadata" */
  contracts_metadata: Array<Contracts_Metadata>;
  /** fetch aggregated fields from the table: "contracts_metadata" */
  contracts_metadata_aggregate: Contracts_Metadata_Aggregate;
  /** fetch data from the table: "contracts_metadata" using primary key columns */
  contracts_metadata_by_pk?: Maybe<Contracts_Metadata>;
  /** fetch data from the table in a streaming manner: "contracts_metadata" */
  contracts_metadata_stream: Array<Contracts_Metadata>;
  /** fetch data from the table: "dependencies_metadata" */
  dependencies_metadata: Array<Dependencies_Metadata>;
  /** fetch aggregated fields from the table: "dependencies_metadata" */
  dependencies_metadata_aggregate: Dependencies_Metadata_Aggregate;
  /** fetch data from the table: "dependencies_metadata" using primary key columns */
  dependencies_metadata_by_pk?: Maybe<Dependencies_Metadata>;
  /** fetch data from the table in a streaming manner: "dependencies_metadata" */
  dependencies_metadata_stream: Array<Dependencies_Metadata>;
  /** fetch data from the table: "dependency_additional_cdns" */
  dependency_additional_cdns: Array<Dependency_Additional_Cdns>;
  /** fetch aggregated fields from the table: "dependency_additional_cdns" */
  dependency_additional_cdns_aggregate: Dependency_Additional_Cdns_Aggregate;
  /** fetch data from the table: "dependency_additional_cdns" using primary key columns */
  dependency_additional_cdns_by_pk?: Maybe<Dependency_Additional_Cdns>;
  /** fetch data from the table in a streaming manner: "dependency_additional_cdns" */
  dependency_additional_cdns_stream: Array<Dependency_Additional_Cdns>;
  /** fetch data from the table: "dependency_additional_repositories" */
  dependency_additional_repositories: Array<Dependency_Additional_Repositories>;
  /** fetch aggregated fields from the table: "dependency_additional_repositories" */
  dependency_additional_repositories_aggregate: Dependency_Additional_Repositories_Aggregate;
  /** fetch data from the table: "dependency_additional_repositories" using primary key columns */
  dependency_additional_repositories_by_pk?: Maybe<Dependency_Additional_Repositories>;
  /** fetch data from the table in a streaming manner: "dependency_additional_repositories" */
  dependency_additional_repositories_stream: Array<Dependency_Additional_Repositories>;
  /** fetch data from the table: "dependency_registries" */
  dependency_registries: Array<Dependency_Registries>;
  /** fetch aggregated fields from the table: "dependency_registries" */
  dependency_registries_aggregate: Dependency_Registries_Aggregate;
  /** fetch data from the table: "dependency_registries" using primary key columns */
  dependency_registries_by_pk?: Maybe<Dependency_Registries>;
  /** fetch data from the table in a streaming manner: "dependency_registries" */
  dependency_registries_stream: Array<Dependency_Registries>;
  /** fetch data from the table: "dependency_scripts" */
  dependency_scripts: Array<Dependency_Scripts>;
  /** fetch aggregated fields from the table: "dependency_scripts" */
  dependency_scripts_aggregate: Dependency_Scripts_Aggregate;
  /** fetch data from the table: "dependency_scripts" using primary key columns */
  dependency_scripts_by_pk?: Maybe<Dependency_Scripts>;
  /** fetch data from the table in a streaming manner: "dependency_scripts" */
  dependency_scripts_stream: Array<Dependency_Scripts>;
  /** An array relationship */
  entity_tags: Array<Entity_Tags>;
  /** fetch data from the table: "entity_tags" using primary key columns */
  entity_tags_by_pk?: Maybe<Entity_Tags>;
  /** fetch data from the table in a streaming manner: "entity_tags" */
  entity_tags_stream: Array<Entity_Tags>;
  /** An array relationship */
  favorites: Array<Favorites>;
  /** An aggregate relationship */
  favorites_aggregate: Favorites_Aggregate;
  /** fetch data from the table: "favorites" using primary key columns */
  favorites_by_pk?: Maybe<Favorites>;
  /** fetch data from the table in a streaming manner: "favorites" */
  favorites_stream: Array<Favorites>;
  /** fetch data from the table: "feature_flags" */
  feature_flags: Array<Feature_Flags>;
  /** fetch data from the table: "feature_flags" using primary key columns */
  feature_flags_by_pk?: Maybe<Feature_Flags>;
  /** fetch data from the table in a streaming manner: "feature_flags" */
  feature_flags_stream: Array<Feature_Flags>;
  /** execute function "filter_tokens_metadata_by_features" which returns "tokens_metadata" */
  filter_tokens_metadata_by_features: Array<Tokens_Metadata>;
  /** execute function "filter_tokens_metadata_by_features" and query aggregates on result of table type "tokens_metadata" */
  filter_tokens_metadata_by_features_aggregate: Tokens_Metadata_Aggregate;
  /** execute function "list_projects_metadata_random" which returns "projects_metadata" */
  list_projects_metadata_random: Array<Projects_Metadata>;
  /** execute function "list_projects_metadata_random" and query aggregates on result of table type "projects_metadata" */
  list_projects_metadata_random_aggregate: Projects_Metadata_Aggregate;
  /** fetch data from the table: "media" */
  media: Array<Media>;
  /** fetch data from the table: "media" using primary key columns */
  media_by_pk?: Maybe<Media>;
  /** fetch data from the table in a streaming manner: "media" */
  media_stream: Array<Media>;
  /** fetch data from the table: "minter_filter_type_names" */
  minter_filter_type_names: Array<Minter_Filter_Type_Names>;
  /** fetch data from the table: "minter_filter_type_names" using primary key columns */
  minter_filter_type_names_by_pk?: Maybe<Minter_Filter_Type_Names>;
  /** fetch data from the table in a streaming manner: "minter_filter_type_names" */
  minter_filter_type_names_stream: Array<Minter_Filter_Type_Names>;
  /** fetch data from the table: "minter_filters_metadata" */
  minter_filters_metadata: Array<Minter_Filters_Metadata>;
  /** fetch data from the table: "minter_filters_metadata" using primary key columns */
  minter_filters_metadata_by_pk?: Maybe<Minter_Filters_Metadata>;
  /** fetch data from the table in a streaming manner: "minter_filters_metadata" */
  minter_filters_metadata_stream: Array<Minter_Filters_Metadata>;
  /** fetch data from the table: "minter_types" */
  minter_types: Array<Minter_Types>;
  /** fetch data from the table: "minter_types" using primary key columns */
  minter_types_by_pk?: Maybe<Minter_Types>;
  /** fetch data from the table in a streaming manner: "minter_types" */
  minter_types_stream: Array<Minter_Types>;
  /** fetch data from the table: "minters_metadata" */
  minters_metadata: Array<Minters_Metadata>;
  /** fetch data from the table: "minters_metadata" using primary key columns */
  minters_metadata_by_pk?: Maybe<Minters_Metadata>;
  /** fetch data from the table in a streaming manner: "minters_metadata" */
  minters_metadata_stream: Array<Minters_Metadata>;
  /** fetch data from the table: "oob_tokens_metadata" */
  oob_tokens_metadata: Array<Oob_Tokens_Metadata>;
  /** fetch aggregated fields from the table: "oob_tokens_metadata" */
  oob_tokens_metadata_aggregate: Oob_Tokens_Metadata_Aggregate;
  /** fetch data from the table: "oob_tokens_metadata" using primary key columns */
  oob_tokens_metadata_by_pk?: Maybe<Oob_Tokens_Metadata>;
  /** fetch data from the table in a streaming manner: "oob_tokens_metadata" */
  oob_tokens_metadata_stream: Array<Oob_Tokens_Metadata>;
  /** fetch data from the table: "primary_purchases" */
  primary_purchases: Array<Primary_Purchases>;
  /** fetch data from the table: "primary_purchases" using primary key columns */
  primary_purchases_by_pk?: Maybe<Primary_Purchases>;
  /** fetch data from the table in a streaming manner: "primary_purchases" */
  primary_purchases_stream: Array<Primary_Purchases>;
  /** An array relationship */
  processing_jobs: Array<Processing_Jobs>;
  /** fetch data from the table: "processing_jobs" using primary key columns */
  processing_jobs_by_pk?: Maybe<Processing_Jobs>;
  /** fetch data from the table in a streaming manner: "processing_jobs" */
  processing_jobs_stream: Array<Processing_Jobs>;
  /** fetch data from the table: "project_external_asset_dependencies" */
  project_external_asset_dependencies: Array<Project_External_Asset_Dependencies>;
  /** fetch data from the table: "project_external_asset_dependencies" using primary key columns */
  project_external_asset_dependencies_by_pk?: Maybe<Project_External_Asset_Dependencies>;
  /** fetch data from the table in a streaming manner: "project_external_asset_dependencies" */
  project_external_asset_dependencies_stream: Array<Project_External_Asset_Dependencies>;
  /** fetch data from the table: "project_minter_configurations" */
  project_minter_configurations: Array<Project_Minter_Configurations>;
  /** fetch data from the table: "project_minter_configurations" using primary key columns */
  project_minter_configurations_by_pk?: Maybe<Project_Minter_Configurations>;
  /** fetch data from the table in a streaming manner: "project_minter_configurations" */
  project_minter_configurations_stream: Array<Project_Minter_Configurations>;
  /** fetch data from the table: "project_scripts" */
  project_scripts: Array<Project_Scripts>;
  /** fetch data from the table: "project_scripts" using primary key columns */
  project_scripts_by_pk?: Maybe<Project_Scripts>;
  /** fetch data from the table in a streaming manner: "project_scripts" */
  project_scripts_stream: Array<Project_Scripts>;
  /** fetch data from the table: "project_series" */
  project_series: Array<Project_Series>;
  /** fetch aggregated fields from the table: "project_series" */
  project_series_aggregate: Project_Series_Aggregate;
  /** fetch data from the table: "project_series" using primary key columns */
  project_series_by_pk?: Maybe<Project_Series>;
  /** fetch data from the table in a streaming manner: "project_series" */
  project_series_stream: Array<Project_Series>;
  /** fetch data from the table: "project_vertical_categories" */
  project_vertical_categories: Array<Project_Vertical_Categories>;
  /** fetch data from the table: "project_vertical_categories" using primary key columns */
  project_vertical_categories_by_pk?: Maybe<Project_Vertical_Categories>;
  /** fetch data from the table in a streaming manner: "project_vertical_categories" */
  project_vertical_categories_stream: Array<Project_Vertical_Categories>;
  /** fetch data from the table: "project_verticals" */
  project_verticals: Array<Project_Verticals>;
  /** fetch data from the table: "project_verticals" using primary key columns */
  project_verticals_by_pk?: Maybe<Project_Verticals>;
  /** fetch data from the table in a streaming manner: "project_verticals" */
  project_verticals_stream: Array<Project_Verticals>;
  /** fetch data from the table: "projects_features" */
  projects_features: Array<Projects_Features>;
  /** fetch data from the table: "projects_features" using primary key columns */
  projects_features_by_pk?: Maybe<Projects_Features>;
  /** fetch data from the table in a streaming manner: "projects_features" */
  projects_features_stream: Array<Projects_Features>;
  /** fetch data from the table: "projects_metadata" */
  projects_metadata: Array<Projects_Metadata>;
  /** fetch aggregated fields from the table: "projects_metadata" */
  projects_metadata_aggregate: Projects_Metadata_Aggregate;
  /** fetch data from the table: "projects_metadata" using primary key columns */
  projects_metadata_by_pk?: Maybe<Projects_Metadata>;
  /** fetch data from the table in a streaming manner: "projects_metadata" */
  projects_metadata_stream: Array<Projects_Metadata>;
  /** fetch data from the table: "proposed_artist_addresses_and_splits" */
  proposed_artist_addresses_and_splits: Array<Proposed_Artist_Addresses_And_Splits>;
  /** fetch data from the table: "proposed_artist_addresses_and_splits" using primary key columns */
  proposed_artist_addresses_and_splits_by_pk?: Maybe<Proposed_Artist_Addresses_And_Splits>;
  /** fetch data from the table in a streaming manner: "proposed_artist_addresses_and_splits" */
  proposed_artist_addresses_and_splits_stream: Array<Proposed_Artist_Addresses_And_Splits>;
  /** fetch data from the table: "receipt_metadata" */
  receipt_metadata: Array<Receipt_Metadata>;
  /** fetch aggregated fields from the table: "receipt_metadata" */
  receipt_metadata_aggregate: Receipt_Metadata_Aggregate;
  /** fetch data from the table: "receipt_metadata" using primary key columns */
  receipt_metadata_by_pk?: Maybe<Receipt_Metadata>;
  /** fetch data from the table in a streaming manner: "receipt_metadata" */
  receipt_metadata_stream: Array<Receipt_Metadata>;
  /** An array relationship */
  refresh_requests: Array<Refresh_Requests>;
  /** fetch data from the table: "refresh_requests" using primary key columns */
  refresh_requests_by_pk?: Maybe<Refresh_Requests>;
  /** fetch data from the table in a streaming manner: "refresh_requests" */
  refresh_requests_stream: Array<Refresh_Requests>;
  /** fetch data from the table: "render_types" */
  render_types: Array<Render_Types>;
  /** fetch data from the table: "render_types" using primary key columns */
  render_types_by_pk?: Maybe<Render_Types>;
  /** fetch data from the table in a streaming manner: "render_types" */
  render_types_stream: Array<Render_Types>;
  /** execute function "search_projects" which returns "projects_metadata" */
  search_projects: Array<Projects_Metadata>;
  /** execute function "search_projects" and query aggregates on result of table type "projects_metadata" */
  search_projects_aggregate: Projects_Metadata_Aggregate;
  /** execute function "search_tags" which returns "tags" */
  search_tags: Array<Tags>;
  /** execute function "search_tokens" which returns "tokens_metadata" */
  search_tokens: Array<Tokens_Metadata>;
  /** execute function "search_tokens" and query aggregates on result of table type "tokens_metadata" */
  search_tokens_aggregate: Tokens_Metadata_Aggregate;
  /** execute function "search_users" which returns "user_profiles" */
  search_users: Array<User_Profiles>;
  /** execute function "search_users" and query aggregates on result of table type "user_profiles" */
  search_users_aggregate: User_Profiles_Aggregate;
  /** fetch data from the table: "split_atomic_contracts" */
  split_atomic_contracts: Array<Split_Atomic_Contracts>;
  /** fetch data from the table: "split_atomic_contracts" using primary key columns */
  split_atomic_contracts_by_pk?: Maybe<Split_Atomic_Contracts>;
  /** fetch data from the table in a streaming manner: "split_atomic_contracts" */
  split_atomic_contracts_stream: Array<Split_Atomic_Contracts>;
  /** fetch data from the table: "split_atomic_factories" */
  split_atomic_factories: Array<Split_Atomic_Factories>;
  /** fetch data from the table: "split_atomic_factories" using primary key columns */
  split_atomic_factories_by_pk?: Maybe<Split_Atomic_Factories>;
  /** fetch data from the table in a streaming manner: "split_atomic_factories" */
  split_atomic_factories_stream: Array<Split_Atomic_Factories>;
  /** fetch data from the table: "split_payment_configurations" */
  split_payment_configurations: Array<Split_Payment_Configurations>;
  /** fetch data from the table: "split_payment_configurations" using primary key columns */
  split_payment_configurations_by_pk?: Maybe<Split_Payment_Configurations>;
  /** fetch data from the table in a streaming manner: "split_payment_configurations" */
  split_payment_configurations_stream: Array<Split_Payment_Configurations>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tags_stream: Array<Tags>;
  /** fetch data from the table: "tokens_metadata" */
  tokens_metadata: Array<Tokens_Metadata>;
  /** fetch aggregated fields from the table: "tokens_metadata" */
  tokens_metadata_aggregate: Tokens_Metadata_Aggregate;
  /** fetch data from the table: "tokens_metadata" using primary key columns */
  tokens_metadata_by_pk?: Maybe<Tokens_Metadata>;
  /** fetch data from the table in a streaming manner: "tokens_metadata" */
  tokens_metadata_stream: Array<Tokens_Metadata>;
  /** fetch data from the table: "user_profiles" */
  user_profiles: Array<User_Profiles>;
  /** fetch aggregated fields from the table: "user_profiles" */
  user_profiles_aggregate: User_Profiles_Aggregate;
  /** fetch data from the table: "user_profiles" using primary key columns */
  user_profiles_by_pk?: Maybe<User_Profiles>;
  /** fetch data from the table in a streaming manner: "user_profiles" */
  user_profiles_stream: Array<User_Profiles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verticals" */
  verticals: Array<Verticals>;
  /** fetch data from the table: "verticals" using primary key columns */
  verticals_by_pk?: Maybe<Verticals>;
  /** fetch data from the table in a streaming manner: "verticals" */
  verticals_stream: Array<Verticals>;
  /** fetch data from the table: "video_aspect_ratios" */
  video_aspect_ratios: Array<Video_Aspect_Ratios>;
  /** fetch data from the table: "video_aspect_ratios" using primary key columns */
  video_aspect_ratios_by_pk?: Maybe<Video_Aspect_Ratios>;
  /** fetch data from the table in a streaming manner: "video_aspect_ratios" */
  video_aspect_ratios_stream: Array<Video_Aspect_Ratios>;
  /** fetch data from the table: "video_frame_rates" */
  video_frame_rates: Array<Video_Frame_Rates>;
  /** fetch data from the table: "video_frame_rates" using primary key columns */
  video_frame_rates_by_pk?: Maybe<Video_Frame_Rates>;
  /** fetch data from the table in a streaming manner: "video_frame_rates" */
  video_frame_rates_stream: Array<Video_Frame_Rates>;
  /** fetch data from the table: "webflow_artist_info" */
  webflow_artist_info: Array<Webflow_Artist_Info>;
  /** fetch data from the table: "webflow_artist_info" using primary key columns */
  webflow_artist_info_by_pk?: Maybe<Webflow_Artist_Info>;
  /** fetch data from the table in a streaming manner: "webflow_artist_info" */
  webflow_artist_info_stream: Array<Webflow_Artist_Info>;
  /** fetch data from the table: "webflow_spectrum_articles" */
  webflow_spectrum_articles: Array<Webflow_Spectrum_Articles>;
  /** fetch data from the table: "webflow_spectrum_articles" using primary key columns */
  webflow_spectrum_articles_by_pk?: Maybe<Webflow_Spectrum_Articles>;
  /** fetch data from the table in a streaming manner: "webflow_spectrum_articles" */
  webflow_spectrum_articles_stream: Array<Webflow_Spectrum_Articles>;
};


export type Subscription_RootArtistsArgs = {
  distinct_on?: InputMaybe<Array<Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Artists_Order_By>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Subscription_RootArtists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Artists_Order_By>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Subscription_RootArtists_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Artists_Stream_Cursor_Input>>;
  where?: InputMaybe<Artists_Bool_Exp>;
};


export type Subscription_RootBids_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


export type Subscription_RootBids_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


export type Subscription_RootBids_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootBids_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bids_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootContract_AllowlistingsArgs = {
  distinct_on?: InputMaybe<Array<Contract_Allowlistings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Allowlistings_Order_By>>;
  where?: InputMaybe<Contract_Allowlistings_Bool_Exp>;
};


export type Subscription_RootContract_Allowlistings_By_PkArgs = {
  contract_address: Scalars['String']['input'];
  user_address: Scalars['String']['input'];
};


export type Subscription_RootContract_Allowlistings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Allowlistings_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Allowlistings_Bool_Exp>;
};


export type Subscription_RootContract_Type_NamesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Type_Names_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Type_Names_Order_By>>;
  where?: InputMaybe<Contract_Type_Names_Bool_Exp>;
};


export type Subscription_RootContract_Type_Names_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootContract_Type_Names_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Type_Names_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Type_Names_Bool_Exp>;
};


export type Subscription_RootContract_TypesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Types_Order_By>>;
  where?: InputMaybe<Contract_Types_Bool_Exp>;
};


export type Subscription_RootContract_Types_By_PkArgs = {
  type: Contract_Type_Names_Enum;
};


export type Subscription_RootContract_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Types_Bool_Exp>;
};


export type Subscription_RootContracts_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Metadata_Order_By>>;
  where?: InputMaybe<Contracts_Metadata_Bool_Exp>;
};


export type Subscription_RootContracts_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Metadata_Order_By>>;
  where?: InputMaybe<Contracts_Metadata_Bool_Exp>;
};


export type Subscription_RootContracts_Metadata_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootContracts_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contracts_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Contracts_Metadata_Bool_Exp>;
};


export type Subscription_RootDependencies_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Dependencies_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependencies_Metadata_Order_By>>;
  where?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
};


export type Subscription_RootDependencies_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependencies_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependencies_Metadata_Order_By>>;
  where?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
};


export type Subscription_RootDependencies_Metadata_By_PkArgs = {
  name_and_version: Scalars['String']['input'];
};


export type Subscription_RootDependencies_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dependencies_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Dependencies_Metadata_Bool_Exp>;
};


export type Subscription_RootDependency_Additional_CdnsArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Cdns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Cdns_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
};


export type Subscription_RootDependency_Additional_Cdns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Cdns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Cdns_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
};


export type Subscription_RootDependency_Additional_Cdns_By_PkArgs = {
  dependency_name_and_version: Scalars['String']['input'];
  index: Scalars['Int']['input'];
};


export type Subscription_RootDependency_Additional_Cdns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dependency_Additional_Cdns_Stream_Cursor_Input>>;
  where?: InputMaybe<Dependency_Additional_Cdns_Bool_Exp>;
};


export type Subscription_RootDependency_Additional_RepositoriesArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Repositories_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
};


export type Subscription_RootDependency_Additional_Repositories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Additional_Repositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Additional_Repositories_Order_By>>;
  where?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
};


export type Subscription_RootDependency_Additional_Repositories_By_PkArgs = {
  dependency_name_and_version: Scalars['String']['input'];
  index: Scalars['Int']['input'];
};


export type Subscription_RootDependency_Additional_Repositories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dependency_Additional_Repositories_Stream_Cursor_Input>>;
  where?: InputMaybe<Dependency_Additional_Repositories_Bool_Exp>;
};


export type Subscription_RootDependency_RegistriesArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Registries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Registries_Order_By>>;
  where?: InputMaybe<Dependency_Registries_Bool_Exp>;
};


export type Subscription_RootDependency_Registries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Registries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Registries_Order_By>>;
  where?: InputMaybe<Dependency_Registries_Bool_Exp>;
};


export type Subscription_RootDependency_Registries_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootDependency_Registries_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dependency_Registries_Stream_Cursor_Input>>;
  where?: InputMaybe<Dependency_Registries_Bool_Exp>;
};


export type Subscription_RootDependency_ScriptsArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Scripts_Order_By>>;
  where?: InputMaybe<Dependency_Scripts_Bool_Exp>;
};


export type Subscription_RootDependency_Scripts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dependency_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dependency_Scripts_Order_By>>;
  where?: InputMaybe<Dependency_Scripts_Bool_Exp>;
};


export type Subscription_RootDependency_Scripts_By_PkArgs = {
  dependency_name_and_version: Scalars['String']['input'];
  index: Scalars['Int']['input'];
};


export type Subscription_RootDependency_Scripts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dependency_Scripts_Stream_Cursor_Input>>;
  where?: InputMaybe<Dependency_Scripts_Bool_Exp>;
};


export type Subscription_RootEntity_TagsArgs = {
  distinct_on?: InputMaybe<Array<Entity_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Tags_Order_By>>;
  where?: InputMaybe<Entity_Tags_Bool_Exp>;
};


export type Subscription_RootEntity_Tags_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootEntity_Tags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entity_Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Entity_Tags_Bool_Exp>;
};


export type Subscription_RootFavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Subscription_RootFavorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Subscription_RootFavorites_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootFavorites_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Favorites_Stream_Cursor_Input>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


export type Subscription_RootFeature_FlagsArgs = {
  distinct_on?: InputMaybe<Array<Feature_Flags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Feature_Flags_Order_By>>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};


export type Subscription_RootFeature_Flags_By_PkArgs = {
  flag_name: Scalars['String']['input'];
};


export type Subscription_RootFeature_Flags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Feature_Flags_Stream_Cursor_Input>>;
  where?: InputMaybe<Feature_Flags_Bool_Exp>;
};


export type Subscription_RootFilter_Tokens_Metadata_By_FeaturesArgs = {
  args: Filter_Tokens_Metadata_By_Features_Args;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootFilter_Tokens_Metadata_By_Features_AggregateArgs = {
  args: Filter_Tokens_Metadata_By_Features_Args;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootList_Projects_Metadata_RandomArgs = {
  args?: InputMaybe<List_Projects_Metadata_Random_Args>;
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Subscription_RootList_Projects_Metadata_Random_AggregateArgs = {
  args?: InputMaybe<List_Projects_Metadata_Random_Args>;
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Subscription_RootMediaArgs = {
  distinct_on?: InputMaybe<Array<Media_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Media_Order_By>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Subscription_RootMedia_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMedia_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Media_Stream_Cursor_Input>>;
  where?: InputMaybe<Media_Bool_Exp>;
};


export type Subscription_RootMinter_Filter_Type_NamesArgs = {
  distinct_on?: InputMaybe<Array<Minter_Filter_Type_Names_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minter_Filter_Type_Names_Order_By>>;
  where?: InputMaybe<Minter_Filter_Type_Names_Bool_Exp>;
};


export type Subscription_RootMinter_Filter_Type_Names_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootMinter_Filter_Type_Names_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Minter_Filter_Type_Names_Stream_Cursor_Input>>;
  where?: InputMaybe<Minter_Filter_Type_Names_Bool_Exp>;
};


export type Subscription_RootMinter_Filters_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Minter_Filters_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minter_Filters_Metadata_Order_By>>;
  where?: InputMaybe<Minter_Filters_Metadata_Bool_Exp>;
};


export type Subscription_RootMinter_Filters_Metadata_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootMinter_Filters_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Minter_Filters_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Minter_Filters_Metadata_Bool_Exp>;
};


export type Subscription_RootMinter_TypesArgs = {
  distinct_on?: InputMaybe<Array<Minter_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minter_Types_Order_By>>;
  where?: InputMaybe<Minter_Types_Bool_Exp>;
};


export type Subscription_RootMinter_Types_By_PkArgs = {
  type: Minter_Type_Names_Enum;
};


export type Subscription_RootMinter_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Minter_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Minter_Types_Bool_Exp>;
};


export type Subscription_RootMinters_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Minters_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Minters_Metadata_Order_By>>;
  where?: InputMaybe<Minters_Metadata_Bool_Exp>;
};


export type Subscription_RootMinters_Metadata_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootMinters_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Minters_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Minters_Metadata_Bool_Exp>;
};


export type Subscription_RootOob_Tokens_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oob_Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootOob_Tokens_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Oob_Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Oob_Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootOob_Tokens_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOob_Tokens_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Oob_Tokens_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Oob_Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootPrimary_PurchasesArgs = {
  distinct_on?: InputMaybe<Array<Primary_Purchases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Primary_Purchases_Order_By>>;
  where?: InputMaybe<Primary_Purchases_Bool_Exp>;
};


export type Subscription_RootPrimary_Purchases_By_PkArgs = {
  token_id: Scalars['String']['input'];
};


export type Subscription_RootPrimary_Purchases_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Primary_Purchases_Stream_Cursor_Input>>;
  where?: InputMaybe<Primary_Purchases_Bool_Exp>;
};


export type Subscription_RootProcessing_JobsArgs = {
  distinct_on?: InputMaybe<Array<Processing_Jobs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Processing_Jobs_Order_By>>;
  where?: InputMaybe<Processing_Jobs_Bool_Exp>;
};


export type Subscription_RootProcessing_Jobs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProcessing_Jobs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Processing_Jobs_Stream_Cursor_Input>>;
  where?: InputMaybe<Processing_Jobs_Bool_Exp>;
};


export type Subscription_RootProject_External_Asset_DependenciesArgs = {
  distinct_on?: InputMaybe<Array<Project_External_Asset_Dependencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_External_Asset_Dependencies_Order_By>>;
  where?: InputMaybe<Project_External_Asset_Dependencies_Bool_Exp>;
};


export type Subscription_RootProject_External_Asset_Dependencies_By_PkArgs = {
  index: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
};


export type Subscription_RootProject_External_Asset_Dependencies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_External_Asset_Dependencies_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_External_Asset_Dependencies_Bool_Exp>;
};


export type Subscription_RootProject_Minter_ConfigurationsArgs = {
  distinct_on?: InputMaybe<Array<Project_Minter_Configurations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Minter_Configurations_Order_By>>;
  where?: InputMaybe<Project_Minter_Configurations_Bool_Exp>;
};


export type Subscription_RootProject_Minter_Configurations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootProject_Minter_Configurations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Minter_Configurations_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Minter_Configurations_Bool_Exp>;
};


export type Subscription_RootProject_ScriptsArgs = {
  distinct_on?: InputMaybe<Array<Project_Scripts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Scripts_Order_By>>;
  where?: InputMaybe<Project_Scripts_Bool_Exp>;
};


export type Subscription_RootProject_Scripts_By_PkArgs = {
  index: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
};


export type Subscription_RootProject_Scripts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Scripts_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Scripts_Bool_Exp>;
};


export type Subscription_RootProject_SeriesArgs = {
  distinct_on?: InputMaybe<Array<Project_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Series_Order_By>>;
  where?: InputMaybe<Project_Series_Bool_Exp>;
};


export type Subscription_RootProject_Series_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Series_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Series_Order_By>>;
  where?: InputMaybe<Project_Series_Bool_Exp>;
};


export type Subscription_RootProject_Series_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProject_Series_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Series_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Series_Bool_Exp>;
};


export type Subscription_RootProject_Vertical_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Project_Vertical_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Vertical_Categories_Order_By>>;
  where?: InputMaybe<Project_Vertical_Categories_Bool_Exp>;
};


export type Subscription_RootProject_Vertical_Categories_By_PkArgs = {
  name: Categories_Enum;
};


export type Subscription_RootProject_Vertical_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Vertical_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Vertical_Categories_Bool_Exp>;
};


export type Subscription_RootProject_VerticalsArgs = {
  distinct_on?: InputMaybe<Array<Project_Verticals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Verticals_Order_By>>;
  where?: InputMaybe<Project_Verticals_Bool_Exp>;
};


export type Subscription_RootProject_Verticals_By_PkArgs = {
  name: Verticals_Enum;
};


export type Subscription_RootProject_Verticals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Verticals_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Verticals_Bool_Exp>;
};


export type Subscription_RootProjects_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<Projects_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Features_Order_By>>;
  where?: InputMaybe<Projects_Features_Bool_Exp>;
};


export type Subscription_RootProjects_Features_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProjects_Features_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Projects_Features_Stream_Cursor_Input>>;
  where?: InputMaybe<Projects_Features_Bool_Exp>;
};


export type Subscription_RootProjects_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Subscription_RootProjects_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Subscription_RootProjects_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootProjects_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Projects_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Subscription_RootProposed_Artist_Addresses_And_SplitsArgs = {
  distinct_on?: InputMaybe<Array<Proposed_Artist_Addresses_And_Splits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Proposed_Artist_Addresses_And_Splits_Order_By>>;
  where?: InputMaybe<Proposed_Artist_Addresses_And_Splits_Bool_Exp>;
};


export type Subscription_RootProposed_Artist_Addresses_And_Splits_By_PkArgs = {
  project_id: Scalars['String']['input'];
};


export type Subscription_RootProposed_Artist_Addresses_And_Splits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Proposed_Artist_Addresses_And_Splits_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposed_Artist_Addresses_And_Splits_Bool_Exp>;
};


export type Subscription_RootReceipt_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


export type Subscription_RootReceipt_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


export type Subscription_RootReceipt_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootReceipt_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Receipt_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


export type Subscription_RootRefresh_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Refresh_Requests_Order_By>>;
  where?: InputMaybe<Refresh_Requests_Bool_Exp>;
};


export type Subscription_RootRefresh_Requests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRefresh_Requests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Refresh_Requests_Stream_Cursor_Input>>;
  where?: InputMaybe<Refresh_Requests_Bool_Exp>;
};


export type Subscription_RootRender_TypesArgs = {
  distinct_on?: InputMaybe<Array<Render_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Render_Types_Order_By>>;
  where?: InputMaybe<Render_Types_Bool_Exp>;
};


export type Subscription_RootRender_Types_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootRender_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Render_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Render_Types_Bool_Exp>;
};


export type Subscription_RootSearch_ProjectsArgs = {
  args: Search_Projects_Args;
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Subscription_RootSearch_Projects_AggregateArgs = {
  args: Search_Projects_Args;
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


export type Subscription_RootSearch_TagsArgs = {
  args: Search_Tags_Args;
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootSearch_TokensArgs = {
  args: Search_Tokens_Args;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootSearch_Tokens_AggregateArgs = {
  args: Search_Tokens_Args;
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootSearch_UsersArgs = {
  args: Search_Users_Args;
  distinct_on?: InputMaybe<Array<User_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profiles_Order_By>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Subscription_RootSearch_Users_AggregateArgs = {
  args: Search_Users_Args;
  distinct_on?: InputMaybe<Array<User_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profiles_Order_By>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Subscription_RootSplit_Atomic_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Split_Atomic_Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Split_Atomic_Contracts_Order_By>>;
  where?: InputMaybe<Split_Atomic_Contracts_Bool_Exp>;
};


export type Subscription_RootSplit_Atomic_Contracts_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootSplit_Atomic_Contracts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Split_Atomic_Contracts_Stream_Cursor_Input>>;
  where?: InputMaybe<Split_Atomic_Contracts_Bool_Exp>;
};


export type Subscription_RootSplit_Atomic_FactoriesArgs = {
  distinct_on?: InputMaybe<Array<Split_Atomic_Factories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Split_Atomic_Factories_Order_By>>;
  where?: InputMaybe<Split_Atomic_Factories_Bool_Exp>;
};


export type Subscription_RootSplit_Atomic_Factories_By_PkArgs = {
  address: Scalars['String']['input'];
};


export type Subscription_RootSplit_Atomic_Factories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Split_Atomic_Factories_Stream_Cursor_Input>>;
  where?: InputMaybe<Split_Atomic_Factories_Bool_Exp>;
};


export type Subscription_RootSplit_Payment_ConfigurationsArgs = {
  distinct_on?: InputMaybe<Array<Split_Payment_Configurations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Split_Payment_Configurations_Order_By>>;
  where?: InputMaybe<Split_Payment_Configurations_Bool_Exp>;
};


export type Subscription_RootSplit_Payment_Configurations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootSplit_Payment_Configurations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Split_Payment_Configurations_Stream_Cursor_Input>>;
  where?: InputMaybe<Split_Payment_Configurations_Bool_Exp>;
};


export type Subscription_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootTags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTokens_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootTokens_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootTokens_Metadata_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootTokens_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tokens_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


export type Subscription_RootUser_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<User_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profiles_Order_By>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Subscription_RootUser_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Profiles_Order_By>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Subscription_RootUser_Profiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Profiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Profiles_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  public_address: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerticalsArgs = {
  distinct_on?: InputMaybe<Array<Verticals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verticals_Order_By>>;
  where?: InputMaybe<Verticals_Bool_Exp>;
};


export type Subscription_RootVerticals_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootVerticals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Verticals_Stream_Cursor_Input>>;
  where?: InputMaybe<Verticals_Bool_Exp>;
};


export type Subscription_RootVideo_Aspect_RatiosArgs = {
  distinct_on?: InputMaybe<Array<Video_Aspect_Ratios_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Aspect_Ratios_Order_By>>;
  where?: InputMaybe<Video_Aspect_Ratios_Bool_Exp>;
};


export type Subscription_RootVideo_Aspect_Ratios_By_PkArgs = {
  value: Scalars['numeric']['input'];
};


export type Subscription_RootVideo_Aspect_Ratios_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Video_Aspect_Ratios_Stream_Cursor_Input>>;
  where?: InputMaybe<Video_Aspect_Ratios_Bool_Exp>;
};


export type Subscription_RootVideo_Frame_RatesArgs = {
  distinct_on?: InputMaybe<Array<Video_Frame_Rates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Video_Frame_Rates_Order_By>>;
  where?: InputMaybe<Video_Frame_Rates_Bool_Exp>;
};


export type Subscription_RootVideo_Frame_Rates_By_PkArgs = {
  value: Scalars['Int']['input'];
};


export type Subscription_RootVideo_Frame_Rates_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Video_Frame_Rates_Stream_Cursor_Input>>;
  where?: InputMaybe<Video_Frame_Rates_Bool_Exp>;
};


export type Subscription_RootWebflow_Artist_InfoArgs = {
  distinct_on?: InputMaybe<Array<Webflow_Artist_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webflow_Artist_Info_Order_By>>;
  where?: InputMaybe<Webflow_Artist_Info_Bool_Exp>;
};


export type Subscription_RootWebflow_Artist_Info_By_PkArgs = {
  webflow_item_id: Scalars['String']['input'];
};


export type Subscription_RootWebflow_Artist_Info_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Webflow_Artist_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Webflow_Artist_Info_Bool_Exp>;
};


export type Subscription_RootWebflow_Spectrum_ArticlesArgs = {
  distinct_on?: InputMaybe<Array<Webflow_Spectrum_Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webflow_Spectrum_Articles_Order_By>>;
  where?: InputMaybe<Webflow_Spectrum_Articles_Bool_Exp>;
};


export type Subscription_RootWebflow_Spectrum_Articles_By_PkArgs = {
  webflow_item_id: Scalars['String']['input'];
};


export type Subscription_RootWebflow_Spectrum_Articles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Webflow_Spectrum_Articles_Stream_Cursor_Input>>;
  where?: InputMaybe<Webflow_Spectrum_Articles_Bool_Exp>;
};

export enum Tag_Groupings_Enum {
  Heritage = 'heritage',
  Presentation = 'presentation',
  Social = 'social',
  Unassigned = 'unassigned'
}

/** Boolean expression to compare columns of type "tag_groupings_enum". All fields are combined with logical 'AND'. */
export type Tag_Groupings_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Tag_Groupings_Enum>;
  _in?: InputMaybe<Array<Tag_Groupings_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Tag_Groupings_Enum>;
  _nin?: InputMaybe<Array<Tag_Groupings_Enum>>;
};

export enum Tag_Status_Enum {
  /** private status */
  Private = 'private',
  /** public status */
  Public = 'public'
}

/** Boolean expression to compare columns of type "tag_status_enum". All fields are combined with logical 'AND'. */
export type Tag_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Tag_Status_Enum>;
  _in?: InputMaybe<Array<Tag_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Tag_Status_Enum>;
  _nin?: InputMaybe<Array<Tag_Status_Enum>>;
};

export enum Tag_Types_Enum {
  /** tag type of project */
  Project = 'project',
  /** tag type of user */
  User = 'user'
}

/** Boolean expression to compare columns of type "tag_types_enum". All fields are combined with logical 'AND'. */
export type Tag_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Tag_Types_Enum>;
  _in?: InputMaybe<Array<Tag_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Tag_Types_Enum>;
  _nin?: InputMaybe<Array<Tag_Types_Enum>>;
};

/** Each variety of metadata tag used for projects. */
export type Tags = {
  __typename?: 'tags';
  description?: Maybe<Scalars['String']['output']>;
  display_name: Scalars['String']['output'];
  /** An array relationship */
  entity_tags: Array<Entity_Tags>;
  grouping_name: Tag_Groupings_Enum;
  name: Scalars['String']['output'];
  status: Tag_Status_Enum;
  tagline?: Maybe<Scalars['String']['output']>;
  type: Tag_Types_Enum;
};


/** Each variety of metadata tag used for projects. */
export type TagsEntity_TagsArgs = {
  distinct_on?: InputMaybe<Array<Entity_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Tags_Order_By>>;
  where?: InputMaybe<Entity_Tags_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  entity_tags?: InputMaybe<Entity_Tags_Bool_Exp>;
  grouping_name?: InputMaybe<Tag_Groupings_Enum_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Tag_Status_Enum_Comparison_Exp>;
  tagline?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Tag_Types_Enum_Comparison_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  description?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  entity_tags_aggregate?: InputMaybe<Entity_Tags_Aggregate_Order_By>;
  grouping_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tagline?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  GroupingName = 'grouping_name',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  Tagline = 'tagline',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "tags" */
export type Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tags_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  grouping_name?: InputMaybe<Tag_Groupings_Enum>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Tag_Status_Enum>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Tag_Types_Enum>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** All token details are added here after a new Art Blocks token is minted. Data will be updated upon a listing, sale, or transfer of the token. */
export type Tokens_Metadata = {
  __typename?: 'tokens_metadata';
  /** An array relationship */
  bids: Array<Bids_Metadata>;
  /** An aggregate relationship */
  bids_aggregate: Bids_Metadata_Aggregate;
  /** An object relationship */
  contract?: Maybe<Contracts_Metadata>;
  contract_address: Scalars['String']['output'];
  /** A computed field, executes function "token_favorited_by_user" */
  favorited_by_user?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  favorites: Array<Favorites>;
  /** An aggregate relationship */
  favorites_aggregate: Favorites_Aggregate;
  features: Scalars['jsonb']['output'];
  /** An object relationship */
  gif?: Maybe<Media>;
  gif_id?: Maybe<Scalars['Int']['output']>;
  hash: Scalars['String']['output'];
  /** An object relationship */
  high_res_image?: Maybe<Media>;
  high_res_image_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  /** An object relationship */
  image?: Maybe<Media>;
  image_id?: Maybe<Scalars['Int']['output']>;
  invocation: Scalars['Int']['output'];
  is_flagged: Scalars['Boolean']['output'];
  last_refreshed?: Maybe<Scalars['timestamptz']['output']>;
  list_creation_date?: Maybe<Scalars['timestamptz']['output']>;
  list_currency_address?: Maybe<Scalars['String']['output']>;
  list_currency_symbol?: Maybe<Scalars['String']['output']>;
  list_eth_price?: Maybe<Scalars['float8']['output']>;
  list_expiration_date?: Maybe<Scalars['timestamptz']['output']>;
  list_platform?: Maybe<Scalars['String']['output']>;
  list_price?: Maybe<Scalars['float8']['output']>;
  list_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "live_view_path" */
  live_view_path?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "live_view_url" */
  live_view_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  low_res_image?: Maybe<Media>;
  low_res_image_id?: Maybe<Scalars['Int']['output']>;
  /** a computed field that returns the media proxy url for this token's statically rendered image */
  media_url?: Maybe<Scalars['String']['output']>;
  mint_transaction_hash?: Maybe<Scalars['String']['output']>;
  minted_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  owner?: Maybe<Users>;
  owner_address: Scalars['String']['output'];
  /** returns the preview asset url based on preview_render_type and availability */
  preview_asset_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "primary_asset_url" */
  primary_asset_url?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  primary_purchase_details?: Maybe<Primary_Purchases>;
  primary_purchase_id?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  project: Projects_Metadata;
  project_id: Scalars['String']['output'];
  project_name?: Maybe<Scalars['String']['output']>;
  token_id: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  video?: Maybe<Media>;
  video_id?: Maybe<Scalars['Int']['output']>;
};


/** All token details are added here after a new Art Blocks token is minted. Data will be updated upon a listing, sale, or transfer of the token. */
export type Tokens_MetadataBidsArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


/** All token details are added here after a new Art Blocks token is minted. Data will be updated upon a listing, sale, or transfer of the token. */
export type Tokens_MetadataBids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


/** All token details are added here after a new Art Blocks token is minted. Data will be updated upon a listing, sale, or transfer of the token. */
export type Tokens_MetadataFavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


/** All token details are added here after a new Art Blocks token is minted. Data will be updated upon a listing, sale, or transfer of the token. */
export type Tokens_MetadataFavorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


/** All token details are added here after a new Art Blocks token is minted. Data will be updated upon a listing, sale, or transfer of the token. */
export type Tokens_MetadataFeaturesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "tokens_metadata" */
export type Tokens_Metadata_Aggregate = {
  __typename?: 'tokens_metadata_aggregate';
  aggregate?: Maybe<Tokens_Metadata_Aggregate_Fields>;
  nodes: Array<Tokens_Metadata>;
};

export type Tokens_Metadata_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Avg>;
  bool_and?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Bool_Or>;
  corr?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp_Var_Samp>;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Avg = {
  arguments: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Bool_And = {
  arguments: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Corr = {
  arguments: Tokens_Metadata_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Tokens_Metadata_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Max = {
  arguments: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Min = {
  arguments: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Sum = {
  arguments: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Tokens_Metadata_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "tokens_metadata" */
export type Tokens_Metadata_Aggregate_Fields = {
  __typename?: 'tokens_metadata_aggregate_fields';
  avg?: Maybe<Tokens_Metadata_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Tokens_Metadata_Max_Fields>;
  min?: Maybe<Tokens_Metadata_Min_Fields>;
  stddev?: Maybe<Tokens_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Tokens_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tokens_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Tokens_Metadata_Sum_Fields>;
  var_pop?: Maybe<Tokens_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Tokens_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Tokens_Metadata_Variance_Fields>;
};


/** aggregate fields of "tokens_metadata" */
export type Tokens_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "tokens_metadata" */
export type Tokens_Metadata_Aggregate_Order_By = {
  avg?: InputMaybe<Tokens_Metadata_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tokens_Metadata_Max_Order_By>;
  min?: InputMaybe<Tokens_Metadata_Min_Order_By>;
  stddev?: InputMaybe<Tokens_Metadata_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tokens_Metadata_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tokens_Metadata_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tokens_Metadata_Sum_Order_By>;
  var_pop?: InputMaybe<Tokens_Metadata_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tokens_Metadata_Var_Samp_Order_By>;
  variance?: InputMaybe<Tokens_Metadata_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Tokens_Metadata_Avg_Fields = {
  __typename?: 'tokens_metadata_avg_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  high_res_image_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  invocation?: Maybe<Scalars['Float']['output']>;
  list_eth_price?: Maybe<Scalars['Float']['output']>;
  list_price?: Maybe<Scalars['Float']['output']>;
  low_res_image_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Avg_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tokens_metadata". All fields are combined with a logical 'AND'. */
export type Tokens_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Tokens_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Tokens_Metadata_Bool_Exp>>;
  bids?: InputMaybe<Bids_Metadata_Bool_Exp>;
  bids_aggregate?: InputMaybe<Bids_Metadata_Aggregate_Bool_Exp>;
  contract?: InputMaybe<Contracts_Metadata_Bool_Exp>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  favorited_by_user?: InputMaybe<Boolean_Comparison_Exp>;
  favorites?: InputMaybe<Favorites_Bool_Exp>;
  favorites_aggregate?: InputMaybe<Favorites_Aggregate_Bool_Exp>;
  features?: InputMaybe<Jsonb_Comparison_Exp>;
  gif?: InputMaybe<Media_Bool_Exp>;
  gif_id?: InputMaybe<Int_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  high_res_image?: InputMaybe<Media_Bool_Exp>;
  high_res_image_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<Media_Bool_Exp>;
  image_id?: InputMaybe<Int_Comparison_Exp>;
  invocation?: InputMaybe<Int_Comparison_Exp>;
  is_flagged?: InputMaybe<Boolean_Comparison_Exp>;
  last_refreshed?: InputMaybe<Timestamptz_Comparison_Exp>;
  list_creation_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  list_currency_address?: InputMaybe<String_Comparison_Exp>;
  list_currency_symbol?: InputMaybe<String_Comparison_Exp>;
  list_eth_price?: InputMaybe<Float8_Comparison_Exp>;
  list_expiration_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  list_platform?: InputMaybe<String_Comparison_Exp>;
  list_price?: InputMaybe<Float8_Comparison_Exp>;
  list_url?: InputMaybe<String_Comparison_Exp>;
  live_view_path?: InputMaybe<String_Comparison_Exp>;
  live_view_url?: InputMaybe<String_Comparison_Exp>;
  low_res_image?: InputMaybe<Media_Bool_Exp>;
  low_res_image_id?: InputMaybe<Int_Comparison_Exp>;
  media_url?: InputMaybe<String_Comparison_Exp>;
  mint_transaction_hash?: InputMaybe<String_Comparison_Exp>;
  minted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  owner?: InputMaybe<Users_Bool_Exp>;
  owner_address?: InputMaybe<String_Comparison_Exp>;
  preview_asset_url?: InputMaybe<String_Comparison_Exp>;
  primary_asset_url?: InputMaybe<String_Comparison_Exp>;
  primary_purchase_details?: InputMaybe<Primary_Purchases_Bool_Exp>;
  primary_purchase_id?: InputMaybe<String_Comparison_Exp>;
  project?: InputMaybe<Projects_Metadata_Bool_Exp>;
  project_id?: InputMaybe<String_Comparison_Exp>;
  project_name?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  video?: InputMaybe<Media_Bool_Exp>;
  video_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Tokens_Metadata_Max_Fields = {
  __typename?: 'tokens_metadata_max_fields';
  contract_address?: Maybe<Scalars['String']['output']>;
  gif_id?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  high_res_image_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  invocation?: Maybe<Scalars['Int']['output']>;
  last_refreshed?: Maybe<Scalars['timestamptz']['output']>;
  list_creation_date?: Maybe<Scalars['timestamptz']['output']>;
  list_currency_address?: Maybe<Scalars['String']['output']>;
  list_currency_symbol?: Maybe<Scalars['String']['output']>;
  list_eth_price?: Maybe<Scalars['float8']['output']>;
  list_expiration_date?: Maybe<Scalars['timestamptz']['output']>;
  list_platform?: Maybe<Scalars['String']['output']>;
  list_price?: Maybe<Scalars['float8']['output']>;
  list_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "live_view_path" */
  live_view_path?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "live_view_url" */
  live_view_url?: Maybe<Scalars['String']['output']>;
  low_res_image_id?: Maybe<Scalars['Int']['output']>;
  /** a computed field that returns the media proxy url for this token's statically rendered image */
  media_url?: Maybe<Scalars['String']['output']>;
  mint_transaction_hash?: Maybe<Scalars['String']['output']>;
  minted_at?: Maybe<Scalars['timestamptz']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  /** returns the preview asset url based on preview_render_type and availability */
  preview_asset_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "primary_asset_url" */
  primary_asset_url?: Maybe<Scalars['String']['output']>;
  primary_purchase_id?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  project_name?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  video_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Max_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  gif_id?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  last_refreshed?: InputMaybe<Order_By>;
  list_creation_date?: InputMaybe<Order_By>;
  list_currency_address?: InputMaybe<Order_By>;
  list_currency_symbol?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_expiration_date?: InputMaybe<Order_By>;
  list_platform?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  list_url?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  mint_transaction_hash?: InputMaybe<Order_By>;
  minted_at?: InputMaybe<Order_By>;
  owner_address?: InputMaybe<Order_By>;
  primary_purchase_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  project_name?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tokens_Metadata_Min_Fields = {
  __typename?: 'tokens_metadata_min_fields';
  contract_address?: Maybe<Scalars['String']['output']>;
  gif_id?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  high_res_image_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  invocation?: Maybe<Scalars['Int']['output']>;
  last_refreshed?: Maybe<Scalars['timestamptz']['output']>;
  list_creation_date?: Maybe<Scalars['timestamptz']['output']>;
  list_currency_address?: Maybe<Scalars['String']['output']>;
  list_currency_symbol?: Maybe<Scalars['String']['output']>;
  list_eth_price?: Maybe<Scalars['float8']['output']>;
  list_expiration_date?: Maybe<Scalars['timestamptz']['output']>;
  list_platform?: Maybe<Scalars['String']['output']>;
  list_price?: Maybe<Scalars['float8']['output']>;
  list_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "live_view_path" */
  live_view_path?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "live_view_url" */
  live_view_url?: Maybe<Scalars['String']['output']>;
  low_res_image_id?: Maybe<Scalars['Int']['output']>;
  /** a computed field that returns the media proxy url for this token's statically rendered image */
  media_url?: Maybe<Scalars['String']['output']>;
  mint_transaction_hash?: Maybe<Scalars['String']['output']>;
  minted_at?: Maybe<Scalars['timestamptz']['output']>;
  owner_address?: Maybe<Scalars['String']['output']>;
  /** returns the preview asset url based on preview_render_type and availability */
  preview_asset_url?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "primary_asset_url" */
  primary_asset_url?: Maybe<Scalars['String']['output']>;
  primary_purchase_id?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  project_name?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  video_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Min_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  gif_id?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  last_refreshed?: InputMaybe<Order_By>;
  list_creation_date?: InputMaybe<Order_By>;
  list_currency_address?: InputMaybe<Order_By>;
  list_currency_symbol?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_expiration_date?: InputMaybe<Order_By>;
  list_platform?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  list_url?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  mint_transaction_hash?: InputMaybe<Order_By>;
  minted_at?: InputMaybe<Order_By>;
  owner_address?: InputMaybe<Order_By>;
  primary_purchase_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  project_name?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "tokens_metadata". */
export type Tokens_Metadata_Order_By = {
  bids_aggregate?: InputMaybe<Bids_Metadata_Aggregate_Order_By>;
  contract?: InputMaybe<Contracts_Metadata_Order_By>;
  contract_address?: InputMaybe<Order_By>;
  favorited_by_user?: InputMaybe<Order_By>;
  favorites_aggregate?: InputMaybe<Favorites_Aggregate_Order_By>;
  features?: InputMaybe<Order_By>;
  gif?: InputMaybe<Media_Order_By>;
  gif_id?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  high_res_image?: InputMaybe<Media_Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Media_Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  is_flagged?: InputMaybe<Order_By>;
  last_refreshed?: InputMaybe<Order_By>;
  list_creation_date?: InputMaybe<Order_By>;
  list_currency_address?: InputMaybe<Order_By>;
  list_currency_symbol?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_expiration_date?: InputMaybe<Order_By>;
  list_platform?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  list_url?: InputMaybe<Order_By>;
  live_view_path?: InputMaybe<Order_By>;
  live_view_url?: InputMaybe<Order_By>;
  low_res_image?: InputMaybe<Media_Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  mint_transaction_hash?: InputMaybe<Order_By>;
  minted_at?: InputMaybe<Order_By>;
  owner?: InputMaybe<Users_Order_By>;
  owner_address?: InputMaybe<Order_By>;
  preview_asset_url?: InputMaybe<Order_By>;
  primary_asset_url?: InputMaybe<Order_By>;
  primary_purchase_details?: InputMaybe<Primary_Purchases_Order_By>;
  primary_purchase_id?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Metadata_Order_By>;
  project_id?: InputMaybe<Order_By>;
  project_name?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video?: InputMaybe<Media_Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** select columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column {
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  Features = 'features',
  /** column name */
  GifId = 'gif_id',
  /** column name */
  Hash = 'hash',
  /** column name */
  HighResImageId = 'high_res_image_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Invocation = 'invocation',
  /** column name */
  IsFlagged = 'is_flagged',
  /** column name */
  LastRefreshed = 'last_refreshed',
  /** column name */
  ListCreationDate = 'list_creation_date',
  /** column name */
  ListCurrencyAddress = 'list_currency_address',
  /** column name */
  ListCurrencySymbol = 'list_currency_symbol',
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListExpirationDate = 'list_expiration_date',
  /** column name */
  ListPlatform = 'list_platform',
  /** column name */
  ListPrice = 'list_price',
  /** column name */
  ListUrl = 'list_url',
  /** column name */
  LowResImageId = 'low_res_image_id',
  /** column name */
  MintTransactionHash = 'mint_transaction_hash',
  /** column name */
  MintedAt = 'minted_at',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  PrimaryPurchaseId = 'primary_purchase_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  ProjectName = 'project_name',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoId = 'video_id'
}

/** select "tokens_metadata_aggregate_bool_exp_avg_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListPrice = 'list_price'
}

/** select "tokens_metadata_aggregate_bool_exp_bool_and_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsFlagged = 'is_flagged'
}

/** select "tokens_metadata_aggregate_bool_exp_bool_or_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsFlagged = 'is_flagged'
}

/** select "tokens_metadata_aggregate_bool_exp_corr_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListPrice = 'list_price'
}

/** select "tokens_metadata_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListPrice = 'list_price'
}

/** select "tokens_metadata_aggregate_bool_exp_max_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListPrice = 'list_price'
}

/** select "tokens_metadata_aggregate_bool_exp_min_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListPrice = 'list_price'
}

/** select "tokens_metadata_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListPrice = 'list_price'
}

/** select "tokens_metadata_aggregate_bool_exp_sum_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListPrice = 'list_price'
}

/** select "tokens_metadata_aggregate_bool_exp_var_samp_arguments_columns" columns of table "tokens_metadata" */
export enum Tokens_Metadata_Select_Column_Tokens_Metadata_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  ListEthPrice = 'list_eth_price',
  /** column name */
  ListPrice = 'list_price'
}

/** aggregate stddev on columns */
export type Tokens_Metadata_Stddev_Fields = {
  __typename?: 'tokens_metadata_stddev_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  high_res_image_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  invocation?: Maybe<Scalars['Float']['output']>;
  list_eth_price?: Maybe<Scalars['Float']['output']>;
  list_price?: Maybe<Scalars['Float']['output']>;
  low_res_image_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Stddev_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tokens_Metadata_Stddev_Pop_Fields = {
  __typename?: 'tokens_metadata_stddev_pop_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  high_res_image_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  invocation?: Maybe<Scalars['Float']['output']>;
  list_eth_price?: Maybe<Scalars['Float']['output']>;
  list_price?: Maybe<Scalars['Float']['output']>;
  low_res_image_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Stddev_Pop_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tokens_Metadata_Stddev_Samp_Fields = {
  __typename?: 'tokens_metadata_stddev_samp_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  high_res_image_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  invocation?: Maybe<Scalars['Float']['output']>;
  list_eth_price?: Maybe<Scalars['Float']['output']>;
  list_price?: Maybe<Scalars['Float']['output']>;
  low_res_image_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Stddev_Samp_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "tokens_metadata" */
export type Tokens_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tokens_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tokens_Metadata_Stream_Cursor_Value_Input = {
  contract_address?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Scalars['jsonb']['input']>;
  gif_id?: InputMaybe<Scalars['Int']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  high_res_image_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image_id?: InputMaybe<Scalars['Int']['input']>;
  invocation?: InputMaybe<Scalars['Int']['input']>;
  is_flagged?: InputMaybe<Scalars['Boolean']['input']>;
  last_refreshed?: InputMaybe<Scalars['timestamptz']['input']>;
  list_creation_date?: InputMaybe<Scalars['timestamptz']['input']>;
  list_currency_address?: InputMaybe<Scalars['String']['input']>;
  list_currency_symbol?: InputMaybe<Scalars['String']['input']>;
  list_eth_price?: InputMaybe<Scalars['float8']['input']>;
  list_expiration_date?: InputMaybe<Scalars['timestamptz']['input']>;
  list_platform?: InputMaybe<Scalars['String']['input']>;
  list_price?: InputMaybe<Scalars['float8']['input']>;
  list_url?: InputMaybe<Scalars['String']['input']>;
  low_res_image_id?: InputMaybe<Scalars['Int']['input']>;
  mint_transaction_hash?: InputMaybe<Scalars['String']['input']>;
  minted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  owner_address?: InputMaybe<Scalars['String']['input']>;
  primary_purchase_id?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  project_name?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  video_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Tokens_Metadata_Sum_Fields = {
  __typename?: 'tokens_metadata_sum_fields';
  gif_id?: Maybe<Scalars['Int']['output']>;
  high_res_image_id?: Maybe<Scalars['Int']['output']>;
  image_id?: Maybe<Scalars['Int']['output']>;
  invocation?: Maybe<Scalars['Int']['output']>;
  list_eth_price?: Maybe<Scalars['float8']['output']>;
  list_price?: Maybe<Scalars['float8']['output']>;
  low_res_image_id?: Maybe<Scalars['Int']['output']>;
  video_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Sum_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Tokens_Metadata_Var_Pop_Fields = {
  __typename?: 'tokens_metadata_var_pop_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  high_res_image_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  invocation?: Maybe<Scalars['Float']['output']>;
  list_eth_price?: Maybe<Scalars['Float']['output']>;
  list_price?: Maybe<Scalars['Float']['output']>;
  low_res_image_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Var_Pop_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tokens_Metadata_Var_Samp_Fields = {
  __typename?: 'tokens_metadata_var_samp_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  high_res_image_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  invocation?: Maybe<Scalars['Float']['output']>;
  list_eth_price?: Maybe<Scalars['Float']['output']>;
  list_price?: Maybe<Scalars['Float']['output']>;
  low_res_image_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Var_Samp_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tokens_Metadata_Variance_Fields = {
  __typename?: 'tokens_metadata_variance_fields';
  gif_id?: Maybe<Scalars['Float']['output']>;
  high_res_image_id?: Maybe<Scalars['Float']['output']>;
  image_id?: Maybe<Scalars['Float']['output']>;
  invocation?: Maybe<Scalars['Float']['output']>;
  list_eth_price?: Maybe<Scalars['Float']['output']>;
  list_price?: Maybe<Scalars['Float']['output']>;
  low_res_image_id?: Maybe<Scalars['Float']['output']>;
  video_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "tokens_metadata" */
export type Tokens_Metadata_Variance_Order_By = {
  gif_id?: InputMaybe<Order_By>;
  high_res_image_id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  invocation?: InputMaybe<Order_By>;
  list_eth_price?: InputMaybe<Order_By>;
  list_price?: InputMaybe<Order_By>;
  low_res_image_id?: InputMaybe<Order_By>;
  video_id?: InputMaybe<Order_By>;
};

/** Art Blocks public profiles */
export type User_Profiles = {
  __typename?: 'user_profiles';
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  profile_picture?: Maybe<Media>;
  profile_picture_id?: Maybe<Scalars['Int']['output']>;
  twitter_username?: Maybe<Scalars['String']['output']>;
  user_address: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type User_Profiles_Aggregate = {
  __typename?: 'user_profiles_aggregate';
  aggregate?: Maybe<User_Profiles_Aggregate_Fields>;
  nodes: Array<User_Profiles>;
};

/** aggregate fields of "user_profiles" */
export type User_Profiles_Aggregate_Fields = {
  __typename?: 'user_profiles_aggregate_fields';
  avg?: Maybe<User_Profiles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Profiles_Max_Fields>;
  min?: Maybe<User_Profiles_Min_Fields>;
  stddev?: Maybe<User_Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Profiles_Sum_Fields>;
  var_pop?: Maybe<User_Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Profiles_Var_Samp_Fields>;
  variance?: Maybe<User_Profiles_Variance_Fields>;
};


/** aggregate fields of "user_profiles" */
export type User_Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Profiles_Avg_Fields = {
  __typename?: 'user_profiles_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_picture_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_profiles". All fields are combined with a logical 'AND'. */
export type User_Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Profiles_Bool_Exp>>;
  _not?: InputMaybe<User_Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Profiles_Bool_Exp>>;
  bio?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profile_picture?: InputMaybe<Media_Bool_Exp>;
  profile_picture_id?: InputMaybe<Int_Comparison_Exp>;
  twitter_username?: InputMaybe<String_Comparison_Exp>;
  user_address?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Profiles_Max_Fields = {
  __typename?: 'user_profiles_max_fields';
  bio?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile_picture_id?: Maybe<Scalars['Int']['output']>;
  twitter_username?: Maybe<Scalars['String']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Profiles_Min_Fields = {
  __typename?: 'user_profiles_min_fields';
  bio?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile_picture_id?: Maybe<Scalars['Int']['output']>;
  twitter_username?: Maybe<Scalars['String']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "user_profiles". */
export type User_Profiles_Order_By = {
  bio?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile_picture?: InputMaybe<Media_Order_By>;
  profile_picture_id?: InputMaybe<Order_By>;
  twitter_username?: InputMaybe<Order_By>;
  user_address?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** select columns of table "user_profiles" */
export enum User_Profiles_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfilePictureId = 'profile_picture_id',
  /** column name */
  TwitterUsername = 'twitter_username',
  /** column name */
  UserAddress = 'user_address',
  /** column name */
  Username = 'username'
}

/** aggregate stddev on columns */
export type User_Profiles_Stddev_Fields = {
  __typename?: 'user_profiles_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_picture_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Profiles_Stddev_Pop_Fields = {
  __typename?: 'user_profiles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_picture_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Profiles_Stddev_Samp_Fields = {
  __typename?: 'user_profiles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_picture_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_profiles" */
export type User_Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Profiles_Stream_Cursor_Value_Input = {
  bio?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_picture_id?: InputMaybe<Scalars['Int']['input']>;
  twitter_username?: InputMaybe<Scalars['String']['input']>;
  user_address?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type User_Profiles_Sum_Fields = {
  __typename?: 'user_profiles_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  profile_picture_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type User_Profiles_Var_Pop_Fields = {
  __typename?: 'user_profiles_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_picture_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Profiles_Var_Samp_Fields = {
  __typename?: 'user_profiles_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_picture_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Profiles_Variance_Fields = {
  __typename?: 'user_profiles_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  profile_picture_id?: Maybe<Scalars['Float']['output']>;
};

/** Art Blocks users */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  allowlisted_on: Array<Contract_Allowlistings>;
  /** An array relationship */
  bids: Array<Bids_Metadata>;
  /** An aggregate relationship */
  bids_aggregate: Bids_Metadata_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  /** A computed field, executes function "user_display_name" */
  display_name?: Maybe<Scalars['String']['output']>;
  favorited_by_user?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  favorites: Array<Favorites>;
  /** An aggregate relationship */
  favorites_aggregate: Favorites_Aggregate;
  /** A computed field, executes function "user_feature_flags" */
  feature_flags?: Maybe<Scalars['jsonb']['output']>;
  is_ab_staff?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "user_is_curated" */
  is_curated?: Maybe<Scalars['Boolean']['output']>;
  is_curator?: Maybe<Scalars['Boolean']['output']>;
  /** A computed field, executes function "generate_nonce" */
  nonce?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  profile?: Maybe<User_Profiles>;
  /** An array relationship */
  projects_created: Array<Projects_Metadata>;
  /** An aggregate relationship */
  projects_created_aggregate: Projects_Metadata_Aggregate;
  public_address: Scalars['String']['output'];
  /** An array relationship */
  receipts: Array<Receipt_Metadata>;
  /** An aggregate relationship */
  receipts_aggregate: Receipt_Metadata_Aggregate;
  /** An array relationship */
  tags: Array<Entity_Tags>;
  /** An array relationship */
  tokens: Array<Tokens_Metadata>;
  /** An aggregate relationship */
  tokens_aggregate: Tokens_Metadata_Aggregate;
  tos_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
  viewed_warning_banner?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  webflow_artist_info?: Maybe<Webflow_Artist_Info>;
};


/** Art Blocks users */
export type UsersAllowlisted_OnArgs = {
  distinct_on?: InputMaybe<Array<Contract_Allowlistings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Allowlistings_Order_By>>;
  where?: InputMaybe<Contract_Allowlistings_Bool_Exp>;
};


/** Art Blocks users */
export type UsersBidsArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


/** Art Blocks users */
export type UsersBids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bids_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bids_Metadata_Order_By>>;
  where?: InputMaybe<Bids_Metadata_Bool_Exp>;
};


/** Art Blocks users */
export type UsersFavoritesArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


/** Art Blocks users */
export type UsersFavorites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Favorites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Favorites_Order_By>>;
  where?: InputMaybe<Favorites_Bool_Exp>;
};


/** Art Blocks users */
export type UsersFeature_FlagsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** Art Blocks users */
export type UsersProjects_CreatedArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


/** Art Blocks users */
export type UsersProjects_Created_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Metadata_Order_By>>;
  where?: InputMaybe<Projects_Metadata_Bool_Exp>;
};


/** Art Blocks users */
export type UsersReceiptsArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


/** Art Blocks users */
export type UsersReceipts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Receipt_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Receipt_Metadata_Order_By>>;
  where?: InputMaybe<Receipt_Metadata_Bool_Exp>;
};


/** Art Blocks users */
export type UsersTagsArgs = {
  distinct_on?: InputMaybe<Array<Entity_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entity_Tags_Order_By>>;
  where?: InputMaybe<Entity_Tags_Bool_Exp>;
};


/** Art Blocks users */
export type UsersTokensArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};


/** Art Blocks users */
export type UsersTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tokens_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tokens_Metadata_Order_By>>;
  where?: InputMaybe<Tokens_Metadata_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  allowlisted_on?: InputMaybe<Contract_Allowlistings_Bool_Exp>;
  bids?: InputMaybe<Bids_Metadata_Bool_Exp>;
  bids_aggregate?: InputMaybe<Bids_Metadata_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  favorited_by_user?: InputMaybe<Boolean_Comparison_Exp>;
  favorites?: InputMaybe<Favorites_Bool_Exp>;
  favorites_aggregate?: InputMaybe<Favorites_Aggregate_Bool_Exp>;
  feature_flags?: InputMaybe<Jsonb_Comparison_Exp>;
  is_ab_staff?: InputMaybe<Boolean_Comparison_Exp>;
  is_curated?: InputMaybe<Boolean_Comparison_Exp>;
  is_curator?: InputMaybe<Boolean_Comparison_Exp>;
  nonce?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<User_Profiles_Bool_Exp>;
  projects_created?: InputMaybe<Projects_Metadata_Bool_Exp>;
  projects_created_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Bool_Exp>;
  public_address?: InputMaybe<String_Comparison_Exp>;
  receipts?: InputMaybe<Receipt_Metadata_Bool_Exp>;
  receipts_aggregate?: InputMaybe<Receipt_Metadata_Aggregate_Bool_Exp>;
  tags?: InputMaybe<Entity_Tags_Bool_Exp>;
  tokens?: InputMaybe<Tokens_Metadata_Bool_Exp>;
  tokens_aggregate?: InputMaybe<Tokens_Metadata_Aggregate_Bool_Exp>;
  tos_accepted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  viewed_warning_banner?: InputMaybe<Boolean_Comparison_Exp>;
  webflow_artist_info?: InputMaybe<Webflow_Artist_Info_Bool_Exp>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "user_display_name" */
  display_name?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "generate_nonce" */
  nonce?: Maybe<Scalars['String']['output']>;
  public_address?: Maybe<Scalars['String']['output']>;
  tos_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "user_display_name" */
  display_name?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "generate_nonce" */
  nonce?: Maybe<Scalars['String']['output']>;
  public_address?: Maybe<Scalars['String']['output']>;
  tos_accepted_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  allowlisted_on_aggregate?: InputMaybe<Contract_Allowlistings_Aggregate_Order_By>;
  bids_aggregate?: InputMaybe<Bids_Metadata_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  favorited_by_user?: InputMaybe<Order_By>;
  favorites_aggregate?: InputMaybe<Favorites_Aggregate_Order_By>;
  feature_flags?: InputMaybe<Order_By>;
  is_ab_staff?: InputMaybe<Order_By>;
  is_curated?: InputMaybe<Order_By>;
  is_curator?: InputMaybe<Order_By>;
  nonce?: InputMaybe<Order_By>;
  profile?: InputMaybe<User_Profiles_Order_By>;
  projects_created_aggregate?: InputMaybe<Projects_Metadata_Aggregate_Order_By>;
  public_address?: InputMaybe<Order_By>;
  receipts_aggregate?: InputMaybe<Receipt_Metadata_Aggregate_Order_By>;
  tags_aggregate?: InputMaybe<Entity_Tags_Aggregate_Order_By>;
  tokens_aggregate?: InputMaybe<Tokens_Metadata_Aggregate_Order_By>;
  tos_accepted_at?: InputMaybe<Order_By>;
  viewed_warning_banner?: InputMaybe<Order_By>;
  webflow_artist_info?: InputMaybe<Webflow_Artist_Info_Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IsAbStaff = 'is_ab_staff',
  /** column name */
  IsCurator = 'is_curator',
  /** column name */
  PublicAddress = 'public_address',
  /** column name */
  TosAcceptedAt = 'tos_accepted_at',
  /** column name */
  ViewedWarningBanner = 'viewed_warning_banner'
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  is_ab_staff?: InputMaybe<Scalars['Boolean']['input']>;
  is_curator?: InputMaybe<Scalars['Boolean']['input']>;
  public_address?: InputMaybe<Scalars['String']['input']>;
  tos_accepted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  viewed_warning_banner?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** vertical enums */
export type Verticals = {
  __typename?: 'verticals';
  name: Scalars['String']['output'];
  /** An object relationship */
  project_vertical?: Maybe<Project_Verticals>;
};

/** Boolean expression to filter rows from the table "verticals". All fields are combined with a logical 'AND'. */
export type Verticals_Bool_Exp = {
  _and?: InputMaybe<Array<Verticals_Bool_Exp>>;
  _not?: InputMaybe<Verticals_Bool_Exp>;
  _or?: InputMaybe<Array<Verticals_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_vertical?: InputMaybe<Project_Verticals_Bool_Exp>;
};

export enum Verticals_Enum {
  Artblocksxbrightmoments = 'artblocksxbrightmoments',
  Artblocksxpace = 'artblocksxpace',
  Curated = 'curated',
  Explorations = 'explorations',
  Factory = 'factory',
  Flex = 'flex',
  Fullyonchain = 'fullyonchain',
  Playground = 'playground',
  Presents = 'presents',
  Unassigned = 'unassigned'
}

/** Boolean expression to compare columns of type "verticals_enum". All fields are combined with logical 'AND'. */
export type Verticals_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Verticals_Enum>;
  _in?: InputMaybe<Array<Verticals_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Verticals_Enum>;
  _nin?: InputMaybe<Array<Verticals_Enum>>;
};

/** Ordering options when selecting data from "verticals". */
export type Verticals_Order_By = {
  name?: InputMaybe<Order_By>;
  project_vertical?: InputMaybe<Project_Verticals_Order_By>;
};

/** select columns of table "verticals" */
export enum Verticals_Select_Column {
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "verticals" */
export type Verticals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verticals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verticals_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Table describing the valid aspect ratios available to projects when generating video preview assets. */
export type Video_Aspect_Ratios = {
  __typename?: 'video_aspect_ratios';
  label: Scalars['String']['output'];
  value: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "video_aspect_ratios". All fields are combined with a logical 'AND'. */
export type Video_Aspect_Ratios_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Aspect_Ratios_Bool_Exp>>;
  _not?: InputMaybe<Video_Aspect_Ratios_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Aspect_Ratios_Bool_Exp>>;
  label?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "video_aspect_ratios". */
export type Video_Aspect_Ratios_Order_By = {
  label?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "video_aspect_ratios" */
export enum Video_Aspect_Ratios_Select_Column {
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** Streaming cursor of the table "video_aspect_ratios" */
export type Video_Aspect_Ratios_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Video_Aspect_Ratios_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Video_Aspect_Ratios_Stream_Cursor_Value_Input = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** Table describing the valid frame rates available to projects when generating dynamic media assets. */
export type Video_Frame_Rates = {
  __typename?: 'video_frame_rates';
  value: Scalars['Int']['output'];
};

/** Boolean expression to filter rows from the table "video_frame_rates". All fields are combined with a logical 'AND'. */
export type Video_Frame_Rates_Bool_Exp = {
  _and?: InputMaybe<Array<Video_Frame_Rates_Bool_Exp>>;
  _not?: InputMaybe<Video_Frame_Rates_Bool_Exp>;
  _or?: InputMaybe<Array<Video_Frame_Rates_Bool_Exp>>;
  value?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "video_frame_rates". */
export type Video_Frame_Rates_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** select columns of table "video_frame_rates" */
export enum Video_Frame_Rates_Select_Column {
  /** column name */
  Value = 'value'
}

/** Streaming cursor of the table "video_frame_rates" */
export type Video_Frame_Rates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Video_Frame_Rates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Video_Frame_Rates_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "webflow_artist_info" */
export type Webflow_Artist_Info = {
  __typename?: 'webflow_artist_info';
  published: Scalars['Boolean']['output'];
  raw_data: Scalars['jsonb']['output'];
  slug: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_public_address: Scalars['String']['output'];
  webflow_collection_id: Scalars['String']['output'];
  webflow_item_id: Scalars['String']['output'];
};


/** columns and relationships of "webflow_artist_info" */
export type Webflow_Artist_InfoRaw_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "webflow_artist_info". All fields are combined with a logical 'AND'. */
export type Webflow_Artist_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Webflow_Artist_Info_Bool_Exp>>;
  _not?: InputMaybe<Webflow_Artist_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Webflow_Artist_Info_Bool_Exp>>;
  published?: InputMaybe<Boolean_Comparison_Exp>;
  raw_data?: InputMaybe<Jsonb_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_public_address?: InputMaybe<String_Comparison_Exp>;
  webflow_collection_id?: InputMaybe<String_Comparison_Exp>;
  webflow_item_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "webflow_artist_info". */
export type Webflow_Artist_Info_Order_By = {
  published?: InputMaybe<Order_By>;
  raw_data?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_public_address?: InputMaybe<Order_By>;
  webflow_collection_id?: InputMaybe<Order_By>;
  webflow_item_id?: InputMaybe<Order_By>;
};

/** select columns of table "webflow_artist_info" */
export enum Webflow_Artist_Info_Select_Column {
  /** column name */
  Published = 'published',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  Slug = 'slug',
  /** column name */
  UserPublicAddress = 'user_public_address',
  /** column name */
  WebflowCollectionId = 'webflow_collection_id',
  /** column name */
  WebflowItemId = 'webflow_item_id'
}

/** Streaming cursor of the table "webflow_artist_info" */
export type Webflow_Artist_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Webflow_Artist_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Webflow_Artist_Info_Stream_Cursor_Value_Input = {
  published?: InputMaybe<Scalars['Boolean']['input']>;
  raw_data?: InputMaybe<Scalars['jsonb']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  user_public_address?: InputMaybe<Scalars['String']['input']>;
  webflow_collection_id?: InputMaybe<Scalars['String']['input']>;
  webflow_item_id?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "webflow_spectrum_articles" */
export type Webflow_Spectrum_Articles = {
  __typename?: 'webflow_spectrum_articles';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  extra_info?: Maybe<Scalars['String']['output']>;
  image: Scalars['String']['output'];
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  raw_data: Scalars['jsonb']['output'];
  section?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  webflow_collection_id: Scalars['String']['output'];
  webflow_item_id: Scalars['String']['output'];
};


/** columns and relationships of "webflow_spectrum_articles" */
export type Webflow_Spectrum_ArticlesRaw_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "webflow_spectrum_articles". All fields are combined with a logical 'AND'. */
export type Webflow_Spectrum_Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Webflow_Spectrum_Articles_Bool_Exp>>;
  _not?: InputMaybe<Webflow_Spectrum_Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Webflow_Spectrum_Articles_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extra_info?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  published_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  raw_data?: InputMaybe<Jsonb_Comparison_Exp>;
  section?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  webflow_collection_id?: InputMaybe<String_Comparison_Exp>;
  webflow_item_id?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "webflow_spectrum_articles". */
export type Webflow_Spectrum_Articles_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extra_info?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  raw_data?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  webflow_collection_id?: InputMaybe<Order_By>;
  webflow_item_id?: InputMaybe<Order_By>;
};

/** select columns of table "webflow_spectrum_articles" */
export enum Webflow_Spectrum_Articles_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  ExtraInfo = 'extra_info',
  /** column name */
  Image = 'image',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  Section = 'section',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  WebflowCollectionId = 'webflow_collection_id',
  /** column name */
  WebflowItemId = 'webflow_item_id'
}

/** Streaming cursor of the table "webflow_spectrum_articles" */
export type Webflow_Spectrum_Articles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Webflow_Spectrum_Articles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Webflow_Spectrum_Articles_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extra_info?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  raw_data?: InputMaybe<Scalars['jsonb']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  webflow_collection_id?: InputMaybe<Scalars['String']['input']>;
  webflow_item_id?: InputMaybe<Scalars['String']['input']>;
};

export type GetArtistCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArtistCountQuery = { __typename?: 'query_root', artists_aggregate: { __typename?: 'artists_aggregate', aggregate?: { __typename?: 'artists_aggregate_fields', count: number } | null } };

export type GetArtistsWithDetailsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArtistsWithDetailsQuery = { __typename?: 'query_root', artists: Array<{ __typename?: 'artists', projects_aggregate: { __typename?: 'projects_metadata_aggregate', aggregate?: { __typename?: 'projects_metadata_aggregate_fields', count: number } | null }, user?: { __typename?: 'users', display_name?: string | null, public_address: string, profile?: { __typename?: 'user_profiles', bio?: string | null, id: number, name?: string | null, profile_picture?: { __typename?: 'media', url?: string | null } | null } | null } | null }> };

export type GetArtistByAddressQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type GetArtistByAddressQuery = { __typename?: 'query_root', artists: Array<{ __typename?: 'artists', projects_aggregate: { __typename?: 'projects_metadata_aggregate', aggregate?: { __typename?: 'projects_metadata_aggregate_fields', count: number } | null }, user?: { __typename?: 'users', display_name?: string | null, public_address: string, profile?: { __typename?: 'user_profiles', bio?: string | null, id: number, name?: string | null, twitter_username?: string | null, profile_picture?: { __typename?: 'media', url?: string | null } | null } | null } | null, projects: Array<{ __typename?: 'projects_metadata', id: string, name?: string | null, description?: string | null, artist_name?: string | null, contract_address: string, featured_token?: Array<{ __typename?: 'tokens_metadata', media_url?: string | null }> | null }> }> };

export type GetCollectionDetailsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCollectionDetailsQuery = { __typename?: 'query_root', projects_metadata: Array<{ __typename?: 'projects_metadata', id: string, name?: string | null, description?: string | null, artist_name?: string | null, contract_address: string, featured_token?: Array<{ __typename?: 'tokens_metadata', media_url?: string | null }> | null }> };

export type GetCollectionTokensQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
}>;


export type GetCollectionTokensQuery = { __typename?: 'query_root', tokens_metadata: Array<{ __typename?: 'tokens_metadata', id: string, image?: { __typename?: 'media', url?: string | null } | null, gif?: { __typename?: 'media', url?: string | null } | null }> };


export const GetArtistCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArtistCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artists_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetArtistCountQuery, GetArtistCountQueryVariables>;
export const GetArtistsWithDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArtistsWithDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"public_address"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetArtistsWithDetailsQuery, GetArtistsWithDetailsQueryVariables>;
export const GetArtistByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArtistByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"public_address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"public_address"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"twitter_username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featured_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist_name"}},{"kind":"Field","name":{"kind":"Name","value":"contract_address"}}]}}]}}]}}]} as unknown as DocumentNode<GetArtistByAddressQuery, GetArtistByAddressQueryVariables>;
export const GetCollectionDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects_metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featured_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artist_name"}},{"kind":"Field","name":{"kind":"Name","value":"contract_address"}}]}}]}}]} as unknown as DocumentNode<GetCollectionDetailsQuery, GetCollectionDetailsQueryVariables>;
export const GetCollectionTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"project_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens_metadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"project_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gif"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionTokensQuery, GetCollectionTokensQueryVariables>;