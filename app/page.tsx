import Link from "next/link";
import ghostClient from "@lib/ghost";

const HomePage = async () => {
  const posts = await ghostClient.posts.browse({ limit: 10 });
  const pages = await ghostClient.pages.browse({ limit: 10 });

  return (
    <div className="prose prose-gray">
      <h3>Posts:</h3>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`}>
            <li>{post.title || "somePost"}</li>
          </Link>
        ))}
      </ul>
      <h3>Pages:</h3>
      <ul>
        {pages.map((page) => (
          <Link key={page.id} href={`/${page.slug}`}>
            <li>{page.title || "somePage"}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
