import Link from "next/link";

interface NavItemProps {
  label: any;
  url: any;
}

export const NavItem: React.FC<NavItemProps> = ({ label, url }) => {
  return (
    <Link href={url} key={url}>
      <li>{label}</li>
    </Link>
  );
};
