import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectMetadata } from "@/lib/ProjectMetadata";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectsItem = (props: ProjectMetadata) => {
  return (
    <Card className="flex flex-col items-center rounded-md border-4 border-foreground p-5 shadow-8xl duration-300 hover:shadow-none">
      <Image
        className="rounded-md border-4 border-foreground"
        src={props.image}
        key={props.slug}
        alt={props.title}
        width={250}
        height={250}
      />
      <CardHeader className="place-self-start px-0">
        <p> {props.year}</p>
        <Link href={`/projects/${props.slug}`}>
          <CardTitle className="cursor-pointer hover:text-[#CBA65F]">
            {props.title}
          </CardTitle>
        </Link>
        <CardDescription className="text-base font-medium">
          {props.techStacks}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProjectsItem;
