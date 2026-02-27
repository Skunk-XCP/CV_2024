"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container, Button } from "../../ui";
import { brand, nav } from "../../../data";
import styles from "./Navbar.module.css";

const MOBILE_BREAKPOINT = 768;
const MOBILE_MENU_ID = "mobile-nav-panel";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const burgerButtonRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const closeMenu = () => setIsMobileMenuOpen(false);

    const handlePointerDown = (event) => {
      if (!navbarRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        burgerButtonRef.current?.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbar} ref={navbarRef}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <img
            className={styles.logo}
            src="/assets/images/DR-favicon.png"
            alt="Logo Donatien Rouzeirol"
          />
          <div className={styles.brandMeta}>
            <p className={styles.name}>{brand.name}</p>
            <p className={styles.role}>{brand.role}</p>
          </div>
        </div>

        <nav className={styles.links} aria-label="Navigation principale">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.cta}>
          <Button href="#contact" variant="outline" size="sm">
            Démarrer un projet
          </Button>
        </div>

        <button
          ref={burgerButtonRef}
          className={styles.burger}
          type="button"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          onClick={toggleMobileMenu}
        >
          <span className={styles.burgerLine} aria-hidden="true" />
          <span className={styles.burgerLine} aria-hidden="true" />
          <span className={styles.burgerLine} aria-hidden="true" />
        </button>

        <div
          id={MOBILE_MENU_ID}
          className={`${styles.mobilePanel} ${isMobileMenuOpen ? styles.mobilePanelOpen : ""}`.trim()}
          role="menu"
          aria-hidden={!isMobileMenuOpen}
        >
          <Button href="#contact" variant="primary" size="sm" role="menuitem" onClick={closeMobileMenu}>
            Démarrer un projet
          </Button>
          {nav.map((item) => (
            <a
              key={`mobile-${item.href}`}
              href={item.href}
              className={styles.mobileLink}
              role="menuitem"
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
