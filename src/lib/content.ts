import { getCollection } from "astro:content";

/**
 * A normalized post object.
 */
export interface Post {
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: string;
    heroImage: string;
    updatedDate: string;
    tags: string[];
    html: string;
  };
}

// LOCAL FILESYSTEM POSTS

/**
 * Get all posts from the local filesystem.
 */
export async function getLocalPosts(): Promise<Post[]> {
  const rawLocalPosts = await getCollection("blog");
  const localPosts = rawLocalPosts.map((post) => {
    const { slug, data, render } = post;

    return {
      slug,
      data,
      render,
    } as unknown as Post;
  });

  return localPosts;
}

// DEV.TO POSTS

/**
 * /api/articles?username=maxphillipsdev
 */
export interface DevToUserEndpointResult {
  type_of: string;
  slug: string;
}

/**
 * /api/articles/{path}
 */
export interface DevToApiArticleEndpoint {
  id: number;
  type_of: string;
  title: string;
  description: string;
  cover_image: string;
  slug: string;
  published_at: string;
  edited_at: string;
  tags: string[];
  body_html: string;
}

/**
 * Get a list of my article paths from Dev.to.
 */
async function fetchDevToSlugs(): Promise<string[]> {
  const response = await fetch(
    "https://dev.to/api/articles?username=maxphillipsdev"
  );
  const data = (await response.json()) as DevToUserEndpointResult[];

  const filteredData = data.filter((post) => {
    return post["type_of"] === "article";
  });

  const paths = filteredData.map((post) => {
    return post["slug"];
  });
  return paths;
}

/**
 * Get a single article from Dev.to.
 */
export async function fetchArticle(slug: string): Promise<Post> {
  const response = await fetch(
    `https://dev.to/api/articles/maxphillipsdev/${slug}`
  );

  const data = (await response.json()) as DevToApiArticleEndpoint;

  return {
    data: {
      title: data.title,
      description: data.description,
      pubDate: data.published_at,
      heroImage: data.cover_image,
      updatedDate: data.edited_at,
      tags: data.tags,
      html: data.body_html,
    },
    slug: data.slug,
  };
}

export async function getDevToPosts(): Promise<Post[]> {
  const slugs = await fetchDevToSlugs();
  const posts = await Promise.all(slugs.map(fetchArticle));

  return posts;
}
