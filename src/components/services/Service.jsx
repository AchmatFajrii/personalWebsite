import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX Design",
    description: "lorem ipsum dolor sit amet consectutuer adipiscing elit aenean commodo ligula eget"
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description: "lorem ipsum dolor sit amet consectutuer adipiscing elit aenean commodo ligula eget"
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description: "lorem ipsum dolor sit amet consectutuer adipiscing elit aenean commodo ligula eget"
  },
];

const Service = () => {
  return (
    <>
    <section id="services" className="services containerr section">
      <h2 className="section-title">Services</h2>

      <div className="services-container grid">
        {data.map(({id, image, title, description})=>{
          return(
            <div className="services-card text-center p-[1.875rem] rounded-lg shadow-lg bg-five transition-all duration-[0.3s] ease-in-out hover:translate-y-[-10px]" key={id} >
              <img src={image} className="services-img m-auto mb-[1.25rem]" alt="" />

              <h3 className="services-title text-h3-size font-semibold mb-[1rem]">{title}</h3>
              <p className="services-description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Service