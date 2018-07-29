import { NavLink as DefaultNavLink } from "react-router-dom";
import styled from "styled-components";
import { color, animation } from "../../variables";
import shadows from "@material-ui/core/styles/shadows";
import { APP_NAME } from "../../../config";

const HeaderNavigationItem = styled.li.attrs({
  id: `${APP_NAME}_HeaderNavigationItem`
 })`
  &#${APP_NAME}_HeaderNavigationItem {
    list-style: none;
    margin-left: 15px;
    display: inline-flex;

  }
 `


const IconNavLink = styled(DefaultNavLink).attrs({
  id: `${APP_NAME}_IconNavLink`
})`
  &#${APP_NAME}_IconNavLink {
    color: ${({ color }) => color || '#ffffff'};
    text-decoration: none;
    border-radius: 25px;
    border: none;
    width: 40px;
    height: 40px;
    padding: 5px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    svg {
      margin: 3px !important;
    }
    &.active_link {
      color: #ffffff;
      cursor: default;
      background-color: rgba(0,0,0,.4);
      &:hover {
        color: #ffffff;
        background-color: rgba(0,0,0,.4);
      }
    }
    &:hover {
      color: #ffffff;
      background-color: rgba(0,0,0,.2);
    }

  }`
const NavLink = styled(DefaultNavLink).attrs({
  id: `${APP_NAME}_NavLink`
})`
  &#${APP_NAME}_NavLink {
    text-decoration: none;
    border-radius: 25px;
    border: none;
    padding: 7px 15px;
    box-shadow: ${shadows[2]};
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    transition: ${animation.fast};
    color: ${({ control_type }) =>
      control_type === "primary"
        ? "#ffffff"
        : control_type === "danger"
          ? "#ffffff"
          : color.text_color};
    background-color: ${({ control_type }) =>
      control_type === "primary"
        ? color.primary
        : control_type === "danger"
          ? color.danger
          : "#ffffff"};
    &.active_link {
      color: #ffffff;
      background-color: ${color.primary};
    }
    &:hover {
      color: #ffffff;
      background-color: ${color.primary};
    }
  }
`;

export { NavLink, IconNavLink, HeaderNavigationItem };
