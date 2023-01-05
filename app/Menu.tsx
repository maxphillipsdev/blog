"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

type Item = {
  label: string;
  url: string;
};

interface MenuProps {
  items?: Array<Item>;
}

export const Menu: React.FC<MenuProps> = ({ items }) => {
  // Get pathname to determine the active link
  const pathname = usePathname();

  const [{ btnX, btnY }, setBtn] = useSpring(() => ({
    btnX: 0,
    btnY: 0,
    config: {
      mass: 3,
    },
  }));

  const bindButton = useDrag(({ down, movement: [mx, my] }) => {
    setBtn.start({
      btnX: down ? mx : 0,
      btnY: down ? my : 0,
      immediate: down,
    });
  });

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 h-1/2 overflow-y-auto overflow-x-hidden bg-gray-1 p-4">
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
      <MenuButton
        id="menu-button"
        {...bindButton()}
        style={{ x: btnX, y: btnY }}
      />
    </>
  );
};

const MenuButton = (props?: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <animated.button
      className="fixed z-50 h-6 w-6 rounded-lg bg-transparent touch-none"
      {...props}
    >
      <Bars3Icon className="h-6 w-6 text-gray-12" />
    </animated.button>
  );
};

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
