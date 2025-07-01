import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/figlogo.png"

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = "https://forms.gle/HctjY3pZadfUZRLf7";
  }, [navigate]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <meta httpEquiv="refresh" content="0;url=https://forms.gle/HctjY3pZadfUZRLf7" />
      <img src={logo} alt="Redirecting" style={{ width: "200px", height: "auto", marginBottom: "20px" }} />
      <p>Welcome to The Fig & Olive Community...</p>
    </div>
  );
};

export default RedirectPage;