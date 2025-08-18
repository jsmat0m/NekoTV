import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/home"}>
      <h1 className="gradient-text select-none flex text-2xl">YANIME</h1>
    </Link>
  );
};

export default Logo;
