import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import VehicleRecommendation from "./components/home";
import Footer from "./components/footer";
import WelcomePage from "./components/welcome";
import Aboutus from "./components/aboutUs";
import doodle from "./components/assets/doodle.jpg";

function App() {
  return (
    <Router>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${doodle})`,
          backgroundAttachment: "fixed",  // Keeps the background fixed during scroll
        }}
      >
        <Navbar />
        <main className="flex-grow bg-white bg-opacity-70 p-8 mt-4 rounded-lg min-h-[70vh]">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/select-car" element={<VehicleRecommendation />} />
            <Route path="/about" element={<Aboutus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
