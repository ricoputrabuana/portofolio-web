import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail"; // sesuaikan path kalau lokasi filenya beda

function HomePage() {
  const { hash } = useLocation();

  // Saat pindah dari halaman lain (mis. project detail) ke "/" dengan hash
  // (mis. "/#projects"), scroll ke section yang dituju setelah render selesai.
  useEffect(() => {
    if (!hash) return;
    // Delay singkat supaya elemen sudah ter-render di DOM sebelum di-scroll.
    const id = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return () => clearTimeout(id);
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-ink">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
