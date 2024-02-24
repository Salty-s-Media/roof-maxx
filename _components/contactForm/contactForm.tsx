"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Contact from "../contact/contactForm";
import styles from "./contactForm.module.css";

export const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button className="btn2" aria-label="Free Quote" onClick={toggleModal}>
        Free Quote
      </button>
      {showModal && (
        <div className={styles.modalOverlayVisible}>
          <button className={styles.closeButton} onClick={toggleModal}>
            <X color="black" size={24} />
          </button>
          <Contact />
        </div>
      )}
    </>
  );
};
