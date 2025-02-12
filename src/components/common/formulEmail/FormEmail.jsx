import React, { useRef, useState } from "react";
import "./FormEmail.scss";
import { emailService } from "../../../Api/axiosInstance";

const FormEmail = () => {
  const form = useRef();
  const [submitText, setSubmitText] = useState("enviar");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const message = form.current.message.value.trim();
    if (message === "") {
      setErrorMessage("Por favor ingrese un mensaje que no esté vacío.");
      return;
    } else {
      setErrorMessage("");
    }

    setSubmitText("Enviando...");

    // Crear FormData correctamente
    const formData = new FormData(form.current);

    try {
      // Enviar el FormData al backend
      const response = await emailService.sendEmail(formData);

      if (response.status === 200) {
        setSubmitText("Enviado!");
        setTimeout(() => {
          setSubmitText("enviar");
          form.current.reset();
        }, 2000);
      } else {
        console.error("Response status:", response.status);
        setSubmitText("enviar");
        setErrorMessage(
          "No se pudo enviar el mensaje. Por favor inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitText("enviar");
      setErrorMessage("Se produjo un error. Por favor inténtalo de nuevo.");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="field"
      encType="multipart/form-data"
    >
      <input
        className="infoContact"
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
      />
      <input
        className="infoContact"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea name="message" placeholder="Ingrese su mensaje" required />
      <input className="fileClass" type="file" name="file" />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input id="btSub" type="submit" value={submitText} />
    </form>
  );
};

export default FormEmail;
