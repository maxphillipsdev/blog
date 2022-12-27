import ghostClient from "@lib/ghost";

const PostPage = async ({ params }: any) => {
  const post = await ghostClient.posts.read({
    slug: params.slug,
  });
  return <main dangerouslySetInnerHTML={{ __html: post.html || "" }} />;
};

export default PostPage;
