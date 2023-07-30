import Image1 from "../../assets/price-1.svg"
import Image2 from "../../assets/price-2.svg"
import Image3 from "../../assets/price-3.svg"
const Pricing = () => {
  return (
    <>
    <div className="pricing containerr section">
      <h2 className="section-title">Pricing Plans</h2>

      <div className="pricing-container grid items-center">
        <div className="pricing-item py-[1.875rem] px-[2.5rem] bg-white text-center rounded-lg shadow-lg">
          <img src={Image1} alt="" className="pricing-img mx-auto" />
          <h3 className="pricing-plan font-semibold my-[1.25rem] mx-0 text-h2-size">Basic</h3>
          <p className="pricing-title mb-[1rem]">A Simple option but powerful to manage your business</p>
          <p className="pricing-support mb-[1rem]">Email support</p>
          <h3 className="price font-bold text-h1-size">
            <em className="text-small-size mr-[0.5rem] align-super">$</em> 9 <span className="font-[400] text-normal-size ml-[0.75rem]">Month</span>
          </h3>
          <a href="" className="btn mt-[1.25rem]">Get Started</a>
        </div>

        <div className="pricing-item-best py-[3.4rem] px-[2.5rem] relative z-[1] bg-white text-center rounded-lg shadow-lg">
          <span className="badge absolute left-0 top-[2.6rem] text-[#fff] bg-[#6c6ce5] rotate-[-90deg] py-[.25rem] px-[.75rem] text-small-size rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none">Recommended</span>
          <img src={Image2} alt="" className="pricing-img mx-auto" />
          <h3 className="pricing-plan font-semibold my-[1.25rem] mx-0 text-h2-size">Premium</h3>
          <p className="pricing-title mb-[1rem]">Unlimited product including app integration and more features</p>
          <p className="pricing-support mb-[1rem]">Mon-Fri support</p>
          <h3 className="price font-bold text-h1-size">
            <em className="text-small-size mr-[0.5rem] align-super">$</em> 15 <span className="font-[400] text-normal-size ml-[0.75rem]">Month</span>
          </h3>
          <a href="" className="btn mt-[1.25rem]">Get Started</a>
        </div>

        <div className="pricing-item py-[1.875rem] px-[2.5rem] bg-white text-center rounded-lg shadow-lg">
          <img src={Image3} alt="" className="pricing-img mx-auto" />
          <h3 className="pricing-plan font-semibold my-[1.25rem] mx-0 text-h2-size">Ultimate</h3>
          <p className="pricing-title mb-[1rem]">A wise option for large companies and individuals</p>
          <p className="pricing-support mb-[1rem]">24/7 support</p>
          <h3 className="price font-bold text-h1-size">
            <em className="text-small-size mr-[0.5rem] align-super">$</em> 19 <span className="font-[400] text-normal-size ml-[0.75rem]">Month</span>
          </h3>
          <a href="" className="btn mt-[1.25rem]">Get Started</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pricing