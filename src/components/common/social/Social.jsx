import "./Social.scss";
import 'boxicons'

const Social = () => {
  const openFacebook = () => {
    setTimeout(() => {
      window.open("https://www.facebook.com/vidrialum.empresa");
    }, 100);
  };

  const openInstagram = () => {
    setTimeout(() => {
      window.open("https://www.instagram.com/vidrialum_empresa/");
    }, 100);
  };

  const openWhatsapp = () => {
    setTimeout(() => {
      window.open(
        "https://wa.me/59895733347?text=¡Hola!%20Te%20escribo%20para%20consultarte%20..",
        "_blank"
      );
    }, 100);
  };

  const openGmail = () => {
    setTimeout(() => {
      window.open("mailto:anligi@hotmail.com", "_blank");
    }, 100);
  };

  return (
    <section id="social">
      <ul className="wrapper">
        <li className="icon Facebook" onClick={openFacebook}>
          <span className="tooltip">Facebook</span>
          <span>
            <i className="bx bxl-facebook"></i>
          </span>
        </li>
        <li className="icon Instagram" onClick={openInstagram}>
          <span className="tooltip">Instagram</span>
          <span>
            <i className="bx bxl-instagram"></i>
          </span>
        </li>
        <li
          className="icon Whatsapp"
          id="button-Whatsapp"
          onClick={openWhatsapp}
        >
          <span className="tooltip">Whatsapp</span>
          <span>
            <i className="bx bxl-whatsapp"></i>
          </span>
        </li>
        <li className="icon Gmail" id="button-Gmail" onClick={openGmail}>
          <span className="tooltip">Gmail</span>
          <span>
            <i className="bx bxl-gmail"></i>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Social;
