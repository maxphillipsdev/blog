import { PostOrPage } from "@tryghost/content-api";
import Image from "next/image";
import Link from "./Link";

interface Props {
  post: PostOrPage;
}

const PostCard = ({ post }: Props) => {
  return (
    <Link
      href={`posts/${post.slug}`}
      className="bg-gray-1 max-w-sm aspect-video flex flex-col border-2
              border-gray-12 rounded-xl overflow-hidden"
    >
      <div className="relative h-full">
        <Image src={post.feature_image || ""} alt={post.title || ""} fill />
      </div>
      <div className="px-6 py-3">
        <h1 className="text-xl font-bold text-gray-12 capitalize">
          {post.title}
        </h1>
        <span className="flex justify-between">
          <p className="text-gray-11">Read more →</p>
          {post.reading_time && (
            <p className="text-gray-11">{post.reading_time} min read</p>
          )}
        </span>
      </div>
    </Link>
  );
};

export { PostCard };
