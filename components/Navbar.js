import React from "react";

const Navbar = () => {
  let urlImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img src={urlImg} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div>❤</div>
    </nav>
  );
};

export default Navbar;
