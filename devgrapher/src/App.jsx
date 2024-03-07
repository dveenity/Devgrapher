import Routing from "./Components/Custom/Routing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectOne from "./Components/Projects/ProjectOne";
import AboutMe from "./Components/About/AboutMe";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Routing />} />
          <Route path="/projectOne" element={<ProjectOne />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
