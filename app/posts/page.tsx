import Link from "next/link";
import ghostClient from "@lib/ghost";

const PostsPage = async () => {
  const posts = await ghostClient.posts.browse();

  return (
    <>
      <h3>Posts:</h3>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`}>
            <li>{post.title || "somePost"}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default PostsPage;
