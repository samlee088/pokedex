import React from "react";
import charzardImage from "../images/charzardImage.png";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import "./Header.css";

const Header = () => {
  const startContent = (
    <React.Fragment>
      <Link to="/">
        <Image src={charzardImage} width="90" height="100" />
      </Link>
    </React.Fragment>
  );

  const centerContent = <div></div>;

  const endContent = <React.Fragment></React.Fragment>;

  return (
    <div className="header">
      <Toolbar
        start={startContent}
        center={centerContent}
        end={endContent}
        className="bg-gray-900 shadow-2"
        style={{
          backgroundImage: "linear-gradient(to right, #EDC7B7, #BAB2B5)",
        }}
      />
    </div>
  );
};

export default Header;
