import Data from "./Data";
import Card from "./Card";
const Resume = () => {
  return (
    <>
      <section id="resume" className="resume containerr section">
        <h2 className="section-title">Experience</h2>

        <div className="resume-container grid">
          <div className="timeline grid shadow-lg p-[1.875rem] rounded-lg relative">
            {Data.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
            })}
          </div>

          <div className="timeline grid shadow-lg p-[1.875rem] rounded-lg relative">
            {Data.map((val, index) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={index}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
