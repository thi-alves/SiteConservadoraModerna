import { WhyUs, Hero, AboutUs, Services, Schedule, Solution, Testmonials, Articles, Faq, Footer, Contact,WhySolution } from "./components";

function App() {

  return (
    <div className="App overflow-x-hidden scroll-smooth">
      <Hero />
      <WhyUs />
      <WhySolution/>
      <AboutUs />
      <Services />
      <Schedule />
      <Solution />
      <Articles />
      <Contact />
      <Testmonials />
      <Faq />
      <Footer />
    </div>
  )

}

export default App
