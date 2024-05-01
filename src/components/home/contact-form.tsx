"use client";

import type { FieldPath, UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import type { FormState } from "@/server/validation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState, useTransition } from "react";
import { sendMessageRecievedEmails } from "@/server/actions";
import { messageFormSchema } from "@/server/validation";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
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

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState<FormState, FormData>(
    sendMessageRecievedEmails,
    null,
  );

  const [isSuccess, setIsSuccess] = useState(false);
  const [pending, startTransaction] = useTransition();

  const form = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.status === "error") {
      state.errors?.forEach((error) => {
        form.setError(
          error.path as FieldPath<z.infer<typeof messageFormSchema>>,
          {
            message: error.message,
          },
        );
      });

      toast.error(state.message);
    }

    if (state.status === "success") {
      setIsSuccess(true);
    }
  }, [state, form]);

  return (
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
          Thank you for getting in touch! Your message means a lot. I&apos;ll
          make sure to respond to you as soon as possible. Looking forward to
          connecting with you soon!
        </p>
      </div>

      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={async (e) => {
            e.preventDefault();
            void form.handleSubmit(() => {
              startTransaction(() =>
                formAction(new FormData(formRef.current!)),
              );
            })(e);
          }}
          action={formAction}
          className={cn(
            "mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 transition-opacity",
            isSuccess && "opacity-0",
          )}
        >
          <ContactFormContent form={form} pending={pending} />
        </form>
      </Form>
    </div>
  );
}

function ContactFormContent(props: {
  form: UseFormReturn<{
    name: string;
    message: string;
    email: string;
  }>;
  pending: boolean;
}) {
  const { form, pending } = props;

  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>_name:</FormLabel>
            <FormControl>
              <Input placeholder="*" {...field} />
            </FormControl>
            <FormDescription>I&apos;d love to know your name.</FormDescription>
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
        disabled={pending}
        className="col-span-2 w-fit min-w-24 justify-self-center"
      >
        {pending ? "Sending..." : "Send"}
      </Button>
    </>
  );
}

export default ContactForm;
