import axios from "axios";
const { VITE_BACKEND } = import.meta.env;

///----Instancia para conectarse al backend----///
const apiClient = axios.create({
  baseURL: VITE_BACKEND, // Reemplaza con tu URL real
  headers: {
    "Content-Type": "application/json",
  },
});

// ####### Servicio para Email #######
export const emailService = {
  sendEmail: async (formData) => {
    try {
      const response = await apiClient.post(`/email`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Error al enviar el email."
      );
    }
  },
};
