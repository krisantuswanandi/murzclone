import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";

const Extra = () => {
  return (
    <div className="sticky top-4">
      <div className="relative">
        <IconSearch className="absolute top-0 left-1 p-3 size-10" />
        <Input
          className="rounded-full bg-zinc-200/80 border-none shadow-zinc-300/50 shadow-inner text-4xl p-5 pl-10"
          placeholder="Search"
        />
      </div>
      <div className="mt-4">
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card className="mt-4 h-[300px]">
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </div>
  );
};

export { Extra };
