import React, { useRef, useState } from "react";
import axios from "axios";
import "./FormEmail.scss";

const { VITE_BACKEND } = import.meta.env;

const FormEmail = () => {
  const form = useRef();
  const [submitText, setSubmitText] = useState("Send");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const message = form.current.message.value.trim();
    if (message === "") {
      setErrorMessage("Please enter a non-empty message.");
      return;
    } else {
      setErrorMessage("");
    }

    setSubmitText("Sending...");

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get("nombre"),
      user_email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await axios.post(`${VITE_BACKEND}/email`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSubmitText("Submitted !");
        setTimeout(() => {
          setSubmitText("Send");
          form.current.reset();
        }, 2000);
      } else {
        console.error("Response status:", response.status);
        setSubmitText("Send");
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitText("Send");
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="field">
      <input
        className="infoContact"
        type="text"
        name="nombre"
        placeholder="Full Name"
        pattern=".*\S+.*"
        title="Please enter a non-empty name"
        required
      />
      <input
        className="infoContact"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea name="message" placeholder="Enter Your Message" required />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input id="btSub" type="submit" value={submitText} />
    </form>
  );
};

export default FormEmail;
