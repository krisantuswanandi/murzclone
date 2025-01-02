import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

interface CommonProps {
  icon: ReactNode;
  count: number;
}
type ButtonProps = CommonProps & { onClick: () => void };
type LinkProps = CommonProps & { to: string };
type Props = ButtonProps | LinkProps;

const PostAction = ({ icon, count, ...props }: Props) => {
  if ("to" in props) {
    return (
      <Button variant="ghost" className="gap-1" asChild>
        <Link to={props.to}>
          {icon}
          {count || null}
        </Link>
      </Button>
    );
  }
  return (
    <Button variant="ghost" className="gap-1" onClick={props.onClick}>
      {icon}
      {count || null}
    </Button>
  );
};

export { PostAction };
