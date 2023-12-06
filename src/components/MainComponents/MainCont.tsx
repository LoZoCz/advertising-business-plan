import CelebSect from "../CelebSect";
import GamesSect from "../GamesSect";
import GraphSect from "../GraphSect";
import HeroSect from "../HeroSect";
import SocialSect from "../SocialSect";

const MainCont = () => {
  return (
    <main className="main">
      <HeroSect />
      <GamesSect />
      <GraphSect />
      <CelebSect />
      <SocialSect />
    </main>
  );
};

export default MainCont;
