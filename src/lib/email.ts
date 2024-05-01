import { env } from "@/env";
import nodemailer from "nodemailer";

console.log(env.GMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_PASS,
  },
});

export default transporter;
