import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="flex justify-between items-start px-12 bg-gray-950 mt-20 py-8">
      <Logo size="1.125rem" />
      <section data-sect="foot-sect" className="flex gap-12">
        <ul className="grid gap-2">
          <li>
            <a href="" className="text-purple-200 hover:underline">
              Kontakt
            </a>
          </li>
          <li>
            <a href="" className="text-purple-200 hover:underline">
              Turnieje
            </a>
          </li>
          <li>
            <a href="" className="text-purple-200 hover:underline">
              Zapisy
            </a>
          </li>
          <li>
            <a href="" className="text-purple-200 hover:underline">
              Adres
            </a>
          </li>
        </ul>
        <ul className="grid gap-2">
          <li>
            <a href="" className="text-purple-200 hover:underline">
              Tiktok
            </a>
          </li>
          <li>
            <a href="" className="text-purple-200 hover:underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="" className="text-purple-200 hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="" className="text-purple-200 hover:underline">
              Youtube
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
