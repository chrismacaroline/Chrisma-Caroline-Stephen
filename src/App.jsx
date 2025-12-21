import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import HomeCard from './components/HomeCard';
import './projects.json';
import ProjectsGallery from './components/ProjectGallery';
import Contact from "./components/Contact"
import Links from './components/LInks';
import Footer from './components/footer';
import "./main.css"
import ScrollToTop from "./ScrollToTop";
import UIUXProjectsGallery from './components/UIUXProjectgallery';
function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* basename={`/Chrisma-Caroline-Stephen`} */}
      <div>
        {/* <Header />  */}
        <NavBar />
        {/* <About /> */}
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/projects" element={<ProjectsGallery />} />
          {/* <Route path="/projectdetails" element={<Details  />} /> */}
          <Route path="/project/:projectId" element={<ProjectsGallery />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/uiuxprojects" element={<UIUXProjectsGallery />} />
          <Route path="/uiuxproject/:uiuxprojectid" element={<ProjectsGallery />} />
          <Route path="*" element={<HomeCard />} />
          {/* <Route path="*" element={<HomeCard />} /> */}
        </Routes>
        {/* <Skills/> */}
        <Footer />
      </div>
    </Router>
  );

}

export default App;