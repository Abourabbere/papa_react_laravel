// import {
//   EmergencyShare,
//   ChevronLeft,
//   Home,
//   Info,
//   NewReleases,
//   Settings,
//   ShoppingBag,
//   ShowChart,
// } from "@mui/icons-material";
import React from "react";
import ListeMenu from "../../utils/ListeMenu";
import "./navbar.scss";

function NavbarComponent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        marginLeft: "10px",
      }}
      className="navbar-container"
    >

      <ListeMenu />

      {/* La liste des menues */}
      {/* <ul>
        <h4>Menu</h4>
        <li className="menu-active">
          <Home className="icon" />
          <a href="/">Acceuil</a>
        </li>
        <li>
          <ShoppingBag className="icon" />
          <a href="/">Block</a>
          <ChevronLeft className="show-submenu" />
        </li>
        <li>
          <ShowChart className="icon" />
          <a href="/">Gestion des donnees</a>
        </li>

        <h4 style={{ marginTop: "20px" }}>Information</h4>
        <li>
          <NewReleases className="icon" />
          <a href="/">Nouveaute</a>
        </li>
        <li>
          <Settings className="icon" />
          <a href="/">Mon compte</a>
        </li>
        <li>
          <EmergencyShare className="icon" />
          <a href="/">Localisation</a>
        </li>
        <li>
          <Info className="icon" />
          <a href="/">Aide</a>
        </li>
      </ul> */}
    </div>
  );
}

export default NavbarComponent;
