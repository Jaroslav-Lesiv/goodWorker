import styled, { keyframes } from "styled-components";
import React from "react";
import { header, app, animation, color } from "../const";
import { APP_WIDTH, APP_HEIGHT, APP_NAME } from '../../config/index'
const show = keyframes`
  from {
    transform: translateX(${app.offset}px)
  }

  to {
    transform: translateX(0)
  }
`;

const hide = keyframes`
  from {
    transform: translateX(0)
  }

  to {
    transform: translateX(${app.offset}px)
  }
`;

const Application = styled.div.attrs({
  id: APP_NAME
})`
  &#${APP_NAME} {
    position: fixed;
    transform: translateX(${app.offset}) px;
    top: 30px;
    right: 30px;
    width: ${APP_WIDTH}px;
    height: ${APP_HEIGHT}px;
    background: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    animation: ${({ isOpen }) =>
      isOpen === null
        ? `${hide} 0s ease-in-out`
        : isOpen
          ? `${show} ${animation.fast} ease-in-out`
          : `${hide} ${animation.fast} ease-in-out;`};
    animation-fill-mode: forwards;
    z-index: 10000;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.6);
    border-right: 1px solid #3a83ed;
    border-left: 1px solid #3a83ed;
    box-sizing: border-box;
    * {
      box-sizing: border-box;
    }
  }
`;

const MainUI = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: inherit;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export {
  MainUI,
  Wrapper,
  Application,
}
