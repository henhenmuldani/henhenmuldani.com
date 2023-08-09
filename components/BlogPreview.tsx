import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogPreview = () => {
  return (
    <section className="p-6">
      <h1 className="cursor-pointer text-4xl font-black hover:text-[#CBA65F]">
        Blog
      </h1>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {/* <Card className="flex flex-col items-center rounded-2xl border-b-8 border-l-2 border-r-8 border-t-2 border-black p-5 shadow-none hover:border-[#CBA65F] dark:border-white dark:hover:border-[#CBA65F]"> */}
        <div className="rounded-2xl border-b-8 border-r-8 border-black shadow-none hover:border-white dark:border-white dark:hover:border-black">
          <Card className="flex flex-col items-center rounded-md border-4 border-black p-5 shadow-none dark:border-white">
            <CardHeader className="place-self-start px-0">
              <CardTitle className="cursor-pointer font-semibold hover:text-[#CBA65F] dark:hover:text-[#CBA65F]">
                Cara Membuat Bakso Kuah
              </CardTitle>
              <CardDescription className="font-medium text-black dark:text-white">
                Tanggal
              </CardDescription>
            </CardHeader>
            {/* <CardContent className="bg-red-300 border border-black"></CardContent> */}
            <CardFooter className="place-self-end px-0">
              <Badge className="cursor-pointer bg-black hover:bg-[#CBA65F] dark:bg-white dark:hover:bg-[#CBA65F]">
                Flutter
              </Badge>
            </CardFooter>
          </Card>
        </div>
        <div className="rounded-2xl border-b-8 border-r-8 border-black shadow-none hover:border-white dark:border-white dark:hover:border-black">
          <Card className="flex flex-col items-center rounded-md border-4 border-black p-5 shadow-none dark:border-white">
            <CardHeader className="place-self-start px-0">
              <CardTitle className="cursor-pointer font-semibold hover:text-[#CBA65F] dark:hover:text-[#CBA65F]">
                Cara Membuat Bakso Kuah
              </CardTitle>
              <CardDescription className="font-medium text-black dark:text-white">
                Tanggal
              </CardDescription>
            </CardHeader>
            {/* <CardContent className="bg-red-300 border border-black"></CardContent> */}
            <CardFooter className="place-self-end px-0">
              <Badge className="cursor-pointer bg-black hover:bg-[#CBA65F] dark:bg-white dark:hover:bg-[#CBA65F]">
                Flutter
              </Badge>
            </CardFooter>
          </Card>
        </div>
        <div className="rounded-2xl border-b-8 border-r-8 border-black shadow-none hover:border-white dark:border-white dark:hover:border-black">
          <Card className="flex flex-col items-center rounded-md border-4 border-black p-5 shadow-none dark:border-white">
            <CardHeader className="place-self-start px-0">
              <CardTitle className="cursor-pointer font-semibold hover:text-[#CBA65F] dark:hover:text-[#CBA65F]">
                Cara Membuat Bakso Kuah
              </CardTitle>
              <CardDescription className="font-medium text-black dark:text-white">
                Tanggal
              </CardDescription>
            </CardHeader>
            {/* <CardContent className="bg-red-300 border border-black"></CardContent> */}
            <CardFooter className="place-self-end px-0">
              <Badge className="cursor-pointer bg-black hover:bg-[#CBA65F] dark:bg-white dark:hover:bg-[#CBA65F]">
                Flutter
              </Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
