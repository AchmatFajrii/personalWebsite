import Image1 from "../../assets/blog-1.svg"
import Image2 from "../../assets/blog-2.svg"
import Image3 from "../../assets/blog-3.svg"
import '../../App.css'
const Blog = () => {
  return (
   <>
   <section id="blog" className="blog containerr section">
      <h2 className="section-title">Latest Post</h2>

      <div className="blog-container grid">
        <div className="blog-card shadow-md rounded-lg overflow-hidden">
          <div className="blog-thumb relative overflow-hidden">
            <a href=""><span className="blog-category text-small-size">Reviews</span></a>
            <a href=""><img src={Image1} alt="" className="blog-img scale-[1] duration-[.3s]" /></a>
          </div>
        <div className="blog-detail p-[1.25rem]">
          <h3 className="blog-title text-h3-size mb-[0.5rem]">5 Best App Development Tool for Your Projects</h3>
          <div className="blog-meta flex text-small-size text-[#8b88b1]" style={{columnGap: '0.6rem'}}></div>
          <span>09 February, 2022</span>
          <span className="blog-dot font-bold">.</span>
          <span>Bolby</span>
        </div>
        </div>

        <div className="blog-card shadow-md rounded-lg overflow-hidden">
          <div className="blog-thumb relative overflow-hidden">
            <a href=""><span className="blog-category  text-small-size">Tutorial</span></a>
            <a href=""><img src={Image2} alt="" className="blog-img scale-[1] duration-[.3s]" /></a>
          </div>
        <div className="blog-detail p-[1.25rem]">
          <h3 className="blog-title text-h3-size mb-[0.5rem]">Common Misconceptions About Payment</h3>
          <div className="blog-meta flex text-small-size text-[#8b88b1]" style={{columnGap: '0.6rem'}}></div>
          <span>07 February, 2022</span>
          <span className="blog-dot">.</span>
          <span>Bolby</span>
        </div>
        </div>

        <div className="blog-card shadow-md rounded-lg overflow-hidden">
          <div className="blog-thumb relative overflow-hidden">
            <a href=""><span className="blog-category  text-small-size">Business</span></a>
            <a href=""><img src={Image3} alt="" className="blog-img scale-[1] duration-[.3s]" /></a>
          </div>
        <div className="blog-detail p-[1.25rem]">
          <h3 className="blog-title text-h3-size mb-[0.5rem]">3 Things to know about startup business</h3>
          <div className="blog-meta flex text-small-size text-[#8b88b1]" style={{columnGap: '0.6rem'}}></div>
          <span>05 February, 2022</span>
          <span className="blog-dot">.</span>
          <span>Bolby</span>
        </div>
        </div>
      </div>
   </section>
   </>
  )
}

export default Blog