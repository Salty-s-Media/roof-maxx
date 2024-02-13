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
  message: string;
  senderEmail: string;
  senderPhone: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderPhone,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from Roof Maxx Contact Form</Preview>
      <Body>
        <Container>
          <Section>
            <Heading>
              You received the following message from the contact form:
            </Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The senders email is: {senderEmail}</Text>
            <Text>The senders phone number is: {senderPhone}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
