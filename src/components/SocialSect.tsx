import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTiktok,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialSect = () => {
  return (
    <section data-sect="social-sect">
      <h1 className="gradient-title text-center">
        Z nami esportową pasję możesz śledzić na każdym kroku!
      </h1>
      <div className="grid grid-cols-4 gap-6 place-items-center px-20">
        <div className="bg-purple-950 text-violet-300 rounded-md w-[15rem] aspect-square flex flex-col justify-center items-center gap-2">
          <FontAwesomeIcon icon={faTwitter} className="text-6xl" />
          <span className="cursor-pointer hover:text-white transition-colors hover:font-semibold">
            TWITTER
          </span>
        </div>
        <div className="bg-purple-950 text-violet-300 rounded-md w-[15rem] aspect-square flex flex-col justify-center items-center gap-2">
          <FontAwesomeIcon icon={faTiktok} className="text-6xl" />
          <span className="cursor-pointer hover:text-white transition-colors hover:font-semibold">
            TIKTOK
          </span>
        </div>
        <div className="bg-purple-950 text-violet-300 rounded-md w-[15rem] aspect-square flex flex-col justify-center items-center gap-2">
          <FontAwesomeIcon icon={faInstagram} className="text-6xl" />
          <span className="cursor-pointer hover:text-white transition-colors hover:font-semibold">
            INSTAGRAM
          </span>
        </div>
        <div className="bg-purple-950 text-violet-300 rounded-md w-[15rem] aspect-square flex flex-col justify-center items-center gap-2">
          <FontAwesomeIcon icon={faYoutube} className="text-6xl" />
          <span className="cursor-pointer hover:text-white transition-colors hover:font-semibold">
            YOUTUBE
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialSect;
