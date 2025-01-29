import imgFlag from "../../../assets/Flag-uruguay.png";
import Social from "../../common/social/Social";
import "./Footer.scss";
import imgEmpresa from "../../../assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="contact-container">
        <article className="information-contact">
          <div className="img-container">
            <img
              src={imgEmpresa}
              alt="Imagen de empresa"
              width={"200px"}
              height={"200px"}
            />
          </div>
          <p>
            I'm always available in my inbox! If you have any questions,
            exciting ideas or just want to say hello, I'll be happy to listen
            and respond! Feel free to contact me anytime and I look forward to
            our conversation!
          </p>
          <section className="contact">
            <h3 className="HeaderTitle">Informacion de contacto</h3>
            <Social />
            <div className="container-email">
              <a data-send-email="Send Email" href="mailto:anligi@hotmail.com">
                anligi@hotmail.com
              </a>
            </div>
            <div className="container-phone">
              <img
                src={imgFlag}
                alt="flag-uruguay"
                width={"40px"}
                height={"40px"}
              />
              <a
                href="tel:+59895733347"
                data-call-uruguay="Call Uruguay"
                className="number-Phone"
              >
                (+598) 95 733 347
              </a>
            </div>
          </section>
          {/* <Social /> */}
        </article>
        <aside className="email-contact">
          {/* <FormEmail /> */}

          {/* <div className="google-maps"> */}
          {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13108.759916630317!2d-56.046781378538434!3d-34.77599238271203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a028f3315a4079%3A0x8a2c35373ede2234!2sVidrialum!5e0!3m2!1ses-419!2suy!4v1574455048321!5m2!1ses-419!2suy"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              title="Vidrialum Location"
            ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.193371488166!2d-56.046771510139806!3d-34.775906972088265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a028f3315a4079%3A0x8a2c35373ede2234!2sVidrialum!5e0!3m2!1ses!2suy!4v1737610917347!5m2!1ses!2suy"
            width="350"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            title="Vidrialum Location"
          ></iframe>
          {/* </div> */}
        </aside>
        <div className="text-contact">
          <p>Vidrialum - Montevideo, Uruguay © {currentYear}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
