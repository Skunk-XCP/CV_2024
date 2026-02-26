import React from "react";
import { Container, Button } from "../../ui";
import { brand, nav } from "../../../data";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo} aria-hidden="true">FN</span>
          <div>
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
            Demarrer un projet
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
