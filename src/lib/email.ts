import { env } from "@/env";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: env.NEXT_PUBLIC_GMAIL_USER,
    pass: env.GMAIL_PASS,
  },
});

export default transporter;
