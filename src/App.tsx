import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"
import Home from "./components/Home";
import Blog from "./components/Blog";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="DevVerse"/>} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
