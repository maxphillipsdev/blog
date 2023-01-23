import { PostCard } from "@components/PostCard";
import ghostClient from "@lib/ghost";
import Image from "next/image";

const HomePage = async () => {
  const { name, bio, profile_image } = await ghostClient.authors.read({
    slug: "max",
  });

  const featuredPosts = await ghostClient.posts.browse({
    filter: ["featured:true"],
    limit: 3,
  });

  return (
    <>
      <section className="hero flex flex-col py-6 px-16 items-start">
        <div className="relative w-28 aspect-square h-28 my-6">
          {profile_image && (
            <Image
              className="rounded-full"
              src={profile_image}
              alt={"Profile image"}
              fill
            />
          )}
        </div>
        <div className="text-gray-12">
          <h1 className="text-2xl font-bold">{name}</h1>
          <sub className="">{bio}</sub>
        </div>
      </section>
      <section className="featured flex flex-col mb-3">
        <h3 className="text-2xl font-bold text-gray-12 mx-16 mb-6">
          Featured posts
        </h3>
        <div className="rail flex mx-16 flex-col space-y-6">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
