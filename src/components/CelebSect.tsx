import cinkrof from "../assets/cinkrof.jpg";
import mammon from "../assets/mammon.png";

const CelebSect = () => {
  return (
    <section data-sect="celeb-sect" className="grid grid-cols-2 gap-12">
      <div data-info="text-sect">
        <h1 className="gradient-title">
          GamersMasterPro to miejsce, gdzie talent spotyka się z gwiazdami!
        </h1>
        <p className="normal-text">
          Cieszymy się z współpracy z największymi osobowościami ze świata
          esportu. Dołącz do nas, aby trenować z najlepszymi, uczestniczyć w
          wydarzeniach z udziałem celebrytów i poczuć ducha prawdziwej
          esportowej społeczności.
        </p>
      </div>
      <div
        data-info="images-sect"
        className="grid grid-cols-2 gap-8 place-items-center"
      >
        <div>
          <img
            src={cinkrof}
            alt="celeb img"
            className="w-[12rem] aspect-square rounded-full"
          />
          <h2 className="text-2xl font-roboto text-center mt-6">Cinkrof</h2>
          <p className="text-lg font-roboto text-center">3x EU MASTERS</p>
        </div>
        <div>
          <img
            src={mammon}
            alt="celeb img"
            className="w-[12rem] aspect-square rounded-full"
          />
          <h2 className="text-2xl font-roboto text-center mt-6">Mamm0n</h2>
          <p className="text-lg font-roboto text-center">Confident Player</p>
        </div>
      </div>
    </section>
  );
};

export default CelebSect;
