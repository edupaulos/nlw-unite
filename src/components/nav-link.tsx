import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

const navLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <a {...props} className="font-medium text-sm">
      {children}
    </a>
  );
};

export default navLink;
