import ghostClient from "@lib/ghost";
import Image from "next/image";

const HomePage = async () => {
  const { name, bio, profile_image } = await ghostClient.authors.read({
    slug: "max",
  });

  return (
    <section className="hero flex flex-col justify-evenly items-center p-6 h-screen">
      <div>
        <h1 className="text-gray-12 font-bold text-4xl text-center first-letter:text-crimson-9 font-mono">
          {bio}
        </h1>
      </div>
      <div className="">
        {profile_image && (
          <Image
            className="rounded-xl grayscale"
            src={profile_image}
            alt={"Profile image"}
            width={300}
            height={300}
          />
        )}
      </div>
      {/* text */}
    </section>
  );
};

export default HomePage;
