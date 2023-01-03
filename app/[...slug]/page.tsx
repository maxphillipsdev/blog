import ghostClient from "@lib/ghost";

const GenericPage = async ({ params }: any) => {
  const page = await ghostClient.pages.read({
    slug: params.slug,
  });
  return (
    <div
      className="prose prose-gray"
      dangerouslySetInnerHTML={{ __html: page.html || "" }}
    />
  );
};

export default GenericPage;
