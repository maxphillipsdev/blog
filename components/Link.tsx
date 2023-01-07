import { default as NextLink, LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface Props extends LinkProps {
  active: any;
}

const Link = (props: PropsWithChildren<Props>) => {
  const { children, active } = props;
  return (
    <NextLink
      className={`group text-6xl text-gray-11 ${
        active ? "font-semibold text-gray-12" : "font-light"
      }`}
      {...props}
    >
      {children}
      <span className="block h-1 max-w-0 bg-crimson-9 transition-all duration-500 group-hover:max-w-full" />
    </NextLink>
  );
};

export default Link;
