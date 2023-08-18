import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Profilepic from "./Components/Profilepic";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import Services from "./Components/Services";
import Progressbar from "./Components/Progressbar";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div
        className="ml-[90px]  
      grid grid-cols-1 md:grid-cols-3
      "
      >
        <div className="col-span-2 p-5 mt-[90px] bg-black">
          <Introduction />
          <About />
          <Services />
          <div className="mt-10">
            <Contact />
            <Skills />
          </div>
        </div>
        <div>
          <Progressbar />
          <Profilepic />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
