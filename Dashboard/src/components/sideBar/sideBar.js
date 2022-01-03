import React from "react";
import LogoOLA from "../../assets/img/OLA-Logo_Mesa de trabajo 1.png";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon d-flex">
          <img className="w-100" src={LogoOLA} alt="OLA" />
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard Otro Lo Arregla</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Data</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" href="/">
          <i className="fas fa-fw fa-folder"></i>
          <span>Usuarios</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="/">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Profesionales</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="/">
          <i className="fas fa-fw fa-table"></i>
          <span>Categorías</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
