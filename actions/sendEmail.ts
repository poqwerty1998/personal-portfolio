"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown) => {
  let message: string;
  if (error instanceof Error) {
    return {
      error: error.message,
    };
  } else if (error && typeof error === "object" && "message" in error) {
    return {
      error: error.message,
    };
  }
  return {
    message
  };
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // very simple server side validation for email fields
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email.",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message.",
    };
  }
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "peterxiao1998@gmail.com",
      subject: "Message from contact form on personal portfolio",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
