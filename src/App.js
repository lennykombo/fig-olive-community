import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RedirectPage from "./RedirectPage";
import logo from "./assets/figlogo.png"

function App() {

  function Home() {
    return (
      <div style={containerStyle}>
       
        <img
          src={logo}
          alt="Fig & Olive Logo"
          style={{ width: "250px", marginBottom: "24px" }}
        />
        <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color:'#324b2b' }}>
         Welcome!
        </h1>
        <div style={buttonContainerStyle}>
          <a
            href="https://forms.gle/GCQ5XS6yTs2W9TyY8"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...buttonStyle, backgroundColor: "black" }}
          >
            <span style={textstyle}>Leave a Restaurant Review</span>
          </a>
          <a
            href="https://forms.gle/rdgfnce2zbAjNX8W7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...buttonStyle, backgroundColor: "#fff" }}
          >
            <span style={{...textstyle, color:'black'}}>Leave a Conference Review</span>
          </a>
          <a
            href="https://forms.gle/9Ujacvh86PbKWnCX7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...buttonStyle, backgroundColor: "#8f957e" }}
          >
            <span style={textstyle}>Join the Community</span>
          </a>
        </div>
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
  backgroundColor: "#f3f4f6",
  textAlign: "center",
  flexDirection: "column",
  maxWidth: "400px",
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "90%",
  gap: "12px",
  marginTop: "16px",
};

const textstyle ={
  font: "Poppins",
  fontWeight: 600,
}

const buttonStyle = {
  display: "block",
  width: "80%", // Set button width to 80% to make it look balanced
  maxWidth: "300px", // Prevents stretching on large screens
  padding: "12px",
  fontSize: "16px",
  color: "#fff",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textDecoration: "none",
  textAlign: "center",
};


