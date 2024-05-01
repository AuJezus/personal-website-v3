"use server";

import transporter from "@/lib/email";
import MessageRecievedEmail from "@/emails/message-recieved";
import { render } from "@react-email/render";

export async function sendMessage() {
  const emailHtml = render(MessageRecievedEmail({ name: "augustas" }));

  const mailOptions = {
    from: "augustasv16@gmail.com",
    to: "augispay@gmail.com",
    subject: "Hello from Nodemailer",
    html: emailHtml,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
