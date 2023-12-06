import heroImg from "../assets/gamer.svg";

const HeroSect = () => {
  return (
    <section
      data-sect="hero-sect"
      className="grid grid-cols-2 gap-8 place-items-center h-[calc(100vh-6rem)]"
    >
      <div data-info="text-sect" className="px-12">
        <h1 className="gradient-title">Witaj na GamerMaster Pro</h1>
        <p className="normal-text">
          Miejsce, gdzie pasja do gier spotyka się z profesjonalizmem esportu!
          Jesteśmy dedykowani rozwijaniu talentów graczy, organizacji turniejów
          i tworzeniu społeczności entuzjastów. Przekonaj się, dlaczego
          GamersMasterPro to najlepsze miejsce dla Twojej esportowej przygody!
        </p>
      </div>
      <div data-info="hero-image" className="relative">
        <img src={heroImg} alt="gamer image" width={700} />
        <span
          className="animated-border absolute bg-purple-500 w-4/5 aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          style={{ borderRadius: "77% 23% 73% 27% / 50% 56% 44% 50%" }}
        ></span>
      </div>
    </section>
  );
};

export default HeroSect;
