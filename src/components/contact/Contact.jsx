import "../../App.css"
const Contact = () => {
  return (
    <>
      <div id="contact" className="contact containerr section">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container grid">
          <div className="contact-info">
            <h3 className="contact-title text-h3-size mb-[0.5rem]">Lets talk about everything!</h3>
            <p className="contact-detail">
              Dont like forms? Send me an email. 👋
            </p>
          </div>
          <form action="" className="contact-form">
            <div className="contact-form-group grid">
              <div className="contact-form-div relative mb-[1.875rem] h-[3.75rem]">
                <input
                  type="text"
                  placeholder="Insert your name"
                  className="contact-form-input absolute top-0 left-0 w-full h-full shadow-md border-none outline-none rounded-lg py-[0.625rem] px-[1.875rem] z-[1]"
                />
              </div>

              <div className="contact-form-div relative mb-[1.875rem] h-[3.75rem]">
                <input
                  type="email"
                  placeholder="Insert your email"
                  className="contact-form-input absolute top-0 left-0 w-full h-full shadow-md border-none outline-none rounded-lg py-[0.625rem] px-[1.875rem] z-[1]"
                />
              </div>
            </div>
            <div className="contact-form-div relative mb-[1.875rem] h-[3.75rem]">
                <input
                  type="text"
                  placeholder="Insert your subject"
                  className="contact-form-input absolute top-0 left-0 w-full h-full shadow-md border-none outline-none rounded-lg py-[0.625rem] px-[1.875rem] z-[1]"
                />
              </div>
            <div className="contact-form-div relative mb-[1.875rem] h-[10.25rem]">
              <textarea name="" id="" cols="30" rows="10" placeholder="Write tour message"
                  className="contact-form-input absolute top-0 left-0 w-full h-full shadow-md border-none outline-none rounded-lg py-[0.625rem] px-[1.875rem] z-[1] resize-none"></textarea>
              </div>
              <button type="submit" className="bg-primary py-[0.75rem] px-[2rem] leading-[1] rounded-full shadow-md border-[1px] border-solid border-transparent text-white inline-block font-bold">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
