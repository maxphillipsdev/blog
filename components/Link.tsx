import { default as NextLink, LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface Props extends LinkProps {
  active?: boolean;
  className?: string;
}

const Link = ({
  children,
  active = false,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <NextLink
      {...props}
      className={`group text-gray-12 touch-none select-none ${
        active ? "font-semibold" : "font-light"
      } ${props.className}`}
    >
      {children}
      <span className="block h-1 max-w-0 bg-crimson-9 transition-all duration-500 group-hover:max-w-full" />
    </NextLink>
  );
};

export default Link;
