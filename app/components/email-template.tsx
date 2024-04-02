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
  Font,
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
      <Head>
        <Font
          fontFamily="Plus Jakarta Sans"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU79TR_V.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>New message from Roof Amp Contact Form</Preview>
      <Body
        style={{
          backgroundColor: "#fff",
          color: "#000",
          textAlign: "center",
        }}
      >
        <Container>
          <Section>
            <Heading>
              Roof Amp Form: {fname} {lname} is requesting a quote!
            </Heading>
            <Hr />
            <Text>
              {fname} {lname}s home is an {propertyType}. {managed}, it{" "}
            </Text>
            {managed == "No" ? (
              <Text>It is not part of a property management group.</Text>
            ) : (
              <Text>It is part of a property management group.</Text>
            )}
            <Text>
              {fname} {lname}s roof is {age} years old.
            </Text>
            {asphaltRoof == "Yes" ? (
              <Text>
                {fname} {lname}s roof is made of asphalt.
              </Text>
            ) : (
              <Text>
                {fname} {lname}s roof is not made of asphalt
              </Text>
            )}
            <Text>
              {fname} {lname}s address is {street}, {city}, {state}, {zip}
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
