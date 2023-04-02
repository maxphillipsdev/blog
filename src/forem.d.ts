/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Flare tag of the article */
export interface ArticleFlareTag {
  name?: string;
  /** Background color (hexadecimal) */
  bg_color_hex?: string | null;
  /** Text color (hexadecimal) */
  text_color_hex?: string | null;
}

/** Representation of an article or post returned in a list */
export interface ArticleIndex {
  type_of: string;
  /** @format int32 */
  id: number;
  title: string;
  description: string;
  /** @format url */
  cover_image: string | null;
  readable_publish_date: string;
  /** @format url */
  social_image: string;
  tag_list: string[];
  tags: string;
  slug: string;
  /** @format path */
  path: string;
  /** @format url */
  url: string;
  /** @format url */
  canonical_url: string;
  /** @format int32 */
  positive_reactions_count: number;
  /** @format int32 */
  public_reactions_count: number;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  edited_at: string | null;
  /** @format date-time */
  crossposted_at: string | null;
  /** @format date-time */
  published_at: string;
  /** @format date-time */
  last_comment_at: string;
  /**
   * Crossposting or published date time
   * @format date-time
   */
  published_timestamp: string;
  /**
   * Reading time, in minutes
   * @format int32
   */
  reading_time_minutes: number;
  /** The resource creator */
  user: SharedUser;
  /** Flare tag of the article */
  flare_tag?: ArticleFlareTag;
  /** The organization the resource belongs to */
  organization?: SharedOrganization;
}

/** Representation of an Article with video */
export interface VideoArticle {
  type_of?: string;
  /** @format int64 */
  id?: number;
  path?: string;
  cloudinary_video_url?: string;
  title?: string;
  /** @format int64 */
  user_id?: number;
  video_duration_in_minutes?: string;
  video_source_url?: string;
  /** Author of the article */
  user?: {
    name?: string;
  };
}

/** Representation of an Article to be created/updated */
export interface Article {
  article?: {
    title?: string;
    body_markdown?: string;
    /** @default false */
    published?: boolean;
    series?: string | null;
    main_image?: string | null;
    canonical_url?: string | null;
    description?: string;
    tags?: string;
    organization_id?: number | null;
  };
}

/** Representation of an Organization */
export interface Organization {
  type_of?: string;
  username?: string;
  name?: string;
  summary?: string;
  twitter_username?: string;
  github_username?: string;
  url?: string;
  location?: string;
  joined_at?: string;
  tech_stack?: string;
  tag_line?: string | null;
  story?: string | null;
}

/** Representation of a followed tag */
export interface FollowedTag {
  /**
   * Tag id
   * @format int64
   */
  id: number;
  name: string;
  /** @format float */
  points: number;
}

/** Representation of a tag */
export interface Tag {
  /**
   * Tag id
   * @format int64
   */
  id?: number;
  name?: string;
  bg_color_hex?: string | null;
  text_color_hex?: string | null;
}

/** Representation of a page object */
export interface Page {
  /** Title of the page */
  title: string;
  /** Used to link to this page in URLs, must be unique and URL-safe */
  slug: string;
  /** For internal use, helps similar pages from one another */
  description: string;
  /** The text (in markdown) of the ad (required) */
  body_markdown?: string | null;
  /** For JSON pages, the JSON body */
  body_json?: string | null;
  /** If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution */
  is_top_level_path?: boolean;
  social_image?: object | null;
  /**
   * Controls what kind of layout the page is rendered in
   * @default "contained"
   */
  template: "contained" | "full_within_layout" | "nav_bar_included" | "json";
}

/** Representation of a podcast episode returned in a list */
export interface PodcastEpisodeIndex {
  type_of: string;
  /** @format int32 */
  id: number;
  class_name: string;
  /** @format path */
  path: string;
  title: string;
  /**
   * Podcast episode image url or podcast image url
   * @format url
   */
  image_url: string;
  /** The podcast that the resource belongs to */
  podcast: SharedPodcast;
}

/** A profile image object */
export interface ProfileImage {
  /** Return profile_image */
  type_of?: string;
  /** Determines the type of the profile image owner (user or organization) */
  image_of?: string;
  /** Profile image (640x640) */
  profile_image?: string;
  /** Profile image (90x90) */
  profile_image_90?: string;
}

/** The resource creator */
export interface SharedUser {
  name?: string;
  username?: string;
  twitter_username?: string | null;
  github_username?: string | null;
  /** @format url */
  website_url?: string | null;
  /** Profile image (640x640) */
  profile_image?: string;
  /** Profile image (90x90) */
  profile_image_90?: string;
}

/** The organization the resource belongs to */
export interface SharedOrganization {
  name?: string;
  username?: string;
  slug?: string;
  /**
   * Profile image (640x640)
   * @format url
   */
  profile_image?: string;
  /**
   * Profile image (90x90)
   * @format url
   */
  profile_image_90?: string;
}

/** The representation of a user */
export interface User {
  type_of?: string;
  /** @format int64 */
  id?: number;
  username?: string;
  name?: string;
  summary?: string | null;
  twitter_username?: string;
  github_username?: string;
  website_url?: string | null;
  location?: string | null;
  joined_at?: string;
  profile_image?: string;
}

/** The podcast that the resource belongs to */
export interface SharedPodcast {
  title?: string;
  slug?: string;
  /**
   * Podcast image url
   * @format url
   */
  image_url?: string;
}

/** A Comment on an Article or Podcast Episode */
export interface Comment {
  type_of?: string;
  id_code?: string;
  /** @format date-time */
  created_at?: string;
  /**
   * Podcast image url
   * @format url
   */
  image_url?: string;
}

/** User invite parameters */
export interface UserInviteParam {
  email?: string;
  name?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://dev.to/api";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === "number" ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Forem API V1
 * @version 1.0.0
 * @baseUrl https://dev.to/api
 *
 * Access Forem articles, users and other resources via API.
 *         For a real-world example of Forem in action, check out [DEV](https://www.dev.to).
 *         All endpoints can be accessed with the 'api-key' header and a accept header, but
 *         some of them are accessible publicly without authentication.
 *
 *         Dates and date times, unless otherwise specified, must be in
 *         the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description This endpoint allows the client to create a new article. "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * @tags articles
     * @name CreateArticle
     * @summary Publish article
     * @request POST:/api/articles
     * @secure
     */
    createArticle: (data: Article, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/articles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of articles. "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code. By default it will return featured, published articles ordered by descending popularity. It supports pagination, each page will contain `30` articles by default.
     *
     * @tags articles
     * @name GetArticles
     * @summary Published articles
     * @request GET:/api/articles
     */
    getArticles: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
        /**
         * Using this parameter will retrieve articles that contain the requested tag. Articles
         * will be ordered by descending popularity.This parameter can be used in conjuction with `top`.
         * @example "discuss"
         */
        tag?: string;
        /**
         * Using this parameter will retrieve articles with any of the comma-separated tags.
         * Articles will be ordered by descending popularity.
         * @example "javascript, css"
         */
        tags?: string;
        /**
         * Using this parameter will retrieve articles that do _not_ contain _any_
         * of comma-separated tags. Articles will be ordered by descending popularity.
         * @example "node, java"
         */
        tags_exclude?: string;
        /**
         * Using this parameter will retrieve articles belonging
         *             to a User or Organization ordered by descending publication date.
         *             If `state=all` the number of items returned will be `1000` instead of the default `30`.
         *             This parameter can be used in conjuction with `state`.
         * @example "ben"
         */
        username?: string;
        /**
         * Using this parameter will allow the client to check which articles are fresh or rising.
         *             If `state=fresh` the server will return fresh articles.
         *             If `state=rising` the server will return rising articles.
         *             This param can be used in conjuction with `username`, only if set to `all`.
         * @example "fresh"
         */
        state?: "fresh" | "rising" | "all";
        /**
         * Using this parameter will allow the client to return the most popular articles
         * in the last `N` days.
         * `top` indicates the number of days since publication of the articles returned.
         * This param can be used in conjuction with `tag`.
         * @format int32
         * @min 1
         * @example 2
         */
        top?: number;
        /**
         * Adding this will allow the client to return the list of articles
         * belonging to the requested collection, ordered by ascending publication date.
         * @format int32
         * @example 99
         */
        collection_id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleIndex[], any>({
        path: `/api/articles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of articles. ordered by descending publish date. It supports pagination, each page will contain 30 articles by default.
     *
     * @tags articles
     * @name GetLatestArticles
     * @summary Published articles sorted by published date
     * @request GET:/api/articles/latest
     */
    getLatestArticles: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleIndex[], any>({
        path: `/api/articles/latest`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a single published article given its `id`.
     *
     * @tags articles
     * @name GetArticleById
     * @summary Published article by id
     * @request GET:/api/articles/{id}
     */
    getArticleById: (id: number, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/articles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to update an existing article. "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * @tags articles
     * @name UpdateArticle
     * @summary Update an article by id
     * @request PUT:/api/articles/{id}
     * @secure
     */
    updateArticle: (id: number, data: Article, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/articles/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a single published article given its `path`.
     *
     * @tags articles
     * @name GetArticleByPath
     * @summary Published article by path
     * @request GET:/api/articles/{username}/{slug}
     */
    getArticleByPath: (
      username: string,
      slug: string,
      params: RequestParams = {}
    ) =>
      this.request<object, void>({
        path: `/api/articles/${username}/${slug}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user. "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code. Published articles will be in reverse chronological publication order. It will return published articles with pagination. By default a page will contain 30 articles.
     *
     * @tags articles, users
     * @name GetUserArticles
     * @summary User's articles
     * @request GET:/api/articles/me
     * @secure
     */
    getUserArticles: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleIndex[], void>({
        path: `/api/articles/me`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user. "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code. Published articles will be in reverse chronological publication order. It will return published articles with pagination. By default a page will contain 30 articles.
     *
     * @tags articles, users
     * @name GetUserPublishedArticles
     * @summary User's published articles
     * @request GET:/api/articles/me/published
     * @secure
     */
    getUserPublishedArticles: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleIndex[], void>({
        path: `/api/articles/me/published`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user. "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code. Unpublished articles will be in reverse chronological creation order. It will return unpublished articles with pagination. By default a page will contain 30 articles.
     *
     * @tags articles, users
     * @name GetUserUnpublishedArticles
     * @summary User's unpublished articles
     * @request GET:/api/articles/me/unpublished
     * @secure
     */
    getUserUnpublishedArticles: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleIndex[], void>({
        path: `/api/articles/me/unpublished`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user. "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code. It will return both published and unpublished articles with pagination. Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order. By default a page will contain 30 articles.
     *
     * @tags articles, users
     * @name GetUserAllArticles
     * @summary User's all articles
     * @request GET:/api/articles/me/all
     * @secure
     */
    getUserAllArticles: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleIndex[], void>({
        path: `/api/articles/me/all`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to unpublish an article. The user associated with the API key must have any 'admin' or 'moderator' role. The article will be unpublished and will no longer be visible to the public. It will remain in the database and will set back to draft status on the author's posts dashboard. Any notifications associated with the article will be deleted. Any comments on the article will remain.
     *
     * @tags articles
     * @name UnpublishArticle
     * @summary Unpublish an article
     * @request PUT:/api/articles/{id}/unpublish
     * @secure
     */
    unpublishArticle: (
      id: number,
      query?: {
        /**
         * Content for the note that's created along with unpublishing
         * @example "Admin requested unpublishing all articles via API"
         */
        note?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/articles/${id}/unpublish`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations. It will return the all top level comments with their nested comments as threads. See the format specification for further details.
     *
     * @tags comments
     * @name GetCommentsByArticleId
     * @summary Comments
     * @request GET:/api/comments
     */
    getCommentsByArticleId: (
      query?: {
        /**
         * Article identifier.
         * @example "321"
         */
        a_id?: string;
        /**
         * Podcast Episode identifier.
         * @example "321"
         */
        p_id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Comment[], void>({
        path: `/api/comments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a comment as well as his descendants comments. It will return the required comment (the root) with its nested descendants as a thread. See the format specification for further details.
     *
     * @tags comments
     * @name GetCommentById
     * @summary Comment by id
     * @request GET:/api/comments/{id}
     */
    getCommentById: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/comments/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of all display ads.
     *
     * @tags display ads
     * @name DisplayAdsList
     * @summary display ads
     * @request GET:/api/display_ads
     * @secure
     */
    displayAdsList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/display_ads`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to create a new display ad.
     *
     * @tags display ads
     * @name DisplayAdsCreate
     * @summary display ads
     * @request POST:/api/display_ads
     * @secure
     */
    displayAdsCreate: (
      data: {
        /** For internal use, helps distinguish ads from one another */
        name: string;
        /** The text (in markdown) of the ad (required) */
        body_markdown: string;
        /** Ad must be both published and approved to be in rotation */
        approved?: boolean;
        /** Ad must be both published and approved to be in rotation */
        published?: boolean;
        /** Identifies the organization to which the ad belongs */
        organization_id?: number;
        /**
         * Potentially limits visitors to whom the ad is visible
         * @default "all"
         */
        display_to?: "all" | "logged_in" | "logged_out";
        /**
         * Types of the billboards:
         * in_house (created by admins),
         * community (created by an entity, appears on entity's content),
         * external ( created by an entity, or a non-entity, can appear everywhere)
         * @default "in_house"
         */
        type_of?: "in_house" | "community" | "external";
        /** Identifies which area of site layout the ad can appear in */
        placement_area:
          | "sidebar_left"
          | "sidebar_left_2"
          | "sidebar_right"
          | "post_sidebar"
          | "post_comments";
        /** Tags on which this ad can be displayed (blank is all/any tags) */
        tag_list?: string;
        /** Identifies the user who created the ad. */
        creator_id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/display_ads`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a single display ad, via its id.
     *
     * @tags display ads
     * @name DisplayAdsDetail
     * @summary display ad
     * @request GET:/api/display_ads/{id}
     * @secure
     */
    displayAdsDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/display_ads/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to update the attributes of a single display ad, via its id.
     *
     * @tags display ads
     * @name DisplayAdsUpdate
     * @summary display ads
     * @request PUT:/api/display_ads/{id}
     * @secure
     */
    displayAdsUpdate: (
      id: number,
      data: {
        /** For internal use, helps distinguish ads from one another */
        name: string;
        /** The text (in markdown) of the ad (required) */
        body_markdown: string;
        /** Ad must be both published and approved to be in rotation */
        approved?: boolean;
        /** Ad must be both published and approved to be in rotation */
        published?: boolean;
        /** Identifies the organization to which the ad belongs, required for 'community' type ads */
        organization_id?: number;
        /**
         * Potentially limits visitors to whom the ad is visible
         * @default "all"
         */
        display_to?: "all" | "logged_in" | "logged_out";
        /** Identifies which area of site layout the ad can appear in */
        placement_area:
          | "sidebar_left"
          | "sidebar_left_2"
          | "sidebar_right"
          | "post_sidebar"
          | "post_comments";
        /** Tags on which this ad can be displayed (blank is all/any tags) */
        tag_list?: string;
        /** Identifies the user who created the ad. */
        creator_id?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/display_ads/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to remove a display ad from rotation by un-publishing it.
     *
     * @tags display ads
     * @name DisplayAdsUnpublishUpdate
     * @summary unpublish
     * @request PUT:/api/display_ads/{id}/unpublish
     * @secure
     */
    displayAdsUnpublishUpdate: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/display_ads/${id}/unpublish`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of the tags they follow.
     *
     * @tags followed_tags, tags
     * @name GetFollowedTags
     * @summary Followed Tags
     * @request GET:/api/follows/tags
     * @secure
     */
    getFollowedTags: (params: RequestParams = {}) =>
      this.request<FollowedTag[], void>({
        path: `/api/follows/tags`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of the followers they have. "Followers" are users that are following other users on the website. It supports pagination, each page will contain 80 followers by default.
     *
     * @tags followers
     * @name GetFollowers
     * @summary Followers
     * @request GET:/api/followers/users
     * @secure
     */
    getFollowers: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
        /**
         * Default is 'created_at'. Specifies the sort order for the created_at param of the follow
         *                                 relationship. To sort by newest followers first (descending order) specify
         *                                 ?sort=-created_at.
         * @example "created_at"
         */
        sort?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          /** user_follower by default */
          type_of?: string;
          /** @format int32 */
          id?: number;
          /**
           * The follower's user id
           * @format int32
           */
          user_id?: number;
          /** The follower's name */
          name?: string;
          /** A path to the follower's profile */
          path?: string;
          /** Profile image (640x640) */
          profile_image?: string;
        }[],
        void
      >({
        path: `/api/followers/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a single organization by their username
     *
     * @tags organizations
     * @name GetOrganization
     * @summary An organization
     * @request GET:/api/organizations/{username}
     */
    getOrganization: (username: string, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/organizations/${username}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of users belonging to the organization It supports pagination, each page will contain `30` users by default.
     *
     * @tags organizations, users
     * @name GetOrgUsers
     * @summary Organization's users
     * @request GET:/api/organizations/{username}/users
     */
    getOrgUsers: (
      username: string,
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<User[], void>({
        path: `/api/organizations/${username}/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of Articles belonging to the organization It supports pagination, each page will contain `30` users by default.
     *
     * @tags organizations, articles
     * @name GetOrgArticles
     * @summary Organization's Articles
     * @request GET:/api/organizations/{username}/articles
     */
    getOrgArticles: (
      username: string,
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleIndex[], void>({
        path: `/api/organizations/${username}/articles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve details for all Page objects.
     *
     * @tags pages
     * @name PagesList
     * @summary show details for all pages
     * @request GET:/api/pages
     */
    pagesList: (params: RequestParams = {}) =>
      this.request<Page[], any>({
        path: `/api/pages`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to create a new page.
     *
     * @tags pages
     * @name PagesCreate
     * @summary pages
     * @request POST:/api/pages
     * @secure
     */
    pagesCreate: (
      data: {
        /** Title of the page */
        title?: string;
        /** Used to link to this page in URLs, must be unique and URL-safe */
        slug?: string;
        /** For internal use, helps similar pages from one another */
        description?: string;
        /** The text (in markdown) of the ad (required) */
        body_markdown?: string;
        /** For JSON pages, the JSON body */
        body_json?: string;
        /** If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution */
        is_top_level_path?: boolean;
        /**
         * Controls what kind of layout the page is rendered in
         * @default "contained"
         */
        template?:
          | "contained"
          | "full_within_layout"
          | "nav_bar_included"
          | "json";
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/pages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve details for a single Page object, specified by ID.
     *
     * @tags pages
     * @name PagesDetail
     * @summary show details for a page
     * @request GET:/api/pages/{id}
     */
    pagesDetail: (id: number, params: RequestParams = {}) =>
      this.request<Page, any>({
        path: `/api/pages/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve details for a single Page object, specified by ID.
     *
     * @tags pages
     * @name PagesUpdate
     * @summary update details for a page
     * @request PUT:/api/pages/{id}
     * @secure
     */
    pagesUpdate: (id: number, data: Page, params: RequestParams = {}) =>
      this.request<Page, void>({
        path: `/api/pages/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to delete a single Page object, specified by ID.
     *
     * @tags pages
     * @name PagesDelete
     * @summary remove a page
     * @request DELETE:/api/pages/{id}
     * @secure
     */
    pagesDelete: (id: number, params: RequestParams = {}) =>
      this.request<Page, void>({
        path: `/api/pages/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of podcast episodes. "Podcast episodes" are episodes belonging to podcasts. It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date. It supports pagination, each page will contain 30 articles by default.
     *
     * @tags podcast_episodes
     * @name GetPodcastEpisodes
     * @summary Podcast Episodes
     * @request GET:/api/podcast_episodes
     */
    getPodcastEpisodes: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
        /**
         * Using this parameter will retrieve episodes belonging to a specific podcast.
         * @example "codenewbie"
         */
        username?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PodcastEpisodeIndex[], void>({
        path: `/api/podcast_episodes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a user or organization profile image information by its corresponding username.
     *
     * @tags profile images
     * @name GetProfileImage
     * @summary A Users or organizations profile image
     * @request GET:/api/profile_images/{username}
     * @secure
     */
    getProfileImage: (username: string, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/profile_images/${username}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples: * "Like"ing an Article will create a new "like" Reaction from the user for that Articles * "Like"ing that Article a second time will remove the "like" from the user
     *
     * @tags reactions
     * @name ReactionsToggleCreate
     * @summary toggle reaction
     * @request POST:/api/reactions/toggle
     * @secure
     */
    reactionsToggleCreate: (
      query: {
        category:
          | "like"
          | "unicorn"
          | "exploding_head"
          | "raised_hands"
          | "fire";
        /** @format int32 */
        reactable_id: number;
        reactable_type: "Comment" | "Article" | "User";
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/reactions/toggle`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples: * "Like"ing an Article will create a new "like" Reaction from the user for that Articles * "Like"ing that Article a second time will return the previous "like"
     *
     * @tags reactions
     * @name ReactionsCreate
     * @summary create reaction
     * @request POST:/api/reactions
     * @secure
     */
    reactionsCreate: (
      query: {
        category:
          | "like"
          | "unicorn"
          | "exploding_head"
          | "raised_hands"
          | "fire";
        /** @format int32 */
        reactable_id: number;
        reactable_type: "Comment" | "Article" | "User";
      },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/api/reactions`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist. It supports pagination, each page will contain `30` articles by default
     *
     * @tags readinglist
     * @name GetReadinglist
     * @summary Readinglist
     * @request GET:/api/readinglist
     * @secure
     */
    getReadinglist: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 30
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleIndex[], void>({
        path: `/api/readinglist`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of tags that can be used to tag articles. It will return tags ordered by popularity. It supports pagination, each page will contain 10 tags by default.
     *
     * @tags tags
     * @name GetTags
     * @summary Tags
     * @request GET:/api/tags
     */
    getTags: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 10
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Tag[], any>({
        path: `/api/tags`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve information about the authenticated user
     *
     * @tags users
     * @name GetUserMe
     * @summary The authenticated user
     * @request GET:/api/users/me
     * @secure
     */
    getUserMe: (params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a single user, either by id or by the user's username. For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser
     *
     * @tags users
     * @name GetUser
     * @summary A User
     * @request GET:/api/users/{id}
     * @secure
     */
    getUser: (id: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows the client to unpublish all of the articles and comments created by a user. The user associated with the API key must have any 'admin' or 'moderator' role. This specified user's articles and comments will be unpublished and will no longer be visible to the public. They will remain in the database and will set back to draft status on the specified user's  dashboard. Any notifications associated with the specified user's articles and comments will be deleted. Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT status code immediately, but the articles and comments will not be unpublished until the request is completed on the server.
     *
     * @tags users
     * @name UnpublishUser
     * @summary Unpublish a User's Articles and Comments
     * @request PUT:/api/users/{id}/unpublish
     * @secure
     */
    unpublishUser: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${id}/unpublish`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoint allows the client to suspend a user. The user associated with the API key must have any 'admin' or 'moderator' role. This specified user will be assigned the 'suspended' role. Suspending a user will stop the user from posting new posts and comments. It doesn't delete any of the user's content, just prevents them from creating new content while suspended. Users are not notified of their suspension in the UI, so if you want them to know about this, you must notify them.
     *
     * @tags users
     * @name SuspendUser
     * @summary Suspend a User
     * @request PUT:/api/users/{id}/suspend
     * @secure
     */
    suspendUser: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/users/${id}/suspend`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoint allows the client to trigger an invitation to the provided email address. It requires a token from a user with `super_admin` privileges.
     *
     * @tags users
     * @name PostAdminUsersCreate
     * @summary Invite a User
     * @request POST:/api/admin/users
     * @secure
     */
    postAdminUsersCreate: (data: UserInviteParam, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/admin/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint allows the client to retrieve a list of articles that are uploaded with a video. It will only return published video articles ordered by descending popularity. It supports pagination, each page will contain 24 articles by default.
     *
     * @tags videos, articles
     * @name Videos
     * @summary Articles with a video
     * @request GET:/api/videos
     */
    videos: (
      query?: {
        /**
         * Pagination page
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
         * @format int32
         * @min 1
         * @max 1000
         * @default 24
         */
        per_page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VideoArticle[], any>({
        path: `/api/videos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
