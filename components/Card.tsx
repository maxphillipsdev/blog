import Image from "next/image";
import Link from "./Link";

interface Props {
  slug: string;
  title: string;
  image: string;
  subtitle: string;
  detail?: string;
}

const Card = ({ slug, title, image, subtitle, detail }: Props) => {
  return (
    <Link
      href={`posts/${slug}`}
      className="bg-gray-1 max-w-sm flex flex-col border-2
              border-gray-12 rounded-xl overflow-hidden"
    >
      <div className="relative h-full aspect-video">
        <Image src={image} alt={title} fill />
      </div>
      <div className="px-6 py-3">
        <h1 className="text-xl font-bold text-gray-12 capitalize">{title}</h1>
        <span className="flex justify-between">
          <p className="text-gray-11">{subtitle}</p>
          {detail && <p className="text-gray-11">{detail} min read</p>}
        </span>
      </div>
    </Link>
  );
};

export { Card };
