"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  label: string;
  url: string;
};

interface MenuProps {
  items?: Array<Item>;
}

const MenuTab = () => <Bars3Icon className="h-6 w-6 text-gray-12" />;

const MenuItem = ({
  item,
  active = false,
}: {
  item: Item;
  active: boolean;
}) => (
  <Link
    href={item.url}
    className={`group text-6xl text-gray-11 ${
      active ? "font-semibold text-gray-12" : "font-light"
    }`}
  >
    {item.label}
    <span className="block h-1 max-w-0 bg-crimson-9 transition-all duration-500 group-hover:max-w-full" />
  </Link>
);

const Menu: React.FC<MenuProps> = ({ items }) => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-full overflow-y-auto overflow-x-hidden bg-gray-1 p-4">
      <nav className="flex h-full w-full flex-col items-center justify-center">
        {items &&
          items.map((item) => (
            <MenuItem
              key={item.url}
              active={pathname == item.url}
              item={item}
            />
          ))}
      </nav>
    </div>
  );
};

export default Menu;
