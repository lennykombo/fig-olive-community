import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RedirectPage from "./RedirectPage";
import logo from "./assets/figlogo.png"

function App() {

  function Home() {
     const logoRef = useRef(null);
     const textRef = useRef(null);
     const smokeRef = useRef(null);

      useEffect(() => {
    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { y: -100, scale: 0.2, rotation: 0, opacity: 0 },
      { y: 0, scale: 1, rotation: 720, opacity: 1, duration: 1.2, ease: "bounce.out" }
    );

    // Welcome text stagger animation (delay slightly to start after logo)
   gsap.fromTo(
  textRef.current.querySelectorAll(".letter"),
  { y: -50, rotation: -360, opacity: 0 }, // start above and rotated
  { 
    y: 0, 
    rotation: 0, 
    opacity: 1, 
    stagger: 0.1,   // delay between letters
    duration: 0.6, 
    ease: "bounce.out", // bounce as they land
    delay: 1.1
  }
);

  }, []);


useEffect(() => {
  // Button 1: slide from left then bounce
  gsap.fromTo(".btn1",
    { x: "-120%", opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "bounce.out", 
      delay: 1.8 
    }
  );

  // Button 2: slide from right then bounce
  gsap.fromTo(".btn2",
    { x: "120%", opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "bounce.out", 
      delay: 2.1 
    }
  );

  // Button 3: slide from left then bounce
  gsap.fromTo(".btn3",
    { x: "-120%", opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 1, 
      ease: "bounce.out", 
      delay: 2.8 
    }
  );
}, []);


    return (
      <div style={containerStyle}>
        <img
        ref={logoRef}
        src={logo}
        alt="Fig & Olive Logo"
        style={{
        width: "60%",       // responsive
        maxWidth: "250px",  // cap size
        marginBottom: "14px",
        zIndex: 1,
        position: "relative",
       }}
     />


<h1 ref={textRef}>
  {"Welcome!".split("").map((char, index) => (
    <span
      key={index}
      className="letter"
      style={{ display: "inline-block", opacity: 0 }}
    >
      {char}
    </span>
  ))}
</h1>

        <div style={buttonContainerStyle}>
        <a  href="https://forms.gle/GCQ5XS6yTs2W9TyY8"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn1" 
            style={{ ...buttonStyle, backgroundColor: "black" }}>
              <span style={textstyle}>Leave a Restaurant Review</span>
       </a>
        <a href="https://forms.gle/rdgfnce2zbAjNX8W7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn2" 
            style={{ ...buttonStyle, backgroundColor: "#fff", color: "black" }}>
              <span style={{...textstyle, color:'black'}}>Leave a Conference Review</span>
       </a>
        <a href="https://forms.gle/9Ujacvh86PbKWnCX7"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn3" 
            style={{ ...buttonStyle, backgroundColor: "#8f957e" }}>
              <span style={textstyle}>Join the Community</span>
       </a>
      </div>

      {/* Smoke behind buttons 
      <div ref={smokeRef} style={smokeStyle}></div>*/}
      </div>
   
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-redirect" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  maxWidth: "100%",
  overflowX: "hidden",
  backgroundColor: "#f3f4f6",
  textAlign: "center",
  flexDirection: "column",
  boxSizing: "border-box"
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "90%",
  gap: "12px",
  marginTop: "16px",
  zIndex: 3,
};

const textstyle ={
  font: "Poppins",
  fontWeight: 600,
}

const buttonStyle = {
  display: "block",
  width: "80%",
  maxWidth: "300px",
  padding: "12px",
  fontSize: "16px",
  color: "#fff",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  textDecoration: "none",
  textAlign: "center",
  opacity: 0,
};




