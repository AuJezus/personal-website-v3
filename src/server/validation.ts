import { zfd } from "zod-form-data";
import { z } from "zod";

export type FormState =
  | {
      status: "success";
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export const messageFormSchema = zfd.formData({
  name: zfd.text(
    z
      .string()
      .trim()
      .min(2, "Name must be atleast 2 characters")
      .max(50, "Name must not exceed 50 characters"),
  ),
  email: zfd.text(z.string().trim().email()),
  message: zfd.text(
    z
      .string()
      .trim()
      .min(10, "Message must be atleast 10 characters")
      .max(2000, "Message must not exceed 2000 characters"),
  ),
});
