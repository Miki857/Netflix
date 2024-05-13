import "./css/Normalize.css";
import "./css/Attributes.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {

  return (
    <main className="main">
      <Hero/>
      <Main/>
      <Footer/>
    </main>
  )
}

export default App
