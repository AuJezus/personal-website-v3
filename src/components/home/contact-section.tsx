"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section id="contact" className="mx-auto mb-28 max-w-[1200px]">
      <div className="text-muted-foreground mb-10 flex items-baseline gap-4">
        <span>
          <span className="text-primary">~</span> W:\AuJezus{">"}
        </span>
        <h2 className="text-primary text-lg">
          contact<span className="animate-blink">_</span>
        </h2>
      </div>

      <h3 className="bg-primary text-primary-foreground mb-12 py-2 text-center text-4xl font-semibold">
        CONTACT A CODE WIZARD
      </h3>

      <div className="relative">
        <div
          className={cn(
            "pointer-events-none absolute flex h-full w-full flex-col items-center justify-center border-2 text-center opacity-0 transition-opacity",
            isSuccess && "opacity-100",
          )}
        >
          <p className="mb-2 text-green-500">200 OK</p>
          <p className="mb-6 text-3xl font-semibold">
            Message Sent Succesfully! :)
          </p>
          <p className="text-muted-foreground max-w-2xl">
            Thank you for getting in touch! Your message means a lot. I'll make
            sure to respond to you as soon as possible. Looking forward to
            connecting with you soon!
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn(
              "mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 transition-opacity",
              isSuccess && "opacity-0",
            )}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>_name:</FormLabel>
                  <FormControl>
                    <Input placeholder="*" {...field} />
                  </FormControl>
                  <FormDescription>
                    I&apos;d love to know your name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>_email:</FormLabel>
                  <FormControl>
                    <Input placeholder="*" {...field} />
                  </FormControl>
                  <FormDescription>
                    Drop your email here so we can stay connected!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-2 mb-4">
                  <FormLabel>_message:</FormLabel>
                  <FormControl>
                    <Textarea placeholder="*" rows={8} {...field} />
                  </FormControl>
                  <FormDescription>
                    Pour your thoughts here! Share your message with me.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="col-span-2 w-fit min-w-24 justify-self-center"
              onClick={(e) => {
                e.preventDefault();
                setIsSuccess(true);
              }}
            >
              Send
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default ContactSection;
