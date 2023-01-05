import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Item = {
  label: string;
  url: string;
};

interface MenuProps {
  items?: Array<Item>;
}

const MenuTab = () => <Bars3Icon className="h-6 w-6 text-gray-12" />;

const MenuItem = ({ item }: { item: Item }) => (
  <Link href={item.url}>{item.label}</Link>
);

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-full overflow-y-auto overflow-x-hidden bg-gray-1 p-4">
      <nav>
        {items && items.map((item) => <MenuItem key={item.url} item={item} />)}
      </nav>
    </div>
  );
};

export default Menu;
