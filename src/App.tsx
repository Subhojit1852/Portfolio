// import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import BackgroundParticles from "./components/BackgroundParticles";
import { useEffect, useRef } from "react";



import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";
import Chatbot from "./components/chatbot";

function App() {
  // inside App function
const bgRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;

    if (bgRef.current) {
      const chars = bgRef.current.querySelectorAll(".float-char");
      chars.forEach((char: any, i) => {
        const depth = (i % 5) + 1; // depth variation
        char.style.transform += ` translate(${offsetX * depth}px, ${
          offsetY * depth
        }px)`;
      });
    }
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);
 const chars = [
  "$", "₿", "</>", "{}", "()", "λ", "π", "#", "@", "∞", "∑", "Δ",
  "⟶", "←", "→", "⚡", "🔒", "🧠", "🤖", "💻", "📊", "🌐", "🪙", "⌨️",
  "∂", "~", "`", "ƒ", "μ", "∇", "⊕", "¬", "⩾", "===", "!==", "&&", "||"
];

  const colors = ["#00ffff", "#00ff00", "#ff00ff", "#ffff00", "#ffffff"];

  const floatingSpans = Array.from({ length: 30 }).map((_, i) => {
    const style: React.CSSProperties = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      fontSize: `${14 + Math.random() * 16}px`,
      color: colors[i % colors.length],
      animationDuration: `${10 + Math.random() * 10}s`,
    };

    return (
      <span key={i} className="float-char" style={style} ref={bgRef}>
        {chars[i % chars.length]}
      </span>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Inject floating characters */}
      <div id="floating-bg" style={{ zIndex: -1, position: "fixed" }}>
  {floatingSpans}
</div>


      {/* Content */}
      <Box sx={{ mx: 'auto', px: 5 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </Box>
       <Chatbot />
    </ThemeProvider>
  );
}



export default App;
