import Menu from "./Menu"
import "../../App.css"
import { useState } from "react"
const Portfolio = () => {
  const [items, setItems] = useState(Menu)
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <>
      <section id="work" className="work containerr section">
      <h2 className="section-title">Recent Works</h2>

<div className="work-filters flex flex-wrap items-center mb-[2.5rem]">
  <span className="work-item cursor-pointer font-bold transition-all ease-in-out hover:text-primary" onClick={() => setItems(Menu)}>Everything</span>
  <span className="work-item cursor-pointer font-bold transition-all ease-in-out hover:text-primary" onClick={() => filterItem("Creative")}>Creative</span>
  <span className="work-item cursor-pointer font-bold transition-all ease-in-out hover:text-primary" onClick={() => filterItem("Art")}>Art</span>
  <span className="work-item cursor-pointer font-bold transition-all ease-in-out hover:text-primary" onClick={() => filterItem("Design")}>Design</span>
  <span className="work-item cursor-pointer font-bold transition-all ease-in-out hover:text-primary" onClick={() => filterItem("Branding")}>Branding</span>
</div>

<div className="work-container grid">
  {items.map((elem) => {
    const{id, image, title, category} = elem;
    return(
      <div className="work-card relative overflow-hidden rounded-lg shadow-lg" key={id}>
        <div className="work-thumbnail">
          <img src={image} alt="" className="work-img" />
          <div className="work-mask bg-blue-400 absolute left-0 top-0 h-full w-full duration-[.3s] opacity-0"></div>
        </div>

        <span className="work-category text-white bg-primary rounded-bl-[0.98rem] rounded-br-[0.98rem] absolute top-0 left-[1.5rem] text-small-size inline-block py-[0.19rem] px-[0.625rem] translate-y-[-40px] duration-[.3s]">{category}</span>
        <h3 className="work-title text-white text-h3-size py-0 px-[1.25rem] absolute top-[3.75rem] translate-y-[30px] duration-[.3s] opacity-0" style={{margin: '0 0 0.98rem'}}>{title}</h3>
        <a href="" className="work-button text-white absolute bottom-[1.5rem] left-[1.5rem] text-h3-size block bg-yellow-400 h-[40px] w-[40px] cursor-pointer rounded-[50%] text-center leading-[42px] duration-[.3s] opacity-0">
          <i className="icon-link work-button-icon"></i>
        </a>
      </div>
    )
  })}
</div>
      </section>
     
    </>
  )
}

export default Portfolio