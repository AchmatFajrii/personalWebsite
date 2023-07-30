import "../../App.css"
const Card = (props) => {
  return (
    <>
    <div className="timeline-item relative pl-[3.125rem] pb-[3.125rem]">
        <i className={props.icon}></i>
        <span className="timeline-date text-[#8b88b1] text-small-size">{props.year}</span>
        <h3 className="timeline-title text-h3-size my-[0.5rem] mx-0">{props.title}</h3>
        <p className="timeline-text">{props.desc}</p>
    </div>
    </>
  )
}

export default Card