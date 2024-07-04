import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Ser from "./components/Ser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />}>
          <Route path="serv" element={<h1>Hello SERV</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
