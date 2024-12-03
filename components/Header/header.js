import React from "react";
import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/men">
                Mens
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/women"
              >
                Womens
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/kids"
              >
                Kids
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/cart"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
