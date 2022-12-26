import { Inter } from "@next/font/google";
import { NextPage } from "next";
import Link from "next/link";
import ghostClient from "../lib/ghost";

const inter = Inter({ subsets: ["latin"] });

const HomePage = async () => {
  const posts = await ghostClient.posts.browse({ limit: 10 });

  return (
    <>
      <main>
        <ul>
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <li>{post.title || "somePost"}</li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
