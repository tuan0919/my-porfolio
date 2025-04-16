import "./App.css";
import { Routes, Route } from "react-router-dom";

import Expertise from "./components/expertise/Expertise";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProfileTagMarquee from "./components/profileTag-marquee";
import Showcase from "./components/welcome-banner/Showcase";
import Projects from "./components/work/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/projects/Contact";
import Notes from "./components/work/Notes";

function App() {
  return (
    <div className="antialiased bg-white dark:bg-[#0d121c] min-h-screen">
      <Routes>
        {/* Main page components */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Showcase />
              <ProfileTagMarquee />
              <div className="gridLinesBg px-4 md:px-20 flex flex-col gap-8 w-full item">
                <div
                  className="
                w-fit px-3 lg:px-20 
                flex flex-col 
                gap-12 mt-14"
                >
                  <Expertise />
                  <Projects />
                  <Notes />
                  <Contact />
                </div>
              </div>
              <Footer />
            </>
          }
        />
        {/* Resume page as a separate route */}
        <Route
          path="/resume"
          element={
            <>
              <Header />
              <Resume />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
