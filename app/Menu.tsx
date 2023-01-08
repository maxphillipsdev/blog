"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import Link from "@components/Link";
import { usePathname } from "next/navigation";
import { ButtonHTMLAttributes, useEffect, useState } from "react";

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
  const curviness = anchorDistance - 40;
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
  const [open, setOpen] = useState(false);

  // Handle clippath drawing
  const SIDEBAR_WIDTH = innerWidth;
  const INACTIVE_RESTING_PATH = getPath(50, innerHeight * 0.1, 0, innerHeight);
  const PROMPT_PATH = getPath(100, innerHeight * 0.1, 0, innerHeight);
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

  const bind = useDrag(({ down: dragging, movement: [dx], xy: [, y] }) => {
    if (dragging) {
      // Check if we have passed any bounds and
      // move to resting position
      if (!open && dx > innerWidth * 0.5) {
        // Bound to open menu
        setDValue({
          d: ACTIVE_RESTING_PATH,
        });
        setOpen(true);
      } else if (open && dx < innerWidth * -0.5) {
        // Bound to close menu
        setDValue({
          d: INACTIVE_RESTING_PATH,
        });
        setOpen(false);
      } else {
        // Neither bound exceeded case
        // Update the position when dragging
        setDValue({
          d: getPath(
            dx + innerWidth * 0.1,
            y,
            open ? SIDEBAR_WIDTH : 0,
            innerHeight
          ),
        });
      }
    } else {
      setDValue({
        d: open ? ACTIVE_RESTING_PATH : INACTIVE_RESTING_PATH,
      });
    }
  });

  useEffect(() => {
    setDValue({
      d: PROMPT_PATH,
    });
    setTimeout(() => {
      setDValue({
        d: INACTIVE_RESTING_PATH,
      });
    }, 1000);
  }, [setDValue, PROMPT_PATH, INACTIVE_RESTING_PATH]);

  const closeMenu = () => {
    setOpen(false);
    setDValue({
      d: INACTIVE_RESTING_PATH,
    });
  };

  const handleHoverEnter = () => {
    if (!open) {
      setDValue({
        d: getPath(100, innerHeight * 0.1, 0, innerHeight),
      });
    }
  };

  const handleHoverExit = () => {
    if (!open) {
      setDValue({
        d: INACTIVE_RESTING_PATH,
      });
    }
  };
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
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverExit}
        {...bind()}
        className="fixed select-none touch-none top-0 left-0 right-0 z-40 h-full overflow-hidden bg-gray-4 p-4"
      >
        <div className="flex justify-center">
          <Link href="#" onClick={closeMenu} className="text-2xl">
            &#8592; Back
          </Link>
        </div>
        <nav
          className={`flex h-full w-full flex-col items-center justify-center`}
        >
          {items &&
            items.map((item) => (
              <MenuItem
                key={item.url}
                active={pathname == item.url}
                item={item}
                onClick={closeMenu}
              />
            ))}
        </nav>
      </div>
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
  onClick,
}: {
  item: Item;
  active: boolean;
  onClick: () => void;
}) => (
  <Link active={active} onClick={onClick} href={item.url} className="text-6xl">
    {item.label}
  </Link>
);
