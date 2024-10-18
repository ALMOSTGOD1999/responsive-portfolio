import styles from "./ContactStyles.module.css";

import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      setStatusMessage(response.data.message);
    } catch (error) {
      setStatusMessage("The status of the mail is like Schrödinger's cat");
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <div>
        <h1 className="sectionTitle">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name : </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email : </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Message : </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <input className="hover btn" type="submit" value="Submit" />
        </form>
        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
