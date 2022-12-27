import { Inter } from "@next/font/google";
import { NextPage } from "next";
import Link from "next/link";
import ghostClient from "../lib/ghost";

const inter = Inter({ subsets: ["latin"] });

const HomePage = async () => {
  const posts = await ghostClient.posts.browse({ limit: 10 });
  const pages = await ghostClient.pages.browse({ limit: 10 });

  return (
    <>
      <main>
        <h3>Posts:</h3>
        <ul>
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <li>{post.title || "somePost"}</li>
            </Link>
          ))}
        </ul>
        <h3>Posts:</h3>
        <ul>
          {pages.map((page) => (
            <Link key={page.id} href={`/${page.slug}`}>
              <li>{page.title || "somePage"}</li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
