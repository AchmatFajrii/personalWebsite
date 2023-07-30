import "./App.css"
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Service"
import Resume from "./components/resume/Resume"
import Portfolio from "./components/portfolio/Portfolio"
import Pricing from "./components/pricing/Pricing"
import Testimoni from "./components/testimoni/Testimoni"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main ml-[110px]">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimoni />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default App
