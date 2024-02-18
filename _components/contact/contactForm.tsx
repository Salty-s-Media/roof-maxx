"use client";

import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submitBtn";
import styles from "./contact.module.css";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isManagedVisible, setIsManagedVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hpv, setHPV] = useState("");

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const propertyType = event.target.value;
    setIsManagedVisible(
      propertyType === "Apartment or Condo" ||
        propertyType === "Commercial Property"
    );
  };

  return (
    <>
      {!isSubmitted && (
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (hpv !== "") {
              toast.error("Form submission failed. Please try again.");
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
              <h2>Tell us about your home</h2>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="propertyType">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  onChange={handlePropertyTypeChange}
                >
                  <option value="Single Family" defaultChecked={true}>
                    Single Family
                  </option>
                  <option value="Apartment or Condo">Apartment or Condo</option>
                  <option value="Commercial Property">
                    Commercial Property
                  </option>
                </select>
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

              <div
                className={`${styles.inputGroup} ${
                  isManagedVisible ? "" : styles.hidden
                }`}
              >
                <label className={styles.label} htmlFor="managed">
                  Does this property belong to property management group?
                </label>
                <select id="managed" name="managed">
                  <option value="Yes">Yes</option>
                  <option value="No" defaultChecked={true}>
                    No
                  </option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="age">
                  Roof Age in Years
                </label>
                <input type="text" id="age" name="age" placeholder="0 - 15" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="asphaltRoof">
                  Do you have a{" "}
                  <a
                    style={{ textDecoration: "underline" }}
                    target="_blank"
                    href="https://www.thespruce.com/thmb/S4qMZ7a2Y1_ewMHhGcGLBL6YycI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Fotolia_23945426_S-56a4a2c23df78cf772835cd4.jpg"
                  >
                    Traditional Asphalt Roof?
                  </a>
                </label>
                <select id="asphaltRoof" name="asphaltRoof">
                  <option value="Yes" defaultChecked={true}>
                    Yes
                  </option>
                  <option
                    value="No"
                    style={{ color: "var(--text-color)" }}
                    disabled
                  >
                    No (Roof Maxx is only meant for Asphalt Roofs)
                  </option>
                  <option value="Not Sure">Not Sure</option>
                </select>
              </div>

              <div className={styles.buttonContainer}>
                <button type="button" className="btn2" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

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
