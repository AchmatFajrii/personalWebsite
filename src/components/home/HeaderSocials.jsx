import '../../App.css'
const HeaderSocials = () => {
  return (
    <>
      <div className="home-socials flex gap-x-[1.75rem] mb-[1.5rem] mt-[1.5rem]">
        <a href="" className="home-social-link text-secondary text-[1.3rem] hover:text-yellow-500" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="" className="home-social-link text-secondary text-[1.3rem] hover:text-yellow-500" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="" className="home-social-link text-secondary text-[1.3rem] hover:text-yellow-500" target="_blank">
          <i className="fa-brands fa-behance"></i>
        </a>
        <a href="" className="home-social-link text-secondary text-[1.3rem] hover:text-yellow-500" target="_blank">
          <i className="fa-brands fa-dribbble"></i>
        </a>
        <a href="" className="home-social-link text-secondary text-[1.3rem] hover:text-yellow-500" target="_blank">
          <i className="fa-brands fa-pinterest"></i>
        </a>
      </div>
    </>
  );
};

export default HeaderSocials;
