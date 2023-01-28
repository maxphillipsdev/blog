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
  const { href } = props;
  const isRelative = href && href.toString().startsWith("/");

  // If the link is relative, use Next.js's Link component.
  // Make sure it is type casted to a Next.js Link component.
  const LinkComponent = isRelative ? NextLink : ("a" as any);

  return (
    <LinkComponent
      {...props}
      className={`group text-gray-12 touch-none select-none
      max-w-fit no-underline ${active ? "font-semibold" : "font-light"} ${
        props.className
      }`}
    >
      {children}
      <span className="block h-1 max-w-0 bg-crimson-9 transition-all duration-500 group-hover:max-w-full" />
    </LinkComponent>
  );
};

export default Link;
