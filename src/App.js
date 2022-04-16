import React from "react";
import "./App.css";
import NavLink from "./components/Navbar/NavLink";
import CardPages from "./components/Card/CardPages";
import CardShow from "./components/Card/CardShow";
import FooterCard from "./components/Card/FooterCard";
function App() {
  return (
    <div className="conteiner">
      <NavLink />
      <CardPages />
      <CardShow />
      <FooterCard />
    </div>
  );
}

export default App;
