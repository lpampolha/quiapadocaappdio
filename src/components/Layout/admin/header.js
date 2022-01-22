import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { removeToken } from "../../../config/auth.js";
import history from "../../../config/history.js";

const Header = () => {
  const profile = useSelector((state) => state.auth.profile);
  console.log("profile", profile);
  const logout = () => {
    removeToken();
    history.push("/");
  };

  return (
    <Nav className="mr-auto navbar navbar-expand bg-white mb-4">
      <NavDropdown title={profile.name} id="dropdown-basic" className="ml-auto">
        <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logout} href="#action/3.4">
          Sair
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};
export default Header;
