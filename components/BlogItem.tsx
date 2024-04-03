import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function BlogItem() {
  return (
    <Card className="flex flex-col rounded-md border-4 border-foreground p-5 shadow-8xl duration-300 hover:shadow-none">
      <CardHeader className="place-self-start p-0 px-0">
        <Link href="#">
          <CardTitle className="cursor-pointer hover:text-[#CBA65F]">
            Tutorial Install Ubuntu Full/ Dual Boot
          </CardTitle>
        </Link>
        <CardDescription className="text-base font-medium">
          January 1, 2024
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 p-0">
        VS Code can remove unwanted line indentations in a Python file
      </CardContent>
      <CardFooter className="place-self-end p-0 ">
        <Badge className="hover:bg-primary">Linux</Badge>
      </CardFooter>
    </Card>
  );
}

export default BlogItem;
