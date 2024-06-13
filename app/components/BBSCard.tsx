import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const BBSCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          et vero repellat fuga molestias qui autem dolore neque? Pariatur
          cupiditate non eaque sint unde, architecto cum explicabo soluta. Nemo,
          in?
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link href="/bbs-posts/1">Read More</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BBSCard;
