"use server";

import React from "react";
import { Resend } from "resend";
import {
  validateString,
  getErrorMessage,
  validatePhoneNumber,
  validateEmailFormat,
} from "@/app/lib/utils";
import ContactFormEmail from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderPhone = formData.get("senderPhone");

  if (!validateString(senderEmail, 100) || !validateEmailFormat(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(senderPhone, 22) || !validatePhoneNumber(senderPhone)) {
    return {
      error: "Expected Phone Format: 123 123 1234",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "web@saltysmedia.com",
      subject: "Message from Roof Maxx Contact Form",
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        senderPhone: senderPhone,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
