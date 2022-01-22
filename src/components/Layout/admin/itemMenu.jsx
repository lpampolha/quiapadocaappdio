import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <ItemMenu>
      <li className="nav-item">
        <Link to={props.link} className="nav-link">
          <span>{props.name}</span>
        </Link>
      </li>
    </ItemMenu>
  );
};

const ItemMenu = styled.div`
  .nav-link {
    padding: 0.3rem 1rem !important;
    display: flex !important;
    align-items: center;
  }
`;
