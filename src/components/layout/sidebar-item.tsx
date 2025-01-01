import { Link, createLink } from "@tanstack/react-router";
import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const SidebarItem = createLink(({ text, icon, ...props }: Props) => {
  return (
    <Link {...props} className="flex gap-2 items-center">
      {icon}
      {text}
    </Link>
  );
});

export { SidebarItem };
