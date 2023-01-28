import Link from "@components/Link";
import { PostCard } from "@components/PostCard";
import ghostClient from "@lib/ghost";
import { Hero } from "./Hero";

const HomePage = async () => {
  const author = await ghostClient.authors.read({
    slug: "max",
  });

  const featuredPosts = await ghostClient.posts.browse({
    filter: ["featured:true"],
    limit: 3,
  });

  return (
    <>
      <Hero
        name={author.name || "Max Phillips"}
        bio={author.bio || ""}
        profile_image={author.profile_image || ""}
      />
      <section className="featured flex flex-col mb-3 mx-16 prose prose-gray">
        <h3 className="text-2xl font-bold text-gray-12 mb-6">Featured posts</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 not-prose">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Link
          href="/posts?featured=true"
          className="no-underline max-w-fit mt-3"
        >
          See more {"\u2192"}
        </Link>
      </section>
    </>
  );
};

export default HomePage;
