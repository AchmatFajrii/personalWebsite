import Image from "../../assets/avatar-2.svg"
import AboutBox from "./AboutBox"
import '../../App.css'
const About = () => {
  return (
    <>
    <section className="about containerr section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container grid">
        <img src={Image} className="about-img" alt="" />
        <div className="about-data grid p-[1.875rem] bg-five shadow-lg rounded-xl items-start relative before:content-[''] before:w-0 before:h-0 before:border-t-[10px] before:border-transparent before:border-r-[15px] before:border-five before:absolute before:left-[-0.93rem] before:top-[20%]">
          <div className="about-info">
            <p className="about-description mb-[1rem] text-justify">
              I am Fajri, Web Developer from Madiun, Indonesia. I have rich experience in website design and building and customization, also I am good at WordPress
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about-skill grid" style={{rowGap: '1.25rem'}}>
            <div className="skills-data">
              <div className="skills-titles flex justify-between mb-[1rem]">
                <h3 className="skills-name text-normal-size font-medium">Development</h3>
                <span className="skills-number development leading-[1.2] ">90%</span>
              </div>
              <div className="skills-bar bg-gray-300 h-[7px] rounded-[0.25rem]">
                <span className="skills-percentage h-[7px] rounded-[0.25rem] block w-[90%] bg-red-400"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles flex justify-between mb-[1rem]">
                <h3 className="skills-name text-normal-size font-medium">UI/UX Design</h3>
                <span className="skills-number">80%</span>
              </div>
              <div className="skills-bar bg-gray-300 h-[7px] rounded-[0.25rem]">
                <span className="skills-percentage h-[7px] rounded-[0.25rem] block w-[80%] bg-blue-400"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles flex justify-between mb-[1rem]">
                <h3 className="skills-name text-normal-size font-medium">Photoraphy</h3>
                <span className="skills-number">60%</span>
              </div>
              <div className="skills-bar bg-gray-300 h-[7px] rounded-[0.25rem]">
                <span className="skills-percentage h-[7px] rounded-[0.25rem] block w-[60%] bg-yellow-400"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
    </>
  )
}

export default About