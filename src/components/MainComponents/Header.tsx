import Logo from "../Logo";
import NavBar from "../NavBar";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldHaveBackground = scrollTop > 5; // Ustawia, czy header powinien mieć tło

      setIsScrolled(shouldHaveBackground);
    };

    // Dodajemy nasłuchiwanie zdarzeń przewijania strony
    window.addEventListener("scroll", handleScroll);

    // Czyścimy nasłuchiwanie zdarzeń po odmontowaniu komponentu
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-50 sticky top-0 w-full flex justify-between items-center px-12 h-24 transition-all ${
        isScrolled ? "bg-gray-900/70" : ""
      }`}
    >
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
