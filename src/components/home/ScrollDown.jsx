import "./scroll.css"
const ScrollDown = () => {
  return (
    <>
      <div className="scroll-down absolute bottom-[2.5rem] left-0 w-full">
        <a href="" className="mouse-wrapper">
          <span className="home-scroll-name text-small-size">Scroll Down</span>
          <span className="mouse border-2 border-[#454360] block h-[1.6rem] w-[1.25rem] m-auto mt-[.75rem] rounded-[1rem] relative">
            <span className="wheel bg-third rounded-[100%] w-[0.25rem] h-[0.25rem] absolute top-[.5rem] left-[50%] translate-x-[-50%]"></span>
          </span>
        </a>
      </div>
    </>
  );
};

export default ScrollDown;
