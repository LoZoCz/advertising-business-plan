const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-8 text-lg font-roboto">
        <li className="liElement">Strona główna</li>
        <li className="liElement">O nas</li>
        <li className="liElement">Kontakt</li>
      </ul>
    </nav>
  );
};

export default NavBar;
