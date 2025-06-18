import React, { useRef, useState } from "react";
import "./FormEmail.scss";
import { emailService } from "../../../Api/axiosInstance";
import { FaTrash } from "react-icons/fa";

const FormEmail = () => {
  const form = useRef();
  const [submitText, setSubmitText] = useState("enviar");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (form.current) {
      form.current.file.value = "";
    }
  };

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
    if (!selectedFile) {
      formData.delete("file");
    }

    try {
      // Enviar el FormData al backend
      const response = await emailService.sendEmail(formData);

      if (response.status === 200) {
        setSubmitText("Enviado!");
        setTimeout(() => {
          setSubmitText("enviar");
          form.current.reset();
          setSelectedFile(null);
        }, 2000);
      } else {
        console.log("Response:", response.data);
        setSubmitText("enviar");
        setErrorMessage(`${response.data}`);
      }
    } catch (error) {
      if (error.status === 400) {
        setErrorMessage(error.response.data);
      }
      if (error.status >= 500) {
        setErrorMessage(error.response.data?.message);
      }
      console.log("Error:", error);
      setSubmitText("enviar");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="field"
      encType="multipart/form-data"
      style={{ background: "none", boxShadow: "none" }}
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

      <label className="fileClass">
        Adjuntar archivos 📎
        <input
          type="file"
          name="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>

      {selectedFile && (
        <div style={{ width: "40%", alignItems: "center" }}>
          <span className="file-chip__icon">✔️</span>
          <span
            className="file-chip__name"
            style={{
              display: "inline-block",
              maxWidth: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
            }}
            title={selectedFile.name}
          >
            {selectedFile.name}
          </span>
          <button
            type="button"
            className="file-chip"
            style={{
              border: "none",
              background: "none",
              fontSize: "1rem",
            }}
            onClick={removeFile}
          >
            <FaTrash />
          </button>
        </div>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input id="btSub" type="submit" value={submitText} />
    </form>
  );
};

export default FormEmail;
