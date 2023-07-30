import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
const Home = () => {
  return (
    <>
      <section id="home" className="home containerr relative min-h-screen flex items-center justify-center">
        <div className="intro z-[1]" style={{textAlign: 'center', maxWidth: '540px'}}>
          <img src={Me} alt="" className="home-img mx-auto mb-[1.5rem]" style={{ height: 'auto', verticalAlign: 'middle'}} />
          <h1 className="home-name text-h1-size font-bold mb-[0.5rem]">Achmat Fajri</h1>
          <span className="home-education">Im a Front-End Developer</span>
          <HeaderSocials />
          <a href="#contact" className="btn">
            Hire Me
          </a>
          <ScrollDown />
        </div>
        <Shapes/>
      </section>
    </>
  );
};

export default Home;
