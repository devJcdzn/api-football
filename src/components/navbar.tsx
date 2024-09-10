import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100" data-theme="dark">
      <Link to={"/"} className="btn btn-ghost text-xl">Jogo de Hoje</Link>
    </div>
  );
};
