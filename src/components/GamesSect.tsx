import lolImage from "../assets/lolImage.jpg";
import dotaImage from "../assets/dotaImage.jpg";
import csImage from "../assets/csImage.png";
import valoImage from "../assets/valoImage.webp";

const GamesSect = () => {
  return (
    <section data-sect="games-sect">
      <h1 className="gradient-title">Adrenalina oraz umiejętności</h1>
      <p className="normal-text mb-8">
        Z nami wkraczasz w świat esportowych hitów! Dołącz do nas i odkryj, z
        jakimi grami mamy do czynienia. Od dynamicznych strzelanek po epickie
        strategie - GamersMasterPro to miejsce, gdzie rodzą się prawdziwi
        mistrzowie gier.
      </p>
      <div className="grid grid-cols-4 px-20 gap-6 h-[24rem]">
        <div className="-skew-x-[18deg] bg-red-500 overflow-hidden relative group">
          <img src={lolImage} alt="game image" className="skew-image" />
          <h2 className="skew-text">League of Legends</h2>
        </div>
        <div className="-skew-x-[18deg] bg-red-500 overflow-hidden relative group">
          <img src={dotaImage} alt="game image" className="skew-image" />
          <h2 className="skew-text">Dota 2</h2>
        </div>
        <div className="-skew-x-[18deg] bg-red-500 overflow-hidden relative group">
          <img src={csImage} alt="game image" className="skew-image" />
          <h2 className="skew-text">CS 2</h2>
        </div>
        <div className="-skew-x-[18deg] bg-red-500 overflow-hidden relative group">
          <img src={valoImage} alt="game image" className="skew-image" />
          <h2 className="skew-text">Valorant</h2>
        </div>
      </div>
    </section>
  );
};

export default GamesSect;
