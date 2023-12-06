import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

type HeaderTypes = {
  size?: string;
};

const Logo = ({ size = "2rem" }: HeaderTypes) => {
  return (
    <h1
      className="flex gap-2 items-center font-montserrat select-none"
      style={{ fontSize: size }}
    >
      <FontAwesomeIcon icon={faDragon} className="text-purple-600" />
      <span className="text-purple-200">GameMaster Pro</span>
    </h1>
  );
};

export default Logo;
