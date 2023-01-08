import ghostClient from "@lib/ghost";
import Link from "next/link";

interface NavigationProps {}

const NavItem = ({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) => (
  <Link href={href} passHref className="">
    {label}
  </Link>
);

export const Navigation: React.FC<NavigationProps> = async () => {
  const { navigation: navItems } = await ghostClient.settings.browse();
  return (
    <div className="flex items-center justify-between p-4">
      <span className="font-mono text-xl text-gray-12 underline decoration-crimson-9">
        ~/maxphillips.dev
      </span>
      <nav></nav>
    </div>
  );
};
