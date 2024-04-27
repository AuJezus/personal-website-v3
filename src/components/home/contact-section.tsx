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

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

function ContactSection() {
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
    <section className="mx-auto mb-28 max-w-[1200px]">
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

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4"
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
          >
            Send
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default ContactSection;
