import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home">
      <h1 className="select-none flex text-3xl font-extrabold tracking-wide">
        <span className="text-[#FF804A] drop-shadow-md">ネ</span>
        <span className="text-[#FF7F50] drop-shadow-md">コ</span>
        <span className="text-[#FF3F2B] drop-shadow-md">T</span>
        <span className="text-[#FF3F2B] drop-shadow-md">V</span>
      </h1>
    </Link>
  );
};

export default Logo;
