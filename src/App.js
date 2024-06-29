import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Ciljevi from "./pages/Ciljevi";
import Struktura from "./pages/Struktura";
import Statut from "./pages/Statut";
import Kontakt1 from "./pages/Kontakt1";
import Clan from "./pages/Clan";
import Prava from "./pages/Prava";
import Pomoc from "./pages/Pomoc";
import RTRS from "./pages/RTRS";
import Kontakt2 from "./pages/Kontakt2";
import Drzava from "./pages/Drzava";
import Institucije from "./pages/Institucije";
import Pitanja from "./pages/Pitanja";
import Konsultacije from "./pages/Konsultacije";
import Vijesti from "./pages/Vijesti";
import Dokumenti from "./pages/Dokumenti";
import Dokument1 from "./pages/Dokument1";
import Dokument2 from "./pages/Dokument2";
import Dokument3 from "./pages/Dokument3";
import Dokument4 from "./pages/Dokument4";
import Vijesti1 from "./pages/Vijesti1";
import Vijesti2 from "./pages/Vijesti2";
import Vijesti3 from "./pages/Vijesti3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onama" element={<About />} />
          <Route path="/ciljevi" element={<Ciljevi />} />
          <Route path="/struktura" element={<Struktura />} />
          <Route path="/statut" element={<Statut />} />
          <Route path="/kontakt1" element={<Kontakt1 />} />
          <Route path="/clan" element={<Clan />} />
          <Route path="/prava" element={<Prava />} />
          <Route path="/pomoc" element={<Pomoc />} />
          <Route path="/rtrs" element={<RTRS />} />
          <Route path="/kontakt2" element={<Kontakt2 />} />
          <Route path="/drzava" element={<Drzava />} />
          <Route path="/institucije" element={<Institucije />} />
          <Route path="/pitanja" element={<Pitanja />} />
          <Route path="/konsultacije" element={<Konsultacije />} />
          <Route path="/vijesti" element={<Vijesti />} />
          <Route path="/dokumenti" element={<Dokumenti />} />
          <Route path="/dokument1" element={<Dokument1 />} />
          <Route path="/dokument2" element={<Dokument2 />} />
          <Route path="/dokument3" element={<Dokument3 />} />
          <Route path="/dokument4" element={<Dokument4 />} />
          <Route path="/vijesti1" element={<Vijesti1 />} />
          <Route path="/vijesti2" element={<Vijesti2 />} />
          <Route path="/vijesti3" element={<Vijesti3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
