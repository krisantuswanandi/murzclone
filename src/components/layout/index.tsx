import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Extra } from "./extra";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex w-full max-w-[1200px] m-auto min-h-dvh p-4 pt-8">
      <div className="basis-2/12 p-2">
        <Sidebar />
      </div>
      <div className="basis-6/12 p-2 min-w-0">{children}</div>
      <div className="basis-4/12 p-2">
        <Extra />
      </div>
    </div>
  );
};

export { Layout };
