"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "peterxiao1998@gmail.com",
      subject: "Message from contact form on personal portfolio",
      reply_to: senderEmail as string,
      //react: <ContactFormEmail message={message} senderEmail={senderEmail}/>
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  }
};
