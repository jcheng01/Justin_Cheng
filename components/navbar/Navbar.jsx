import Image from "next/image";
import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <nav>
      <div
        className={`${styles.navBar} ${
          isScrolled ? styles.navfloat : styles.test
        }`}
      >
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          duration={100}
        >
          <Image src="/apple-touch-icon.png" height="45" width="45" alt="/" />
        </Link>
        <div className={styles.navBarEnd}>
          <ul className={styles.menuItems}>
            <Link
              className={styles.navItem}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={20}
            >
              <li>
                <span>01.</span>About
              </li>
            </Link>
            <Link
              className={styles.navItem}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={20}
            >
              <li>
                <span>02.</span>Projects
              </li>
            </Link>
            <Link
              className={styles.navItem}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={20}
            >
              <li>
                <span>03.</span>Contact
              </li>
            </Link>
            <a
              href="/cheng2025.pdf"
              target="_blank"
              alt="resume file"
              className={styles.btn}
            >
              Resume
            </a>
          </ul>
        </div>
        <div className={styles.hamburgerMenu}>
          <Hamburger toggled={isOpen} toggle={handleClick} />
          <div
            className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`}
          >
            <ul className={styles.menuItems} onClick={handleClick}>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={100}
              >
                <Image
                  src="/apple-touch-icon.png"
                  height="45"
                  width="45"
                  alt="/"
                />
              </Link>
              <hr />
              <Link
                className={styles.navItem}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={100}
              >
                <li>
                  <span>01.</span>About
                </li>
              </Link>
              <Link
                className={styles.navItem}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
              >
                <li>
                  <span>02.</span>Projects
                </li>
              </Link>
              <Link
                className={styles.navItem}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
              >
                <li>
                  <span>03.</span>Contact
                </li>
              </Link>
              <br />
              <a
                href="/public/cheng2025.pdf"
                target="_blank"
                alt="resume file"
                className={styles.btn}
                onClick={handleClick}
              >
                Resume
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
