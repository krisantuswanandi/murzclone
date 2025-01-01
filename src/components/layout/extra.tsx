import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Extra = () => {
  return (
    <div className="sticky top-4">
      <div>
        <Input
          className="rounded-full bg-zinc-200/80 border-none shadow-zinc-300/50 shadow-inner text-4xl p-5"
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
