"use client";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import Link from "@components/Link";
import { usePathname } from "next/navigation";
import { ButtonHTMLAttributes, useCallback, useEffect, useState } from "react";

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

// Constant values
const SIDEBAR_WIDTH = innerWidth;
const TAB_HEIGHT = innerHeight * 0.1;
const DRAG_OFFSET = 50;
const BTN_OFFSET = {
  x: -40,
  y: -12,
};
// SVG Paths
const INACTIVE_RESTING_PATH = getPath(50, TAB_HEIGHT, 0, innerHeight);
const ACTIVE_RESTING_PATH = getPath(0, TAB_HEIGHT, SIDEBAR_WIDTH, innerHeight);

export const Menu: React.FC<MenuProps> = ({ items }) => {
  // Get pathname to determine the active link
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [{ d }, dValueApi] = useSpring(() => ({
    d: open ? ACTIVE_RESTING_PATH : INACTIVE_RESTING_PATH,
    config: {
      mass: 3,
    },
  }));

  const [{ btnX, btnY }, btnCoordsApi] = useSpring(() => ({
    btnX: 50 + BTN_OFFSET.x,
    btnY: TAB_HEIGHT + BTN_OFFSET.y,
    config: {
      mass: 3,
    },
  }));

  // Function to update the button position and path's d value
  const updatePosition = useCallback(
    (updatedX: number, updatedY: number, d: string) => {
      dValueApi.start({
        d,
      });
      btnCoordsApi.start({
        btnX: updatedX + BTN_OFFSET.x,
        btnY: updatedY + BTN_OFFSET.y,
      });
    },
    [dValueApi, btnCoordsApi]
  );

  const bind = useDrag(({ down: dragging, movement: [dx], xy: [, y] }) => {
    if (dragging) {
      // Check if we have passed any bounds and
      // move to resting position
      if (!open && dx > innerWidth * 0.5) {
        // Bound to open menu
        updatePosition(50, TAB_HEIGHT, ACTIVE_RESTING_PATH);
        setOpen(true);
      } else if (open && dx < innerWidth * -0.5) {
        // Bound to close menu
        updatePosition(50, TAB_HEIGHT, INACTIVE_RESTING_PATH);
        setOpen(false);
      } else {
        // Neither bound exceeded case
        // Update the position when dragging
        updatePosition(
          dx + DRAG_OFFSET,
          y,
          getPath(dx + DRAG_OFFSET, y, open ? SIDEBAR_WIDTH : 0, innerHeight)
        );
      }
    } else {
      updatePosition(
        50,
        TAB_HEIGHT,
        open ? ACTIVE_RESTING_PATH : INACTIVE_RESTING_PATH
      );
    }
  });

  useEffect(() => {
    updatePosition(100, TAB_HEIGHT, getPath(100, TAB_HEIGHT, 0, innerHeight));
    setTimeout(() => {
      updatePosition(50, TAB_HEIGHT, INACTIVE_RESTING_PATH);
    }, 1000);
  }, [updatePosition]);

  const openMenu = () => {
    setOpen(true);
    updatePosition(50, TAB_HEIGHT, ACTIVE_RESTING_PATH);
  };
  const closeMenu = () => {
    setOpen(false);
    updatePosition(50, TAB_HEIGHT, INACTIVE_RESTING_PATH);
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
        className="fixed select-none touch-none top-0 left-0 right-0 z-40 h-full overflow-hidden bg-gray-4 p-4"
      >
        <div className="flex justify-center">
          <Link href={pathname || "#"} onClick={closeMenu} className="text-2xl">
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
                active={
                  pathname?.replace(/\/$/, "") === item.url.replace(/\/$/, "")
                }
                item={item}
                onClick={closeMenu}
              />
            ))}
        </nav>
      </div>
      <MenuButton
        {...bind()}
        onClick={openMenu}
        style={{
          // If you are a recruiter, please look away at this next part 💀
          opacity: open
            ? 0
            : (btnX.to({
                range: [0, 100],
                output: [1, 0],
              }) as any as number),
          marginLeft: btnX as any as number,
          marginTop: btnY as any as number,
        }}
      />
    </>
  );
};

const MenuButton = (props?: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <animated.button
      aria-label="open sidebar"
      className={`fixed z-50 h-6 w-6 rounded-lg bg-transparent touch-none`}
      {...props}
    >
      <ArrowSmallRightIcon className="h-6 w-6 text-gray-11" />
    </animated.button>
  );
};

const MenuItem = ({
  item,
  active,
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
