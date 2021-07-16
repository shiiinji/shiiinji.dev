import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};





export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type Article = Node & {
  __typename?: 'Article';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Article>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  title: Scalars['String'];
  content: RichText;
  excerpt?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Asset>;
  category?: Maybe<Category>;
  publishDate: Scalars['DateTime'];
  pickupInfoArticle?: Maybe<PickupInfoArticle>;
  topInfoArticle?: Maybe<TopInfoArticle>;
  /** List of Article versions */
  history: Array<Version>;
};


export type ArticleDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type ArticleCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ArticleUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ArticlePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ArticleThumbnailArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ArticleCategoryArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ArticlePickupInfoArticleArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ArticleTopInfoArticleArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ArticleHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type ArticleConnectInput = {
  /** Document to connect */
  where: ArticleWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<ArticleEdge>;
  aggregate: Aggregate;
};

export type ArticleCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['RichTextAST'];
  excerpt?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<AssetCreateOneInlineInput>;
  category?: Maybe<CategoryCreateOneInlineInput>;
  publishDate: Scalars['DateTime'];
  pickupInfoArticle?: Maybe<PickupInfoArticleCreateOneInlineInput>;
  topInfoArticle?: Maybe<TopInfoArticleCreateOneInlineInput>;
};

export type ArticleCreateManyInlineInput = {
  /** Create and connect multiple existing Article documents */
  create?: Maybe<Array<ArticleCreateInput>>;
  /** Connect multiple existing Article documents */
  connect?: Maybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleCreateOneInlineInput = {
  /** Create and connect one Article document */
  create?: Maybe<ArticleCreateInput>;
  /** Connect one existing Article document */
  connect?: Maybe<ArticleWhereUniqueInput>;
};

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  /** The item at the end of the edge. */
  node: Article;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type ArticleManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<AssetWhereInput>;
  category?: Maybe<CategoryWhereInput>;
  publishDate?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishDate_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishDate_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishDate_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishDate_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishDate_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishDate_gte?: Maybe<Scalars['DateTime']>;
  pickupInfoArticle?: Maybe<PickupInfoArticleWhereInput>;
  topInfoArticle?: Maybe<TopInfoArticleWhereInput>;
};

export enum ArticleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC'
}

export type ArticleUpdateInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  excerpt?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<AssetUpdateOneInlineInput>;
  category?: Maybe<CategoryUpdateOneInlineInput>;
  publishDate?: Maybe<Scalars['DateTime']>;
  pickupInfoArticle?: Maybe<PickupInfoArticleUpdateOneInlineInput>;
  topInfoArticle?: Maybe<TopInfoArticleUpdateOneInlineInput>;
};

export type ArticleUpdateManyInlineInput = {
  /** Create and connect multiple Article documents */
  create?: Maybe<Array<ArticleCreateInput>>;
  /** Connect multiple existing Article documents */
  connect?: Maybe<Array<ArticleConnectInput>>;
  /** Override currently-connected documents with multiple existing Article documents */
  set?: Maybe<Array<ArticleWhereUniqueInput>>;
  /** Update multiple Article documents */
  update?: Maybe<Array<ArticleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Article documents */
  upsert?: Maybe<Array<ArticleUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Article documents */
  disconnect?: Maybe<Array<ArticleWhereUniqueInput>>;
  /** Delete multiple Article documents */
  delete?: Maybe<Array<ArticleWhereUniqueInput>>;
};

export type ArticleUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  excerpt?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['DateTime']>;
};

export type ArticleUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ArticleWhereInput;
  /** Update many input */
  data: ArticleUpdateManyInput;
};

export type ArticleUpdateOneInlineInput = {
  /** Create and connect one Article document */
  create?: Maybe<ArticleCreateInput>;
  /** Update single Article document */
  update?: Maybe<ArticleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Article document */
  upsert?: Maybe<ArticleUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Article document */
  connect?: Maybe<ArticleWhereUniqueInput>;
  /** Disconnect currently connected Article document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Article document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type ArticleUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArticleWhereUniqueInput;
  /** Document to update */
  data: ArticleUpdateInput;
};

export type ArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: ArticleCreateInput;
  /** Update document if it exists */
  update: ArticleUpdateInput;
};

export type ArticleUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArticleWhereUniqueInput;
  /** Upsert data */
  data: ArticleUpsertInput;
};

/** Identifies documents */
export type ArticleWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  excerpt_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  excerpt_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  excerpt_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  excerpt_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  excerpt_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  excerpt_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  excerpt_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  excerpt_not_ends_with?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<AssetWhereInput>;
  category?: Maybe<CategoryWhereInput>;
  publishDate?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishDate_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishDate_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishDate_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishDate_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishDate_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishDate_gte?: Maybe<Scalars['DateTime']>;
  pickupInfoArticle?: Maybe<PickupInfoArticleWhereInput>;
  topInfoArticle?: Maybe<TopInfoArticleWhereInput>;
};

/** References Article record uniquely */
export type ArticleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  articleThumbnail: Array<Article>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetArticleThumbnailArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  articleThumbnail?: Maybe<ArticleCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  articleThumbnail_every?: Maybe<ArticleWhereInput>;
  articleThumbnail_some?: Maybe<ArticleWhereInput>;
  articleThumbnail_none?: Maybe<ArticleWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  articleThumbnail?: Maybe<ArticleUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  articleThumbnail_every?: Maybe<ArticleWhereInput>;
  articleThumbnail_some?: Maybe<ArticleWhereInput>;
  articleThumbnail_none?: Maybe<ArticleWhereInput>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Category = Node & {
  __typename?: 'Category';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  title: Scalars['String'];
  name: Scalars['String'];
  articles: Array<Article>;
  /** List of Category versions */
  history: Array<Version>;
};


export type CategoryDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CategoryCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CategoryUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CategoryPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type CategoryArticlesArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CategoryConnectInput = {
  /** Document to connect */
  where: CategoryWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  aggregate: Aggregate;
};

export type CategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  name: Scalars['String'];
  articles?: Maybe<ArticleCreateManyInlineInput>;
};

export type CategoryCreateManyInlineInput = {
  /** Create and connect multiple existing Category documents */
  create?: Maybe<Array<CategoryCreateInput>>;
  /** Connect multiple existing Category documents */
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Create and connect one Category document */
  create?: Maybe<CategoryCreateInput>;
  /** Connect one existing Category document */
  connect?: Maybe<CategoryWhereUniqueInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** The item at the end of the edge. */
  node: Category;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  articles_every?: Maybe<ArticleWhereInput>;
  articles_some?: Maybe<ArticleWhereInput>;
  articles_none?: Maybe<ArticleWhereInput>;
};

export enum CategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type CategoryUpdateInput = {
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  articles?: Maybe<ArticleUpdateManyInlineInput>;
};

export type CategoryUpdateManyInlineInput = {
  /** Create and connect multiple Category documents */
  create?: Maybe<Array<CategoryCreateInput>>;
  /** Connect multiple existing Category documents */
  connect?: Maybe<Array<CategoryConnectInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: Maybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: Maybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  /** Delete multiple Category documents */
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CategoryWhereInput;
  /** Update many input */
  data: CategoryUpdateManyInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Create and connect one Category document */
  create?: Maybe<CategoryCreateInput>;
  /** Update single Category document */
  update?: Maybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: Maybe<CategoryUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Category document */
  connect?: Maybe<CategoryWhereUniqueInput>;
  /** Disconnect currently connected Category document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Category document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CategoryWhereUniqueInput;
  /** Document to update */
  data: CategoryUpdateInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CategoryWhereUniqueInput;
  /** Upsert data */
  data: CategoryUpsertInput;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  articles_every?: Maybe<ArticleWhereInput>;
  articles_some?: Maybe<ArticleWhereInput>;
  articles_none?: Maybe<ArticleWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type Faq = Node & {
  __typename?: 'Faq';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Faq>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  title: Scalars['String'];
  content: RichText;
  publishDate: Scalars['DateTime'];
  category?: Maybe<FaqCategory>;
  pickupFaq?: Maybe<PickupFaq>;
  pickupProductFaq?: Maybe<PickupProductFaq>;
  pickupHowToCreateFaq?: Maybe<PickupHowToCreateFaq>;
  /** List of Faq versions */
  history: Array<Version>;
};


export type FaqDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type FaqCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqCategoryArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqPickupFaqArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqPickupProductFaqArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqPickupHowToCreateFaqArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type FaqCategory = Node & {
  __typename?: 'FaqCategory';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<FaqCategory>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  title: Scalars['String'];
  faqs: Array<Faq>;
  name: Scalars['String'];
  /** List of FaqCategory versions */
  history: Array<Version>;
};


export type FaqCategoryDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type FaqCategoryCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqCategoryUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqCategoryPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type FaqCategoryFaqsArgs = {
  where?: Maybe<FaqWhereInput>;
  orderBy?: Maybe<FaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type FaqCategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type FaqCategoryConnectInput = {
  /** Document to connect */
  where: FaqCategoryWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type FaqCategoryConnection = {
  __typename?: 'FaqCategoryConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FaqCategoryEdge>;
  aggregate: Aggregate;
};

export type FaqCategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  faqs?: Maybe<FaqCreateManyInlineInput>;
  name: Scalars['String'];
};

export type FaqCategoryCreateManyInlineInput = {
  /** Create and connect multiple existing FaqCategory documents */
  create?: Maybe<Array<FaqCategoryCreateInput>>;
  /** Connect multiple existing FaqCategory documents */
  connect?: Maybe<Array<FaqCategoryWhereUniqueInput>>;
};

export type FaqCategoryCreateOneInlineInput = {
  /** Create and connect one FaqCategory document */
  create?: Maybe<FaqCategoryCreateInput>;
  /** Connect one existing FaqCategory document */
  connect?: Maybe<FaqCategoryWhereUniqueInput>;
};

/** An edge in a connection. */
export type FaqCategoryEdge = {
  __typename?: 'FaqCategoryEdge';
  /** The item at the end of the edge. */
  node: FaqCategory;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type FaqCategoryManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FaqCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FaqCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FaqCategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  faqs_every?: Maybe<FaqWhereInput>;
  faqs_some?: Maybe<FaqWhereInput>;
  faqs_none?: Maybe<FaqWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export enum FaqCategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type FaqCategoryUpdateInput = {
  title?: Maybe<Scalars['String']>;
  faqs?: Maybe<FaqUpdateManyInlineInput>;
  name?: Maybe<Scalars['String']>;
};

export type FaqCategoryUpdateManyInlineInput = {
  /** Create and connect multiple FaqCategory documents */
  create?: Maybe<Array<FaqCategoryCreateInput>>;
  /** Connect multiple existing FaqCategory documents */
  connect?: Maybe<Array<FaqCategoryConnectInput>>;
  /** Override currently-connected documents with multiple existing FaqCategory documents */
  set?: Maybe<Array<FaqCategoryWhereUniqueInput>>;
  /** Update multiple FaqCategory documents */
  update?: Maybe<Array<FaqCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FaqCategory documents */
  upsert?: Maybe<Array<FaqCategoryUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple FaqCategory documents */
  disconnect?: Maybe<Array<FaqCategoryWhereUniqueInput>>;
  /** Delete multiple FaqCategory documents */
  delete?: Maybe<Array<FaqCategoryWhereUniqueInput>>;
};

export type FaqCategoryUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type FaqCategoryUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FaqCategoryWhereInput;
  /** Update many input */
  data: FaqCategoryUpdateManyInput;
};

export type FaqCategoryUpdateOneInlineInput = {
  /** Create and connect one FaqCategory document */
  create?: Maybe<FaqCategoryCreateInput>;
  /** Update single FaqCategory document */
  update?: Maybe<FaqCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FaqCategory document */
  upsert?: Maybe<FaqCategoryUpsertWithNestedWhereUniqueInput>;
  /** Connect existing FaqCategory document */
  connect?: Maybe<FaqCategoryWhereUniqueInput>;
  /** Disconnect currently connected FaqCategory document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected FaqCategory document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type FaqCategoryUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FaqCategoryWhereUniqueInput;
  /** Document to update */
  data: FaqCategoryUpdateInput;
};

export type FaqCategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCategoryCreateInput;
  /** Update document if it exists */
  update: FaqCategoryUpdateInput;
};

export type FaqCategoryUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FaqCategoryWhereUniqueInput;
  /** Upsert data */
  data: FaqCategoryUpsertInput;
};

/** Identifies documents */
export type FaqCategoryWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FaqCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FaqCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FaqCategoryWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  faqs_every?: Maybe<FaqWhereInput>;
  faqs_some?: Maybe<FaqWhereInput>;
  faqs_none?: Maybe<FaqWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
};

/** References FaqCategory record uniquely */
export type FaqCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type FaqConnectInput = {
  /** Document to connect */
  where: FaqWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FaqEdge>;
  aggregate: Aggregate;
};

export type FaqCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['RichTextAST'];
  publishDate: Scalars['DateTime'];
  category?: Maybe<FaqCategoryCreateOneInlineInput>;
  pickupFaq?: Maybe<PickupFaqCreateOneInlineInput>;
  pickupProductFaq?: Maybe<PickupProductFaqCreateOneInlineInput>;
  pickupHowToCreateFaq?: Maybe<PickupHowToCreateFaqCreateOneInlineInput>;
};

export type FaqCreateManyInlineInput = {
  /** Create and connect multiple existing Faq documents */
  create?: Maybe<Array<FaqCreateInput>>;
  /** Connect multiple existing Faq documents */
  connect?: Maybe<Array<FaqWhereUniqueInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Create and connect one Faq document */
  create?: Maybe<FaqCreateInput>;
  /** Connect one existing Faq document */
  connect?: Maybe<FaqWhereUniqueInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** The item at the end of the edge. */
  node: Faq;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishDate_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishDate_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishDate_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishDate_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishDate_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishDate_gte?: Maybe<Scalars['DateTime']>;
  category?: Maybe<FaqCategoryWhereInput>;
  pickupFaq?: Maybe<PickupFaqWhereInput>;
  pickupProductFaq?: Maybe<PickupProductFaqWhereInput>;
  pickupHowToCreateFaq?: Maybe<PickupHowToCreateFaqWhereInput>;
};

export enum FaqOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC'
}

export type FaqUpdateInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  publishDate?: Maybe<Scalars['DateTime']>;
  category?: Maybe<FaqCategoryUpdateOneInlineInput>;
  pickupFaq?: Maybe<PickupFaqUpdateOneInlineInput>;
  pickupProductFaq?: Maybe<PickupProductFaqUpdateOneInlineInput>;
  pickupHowToCreateFaq?: Maybe<PickupHowToCreateFaqUpdateOneInlineInput>;
};

export type FaqUpdateManyInlineInput = {
  /** Create and connect multiple Faq documents */
  create?: Maybe<Array<FaqCreateInput>>;
  /** Connect multiple existing Faq documents */
  connect?: Maybe<Array<FaqConnectInput>>;
  /** Override currently-connected documents with multiple existing Faq documents */
  set?: Maybe<Array<FaqWhereUniqueInput>>;
  /** Update multiple Faq documents */
  update?: Maybe<Array<FaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Faq documents */
  upsert?: Maybe<Array<FaqUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Faq documents */
  disconnect?: Maybe<Array<FaqWhereUniqueInput>>;
  /** Delete multiple Faq documents */
  delete?: Maybe<Array<FaqWhereUniqueInput>>;
};

export type FaqUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  publishDate?: Maybe<Scalars['DateTime']>;
};

export type FaqUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FaqWhereInput;
  /** Update many input */
  data: FaqUpdateManyInput;
};

export type FaqUpdateOneInlineInput = {
  /** Create and connect one Faq document */
  create?: Maybe<FaqCreateInput>;
  /** Update single Faq document */
  update?: Maybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  upsert?: Maybe<FaqUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Faq document */
  connect?: Maybe<FaqWhereUniqueInput>;
  /** Disconnect currently connected Faq document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Faq document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FaqWhereUniqueInput;
  /** Document to update */
  data: FaqUpdateInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCreateInput;
  /** Update document if it exists */
  update: FaqUpdateInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FaqWhereUniqueInput;
  /** Upsert data */
  data: FaqUpsertInput;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishDate_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishDate_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishDate_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishDate_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishDate_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishDate_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishDate_gte?: Maybe<Scalars['DateTime']>;
  category?: Maybe<FaqCategoryWhereInput>;
  pickupFaq?: Maybe<PickupFaqWhereInput>;
  pickupProductFaq?: Maybe<PickupProductFaqWhereInput>;
  pickupHowToCreateFaq?: Maybe<PickupHowToCreateFaqWhereInput>;
};

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Create one article */
  createArticle?: Maybe<Article>;
  /** Update one article */
  updateArticle?: Maybe<Article>;
  /** Delete one article from _all_ existing stages. Returns deleted document. */
  deleteArticle?: Maybe<Article>;
  /** Upsert one article */
  upsertArticle?: Maybe<Article>;
  /** Publish one article */
  publishArticle?: Maybe<Article>;
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArticle?: Maybe<Article>;
  /** Update many Article documents */
  updateManyArticlesConnection: ArticleConnection;
  /** Delete many Article documents, return deleted documents */
  deleteManyArticlesConnection: ArticleConnection;
  /** Publish many Article documents */
  publishManyArticlesConnection: ArticleConnection;
  /** Find many Article documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyArticlesConnection: ArticleConnection;
  /**
   * Update many articles
   * @deprecated Please use the new paginated many mutation (updateManyArticlesConnection)
   */
  updateManyArticles: BatchPayload;
  /**
   * Delete many Article documents
   * @deprecated Please use the new paginated many mutation (deleteManyArticlesConnection)
   */
  deleteManyArticles: BatchPayload;
  /**
   * Publish many Article documents
   * @deprecated Please use the new paginated many mutation (publishManyArticlesConnection)
   */
  publishManyArticles: BatchPayload;
  /**
   * Unpublish many Article documents
   * @deprecated Please use the new paginated many mutation (unpublishManyArticlesConnection)
   */
  unpublishManyArticles: BatchPayload;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Create one faq */
  createFaq?: Maybe<Faq>;
  /** Update one faq */
  updateFaq?: Maybe<Faq>;
  /** Delete one faq from _all_ existing stages. Returns deleted document. */
  deleteFaq?: Maybe<Faq>;
  /** Upsert one faq */
  upsertFaq?: Maybe<Faq>;
  /** Publish one faq */
  publishFaq?: Maybe<Faq>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFaq?: Maybe<Faq>;
  /** Update many Faq documents */
  updateManyFaqsConnection: FaqConnection;
  /** Delete many Faq documents, return deleted documents */
  deleteManyFaqsConnection: FaqConnection;
  /** Publish many Faq documents */
  publishManyFaqsConnection: FaqConnection;
  /** Find many Faq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFaqsConnection: FaqConnection;
  /**
   * Update many faqs
   * @deprecated Please use the new paginated many mutation (updateManyFaqsConnection)
   */
  updateManyFaqs: BatchPayload;
  /**
   * Delete many Faq documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaqsConnection)
   */
  deleteManyFaqs: BatchPayload;
  /**
   * Publish many Faq documents
   * @deprecated Please use the new paginated many mutation (publishManyFaqsConnection)
   */
  publishManyFaqs: BatchPayload;
  /**
   * Unpublish many Faq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaqsConnection)
   */
  unpublishManyFaqs: BatchPayload;
  /** Create one faqCategory */
  createFaqCategory?: Maybe<FaqCategory>;
  /** Update one faqCategory */
  updateFaqCategory?: Maybe<FaqCategory>;
  /** Delete one faqCategory from _all_ existing stages. Returns deleted document. */
  deleteFaqCategory?: Maybe<FaqCategory>;
  /** Upsert one faqCategory */
  upsertFaqCategory?: Maybe<FaqCategory>;
  /** Publish one faqCategory */
  publishFaqCategory?: Maybe<FaqCategory>;
  /** Unpublish one faqCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFaqCategory?: Maybe<FaqCategory>;
  /** Update many FaqCategory documents */
  updateManyFaqCategoriesConnection: FaqCategoryConnection;
  /** Delete many FaqCategory documents, return deleted documents */
  deleteManyFaqCategoriesConnection: FaqCategoryConnection;
  /** Publish many FaqCategory documents */
  publishManyFaqCategoriesConnection: FaqCategoryConnection;
  /** Find many FaqCategory documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFaqCategoriesConnection: FaqCategoryConnection;
  /**
   * Update many faqCategories
   * @deprecated Please use the new paginated many mutation (updateManyFaqCategoriesConnection)
   */
  updateManyFaqCategories: BatchPayload;
  /**
   * Delete many FaqCategory documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaqCategoriesConnection)
   */
  deleteManyFaqCategories: BatchPayload;
  /**
   * Publish many FaqCategory documents
   * @deprecated Please use the new paginated many mutation (publishManyFaqCategoriesConnection)
   */
  publishManyFaqCategories: BatchPayload;
  /**
   * Unpublish many FaqCategory documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaqCategoriesConnection)
   */
  unpublishManyFaqCategories: BatchPayload;
  /** Create one pickupFaq */
  createPickupFaq?: Maybe<PickupFaq>;
  /** Update one pickupFaq */
  updatePickupFaq?: Maybe<PickupFaq>;
  /** Delete one pickupFaq from _all_ existing stages. Returns deleted document. */
  deletePickupFaq?: Maybe<PickupFaq>;
  /** Upsert one pickupFaq */
  upsertPickupFaq?: Maybe<PickupFaq>;
  /** Publish one pickupFaq */
  publishPickupFaq?: Maybe<PickupFaq>;
  /** Unpublish one pickupFaq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPickupFaq?: Maybe<PickupFaq>;
  /** Update many PickupFaq documents */
  updateManyPickupFaqsConnection: PickupFaqConnection;
  /** Delete many PickupFaq documents, return deleted documents */
  deleteManyPickupFaqsConnection: PickupFaqConnection;
  /** Publish many PickupFaq documents */
  publishManyPickupFaqsConnection: PickupFaqConnection;
  /** Find many PickupFaq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPickupFaqsConnection: PickupFaqConnection;
  /**
   * Update many pickupFaqs
   * @deprecated Please use the new paginated many mutation (updateManyPickupFaqsConnection)
   */
  updateManyPickupFaqs: BatchPayload;
  /**
   * Delete many PickupFaq documents
   * @deprecated Please use the new paginated many mutation (deleteManyPickupFaqsConnection)
   */
  deleteManyPickupFaqs: BatchPayload;
  /**
   * Publish many PickupFaq documents
   * @deprecated Please use the new paginated many mutation (publishManyPickupFaqsConnection)
   */
  publishManyPickupFaqs: BatchPayload;
  /**
   * Unpublish many PickupFaq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPickupFaqsConnection)
   */
  unpublishManyPickupFaqs: BatchPayload;
  /** Create one pickupHowToCreateFaq */
  createPickupHowToCreateFaq?: Maybe<PickupHowToCreateFaq>;
  /** Update one pickupHowToCreateFaq */
  updatePickupHowToCreateFaq?: Maybe<PickupHowToCreateFaq>;
  /** Delete one pickupHowToCreateFaq from _all_ existing stages. Returns deleted document. */
  deletePickupHowToCreateFaq?: Maybe<PickupHowToCreateFaq>;
  /** Upsert one pickupHowToCreateFaq */
  upsertPickupHowToCreateFaq?: Maybe<PickupHowToCreateFaq>;
  /** Publish one pickupHowToCreateFaq */
  publishPickupHowToCreateFaq?: Maybe<PickupHowToCreateFaq>;
  /** Unpublish one pickupHowToCreateFaq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPickupHowToCreateFaq?: Maybe<PickupHowToCreateFaq>;
  /** Update many PickupHowToCreateFaq documents */
  updateManyPickupHowToCreateFaqsConnection: PickupHowToCreateFaqConnection;
  /** Delete many PickupHowToCreateFaq documents, return deleted documents */
  deleteManyPickupHowToCreateFaqsConnection: PickupHowToCreateFaqConnection;
  /** Publish many PickupHowToCreateFaq documents */
  publishManyPickupHowToCreateFaqsConnection: PickupHowToCreateFaqConnection;
  /** Find many PickupHowToCreateFaq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPickupHowToCreateFaqsConnection: PickupHowToCreateFaqConnection;
  /**
   * Update many pickupHowToCreateFaqs
   * @deprecated Please use the new paginated many mutation (updateManyPickupHowToCreateFaqsConnection)
   */
  updateManyPickupHowToCreateFaqs: BatchPayload;
  /**
   * Delete many PickupHowToCreateFaq documents
   * @deprecated Please use the new paginated many mutation (deleteManyPickupHowToCreateFaqsConnection)
   */
  deleteManyPickupHowToCreateFaqs: BatchPayload;
  /**
   * Publish many PickupHowToCreateFaq documents
   * @deprecated Please use the new paginated many mutation (publishManyPickupHowToCreateFaqsConnection)
   */
  publishManyPickupHowToCreateFaqs: BatchPayload;
  /**
   * Unpublish many PickupHowToCreateFaq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPickupHowToCreateFaqsConnection)
   */
  unpublishManyPickupHowToCreateFaqs: BatchPayload;
  /** Create one pickupInfoArticle */
  createPickupInfoArticle?: Maybe<PickupInfoArticle>;
  /** Update one pickupInfoArticle */
  updatePickupInfoArticle?: Maybe<PickupInfoArticle>;
  /** Delete one pickupInfoArticle from _all_ existing stages. Returns deleted document. */
  deletePickupInfoArticle?: Maybe<PickupInfoArticle>;
  /** Upsert one pickupInfoArticle */
  upsertPickupInfoArticle?: Maybe<PickupInfoArticle>;
  /** Publish one pickupInfoArticle */
  publishPickupInfoArticle?: Maybe<PickupInfoArticle>;
  /** Unpublish one pickupInfoArticle from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPickupInfoArticle?: Maybe<PickupInfoArticle>;
  /** Update many PickupInfoArticle documents */
  updateManyPickupArticlesConnection: PickupInfoArticleConnection;
  /** Delete many PickupInfoArticle documents, return deleted documents */
  deleteManyPickupArticlesConnection: PickupInfoArticleConnection;
  /** Publish many PickupInfoArticle documents */
  publishManyPickupArticlesConnection: PickupInfoArticleConnection;
  /** Find many PickupInfoArticle documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPickupArticlesConnection: PickupInfoArticleConnection;
  /**
   * Update many pickupArticles
   * @deprecated Please use the new paginated many mutation (updateManyPickupArticlesConnection)
   */
  updateManyPickupArticles: BatchPayload;
  /**
   * Delete many PickupInfoArticle documents
   * @deprecated Please use the new paginated many mutation (deleteManyPickupArticlesConnection)
   */
  deleteManyPickupArticles: BatchPayload;
  /**
   * Publish many PickupInfoArticle documents
   * @deprecated Please use the new paginated many mutation (publishManyPickupArticlesConnection)
   */
  publishManyPickupArticles: BatchPayload;
  /**
   * Unpublish many PickupInfoArticle documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPickupArticlesConnection)
   */
  unpublishManyPickupArticles: BatchPayload;
  /** Create one pickupProductFaq */
  createPickupProductFaq?: Maybe<PickupProductFaq>;
  /** Update one pickupProductFaq */
  updatePickupProductFaq?: Maybe<PickupProductFaq>;
  /** Delete one pickupProductFaq from _all_ existing stages. Returns deleted document. */
  deletePickupProductFaq?: Maybe<PickupProductFaq>;
  /** Upsert one pickupProductFaq */
  upsertPickupProductFaq?: Maybe<PickupProductFaq>;
  /** Publish one pickupProductFaq */
  publishPickupProductFaq?: Maybe<PickupProductFaq>;
  /** Unpublish one pickupProductFaq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPickupProductFaq?: Maybe<PickupProductFaq>;
  /** Update many PickupProductFaq documents */
  updateManyPickupProductFaqsConnection: PickupProductFaqConnection;
  /** Delete many PickupProductFaq documents, return deleted documents */
  deleteManyPickupProductFaqsConnection: PickupProductFaqConnection;
  /** Publish many PickupProductFaq documents */
  publishManyPickupProductFaqsConnection: PickupProductFaqConnection;
  /** Find many PickupProductFaq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPickupProductFaqsConnection: PickupProductFaqConnection;
  /**
   * Update many pickupProductFaqs
   * @deprecated Please use the new paginated many mutation (updateManyPickupProductFaqsConnection)
   */
  updateManyPickupProductFaqs: BatchPayload;
  /**
   * Delete many PickupProductFaq documents
   * @deprecated Please use the new paginated many mutation (deleteManyPickupProductFaqsConnection)
   */
  deleteManyPickupProductFaqs: BatchPayload;
  /**
   * Publish many PickupProductFaq documents
   * @deprecated Please use the new paginated many mutation (publishManyPickupProductFaqsConnection)
   */
  publishManyPickupProductFaqs: BatchPayload;
  /**
   * Unpublish many PickupProductFaq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPickupProductFaqsConnection)
   */
  unpublishManyPickupProductFaqs: BatchPayload;
  /** Create one pricing */
  createPricing?: Maybe<Pricing>;
  /** Update one pricing */
  updatePricing?: Maybe<Pricing>;
  /** Delete one pricing from _all_ existing stages. Returns deleted document. */
  deletePricing?: Maybe<Pricing>;
  /** Upsert one pricing */
  upsertPricing?: Maybe<Pricing>;
  /** Publish one pricing */
  publishPricing?: Maybe<Pricing>;
  /** Unpublish one pricing from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPricing?: Maybe<Pricing>;
  /** Update many Pricing documents */
  updateManyPricingsConnection: PricingConnection;
  /** Delete many Pricing documents, return deleted documents */
  deleteManyPricingsConnection: PricingConnection;
  /** Publish many Pricing documents */
  publishManyPricingsConnection: PricingConnection;
  /** Find many Pricing documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPricingsConnection: PricingConnection;
  /**
   * Update many pricings
   * @deprecated Please use the new paginated many mutation (updateManyPricingsConnection)
   */
  updateManyPricings: BatchPayload;
  /**
   * Delete many Pricing documents
   * @deprecated Please use the new paginated many mutation (deleteManyPricingsConnection)
   */
  deleteManyPricings: BatchPayload;
  /**
   * Publish many Pricing documents
   * @deprecated Please use the new paginated many mutation (publishManyPricingsConnection)
   */
  publishManyPricings: BatchPayload;
  /**
   * Unpublish many Pricing documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPricingsConnection)
   */
  unpublishManyPricings: BatchPayload;
  /** Create one staticPage */
  createStaticPage?: Maybe<StaticPage>;
  /** Update one staticPage */
  updateStaticPage?: Maybe<StaticPage>;
  /** Delete one staticPage from _all_ existing stages. Returns deleted document. */
  deleteStaticPage?: Maybe<StaticPage>;
  /** Upsert one staticPage */
  upsertStaticPage?: Maybe<StaticPage>;
  /** Publish one staticPage */
  publishStaticPage?: Maybe<StaticPage>;
  /** Unpublish one staticPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStaticPage?: Maybe<StaticPage>;
  /** Update many StaticPage documents */
  updateManyStaticPagesConnection: StaticPageConnection;
  /** Delete many StaticPage documents, return deleted documents */
  deleteManyStaticPagesConnection: StaticPageConnection;
  /** Publish many StaticPage documents */
  publishManyStaticPagesConnection: StaticPageConnection;
  /** Find many StaticPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStaticPagesConnection: StaticPageConnection;
  /**
   * Update many staticPages
   * @deprecated Please use the new paginated many mutation (updateManyStaticPagesConnection)
   */
  updateManyStaticPages: BatchPayload;
  /**
   * Delete many StaticPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyStaticPagesConnection)
   */
  deleteManyStaticPages: BatchPayload;
  /**
   * Publish many StaticPage documents
   * @deprecated Please use the new paginated many mutation (publishManyStaticPagesConnection)
   */
  publishManyStaticPages: BatchPayload;
  /**
   * Unpublish many StaticPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStaticPagesConnection)
   */
  unpublishManyStaticPages: BatchPayload;
  /** Create one topInfoArticle */
  createTopInfoArticle?: Maybe<TopInfoArticle>;
  /** Update one topInfoArticle */
  updateTopInfoArticle?: Maybe<TopInfoArticle>;
  /** Delete one topInfoArticle from _all_ existing stages. Returns deleted document. */
  deleteTopInfoArticle?: Maybe<TopInfoArticle>;
  /** Upsert one topInfoArticle */
  upsertTopInfoArticle?: Maybe<TopInfoArticle>;
  /** Publish one topInfoArticle */
  publishTopInfoArticle?: Maybe<TopInfoArticle>;
  /** Unpublish one topInfoArticle from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTopInfoArticle?: Maybe<TopInfoArticle>;
  /** Update many TopInfoArticle documents */
  updateManyTopInfoArticlesConnection: TopInfoArticleConnection;
  /** Delete many TopInfoArticle documents, return deleted documents */
  deleteManyTopInfoArticlesConnection: TopInfoArticleConnection;
  /** Publish many TopInfoArticle documents */
  publishManyTopInfoArticlesConnection: TopInfoArticleConnection;
  /** Find many TopInfoArticle documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTopInfoArticlesConnection: TopInfoArticleConnection;
  /**
   * Update many topInfoArticles
   * @deprecated Please use the new paginated many mutation (updateManyTopInfoArticlesConnection)
   */
  updateManyTopInfoArticles: BatchPayload;
  /**
   * Delete many TopInfoArticle documents
   * @deprecated Please use the new paginated many mutation (deleteManyTopInfoArticlesConnection)
   */
  deleteManyTopInfoArticles: BatchPayload;
  /**
   * Publish many TopInfoArticle documents
   * @deprecated Please use the new paginated many mutation (publishManyTopInfoArticlesConnection)
   */
  publishManyTopInfoArticles: BatchPayload;
  /**
   * Unpublish many TopInfoArticle documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTopInfoArticlesConnection)
   */
  unpublishManyTopInfoArticles: BatchPayload;
};


export type MutationCreateArticleArgs = {
  data: ArticleCreateInput;
};


export type MutationUpdateArticleArgs = {
  where: ArticleWhereUniqueInput;
  data: ArticleUpdateInput;
};


export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type MutationUpsertArticleArgs = {
  where: ArticleWhereUniqueInput;
  upsert: ArticleUpsertInput;
};


export type MutationPublishArticleArgs = {
  where: ArticleWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishArticleArgs = {
  where: ArticleWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  data: ArticleUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  data: ArticleUpdateManyInput;
};


export type MutationDeleteManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
};


export type MutationPublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationUpdateCategoryArgs = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  where: CategoryWhereUniqueInput;
  upsert: CategoryUpsertInput;
};


export type MutationPublishCategoryArgs = {
  where: CategoryWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishCategoryArgs = {
  where: CategoryWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  data: CategoryUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  data: CategoryUpdateManyInput;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationUpdateFaqArgs = {
  where: FaqWhereUniqueInput;
  data: FaqUpdateInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationUpsertFaqArgs = {
  where: FaqWhereUniqueInput;
  upsert: FaqUpsertInput;
};


export type MutationPublishFaqArgs = {
  where: FaqWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishFaqArgs = {
  where: FaqWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyFaqsConnectionArgs = {
  where?: Maybe<FaqManyWhereInput>;
  data: FaqUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyFaqsConnectionArgs = {
  where?: Maybe<FaqManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyFaqsConnectionArgs = {
  where?: Maybe<FaqManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyFaqsConnectionArgs = {
  where?: Maybe<FaqManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
  data: FaqUpdateManyInput;
};


export type MutationDeleteManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
};


export type MutationPublishManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyFaqsArgs = {
  where?: Maybe<FaqManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateFaqCategoryArgs = {
  data: FaqCategoryCreateInput;
};


export type MutationUpdateFaqCategoryArgs = {
  where: FaqCategoryWhereUniqueInput;
  data: FaqCategoryUpdateInput;
};


export type MutationDeleteFaqCategoryArgs = {
  where: FaqCategoryWhereUniqueInput;
};


export type MutationUpsertFaqCategoryArgs = {
  where: FaqCategoryWhereUniqueInput;
  upsert: FaqCategoryUpsertInput;
};


export type MutationPublishFaqCategoryArgs = {
  where: FaqCategoryWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishFaqCategoryArgs = {
  where: FaqCategoryWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyFaqCategoriesConnectionArgs = {
  where?: Maybe<FaqCategoryManyWhereInput>;
  data: FaqCategoryUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyFaqCategoriesConnectionArgs = {
  where?: Maybe<FaqCategoryManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyFaqCategoriesConnectionArgs = {
  where?: Maybe<FaqCategoryManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyFaqCategoriesConnectionArgs = {
  where?: Maybe<FaqCategoryManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyFaqCategoriesArgs = {
  where?: Maybe<FaqCategoryManyWhereInput>;
  data: FaqCategoryUpdateManyInput;
};


export type MutationDeleteManyFaqCategoriesArgs = {
  where?: Maybe<FaqCategoryManyWhereInput>;
};


export type MutationPublishManyFaqCategoriesArgs = {
  where?: Maybe<FaqCategoryManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyFaqCategoriesArgs = {
  where?: Maybe<FaqCategoryManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePickupFaqArgs = {
  data: PickupFaqCreateInput;
};


export type MutationUpdatePickupFaqArgs = {
  where: PickupFaqWhereUniqueInput;
  data: PickupFaqUpdateInput;
};


export type MutationDeletePickupFaqArgs = {
  where: PickupFaqWhereUniqueInput;
};


export type MutationUpsertPickupFaqArgs = {
  where: PickupFaqWhereUniqueInput;
  upsert: PickupFaqUpsertInput;
};


export type MutationPublishPickupFaqArgs = {
  where: PickupFaqWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPickupFaqArgs = {
  where: PickupFaqWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPickupFaqsConnectionArgs = {
  where?: Maybe<PickupFaqManyWhereInput>;
  data: PickupFaqUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPickupFaqsConnectionArgs = {
  where?: Maybe<PickupFaqManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPickupFaqsConnectionArgs = {
  where?: Maybe<PickupFaqManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPickupFaqsConnectionArgs = {
  where?: Maybe<PickupFaqManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPickupFaqsArgs = {
  where?: Maybe<PickupFaqManyWhereInput>;
  data: PickupFaqUpdateManyInput;
};


export type MutationDeleteManyPickupFaqsArgs = {
  where?: Maybe<PickupFaqManyWhereInput>;
};


export type MutationPublishManyPickupFaqsArgs = {
  where?: Maybe<PickupFaqManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPickupFaqsArgs = {
  where?: Maybe<PickupFaqManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePickupHowToCreateFaqArgs = {
  data: PickupHowToCreateFaqCreateInput;
};


export type MutationUpdatePickupHowToCreateFaqArgs = {
  where: PickupHowToCreateFaqWhereUniqueInput;
  data: PickupHowToCreateFaqUpdateInput;
};


export type MutationDeletePickupHowToCreateFaqArgs = {
  where: PickupHowToCreateFaqWhereUniqueInput;
};


export type MutationUpsertPickupHowToCreateFaqArgs = {
  where: PickupHowToCreateFaqWhereUniqueInput;
  upsert: PickupHowToCreateFaqUpsertInput;
};


export type MutationPublishPickupHowToCreateFaqArgs = {
  where: PickupHowToCreateFaqWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPickupHowToCreateFaqArgs = {
  where: PickupHowToCreateFaqWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPickupHowToCreateFaqsConnectionArgs = {
  where?: Maybe<PickupHowToCreateFaqManyWhereInput>;
  data: PickupHowToCreateFaqUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPickupHowToCreateFaqsConnectionArgs = {
  where?: Maybe<PickupHowToCreateFaqManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPickupHowToCreateFaqsConnectionArgs = {
  where?: Maybe<PickupHowToCreateFaqManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPickupHowToCreateFaqsConnectionArgs = {
  where?: Maybe<PickupHowToCreateFaqManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPickupHowToCreateFaqsArgs = {
  where?: Maybe<PickupHowToCreateFaqManyWhereInput>;
  data: PickupHowToCreateFaqUpdateManyInput;
};


export type MutationDeleteManyPickupHowToCreateFaqsArgs = {
  where?: Maybe<PickupHowToCreateFaqManyWhereInput>;
};


export type MutationPublishManyPickupHowToCreateFaqsArgs = {
  where?: Maybe<PickupHowToCreateFaqManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPickupHowToCreateFaqsArgs = {
  where?: Maybe<PickupHowToCreateFaqManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePickupInfoArticleArgs = {
  data: PickupInfoArticleCreateInput;
};


export type MutationUpdatePickupInfoArticleArgs = {
  where: PickupInfoArticleWhereUniqueInput;
  data: PickupInfoArticleUpdateInput;
};


export type MutationDeletePickupInfoArticleArgs = {
  where: PickupInfoArticleWhereUniqueInput;
};


export type MutationUpsertPickupInfoArticleArgs = {
  where: PickupInfoArticleWhereUniqueInput;
  upsert: PickupInfoArticleUpsertInput;
};


export type MutationPublishPickupInfoArticleArgs = {
  where: PickupInfoArticleWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPickupInfoArticleArgs = {
  where: PickupInfoArticleWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPickupArticlesConnectionArgs = {
  where?: Maybe<PickupInfoArticleManyWhereInput>;
  data: PickupInfoArticleUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPickupArticlesConnectionArgs = {
  where?: Maybe<PickupInfoArticleManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPickupArticlesConnectionArgs = {
  where?: Maybe<PickupInfoArticleManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPickupArticlesConnectionArgs = {
  where?: Maybe<PickupInfoArticleManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPickupArticlesArgs = {
  where?: Maybe<PickupInfoArticleManyWhereInput>;
  data: PickupInfoArticleUpdateManyInput;
};


export type MutationDeleteManyPickupArticlesArgs = {
  where?: Maybe<PickupInfoArticleManyWhereInput>;
};


export type MutationPublishManyPickupArticlesArgs = {
  where?: Maybe<PickupInfoArticleManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPickupArticlesArgs = {
  where?: Maybe<PickupInfoArticleManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePickupProductFaqArgs = {
  data: PickupProductFaqCreateInput;
};


export type MutationUpdatePickupProductFaqArgs = {
  where: PickupProductFaqWhereUniqueInput;
  data: PickupProductFaqUpdateInput;
};


export type MutationDeletePickupProductFaqArgs = {
  where: PickupProductFaqWhereUniqueInput;
};


export type MutationUpsertPickupProductFaqArgs = {
  where: PickupProductFaqWhereUniqueInput;
  upsert: PickupProductFaqUpsertInput;
};


export type MutationPublishPickupProductFaqArgs = {
  where: PickupProductFaqWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPickupProductFaqArgs = {
  where: PickupProductFaqWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPickupProductFaqsConnectionArgs = {
  where?: Maybe<PickupProductFaqManyWhereInput>;
  data: PickupProductFaqUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPickupProductFaqsConnectionArgs = {
  where?: Maybe<PickupProductFaqManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPickupProductFaqsConnectionArgs = {
  where?: Maybe<PickupProductFaqManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPickupProductFaqsConnectionArgs = {
  where?: Maybe<PickupProductFaqManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPickupProductFaqsArgs = {
  where?: Maybe<PickupProductFaqManyWhereInput>;
  data: PickupProductFaqUpdateManyInput;
};


export type MutationDeleteManyPickupProductFaqsArgs = {
  where?: Maybe<PickupProductFaqManyWhereInput>;
};


export type MutationPublishManyPickupProductFaqsArgs = {
  where?: Maybe<PickupProductFaqManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPickupProductFaqsArgs = {
  where?: Maybe<PickupProductFaqManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePricingArgs = {
  data: PricingCreateInput;
};


export type MutationUpdatePricingArgs = {
  where: PricingWhereUniqueInput;
  data: PricingUpdateInput;
};


export type MutationDeletePricingArgs = {
  where: PricingWhereUniqueInput;
};


export type MutationUpsertPricingArgs = {
  where: PricingWhereUniqueInput;
  upsert: PricingUpsertInput;
};


export type MutationPublishPricingArgs = {
  where: PricingWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPricingArgs = {
  where: PricingWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPricingsConnectionArgs = {
  where?: Maybe<PricingManyWhereInput>;
  data: PricingUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPricingsConnectionArgs = {
  where?: Maybe<PricingManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPricingsConnectionArgs = {
  where?: Maybe<PricingManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPricingsConnectionArgs = {
  where?: Maybe<PricingManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPricingsArgs = {
  where?: Maybe<PricingManyWhereInput>;
  data: PricingUpdateManyInput;
};


export type MutationDeleteManyPricingsArgs = {
  where?: Maybe<PricingManyWhereInput>;
};


export type MutationPublishManyPricingsArgs = {
  where?: Maybe<PricingManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPricingsArgs = {
  where?: Maybe<PricingManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateStaticPageArgs = {
  data: StaticPageCreateInput;
};


export type MutationUpdateStaticPageArgs = {
  where: StaticPageWhereUniqueInput;
  data: StaticPageUpdateInput;
};


export type MutationDeleteStaticPageArgs = {
  where: StaticPageWhereUniqueInput;
};


export type MutationUpsertStaticPageArgs = {
  where: StaticPageWhereUniqueInput;
  upsert: StaticPageUpsertInput;
};


export type MutationPublishStaticPageArgs = {
  where: StaticPageWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishStaticPageArgs = {
  where: StaticPageWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyStaticPagesConnectionArgs = {
  where?: Maybe<StaticPageManyWhereInput>;
  data: StaticPageUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyStaticPagesConnectionArgs = {
  where?: Maybe<StaticPageManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyStaticPagesConnectionArgs = {
  where?: Maybe<StaticPageManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyStaticPagesConnectionArgs = {
  where?: Maybe<StaticPageManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyStaticPagesArgs = {
  where?: Maybe<StaticPageManyWhereInput>;
  data: StaticPageUpdateManyInput;
};


export type MutationDeleteManyStaticPagesArgs = {
  where?: Maybe<StaticPageManyWhereInput>;
};


export type MutationPublishManyStaticPagesArgs = {
  where?: Maybe<StaticPageManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyStaticPagesArgs = {
  where?: Maybe<StaticPageManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateTopInfoArticleArgs = {
  data: TopInfoArticleCreateInput;
};


export type MutationUpdateTopInfoArticleArgs = {
  where: TopInfoArticleWhereUniqueInput;
  data: TopInfoArticleUpdateInput;
};


export type MutationDeleteTopInfoArticleArgs = {
  where: TopInfoArticleWhereUniqueInput;
};


export type MutationUpsertTopInfoArticleArgs = {
  where: TopInfoArticleWhereUniqueInput;
  upsert: TopInfoArticleUpsertInput;
};


export type MutationPublishTopInfoArticleArgs = {
  where: TopInfoArticleWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishTopInfoArticleArgs = {
  where: TopInfoArticleWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyTopInfoArticlesConnectionArgs = {
  where?: Maybe<TopInfoArticleManyWhereInput>;
  data: TopInfoArticleUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyTopInfoArticlesConnectionArgs = {
  where?: Maybe<TopInfoArticleManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyTopInfoArticlesConnectionArgs = {
  where?: Maybe<TopInfoArticleManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyTopInfoArticlesConnectionArgs = {
  where?: Maybe<TopInfoArticleManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyTopInfoArticlesArgs = {
  where?: Maybe<TopInfoArticleManyWhereInput>;
  data: TopInfoArticleUpdateManyInput;
};


export type MutationDeleteManyTopInfoArticlesArgs = {
  where?: Maybe<TopInfoArticleManyWhereInput>;
};


export type MutationPublishManyTopInfoArticlesArgs = {
  where?: Maybe<TopInfoArticleManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyTopInfoArticlesArgs = {
  where?: Maybe<TopInfoArticleManyWhereInput>;
  from?: Array<Stage>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type PickupFaq = Node & {
  __typename?: 'PickupFaq';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<PickupFaq>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  order: Scalars['Int'];
  faq?: Maybe<Faq>;
  /** List of PickupFaq versions */
  history: Array<Version>;
};


export type PickupFaqDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PickupFaqCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupFaqUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupFaqPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupFaqFaqArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupFaqHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PickupFaqConnectInput = {
  /** Document to connect */
  where: PickupFaqWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PickupFaqConnection = {
  __typename?: 'PickupFaqConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PickupFaqEdge>;
  aggregate: Aggregate;
};

export type PickupFaqCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  order: Scalars['Int'];
  faq?: Maybe<FaqCreateOneInlineInput>;
};

export type PickupFaqCreateManyInlineInput = {
  /** Create and connect multiple existing PickupFaq documents */
  create?: Maybe<Array<PickupFaqCreateInput>>;
  /** Connect multiple existing PickupFaq documents */
  connect?: Maybe<Array<PickupFaqWhereUniqueInput>>;
};

export type PickupFaqCreateOneInlineInput = {
  /** Create and connect one PickupFaq document */
  create?: Maybe<PickupFaqCreateInput>;
  /** Connect one existing PickupFaq document */
  connect?: Maybe<PickupFaqWhereUniqueInput>;
};

/** An edge in a connection. */
export type PickupFaqEdge = {
  __typename?: 'PickupFaqEdge';
  /** The item at the end of the edge. */
  node: PickupFaq;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PickupFaqManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PickupFaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PickupFaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PickupFaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  order?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  order_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: Maybe<Scalars['Int']>;
  faq?: Maybe<FaqWhereInput>;
};

export enum PickupFaqOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC'
}

export type PickupFaqUpdateInput = {
  order?: Maybe<Scalars['Int']>;
  faq?: Maybe<FaqUpdateOneInlineInput>;
};

export type PickupFaqUpdateManyInlineInput = {
  /** Create and connect multiple PickupFaq documents */
  create?: Maybe<Array<PickupFaqCreateInput>>;
  /** Connect multiple existing PickupFaq documents */
  connect?: Maybe<Array<PickupFaqConnectInput>>;
  /** Override currently-connected documents with multiple existing PickupFaq documents */
  set?: Maybe<Array<PickupFaqWhereUniqueInput>>;
  /** Update multiple PickupFaq documents */
  update?: Maybe<Array<PickupFaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PickupFaq documents */
  upsert?: Maybe<Array<PickupFaqUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple PickupFaq documents */
  disconnect?: Maybe<Array<PickupFaqWhereUniqueInput>>;
  /** Delete multiple PickupFaq documents */
  delete?: Maybe<Array<PickupFaqWhereUniqueInput>>;
};

export type PickupFaqUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type PickupFaqUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PickupFaqWhereInput;
  /** Update many input */
  data: PickupFaqUpdateManyInput;
};

export type PickupFaqUpdateOneInlineInput = {
  /** Create and connect one PickupFaq document */
  create?: Maybe<PickupFaqCreateInput>;
  /** Update single PickupFaq document */
  update?: Maybe<PickupFaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PickupFaq document */
  upsert?: Maybe<PickupFaqUpsertWithNestedWhereUniqueInput>;
  /** Connect existing PickupFaq document */
  connect?: Maybe<PickupFaqWhereUniqueInput>;
  /** Disconnect currently connected PickupFaq document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected PickupFaq document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PickupFaqUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PickupFaqWhereUniqueInput;
  /** Document to update */
  data: PickupFaqUpdateInput;
};

export type PickupFaqUpsertInput = {
  /** Create document if it didn't exist */
  create: PickupFaqCreateInput;
  /** Update document if it exists */
  update: PickupFaqUpdateInput;
};

export type PickupFaqUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PickupFaqWhereUniqueInput;
  /** Upsert data */
  data: PickupFaqUpsertInput;
};

/** Identifies documents */
export type PickupFaqWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PickupFaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PickupFaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PickupFaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  order?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  order_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: Maybe<Scalars['Int']>;
  faq?: Maybe<FaqWhereInput>;
};

/** References PickupFaq record uniquely */
export type PickupFaqWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Int']>;
};

export type PickupHowToCreateFaq = Node & {
  __typename?: 'PickupHowToCreateFaq';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<PickupHowToCreateFaq>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  faqs: Array<Faq>;
  /** List of PickupHowToCreateFaq versions */
  history: Array<Version>;
};


export type PickupHowToCreateFaqDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PickupHowToCreateFaqCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupHowToCreateFaqUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupHowToCreateFaqPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupHowToCreateFaqFaqsArgs = {
  where?: Maybe<FaqWhereInput>;
  orderBy?: Maybe<FaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PickupHowToCreateFaqHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PickupHowToCreateFaqConnectInput = {
  /** Document to connect */
  where: PickupHowToCreateFaqWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PickupHowToCreateFaqConnection = {
  __typename?: 'PickupHowToCreateFaqConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PickupHowToCreateFaqEdge>;
  aggregate: Aggregate;
};

export type PickupHowToCreateFaqCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  faqs?: Maybe<FaqCreateManyInlineInput>;
};

export type PickupHowToCreateFaqCreateManyInlineInput = {
  /** Create and connect multiple existing PickupHowToCreateFaq documents */
  create?: Maybe<Array<PickupHowToCreateFaqCreateInput>>;
  /** Connect multiple existing PickupHowToCreateFaq documents */
  connect?: Maybe<Array<PickupHowToCreateFaqWhereUniqueInput>>;
};

export type PickupHowToCreateFaqCreateOneInlineInput = {
  /** Create and connect one PickupHowToCreateFaq document */
  create?: Maybe<PickupHowToCreateFaqCreateInput>;
  /** Connect one existing PickupHowToCreateFaq document */
  connect?: Maybe<PickupHowToCreateFaqWhereUniqueInput>;
};

/** An edge in a connection. */
export type PickupHowToCreateFaqEdge = {
  __typename?: 'PickupHowToCreateFaqEdge';
  /** The item at the end of the edge. */
  node: PickupHowToCreateFaq;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PickupHowToCreateFaqManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PickupHowToCreateFaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PickupHowToCreateFaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PickupHowToCreateFaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  faqs_every?: Maybe<FaqWhereInput>;
  faqs_some?: Maybe<FaqWhereInput>;
  faqs_none?: Maybe<FaqWhereInput>;
};

export enum PickupHowToCreateFaqOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type PickupHowToCreateFaqUpdateInput = {
  name?: Maybe<Scalars['String']>;
  faqs?: Maybe<FaqUpdateManyInlineInput>;
};

export type PickupHowToCreateFaqUpdateManyInlineInput = {
  /** Create and connect multiple PickupHowToCreateFaq documents */
  create?: Maybe<Array<PickupHowToCreateFaqCreateInput>>;
  /** Connect multiple existing PickupHowToCreateFaq documents */
  connect?: Maybe<Array<PickupHowToCreateFaqConnectInput>>;
  /** Override currently-connected documents with multiple existing PickupHowToCreateFaq documents */
  set?: Maybe<Array<PickupHowToCreateFaqWhereUniqueInput>>;
  /** Update multiple PickupHowToCreateFaq documents */
  update?: Maybe<Array<PickupHowToCreateFaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PickupHowToCreateFaq documents */
  upsert?: Maybe<Array<PickupHowToCreateFaqUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple PickupHowToCreateFaq documents */
  disconnect?: Maybe<Array<PickupHowToCreateFaqWhereUniqueInput>>;
  /** Delete multiple PickupHowToCreateFaq documents */
  delete?: Maybe<Array<PickupHowToCreateFaqWhereUniqueInput>>;
};

export type PickupHowToCreateFaqUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type PickupHowToCreateFaqUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PickupHowToCreateFaqWhereInput;
  /** Update many input */
  data: PickupHowToCreateFaqUpdateManyInput;
};

export type PickupHowToCreateFaqUpdateOneInlineInput = {
  /** Create and connect one PickupHowToCreateFaq document */
  create?: Maybe<PickupHowToCreateFaqCreateInput>;
  /** Update single PickupHowToCreateFaq document */
  update?: Maybe<PickupHowToCreateFaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PickupHowToCreateFaq document */
  upsert?: Maybe<PickupHowToCreateFaqUpsertWithNestedWhereUniqueInput>;
  /** Connect existing PickupHowToCreateFaq document */
  connect?: Maybe<PickupHowToCreateFaqWhereUniqueInput>;
  /** Disconnect currently connected PickupHowToCreateFaq document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected PickupHowToCreateFaq document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PickupHowToCreateFaqUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PickupHowToCreateFaqWhereUniqueInput;
  /** Document to update */
  data: PickupHowToCreateFaqUpdateInput;
};

export type PickupHowToCreateFaqUpsertInput = {
  /** Create document if it didn't exist */
  create: PickupHowToCreateFaqCreateInput;
  /** Update document if it exists */
  update: PickupHowToCreateFaqUpdateInput;
};

export type PickupHowToCreateFaqUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PickupHowToCreateFaqWhereUniqueInput;
  /** Upsert data */
  data: PickupHowToCreateFaqUpsertInput;
};

/** Identifies documents */
export type PickupHowToCreateFaqWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PickupHowToCreateFaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PickupHowToCreateFaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PickupHowToCreateFaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  faqs_every?: Maybe<FaqWhereInput>;
  faqs_some?: Maybe<FaqWhereInput>;
  faqs_none?: Maybe<FaqWhereInput>;
};

/** References PickupHowToCreateFaq record uniquely */
export type PickupHowToCreateFaqWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PickupInfoArticle = Node & {
  __typename?: 'PickupInfoArticle';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<PickupInfoArticle>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  articles: Array<Article>;
  /** List of PickupInfoArticle versions */
  history: Array<Version>;
};


export type PickupInfoArticleDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PickupInfoArticleCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupInfoArticleUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupInfoArticlePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupInfoArticleArticlesArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
};


export type PickupInfoArticleHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PickupInfoArticleConnectInput = {
  /** Document to connect */
  where: PickupInfoArticleWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PickupInfoArticleConnection = {
  __typename?: 'PickupInfoArticleConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PickupInfoArticleEdge>;
  aggregate: Aggregate;
};

export type PickupInfoArticleCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  articles?: Maybe<ArticleCreateManyInlineInput>;
};

export type PickupInfoArticleCreateManyInlineInput = {
  /** Create and connect multiple existing PickupInfoArticle documents */
  create?: Maybe<Array<PickupInfoArticleCreateInput>>;
  /** Connect multiple existing PickupInfoArticle documents */
  connect?: Maybe<Array<PickupInfoArticleWhereUniqueInput>>;
};

export type PickupInfoArticleCreateOneInlineInput = {
  /** Create and connect one PickupInfoArticle document */
  create?: Maybe<PickupInfoArticleCreateInput>;
  /** Connect one existing PickupInfoArticle document */
  connect?: Maybe<PickupInfoArticleWhereUniqueInput>;
};

/** An edge in a connection. */
export type PickupInfoArticleEdge = {
  __typename?: 'PickupInfoArticleEdge';
  /** The item at the end of the edge. */
  node: PickupInfoArticle;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PickupInfoArticleManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PickupInfoArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PickupInfoArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PickupInfoArticleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  articles_every?: Maybe<ArticleWhereInput>;
  articles_some?: Maybe<ArticleWhereInput>;
  articles_none?: Maybe<ArticleWhereInput>;
};

export enum PickupInfoArticleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type PickupInfoArticleUpdateInput = {
  name?: Maybe<Scalars['String']>;
  articles?: Maybe<ArticleUpdateManyInlineInput>;
};

export type PickupInfoArticleUpdateManyInlineInput = {
  /** Create and connect multiple PickupInfoArticle documents */
  create?: Maybe<Array<PickupInfoArticleCreateInput>>;
  /** Connect multiple existing PickupInfoArticle documents */
  connect?: Maybe<Array<PickupInfoArticleConnectInput>>;
  /** Override currently-connected documents with multiple existing PickupInfoArticle documents */
  set?: Maybe<Array<PickupInfoArticleWhereUniqueInput>>;
  /** Update multiple PickupInfoArticle documents */
  update?: Maybe<Array<PickupInfoArticleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PickupInfoArticle documents */
  upsert?: Maybe<Array<PickupInfoArticleUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple PickupInfoArticle documents */
  disconnect?: Maybe<Array<PickupInfoArticleWhereUniqueInput>>;
  /** Delete multiple PickupInfoArticle documents */
  delete?: Maybe<Array<PickupInfoArticleWhereUniqueInput>>;
};

export type PickupInfoArticleUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type PickupInfoArticleUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PickupInfoArticleWhereInput;
  /** Update many input */
  data: PickupInfoArticleUpdateManyInput;
};

export type PickupInfoArticleUpdateOneInlineInput = {
  /** Create and connect one PickupInfoArticle document */
  create?: Maybe<PickupInfoArticleCreateInput>;
  /** Update single PickupInfoArticle document */
  update?: Maybe<PickupInfoArticleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PickupInfoArticle document */
  upsert?: Maybe<PickupInfoArticleUpsertWithNestedWhereUniqueInput>;
  /** Connect existing PickupInfoArticle document */
  connect?: Maybe<PickupInfoArticleWhereUniqueInput>;
  /** Disconnect currently connected PickupInfoArticle document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected PickupInfoArticle document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PickupInfoArticleUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PickupInfoArticleWhereUniqueInput;
  /** Document to update */
  data: PickupInfoArticleUpdateInput;
};

export type PickupInfoArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: PickupInfoArticleCreateInput;
  /** Update document if it exists */
  update: PickupInfoArticleUpdateInput;
};

export type PickupInfoArticleUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PickupInfoArticleWhereUniqueInput;
  /** Upsert data */
  data: PickupInfoArticleUpsertInput;
};

/** Identifies documents */
export type PickupInfoArticleWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PickupInfoArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PickupInfoArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PickupInfoArticleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  articles_every?: Maybe<ArticleWhereInput>;
  articles_some?: Maybe<ArticleWhereInput>;
  articles_none?: Maybe<ArticleWhereInput>;
};

/** References PickupInfoArticle record uniquely */
export type PickupInfoArticleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PickupProductFaq = Node & {
  __typename?: 'PickupProductFaq';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<PickupProductFaq>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  order: Scalars['Int'];
  faq?: Maybe<Faq>;
  /** List of PickupProductFaq versions */
  history: Array<Version>;
};


export type PickupProductFaqDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PickupProductFaqCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupProductFaqUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupProductFaqPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupProductFaqFaqArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PickupProductFaqHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PickupProductFaqConnectInput = {
  /** Document to connect */
  where: PickupProductFaqWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PickupProductFaqConnection = {
  __typename?: 'PickupProductFaqConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PickupProductFaqEdge>;
  aggregate: Aggregate;
};

export type PickupProductFaqCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  order: Scalars['Int'];
  faq?: Maybe<FaqCreateOneInlineInput>;
};

export type PickupProductFaqCreateManyInlineInput = {
  /** Create and connect multiple existing PickupProductFaq documents */
  create?: Maybe<Array<PickupProductFaqCreateInput>>;
  /** Connect multiple existing PickupProductFaq documents */
  connect?: Maybe<Array<PickupProductFaqWhereUniqueInput>>;
};

export type PickupProductFaqCreateOneInlineInput = {
  /** Create and connect one PickupProductFaq document */
  create?: Maybe<PickupProductFaqCreateInput>;
  /** Connect one existing PickupProductFaq document */
  connect?: Maybe<PickupProductFaqWhereUniqueInput>;
};

/** An edge in a connection. */
export type PickupProductFaqEdge = {
  __typename?: 'PickupProductFaqEdge';
  /** The item at the end of the edge. */
  node: PickupProductFaq;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PickupProductFaqManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PickupProductFaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PickupProductFaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PickupProductFaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  order?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  order_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: Maybe<Scalars['Int']>;
  faq?: Maybe<FaqWhereInput>;
};

export enum PickupProductFaqOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC'
}

export type PickupProductFaqUpdateInput = {
  order?: Maybe<Scalars['Int']>;
  faq?: Maybe<FaqUpdateOneInlineInput>;
};

export type PickupProductFaqUpdateManyInlineInput = {
  /** Create and connect multiple PickupProductFaq documents */
  create?: Maybe<Array<PickupProductFaqCreateInput>>;
  /** Connect multiple existing PickupProductFaq documents */
  connect?: Maybe<Array<PickupProductFaqConnectInput>>;
  /** Override currently-connected documents with multiple existing PickupProductFaq documents */
  set?: Maybe<Array<PickupProductFaqWhereUniqueInput>>;
  /** Update multiple PickupProductFaq documents */
  update?: Maybe<Array<PickupProductFaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PickupProductFaq documents */
  upsert?: Maybe<Array<PickupProductFaqUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple PickupProductFaq documents */
  disconnect?: Maybe<Array<PickupProductFaqWhereUniqueInput>>;
  /** Delete multiple PickupProductFaq documents */
  delete?: Maybe<Array<PickupProductFaqWhereUniqueInput>>;
};

export type PickupProductFaqUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type PickupProductFaqUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PickupProductFaqWhereInput;
  /** Update many input */
  data: PickupProductFaqUpdateManyInput;
};

export type PickupProductFaqUpdateOneInlineInput = {
  /** Create and connect one PickupProductFaq document */
  create?: Maybe<PickupProductFaqCreateInput>;
  /** Update single PickupProductFaq document */
  update?: Maybe<PickupProductFaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PickupProductFaq document */
  upsert?: Maybe<PickupProductFaqUpsertWithNestedWhereUniqueInput>;
  /** Connect existing PickupProductFaq document */
  connect?: Maybe<PickupProductFaqWhereUniqueInput>;
  /** Disconnect currently connected PickupProductFaq document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected PickupProductFaq document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PickupProductFaqUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PickupProductFaqWhereUniqueInput;
  /** Document to update */
  data: PickupProductFaqUpdateInput;
};

export type PickupProductFaqUpsertInput = {
  /** Create document if it didn't exist */
  create: PickupProductFaqCreateInput;
  /** Update document if it exists */
  update: PickupProductFaqUpdateInput;
};

export type PickupProductFaqUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PickupProductFaqWhereUniqueInput;
  /** Upsert data */
  data: PickupProductFaqUpsertInput;
};

/** Identifies documents */
export type PickupProductFaqWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PickupProductFaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PickupProductFaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PickupProductFaqWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  order?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  order_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: Maybe<Scalars['Int']>;
  faq?: Maybe<FaqWhereInput>;
};

/** References PickupProductFaq record uniquely */
export type PickupProductFaqWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Int']>;
};

export type Pricing = Node & {
  __typename?: 'Pricing';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Pricing>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  initialPage: Scalars['Int'];
  initialPrice: Scalars['Int'];
  table: Scalars['Json'];
  fullPriceTable: Scalars['Json'];
  /** List of Pricing versions */
  history: Array<Version>;
};


export type PricingDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PricingCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PricingUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PricingPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type PricingHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PricingConnectInput = {
  /** Document to connect */
  where: PricingWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PricingConnection = {
  __typename?: 'PricingConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PricingEdge>;
  aggregate: Aggregate;
};

export type PricingCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  initialPage: Scalars['Int'];
  initialPrice: Scalars['Int'];
  table: Scalars['Json'];
  fullPriceTable: Scalars['Json'];
};

export type PricingCreateManyInlineInput = {
  /** Create and connect multiple existing Pricing documents */
  create?: Maybe<Array<PricingCreateInput>>;
  /** Connect multiple existing Pricing documents */
  connect?: Maybe<Array<PricingWhereUniqueInput>>;
};

export type PricingCreateOneInlineInput = {
  /** Create and connect one Pricing document */
  create?: Maybe<PricingCreateInput>;
  /** Connect one existing Pricing document */
  connect?: Maybe<PricingWhereUniqueInput>;
};

/** An edge in a connection. */
export type PricingEdge = {
  __typename?: 'PricingEdge';
  /** The item at the end of the edge. */
  node: Pricing;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PricingManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PricingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PricingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PricingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  initialPage?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  initialPage_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  initialPage_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  initialPage_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  initialPage_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  initialPage_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  initialPage_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  initialPage_gte?: Maybe<Scalars['Int']>;
  initialPrice?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  initialPrice_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  initialPrice_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  initialPrice_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  initialPrice_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  initialPrice_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  initialPrice_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  initialPrice_gte?: Maybe<Scalars['Int']>;
};

export enum PricingOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  InitialPageAsc = 'initialPage_ASC',
  InitialPageDesc = 'initialPage_DESC',
  InitialPriceAsc = 'initialPrice_ASC',
  InitialPriceDesc = 'initialPrice_DESC'
}

export type PricingUpdateInput = {
  name?: Maybe<Scalars['String']>;
  initialPage?: Maybe<Scalars['Int']>;
  initialPrice?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['Json']>;
  fullPriceTable?: Maybe<Scalars['Json']>;
};

export type PricingUpdateManyInlineInput = {
  /** Create and connect multiple Pricing documents */
  create?: Maybe<Array<PricingCreateInput>>;
  /** Connect multiple existing Pricing documents */
  connect?: Maybe<Array<PricingConnectInput>>;
  /** Override currently-connected documents with multiple existing Pricing documents */
  set?: Maybe<Array<PricingWhereUniqueInput>>;
  /** Update multiple Pricing documents */
  update?: Maybe<Array<PricingUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Pricing documents */
  upsert?: Maybe<Array<PricingUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Pricing documents */
  disconnect?: Maybe<Array<PricingWhereUniqueInput>>;
  /** Delete multiple Pricing documents */
  delete?: Maybe<Array<PricingWhereUniqueInput>>;
};

export type PricingUpdateManyInput = {
  initialPage?: Maybe<Scalars['Int']>;
  initialPrice?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['Json']>;
  fullPriceTable?: Maybe<Scalars['Json']>;
};

export type PricingUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PricingWhereInput;
  /** Update many input */
  data: PricingUpdateManyInput;
};

export type PricingUpdateOneInlineInput = {
  /** Create and connect one Pricing document */
  create?: Maybe<PricingCreateInput>;
  /** Update single Pricing document */
  update?: Maybe<PricingUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Pricing document */
  upsert?: Maybe<PricingUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Pricing document */
  connect?: Maybe<PricingWhereUniqueInput>;
  /** Disconnect currently connected Pricing document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Pricing document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PricingUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PricingWhereUniqueInput;
  /** Document to update */
  data: PricingUpdateInput;
};

export type PricingUpsertInput = {
  /** Create document if it didn't exist */
  create: PricingCreateInput;
  /** Update document if it exists */
  update: PricingUpdateInput;
};

export type PricingUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PricingWhereUniqueInput;
  /** Upsert data */
  data: PricingUpsertInput;
};

/** Identifies documents */
export type PricingWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PricingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PricingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PricingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  initialPage?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  initialPage_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  initialPage_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  initialPage_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  initialPage_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  initialPage_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  initialPage_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  initialPage_gte?: Maybe<Scalars['Int']>;
  initialPrice?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  initialPrice_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  initialPrice_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  initialPrice_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  initialPrice_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  initialPrice_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  initialPrice_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  initialPrice_gte?: Maybe<Scalars['Int']>;
};

/** References Pricing record uniquely */
export type PricingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple articles */
  articles: Array<Article>;
  /** Retrieve a single article */
  article?: Maybe<Article>;
  /** Retrieve multiple articles using the Relay connection interface */
  articlesConnection: ArticleConnection;
  /** Retrieve document version */
  articleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple faqs */
  faqs: Array<Faq>;
  /** Retrieve a single faq */
  faq?: Maybe<Faq>;
  /** Retrieve multiple faqs using the Relay connection interface */
  faqsConnection: FaqConnection;
  /** Retrieve document version */
  faqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple faqCategories */
  faqCategories: Array<FaqCategory>;
  /** Retrieve a single faqCategory */
  faqCategory?: Maybe<FaqCategory>;
  /** Retrieve multiple faqCategories using the Relay connection interface */
  faqCategoriesConnection: FaqCategoryConnection;
  /** Retrieve document version */
  faqCategoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pickupFaqs */
  pickupFaqs: Array<PickupFaq>;
  /** Retrieve a single pickupFaq */
  pickupFaq?: Maybe<PickupFaq>;
  /** Retrieve multiple pickupFaqs using the Relay connection interface */
  pickupFaqsConnection: PickupFaqConnection;
  /** Retrieve document version */
  pickupFaqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pickupHowToCreateFaqs */
  pickupHowToCreateFaqs: Array<PickupHowToCreateFaq>;
  /** Retrieve a single pickupHowToCreateFaq */
  pickupHowToCreateFaq?: Maybe<PickupHowToCreateFaq>;
  /** Retrieve multiple pickupHowToCreateFaqs using the Relay connection interface */
  pickupHowToCreateFaqsConnection: PickupHowToCreateFaqConnection;
  /** Retrieve document version */
  pickupHowToCreateFaqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pickupArticles */
  pickupArticles: Array<PickupInfoArticle>;
  /** Retrieve a single pickupInfoArticle */
  pickupInfoArticle?: Maybe<PickupInfoArticle>;
  /** Retrieve multiple pickupArticles using the Relay connection interface */
  pickupArticlesConnection: PickupInfoArticleConnection;
  /** Retrieve document version */
  pickupInfoArticleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pickupProductFaqs */
  pickupProductFaqs: Array<PickupProductFaq>;
  /** Retrieve a single pickupProductFaq */
  pickupProductFaq?: Maybe<PickupProductFaq>;
  /** Retrieve multiple pickupProductFaqs using the Relay connection interface */
  pickupProductFaqsConnection: PickupProductFaqConnection;
  /** Retrieve document version */
  pickupProductFaqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pricings */
  pricings: Array<Pricing>;
  /** Retrieve a single pricing */
  pricing?: Maybe<Pricing>;
  /** Retrieve multiple pricings using the Relay connection interface */
  pricingsConnection: PricingConnection;
  /** Retrieve document version */
  pricingVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple staticPages */
  staticPages: Array<StaticPage>;
  /** Retrieve a single staticPage */
  staticPage?: Maybe<StaticPage>;
  /** Retrieve multiple staticPages using the Relay connection interface */
  staticPagesConnection: StaticPageConnection;
  /** Retrieve document version */
  staticPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple topInfoArticles */
  topInfoArticles: Array<TopInfoArticle>;
  /** Retrieve a single topInfoArticle */
  topInfoArticle?: Maybe<TopInfoArticle>;
  /** Retrieve multiple topInfoArticles using the Relay connection interface */
  topInfoArticlesConnection: TopInfoArticleConnection;
  /** Retrieve document version */
  topInfoArticleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryArticlesArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryArticleArgs = {
  where: ArticleWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryArticlesConnectionArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryArticleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoriesConnectionArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFaqsArgs = {
  where?: Maybe<FaqWhereInput>;
  orderBy?: Maybe<FaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqArgs = {
  where: FaqWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqsConnectionArgs = {
  where?: Maybe<FaqWhereInput>;
  orderBy?: Maybe<FaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFaqCategoriesArgs = {
  where?: Maybe<FaqCategoryWhereInput>;
  orderBy?: Maybe<FaqCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqCategoryArgs = {
  where: FaqCategoryWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqCategoriesConnectionArgs = {
  where?: Maybe<FaqCategoryWhereInput>;
  orderBy?: Maybe<FaqCategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryFaqCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPickupFaqsArgs = {
  where?: Maybe<PickupFaqWhereInput>;
  orderBy?: Maybe<PickupFaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupFaqArgs = {
  where: PickupFaqWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupFaqsConnectionArgs = {
  where?: Maybe<PickupFaqWhereInput>;
  orderBy?: Maybe<PickupFaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPickupHowToCreateFaqsArgs = {
  where?: Maybe<PickupHowToCreateFaqWhereInput>;
  orderBy?: Maybe<PickupHowToCreateFaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupHowToCreateFaqArgs = {
  where: PickupHowToCreateFaqWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupHowToCreateFaqsConnectionArgs = {
  where?: Maybe<PickupHowToCreateFaqWhereInput>;
  orderBy?: Maybe<PickupHowToCreateFaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupHowToCreateFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPickupArticlesArgs = {
  where?: Maybe<PickupInfoArticleWhereInput>;
  orderBy?: Maybe<PickupInfoArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupInfoArticleArgs = {
  where: PickupInfoArticleWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupArticlesConnectionArgs = {
  where?: Maybe<PickupInfoArticleWhereInput>;
  orderBy?: Maybe<PickupInfoArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupInfoArticleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPickupProductFaqsArgs = {
  where?: Maybe<PickupProductFaqWhereInput>;
  orderBy?: Maybe<PickupProductFaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupProductFaqArgs = {
  where: PickupProductFaqWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupProductFaqsConnectionArgs = {
  where?: Maybe<PickupProductFaqWhereInput>;
  orderBy?: Maybe<PickupProductFaqOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPickupProductFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPricingsArgs = {
  where?: Maybe<PricingWhereInput>;
  orderBy?: Maybe<PricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPricingArgs = {
  where: PricingWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPricingsConnectionArgs = {
  where?: Maybe<PricingWhereInput>;
  orderBy?: Maybe<PricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryPricingVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStaticPagesArgs = {
  where?: Maybe<StaticPageWhereInput>;
  orderBy?: Maybe<StaticPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryStaticPageArgs = {
  where: StaticPageWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryStaticPagesConnectionArgs = {
  where?: Maybe<StaticPageWhereInput>;
  orderBy?: Maybe<StaticPageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryStaticPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTopInfoArticlesArgs = {
  where?: Maybe<TopInfoArticleWhereInput>;
  orderBy?: Maybe<TopInfoArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTopInfoArticleArgs = {
  where: TopInfoArticleWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTopInfoArticlesConnectionArgs = {
  where?: Maybe<TopInfoArticleWhereInput>;
  orderBy?: Maybe<TopInfoArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryTopInfoArticleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};


/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export type StaticPage = Node & {
  __typename?: 'StaticPage';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<StaticPage>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  title: Scalars['String'];
  content: RichText;
  staticPageType: StaticPageType;
  /** List of StaticPage versions */
  history: Array<Version>;
};


export type StaticPageDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type StaticPageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type StaticPageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type StaticPagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type StaticPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type StaticPageConnectInput = {
  /** Document to connect */
  where: StaticPageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type StaticPageConnection = {
  __typename?: 'StaticPageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<StaticPageEdge>;
  aggregate: Aggregate;
};

export type StaticPageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content: Scalars['RichTextAST'];
  staticPageType: StaticPageType;
};

export type StaticPageCreateManyInlineInput = {
  /** Create and connect multiple existing StaticPage documents */
  create?: Maybe<Array<StaticPageCreateInput>>;
  /** Connect multiple existing StaticPage documents */
  connect?: Maybe<Array<StaticPageWhereUniqueInput>>;
};

export type StaticPageCreateOneInlineInput = {
  /** Create and connect one StaticPage document */
  create?: Maybe<StaticPageCreateInput>;
  /** Connect one existing StaticPage document */
  connect?: Maybe<StaticPageWhereUniqueInput>;
};

/** An edge in a connection. */
export type StaticPageEdge = {
  __typename?: 'StaticPageEdge';
  /** The item at the end of the edge. */
  node: StaticPage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type StaticPageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StaticPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StaticPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StaticPageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  staticPageType?: Maybe<StaticPageType>;
  /** All values that are not equal to given value. */
  staticPageType_not?: Maybe<StaticPageType>;
  /** All values that are contained in given list. */
  staticPageType_in?: Maybe<Array<StaticPageType>>;
  /** All values that are not contained in given list. */
  staticPageType_not_in?: Maybe<Array<StaticPageType>>;
};

export enum StaticPageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  StaticPageTypeAsc = 'staticPageType_ASC',
  StaticPageTypeDesc = 'staticPageType_DESC'
}

export enum StaticPageType {
  Company = 'Company',
  PrivacyPolicy = 'PrivacyPolicy',
  Terms = 'Terms',
  Tokushoho = 'Tokushoho'
}

export type StaticPageUpdateInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
  staticPageType?: Maybe<StaticPageType>;
};

export type StaticPageUpdateManyInlineInput = {
  /** Create and connect multiple StaticPage documents */
  create?: Maybe<Array<StaticPageCreateInput>>;
  /** Connect multiple existing StaticPage documents */
  connect?: Maybe<Array<StaticPageConnectInput>>;
  /** Override currently-connected documents with multiple existing StaticPage documents */
  set?: Maybe<Array<StaticPageWhereUniqueInput>>;
  /** Update multiple StaticPage documents */
  update?: Maybe<Array<StaticPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StaticPage documents */
  upsert?: Maybe<Array<StaticPageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple StaticPage documents */
  disconnect?: Maybe<Array<StaticPageWhereUniqueInput>>;
  /** Delete multiple StaticPage documents */
  delete?: Maybe<Array<StaticPageWhereUniqueInput>>;
};

export type StaticPageUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['RichTextAST']>;
};

export type StaticPageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: StaticPageWhereInput;
  /** Update many input */
  data: StaticPageUpdateManyInput;
};

export type StaticPageUpdateOneInlineInput = {
  /** Create and connect one StaticPage document */
  create?: Maybe<StaticPageCreateInput>;
  /** Update single StaticPage document */
  update?: Maybe<StaticPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StaticPage document */
  upsert?: Maybe<StaticPageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing StaticPage document */
  connect?: Maybe<StaticPageWhereUniqueInput>;
  /** Disconnect currently connected StaticPage document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected StaticPage document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type StaticPageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: StaticPageWhereUniqueInput;
  /** Document to update */
  data: StaticPageUpdateInput;
};

export type StaticPageUpsertInput = {
  /** Create document if it didn't exist */
  create: StaticPageCreateInput;
  /** Update document if it exists */
  update: StaticPageUpdateInput;
};

export type StaticPageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: StaticPageWhereUniqueInput;
  /** Upsert data */
  data: StaticPageUpsertInput;
};

/** Identifies documents */
export type StaticPageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<StaticPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<StaticPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<StaticPageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  staticPageType?: Maybe<StaticPageType>;
  /** All values that are not equal to given value. */
  staticPageType_not?: Maybe<StaticPageType>;
  /** All values that are contained in given list. */
  staticPageType_in?: Maybe<Array<StaticPageType>>;
  /** All values that are not contained in given list. */
  staticPageType_not_in?: Maybe<Array<StaticPageType>>;
};

/** References StaticPage record uniquely */
export type StaticPageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  staticPageType?: Maybe<StaticPageType>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type TopInfoArticle = Node & {
  __typename?: 'TopInfoArticle';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<TopInfoArticle>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  name: Scalars['String'];
  article?: Maybe<Article>;
  /** List of TopInfoArticle versions */
  history: Array<Version>;
};


export type TopInfoArticleDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type TopInfoArticleCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TopInfoArticleUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TopInfoArticlePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TopInfoArticleArticleArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type TopInfoArticleHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type TopInfoArticleConnectInput = {
  /** Document to connect */
  where: TopInfoArticleWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type TopInfoArticleConnection = {
  __typename?: 'TopInfoArticleConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TopInfoArticleEdge>;
  aggregate: Aggregate;
};

export type TopInfoArticleCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  article?: Maybe<ArticleCreateOneInlineInput>;
};

export type TopInfoArticleCreateManyInlineInput = {
  /** Create and connect multiple existing TopInfoArticle documents */
  create?: Maybe<Array<TopInfoArticleCreateInput>>;
  /** Connect multiple existing TopInfoArticle documents */
  connect?: Maybe<Array<TopInfoArticleWhereUniqueInput>>;
};

export type TopInfoArticleCreateOneInlineInput = {
  /** Create and connect one TopInfoArticle document */
  create?: Maybe<TopInfoArticleCreateInput>;
  /** Connect one existing TopInfoArticle document */
  connect?: Maybe<TopInfoArticleWhereUniqueInput>;
};

/** An edge in a connection. */
export type TopInfoArticleEdge = {
  __typename?: 'TopInfoArticleEdge';
  /** The item at the end of the edge. */
  node: TopInfoArticle;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TopInfoArticleManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TopInfoArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TopInfoArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TopInfoArticleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  article?: Maybe<ArticleWhereInput>;
};

export enum TopInfoArticleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type TopInfoArticleUpdateInput = {
  name?: Maybe<Scalars['String']>;
  article?: Maybe<ArticleUpdateOneInlineInput>;
};

export type TopInfoArticleUpdateManyInlineInput = {
  /** Create and connect multiple TopInfoArticle documents */
  create?: Maybe<Array<TopInfoArticleCreateInput>>;
  /** Connect multiple existing TopInfoArticle documents */
  connect?: Maybe<Array<TopInfoArticleConnectInput>>;
  /** Override currently-connected documents with multiple existing TopInfoArticle documents */
  set?: Maybe<Array<TopInfoArticleWhereUniqueInput>>;
  /** Update multiple TopInfoArticle documents */
  update?: Maybe<Array<TopInfoArticleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TopInfoArticle documents */
  upsert?: Maybe<Array<TopInfoArticleUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple TopInfoArticle documents */
  disconnect?: Maybe<Array<TopInfoArticleWhereUniqueInput>>;
  /** Delete multiple TopInfoArticle documents */
  delete?: Maybe<Array<TopInfoArticleWhereUniqueInput>>;
};

export type TopInfoArticleUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export type TopInfoArticleUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TopInfoArticleWhereInput;
  /** Update many input */
  data: TopInfoArticleUpdateManyInput;
};

export type TopInfoArticleUpdateOneInlineInput = {
  /** Create and connect one TopInfoArticle document */
  create?: Maybe<TopInfoArticleCreateInput>;
  /** Update single TopInfoArticle document */
  update?: Maybe<TopInfoArticleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TopInfoArticle document */
  upsert?: Maybe<TopInfoArticleUpsertWithNestedWhereUniqueInput>;
  /** Connect existing TopInfoArticle document */
  connect?: Maybe<TopInfoArticleWhereUniqueInput>;
  /** Disconnect currently connected TopInfoArticle document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected TopInfoArticle document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type TopInfoArticleUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TopInfoArticleWhereUniqueInput;
  /** Document to update */
  data: TopInfoArticleUpdateInput;
};

export type TopInfoArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: TopInfoArticleCreateInput;
  /** Update document if it exists */
  update: TopInfoArticleUpdateInput;
};

export type TopInfoArticleUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TopInfoArticleWhereUniqueInput;
  /** Upsert data */
  data: TopInfoArticleUpsertInput;
};

/** Identifies documents */
export type TopInfoArticleWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TopInfoArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TopInfoArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TopInfoArticleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<UserWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedBy?: Maybe<UserWhereInput>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  article?: Maybe<ArticleWhereInput>;
};

/** References TopInfoArticle record uniquely */
export type TopInfoArticleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<UserEdge>;
  aggregate: Aggregate;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC'
}

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type StaticPageFragment = (
  { __typename?: 'StaticPage' }
  & Pick<StaticPage, 'id' | 'title' | 'staticPageType'>
  & { content: (
    { __typename?: 'RichText' }
    & Pick<RichText, 'html'>
  ) }
);

export type GetStaticPageQueryVariables = Exact<{
  staticPageType: StaticPageType;
}>;


export type GetStaticPageQuery = (
  { __typename?: 'Query' }
  & { staticPage?: Maybe<(
    { __typename?: 'StaticPage' }
    & StaticPageFragment
  )> }
);

export const StaticPageFragmentDoc = gql`
    fragment StaticPage on StaticPage {
  id
  title
  content {
    html
  }
  staticPageType
}
    `;
export const GetStaticPageDocument = gql`
    query getStaticPage($staticPageType: StaticPageType!) {
  staticPage(where: {staticPageType: $staticPageType}) {
    ...StaticPage
  }
}
    ${StaticPageFragmentDoc}`;

/**
 * __useGetStaticPageQuery__
 *
 * To run a query within a React component, call `useGetStaticPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStaticPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStaticPageQuery({
 *   variables: {
 *      staticPageType: // value for 'staticPageType'
 *   },
 * });
 */
export function useGetStaticPageQuery(baseOptions: Apollo.QueryHookOptions<GetStaticPageQuery, GetStaticPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStaticPageQuery, GetStaticPageQueryVariables>(GetStaticPageDocument, options);
      }
export function useGetStaticPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStaticPageQuery, GetStaticPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStaticPageQuery, GetStaticPageQueryVariables>(GetStaticPageDocument, options);
        }
export type GetStaticPageQueryHookResult = ReturnType<typeof useGetStaticPageQuery>;
export type GetStaticPageLazyQueryHookResult = ReturnType<typeof useGetStaticPageLazyQuery>;
export type GetStaticPageQueryResult = Apollo.QueryResult<GetStaticPageQuery, GetStaticPageQueryVariables>;