const AboutBox = () => {
  return (
    <>
      <div className="about-boxes grid mt-[4.35rem]">
        <div className="about-box flex" style={{columnGap : '1.5rem'}}>
          <i className="about-icon icon-fire text-h1-size text-[#dedeea]"></i>
          <div>
            <h3 className="about-title text-[1.875rem]">198</h3>
            <span className="about-subtitle">Project Completed</span>
          </div>
        </div>

        <div className="about-box flex" style={{columnGap : '1.5rem'}}>
          <i className="about-icon icon-cup text-h1-size text-[#dedeea]"></i>
          <div>
            <h3 className="about-title text-[1.875rem]">5670</h3>
            <span className="about-subtitle">Cup of Coffee</span>
          </div>
        </div>

        <div className="about-box flex" style={{columnGap : '1.5rem'}}>
          <i className="about-icon icon-people text-h1-size text-[#dedeea]"></i>
          <div>
            <h3 className="about-title text-[1.875rem]">427</h3>
            <span className="about-subtitle">Satisfied Client</span>
          </div>
        </div>

        <div className="about-box flex" style={{columnGap : '1.5rem'}}>
          <i className="about-icon icon-badge text-h1-size text-[#dedeea]"></i>
          <div>
            <h3 className="about-title text-[1.875rem]">35</h3>
            <span className="about-subtitle">Nominees Winner</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBox;
