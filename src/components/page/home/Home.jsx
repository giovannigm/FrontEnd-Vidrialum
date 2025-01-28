import Footer from "../../layout/footer/Footer";
import NavBar from "../../layout/navBar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="Home">
        <h1>Bienvenidos a VIDRIALUM</h1>
        {/* <h2>Empresa uruguaya de aperturas en aluminio</h2>  */}
        <div className="wave">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            width={"100%"}
            height={"100%"}
          >
            <path
              d="M-14.39,74.50 C262.69,157.39 277.93,23.19 508.17,105.09 L500.00,150.00 L-13.82,162.33 Z"
              fill="#fff"
              stroke="none"
            ></path>
          </svg>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
