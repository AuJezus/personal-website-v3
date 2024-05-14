"use server";

import type { FormState } from "./validation";

import transporter from "@/lib/email";
import { render } from "@react-email/render";
import { ZodError } from "zod";
import { env } from "@/env";

import { messageFormSchema } from "./validation";
import MessageRecievedUserEmail from "@/emails/message-recieved-user";
import MessageRecievedMeEmail from "@/emails/message-recieved-me";

export async function sendMessageRecievedEmails(
  prevState: FormState | null,
  data: FormData,
): Promise<FormState> {
  try {
    const { name, email, message } = messageFormSchema.parse(data);

    const userEmailHtml = render(
      MessageRecievedUserEmail({ name, newsletterLink: "lol.com" }),
    );
    const myEmailHtml = render(
      MessageRecievedMeEmail({ name, email, message }),
    );

    const userEmailOptions = {
      from: env.NEXT_PUBLIC_GMAIL_USER,
      to: email,
      subject: "Thank you for leaving a message!",
      html: userEmailHtml,
    };
    const myEmailOptions = {
      from: env.NEXT_PUBLIC_GMAIL_USER,
      to: env.NEXT_PUBLIC_GMAIL_USER,
      subject: `You just recieved a message from ${name}`,
      headers: {
        "x-priority": "1",
        "x-msmail-priority": "High",
        importance: "high",
      },
      html: myEmailHtml,
    };

    await transporter.sendMail(userEmailOptions);
    await transporter.sendMail(myEmailOptions);

    return {
      status: "success",
    };
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
