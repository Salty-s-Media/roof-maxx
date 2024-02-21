"use client";

import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submitBtn";
import styles from "./contact.module.css";
import { toast } from "react-hot-toast";
import { Building, Building2, Home } from "lucide-react";

export default function Contact() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isManagedVisible, setIsManagedVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [propertyType, setSelectedPropertyType] = useState("Single Family");
  const [managedType, setSelectedManagedType] = useState("No");
  const [asphaltRoof, setAsphalt] = useState("Yes");
  const [ageRoof, setRoofAge] = useState("0-4");

  const [hpv, setHPV] = useState("");

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const propertyType = event.target.value;
    setSelectedPropertyType(propertyType);
    setIsManagedVisible(
      propertyType === "Apartment or Condo" ||
        propertyType === "Commercial Property"
    );
  };
  const handleManagedTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const managedType = event.target.value;
    setSelectedManagedType(managedType);
  };
  const handleAS = (event: React.ChangeEvent<HTMLInputElement>) => {
    const asphaltRoof = event.target.value;
    setAsphalt(asphaltRoof);
  };
  const handleRoof = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ageRoof = event.target.value;
    setRoofAge(ageRoof);
  };

  return (
    <>
      {!isSubmitted && (
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            console.log(formData.get("propertyType"));

            if (hpv !== "") {
              toast.error("Form submission failed.");
              return;
            }

            if (error) {
              toast.error(error);
            } else {
              toast.success("Email sent successfully!");
              setIsSubmitted(true);
            }
            setIsSubmitting(false);
          }}
          className={styles.form}
        >
          <div className={styles.container}>
            <div
              className={`${styles.section} ${
                currentPage === 1 ? styles.visible : ""
              }`}
            >
              {/* Property Type */}
              <h2>Tell us about your home</h2>
              <div className={styles.inputGroup}>
                <h3 className={styles.label}>Property Type</h3>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    value="Single Family"
                    defaultChecked={true}
                    id="propertyType1"
                    name="propertyType"
                    onChange={(e) => handlePropertyTypeChange(e)}
                  ></input>
                  <label htmlFor="propertyType1" className={styles.labelNew}>
                    <Home
                      color={
                        propertyType === "Single Family" ? "white" : "black"
                      }
                      size={24}
                      className={styles.icon}
                    />
                    <span>
                      Single
                      <br />
                      Family
                    </span>
                  </label>

                  <input
                    type="radio"
                    value="Apartment or Condo"
                    id="propertyType2"
                    name="propertyType"
                    onChange={(e) => handlePropertyTypeChange(e)}
                  ></input>
                  <label htmlFor="propertyType2" className={styles.labelNew}>
                    <Building
                      color={
                        propertyType === "Apartment or Condo"
                          ? "white"
                          : "black"
                      }
                      size={24}
                      className={styles.icon}
                    />
                    <span>Apartment or Condo</span>
                  </label>

                  <input
                    type="radio"
                    value="Commercial Property"
                    id="propertyType3"
                    name="propertyType"
                    onChange={(e) => handlePropertyTypeChange(e)}
                  ></input>
                  <label htmlFor="propertyType3" className={styles.labelNew}>
                    <Building2
                      color={
                        propertyType === "Commercial Property"
                          ? "white"
                          : "black"
                      }
                      size={24}
                      className={styles.icon}
                    />
                    <span>Commercial Property</span>
                  </label>
                </div>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="propertyType"
                  id="propertyType"
                  defaultValue={propertyType}
                />
              </div>
              <div style={{ display: "none" }}>
                <input
                  type="text"
                  id="hp"
                  name="hp"
                  value={hpv}
                  onChange={(e) => setHPV(e.target.value)}
                  tabIndex={-1}
                />
              </div>
              {/* If Property === Condo or Commercial */}
              <div
                className={`${styles.inputGroup} ${
                  isManagedVisible ? "" : styles.hidden
                }`}
              >
                <h3 className={styles.label}>
                  Does this property belong to property management group?
                </h3>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    value="Yes"
                    id="managed1"
                    name="managed"
                    onChange={(e) => handleManagedTypeChange(e)}
                  ></input>
                  <label htmlFor="managed1" className={styles.labelNew2}>
                    <span>Yes</span>
                  </label>
                  {/* No === Not an Option */}
                  <input
                    type="radio"
                    value="No"
                    id="managed2"
                    name="managed"
                    defaultChecked={true}
                    onChange={(e) => handleManagedTypeChange(e)}
                  ></input>
                  <label htmlFor="managed2" className={styles.labelNew2}>
                    <span>No</span>
                  </label>
                </div>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="managed"
                  id="managed"
                  defaultValue={managedType}
                />
              </div>

              {/* Traditional Roof */}
              <div className={styles.inputGroup}>
                <h3 className={styles.label}>
                  Do you have a{" "}
                  <a
                    style={{ textDecoration: "underline" }}
                    target="_blank"
                    href="https://www.thespruce.com/thmb/S4qMZ7a2Y1_ewMHhGcGLBL6YycI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Fotolia_23945426_S-56a4a2c23df78cf772835cd4.jpg"
                  >
                    Traditional Asphalt Roof?
                  </a>
                  <p
                    style={{
                      textAlign: "left",
                      marginLeft: "1.5rem",
                      display: "inline",
                      fontSize: "12px",
                      color: "var(--tmg)",
                    }}
                  >
                    If Not, Roof Maxx is not for you.
                  </p>
                </h3>

                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    value="Yes"
                    id="asphaltRoof1"
                    name="asphaltRoof"
                    defaultChecked={true}
                    onChange={(e) => handleAS(e)}
                  ></input>
                  <label htmlFor="asphaltRoof1" className={styles.labelNew2}>
                    <span>Yes</span>
                  </label>

                  <input
                    type="radio"
                    value="Not Sure"
                    id="asphaltRoof2"
                    name="asphaltRoof"
                    onChange={(e) => handleAS(e)}
                  ></input>
                  <label htmlFor="asphaltRoof2" className={styles.labelNew2}>
                    <span>Not Sure</span>
                  </label>
                </div>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="asphaltRoof"
                  id="asphaltRoof"
                  defaultValue={asphaltRoof}
                />
              </div>

              {/* Roof Age */}
              <div className={styles.inputGroup}>
                <h3 className={styles.label}>How old is your roof?</h3>
                <div className={styles.radioGroup}>
                  <input
                    type="radio"
                    value="0-4"
                    id="age1"
                    name="age"
                    onChange={(e) => handleRoof(e)}
                  ></input>
                  <label htmlFor="age1" className={styles.labelNew2}>
                    <span>0-4 yrs</span>
                  </label>

                  <input
                    type="radio"
                    value="5-15"
                    id="age2"
                    name="age"
                    defaultChecked={true}
                    onChange={(e) => handleRoof(e)}
                  ></input>
                  <label htmlFor="age2" className={styles.labelNew2}>
                    <span>5-15 yrs</span>
                  </label>

                  <input
                    type="radio"
                    value="15+"
                    id="age3"
                    name="age"
                    onChange={(e) => handleRoof(e)}
                  ></input>
                  <label htmlFor="age3" className={styles.labelNew2}>
                    <span>15+ yrs</span>
                  </label>
                </div>
                <input
                  type="text"
                  style={{ display: "none" }}
                  name="age"
                  id="age"
                  defaultValue={ageRoof}
                />
              </div>

              <div className={styles.buttonContainer}>
                <button type="button" className="btn2" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
            {/* Page 2 */}
            <div
              className={`${styles.section} ${
                currentPage === 2 ? styles.visible : ""
              }`}
            >
              <h2>Where are you located?</h2>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="zip">
                  Zip Code
                </label>

                <input type="text" id="zip" name="zip" placeholder="ZIP Code" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="street">
                  Street Address
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Address"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="city">
                  City
                </label>
                <input type="text" id="city" name="city" placeholder="City" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                />
              </div>
              <div className={styles.buttonContainer}>
                {currentPage !== 1 && (
                  <button type="button" className="btn" onClick={handleBack}>
                    Back
                  </button>
                )}
                <button type="button" className="btn2" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
            {/* Page 3 */}
            <div
              className={`${styles.section} ${
                currentPage === 3 ? styles.visible : ""
              }`}
            >
              <h2>Let&apos;s get in contact...</h2>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="Fname">
                  First Name
                </label>
                <input
                  type="text"
                  id="Fname"
                  name="Fname"
                  placeholder="First Name"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="Lname">
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lname"
                  name="Lname"
                  placeholder="Last Name"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="senderEmail">
                  Email
                </label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  placeholder="Email"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="senderPhone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="senderPhone"
                  name="senderPhone"
                  placeholder="Phone Number"
                />
              </div>
              <div className={styles.buttonContainer}>
                {currentPage !== 1 && (
                  <button type="button" className="btn" onClick={handleBack}>
                    Back
                  </button>
                )}
                <SubmitBtn />
              </div>
            </div>
          </div>
        </form>
      )}
      {isSubmitted && <div>Email Sent! Expect a response soon.</div>}
    </>
  );
}
