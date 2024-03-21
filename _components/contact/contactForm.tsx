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
  const [state, setStateAdd] = useState("FL");

  const [hpv, setHPV] = useState("");

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleStateTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const state = event.target.value;
    setStateAdd(state);
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

  const progressPercentage = (currentPage / 3) * 100;

  return (
    <>
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
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
            {/* Page 1 */}
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
                <button
                  type="button"
                  style={{ padding: "12px 32px" }}
                  className="btn2"
                  onClick={handleNext}
                >
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
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  placeholder="Insert your zip code here"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="street">
                  Street Address
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="E.g., Melrose Avenue"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="E.g., Columbus"
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="state">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  onChange={handleStateTypeChange}
                >
                  <option value="">Select your state</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                  <option value="DC">District of Columbia</option>
                </select>
              </div>
              <div className={styles.buttonContainer}>
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
                <input type="text" id="Fname" name="Fname" placeholder="Nick" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="Lname">
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lname"
                  name="Lname"
                  placeholder="James"
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
                  placeholder="Your email address"
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
                  placeholder="E.g., 555-867-6784"
                />
              </div>
              <div className={styles.buttonContainer}>
                <SubmitBtn />
              </div>
            </div>
          </div>
        </form>
      )}
      {isSubmitted && <div>Email Sent! Expect a response soon.</div>}
      <div className={styles.message}>
        By submitting this form you opt-in for email messages and may opt-out at
        any time.
        <a
          href="https://roofmaxx.com/terms-conditions/"
          style={{ color: "blue" }}
        >
          Terms &amp; Conditions
        </a>
      </div>
      <div className={styles.message2}>
        We will not share your information.{" "}
        <a
          href="https://roofmaxx.com/privacy-policy/"
          style={{ color: "blue" }}
        >
          Privacy Policy
        </a>
      </div>
    </>
  );
}
