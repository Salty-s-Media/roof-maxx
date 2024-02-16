"use server";

import React from "react";
import { Resend } from "resend";
import {
  validateString,
  getErrorMessage,
  validatePhoneNumber,
  validateEmailFormat,
  validateAge,
  validateSelectOption,
} from "@/app/lib/utils";
import ContactFormEmail from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const fname = formData.get("Fname");
  const lname = formData.get("Lname");
  const age = formData.get("age");
  const zip = formData.get("zip");
  const street = formData.get("street");
  const city = formData.get("city");
  const state = formData.get("state");
  const senderPhone = formData.get("senderPhone");

  const propertyType = formData.get("propertyType") as string;
  const managed = formData.get("managed") as string;
  const asphaltRoof = formData.get("asphaltRoof") as string;

  if (!validateSelectOption(propertyType)) {
    return {
      error: "Please select a property type",
    };
  }

  if (!validateSelectOption(asphaltRoof)) {
    return {
      error: "Please select an answer regarding your roof",
    };
  }
  if (!validateSelectOption(managed)) {
    return {
      error: "Please select an answer regarding your roof",
    };
  }

  if (!validateString(fname, 50)) {
    return {
      error: "Invalid first name length",
    };
  }
  if (!validateString(lname, 50)) {
    return {
      error: "Invalid last name length",
    };
  }
  if (!validateString(senderEmail, 60) || !validateEmailFormat(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(senderPhone, 22) || !validatePhoneNumber(senderPhone)) {
    return {
      error: "Expected Phone Format: 123 123 1234",
    };
  }
  if (!validateString(age, 2) || !validateAge(age)) {
    return {
      error: "Invalid age number or type",
    };
  }

  if (!validateString(zip, 8)) {
    return {
      error: "Invalid ZIP length",
    };
  }
  if (!validateString(street, 50)) {
    return {
      error: "Invalid street length",
    };
  }
  if (!validateString(city, 30)) {
    return {
      error: "Invalid city length",
    };
  }

  if (!validateString(state, 14)) {
    return {
      error: "Invalid State length",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "web@saltysmedia.com",
      subject: "Message from Roof Maxx Contact Form",
      react: React.createElement(ContactFormEmail, {
        fname: fname,
        lname: lname,
        senderEmail: senderEmail,
        senderPhone: senderPhone,
        age: age,
        zip: zip,
        street: street,
        city: city,
        state: state,
        propertyType: propertyType,
        asphaltRoof: asphaltRoof,
        managed: managed,
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