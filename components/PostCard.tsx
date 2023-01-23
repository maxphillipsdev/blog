import { PostOrPage } from "@tryghost/content-api";
import { Card } from "./Card";

interface Props {
  post: PostOrPage;
}

const PostCard = ({ post }: Props) => {
  const { slug, title, feature_image, custom_excerpt, reading_time } = post;
  // unicode arrow_right:
  const DEFAULT_SUBTITLE = "Read more \u2192";

  if (!slug || !title || !feature_image || !reading_time) {
    return null;
  }

  return (
    <Card
      slug={slug}
      title={title}
      image={feature_image}
      subtitle={custom_excerpt || DEFAULT_SUBTITLE}
      detail={reading_time.toString()}
    />
  );
};

export { PostCard };
