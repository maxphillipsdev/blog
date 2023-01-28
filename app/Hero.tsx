import Image from "next/image";

interface Props {
  profile_image: string;
  name: string;
  bio: string;
}

export function Hero({ profile_image, name, bio }: Props) {
  return (
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
      <div className="prose prose-lg prose-gray">
        <h1 className="m-0">{name}</h1>
        <h4 className="my-3">{bio}</h4>
      </div>
    </section>
  );
}
