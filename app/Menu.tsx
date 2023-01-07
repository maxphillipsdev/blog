"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonHTMLAttributes, useState } from "react";

type Item = {
  label: string;
  url: string;
};

interface MenuProps {
  items?: Array<Item>;
}

const getPath = (
  tabXPosition: number,
  tabYPosition: number,
  sidebarWidth: number,
  sidebarHeight: number
) => {
  const anchorDistance = 200 + tabXPosition * 0.5;
  const curviness = anchorDistance - 60;
  return `M0, 
      ${sidebarHeight} 
      H0V0h${sidebarWidth}v 
      ${tabYPosition - anchorDistance} 
      c0, 
      ${curviness} 
      , 
     ${tabXPosition} 
      , 
      ${curviness} 
      , 
     ${tabXPosition} 
      , 
      ${anchorDistance} 
      S${sidebarWidth}, 
      ${tabYPosition} 
      ,${sidebarWidth}, 
      ${tabYPosition + anchorDistance * 2}
      V
      ${sidebarHeight}
      z`;
};

export const Menu: React.FC<MenuProps> = ({ items }) => {
  // Get pathname to determine the active link
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  // // Handle menu toggle
  // const handleButtonClick = () => {
  //   setOpen(!open);
  // };

  // // Handle button movement
  // const [{ btnX, btnY }, setBtn] = useSpring(() => ({
  //   btnX: 10,
  //   btnY: innerHeight * 0.1 - 15,
  //   config: {
  //     mass: 3,
  //   },
  // }));

  // Handle clippath drawing
  const SIDEBAR_WIDTH = innerWidth * 0.3;
  const INACTIVE_RESTING_PATH = getPath(50, innerHeight * 0.1, 0, innerHeight);
  const ACTIVE_RESTING_PATH = getPath(
    0,
    innerHeight * 0.1,
    SIDEBAR_WIDTH,
    innerHeight
  );
  const [{ d }, setDValue] = useSpring(() => ({
    d: open ? ACTIVE_RESTING_PATH : INACTIVE_RESTING_PATH,
    config: {
      mass: 3,
    },
  }));

  const bind = useDrag(({ down: dragging, movement: [dx, dy], xy: [x, y] }) => {
    if (dragging) {
      setDValue({
        d: getPath(dx + 60, dy + 60, open ? SIDEBAR_WIDTH : 0, innerHeight),
      });
    } else {
      setDValue({
        d: open ? ACTIVE_RESTING_PATH : INACTIVE_RESTING_PATH,
      });
    }
  });

  return (
    <>
      <svg
        className="w-10 h-full fixed"
        version="1.1"
        id="blob"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id={`menu-clip-path`}>
          <animated.path id={`menu-blob-path`} d={d} />
        </clipPath>
      </svg>

      <div
        style={{
          clipPath: `url(#menu-clip-path)`,
          WebkitClipPath: `url(#menu-clip-path)`,
        }}
        {...bind()}
        className="fixed select-none touch-none top-0 left-0 right-0 z-40 h-full overflow-y-auto overflow-x-hidden bg-gray-3 p-4"
      >
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
      {/* <MenuButton */}
      {/*   id="menu-button" */}
      {/*   onClick={handleButtonClick} */}
      {/*   style={{ x: btnX, y: btnY }} */}
      {/* /> */}
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
