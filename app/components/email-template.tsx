import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  age: string;
  fname: string;
  lname: string;
  zip: string;
  street: string;
  city: string;
  state: string;
  senderEmail: string;
  senderPhone: string;
  propertyType: string;
  asphaltRoof: string;
  managed: string;
};

export default function ContactFormEmail({
  age,
  fname,
  lname,
  senderEmail,
  senderPhone,
  zip,
  street,
  city,
  state,
  propertyType,
  asphaltRoof,
  managed,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from Roof Maxx Contact Form</Preview>
      <Body>
        <Container>
          <Section>
            <Heading>
              Roof Maxx Message: {fname} {lname} is requesting a quote!
            </Heading>
            <Hr />
            <Text>
              {fname} {lname}s home is an {propertyType}. {managed}, it is part
              of a property management group.
            </Text>
            <Text>
              {fname} {lname}s roof is {age} years old.
            </Text>
            <Text>
              {fname} {lname}s is {asphaltRoof} roof is made of asphalt.
            </Text>
            <Text>
              {fname} {lname}s lives at {street}, {city}, {state}, {zip}
            </Text>
            <Text>
              {fname} {lname}s email is {senderEmail}
            </Text>
            <Text>
              {fname} {lname}s phone number is {senderPhone}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
