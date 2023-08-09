"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone_number: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  msg: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      msg: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //* alert(JSON.stringify(values));
    //* console.log(values);
    //! Local
    /*     const res = await fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      body: JSON.stringify(values),
    }); */
    //! Production
    const res = await fetch("https://www.henhenmuldani.com/api/submit-form", {
      method: "POST",
      body: JSON.stringify(values),
    });
    await res.json();
    form.reset();
    return toast.success("Message sent!, Wait for my response");
    //* return NextResponse.json(data);
  }

  return (
    <section className="p-6">
      <h1 className="text-center text-4xl font-black hover:text-[#CBA65F]">
        Send Me a Message
      </h1>
      <div className="mx-auto mt-4 max-w-2xl rounded-2xl border-b-8 border-r-8 border-black shadow-none hover:border-white dark:border-white dark:hover:border-black">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid items-center gap-1 space-y-4 rounded-md border-4 border-black p-5 shadow-none dark:border-white"
          >
            <FormField
              control={form.control}
              name="name"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      className="border-b-4 border-r-4 border-black shadow-none outline-none focus:border-[#CBA65F] focus-visible:ring-0 dark:border-white dark:focus:border-[#CBA65F]"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your phone number"
                      className="border-b-4 border-r-4 border-black shadow-none outline-none focus:border-[#CBA65F] focus-visible:ring-0 dark:border-white dark:focus:border-[#CBA65F]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="msg"
              defaultValue=""
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      className="border-b-4 border-r-4 border-black shadow-none outline-none focus:border-[#CBA65F] focus-visible:ring-0 dark:border-white dark:focus:border-[#CBA65F]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-black hover:bg-[#CBA65F] dark:bg-white dark:hover:bg-[#CBA65F]"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
