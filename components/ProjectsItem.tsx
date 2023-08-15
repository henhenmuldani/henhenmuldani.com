import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectMetadata } from "@/lib/ProjectMetadata";
import {
  Card,
  //CardContent,
  CardDescription,
  CardHeader,
  //CardFooter,
  CardTitle,
} from "@/components/ui/card";
//* import { Badge } from "@/components/ui/badge";

const ProjectsItem = (props: ProjectMetadata) => {
  return (
    <div className="rounded-2xl border-b-8 border-r-8 border-foreground shadow-none hover:border-background">
      <Card className="flex flex-col items-center rounded-md border-4 border-foreground p-5 shadow-none">
        {/* <div className="w-12 h-12 bg-red-400"></div> */}
        <Image
          className="rounded-md border border-foreground"
          src={props.image}
          key={props.slug}
          alt={props.title}
          width={250}
          height={250}
        />
        {/* <Badge className="mt-4 cursor-pointer place-self-start bg-black hover:bg-[#CBA65F] dark:bg-white dark:hover:bg-[#CBA65F]">
          Flutter
        </Badge> */}
        <CardHeader className="place-self-start px-0">
          <small> {props.year}</small>
          <Link href={`/projects/${props.slug}`}>
            <CardTitle className="cursor-pointer hover:text-[#CBA65F]">
              {props.title}
            </CardTitle>
          </Link>
          <CardDescription className="font-medium text-foreground">
            {props.techStacks}
          </CardDescription>
        </CardHeader>
        {/* <CardFooter ></CardFooter> */}
      </Card>
    </div>
  );
};

export default ProjectsItem;
