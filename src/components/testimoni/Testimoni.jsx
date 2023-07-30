import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
import "../../App.css";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimoni = () => {
  return (
    <>
      <section className="testimoni containerr section">
        <h2 className="section-title">Clients & Reviews</h2>

        <Swiper
          className="testimoni-container grid max-w-[700px] mx-auto"
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {data.map(({ id, image, title, subtitle, comment }) => {
            return (
              <SwiperSlide
                className="testimoni-item text-center"
                key={id}
                style={{ padding: "0 1.25rem 1.25rem" }}
              >
                <div className="thumb h-[5.6rem] w-[5.6rem] mx-auto">
                  <img className="mx-auto" src={image} alt="" />
                </div>
                <h3 className="testimoni-title mt-[0.75rem]">{title}</h3>
                <span className="subtitle text-[#8b88b1] text-small-size">
                  {subtitle}
                </span>
                <div className="comment relative p-[1.875rem] mt-[1.5rem] mb-[2rem] shadow-lg rounded-md">
                  {comment}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimoni;
