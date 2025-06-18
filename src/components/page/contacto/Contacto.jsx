import FormEmail from "../../common/formulEmail/FormEmail";
import "./Contacto.scss";
const Contacto = () => {
  return (
    <section className="Contacto-container">
      <h1 className="titulo" style={{fontSize: 25}}>Ponete en contácto</h1>
      <FormEmail/>
    </section>
  );
};

export default Contacto;
