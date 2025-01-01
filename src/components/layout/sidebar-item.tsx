import { Link, createLink } from "@tanstack/react-router";

interface Props {
  text: string;
}

const SidebarItem = ({ text, ...props }: Props) => {
  return <Link {...props}>{text}</Link>;
};

const MyLink = createLink(SidebarItem);

export { SidebarItem, MyLink };
