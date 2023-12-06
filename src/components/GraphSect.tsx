import graph from "../assets/graph.svg";
import gucio from "../assets/gucio.png";

const GraphSect = () => {
  return (
    <section data-sect="graph-sect" className="relative">
      <img src={graph} alt="main graph" />
      <div className="absolute top-[30%] right-[5%] w-[5rem] aspect-square">
        <span className="absolute font-roboto text-md w-[20ch] left-1/2 -translate-x-1/2 text-gray-900 bg-purple-200 p-3 rounded-lg">
          Ale jak to takie wyniki???
        </span>
        <img
          src={gucio}
          alt="gucio img"
          className="w-full aspect-square bg-purple-200 p-1 rounded-full absolute -right-[65%] -bottom-[35%]"
        />
      </div>
      <p className="normal-text">
        W GamersMasterPro nie tylko uczymy, ale także śledzimy wyniki naszych
        graczy. Nasze szkolenia są gwarancją, że Twój poziom gry będzie
        nieustannie rosnął. Obejrzyj wykresy postępów i przekonaj się, jak nasze
        szkolenia wpływają na osiągnięcia esportowe. Stań się mistrzem razem z
        nami!
      </p>
    </section>
  );
};

export default GraphSect;
