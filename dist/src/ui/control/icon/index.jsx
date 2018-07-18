import RemoveCircle from "@material-ui/icons/RemoveCircle";
import styled from "styled-components";
import React from "react";
import { animation } from "../../const";

const CloseAppIcon = styled(RemoveCircle)`
  position: absolute;
  right: 10px;
  top: 17px;
  height: 30px !important;
  width: 30px !important;
  color: #000;
  cursor: pointer;
  z-index: 10000;
  transition: ${animation.fast} !important;
  &:hover {
    transform: scale(1.08) !important;
  }
`;
const AppCloseIcon = ({ onClick }) => <CloseAppIcon onClick={onClick} />;

export { AppCloseIcon };
