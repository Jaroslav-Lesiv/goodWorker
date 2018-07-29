import {
    animation
} from "../../variables";
import styled from "styled-components";

const ButtonUI = styled.button `
    padding: ${({ small }) => small ? '5px 10px !important' : '10px 30px !important'};
    margin: 0 auto;
    border: none;
    border-radius: 25px;
    background-color: ${({ color }) => color === 'primary' ? '#3a83ed !important' : '#ffffff'};
    color: ${({ color }) => color === 'primary' ? '#ffffff !important' : '#3a83ed'};
    font-weight: 600;
    box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.3);
    transition: ${animation.fast};
    min-width: ${({ small }) => small ? '100px' : '160px'};
    /* box-shadow: 1px 1px 3px 1px rgba(58,131,237, .5); */
    cursor: pointer;
    &:hover {
    box-shadow: 0px 1px 6px 1px rgba(58, 131, 237, 0.5);
    transform: scale(1.08);
    }
    &:disabled {
    cursor: not-allowed;
    background-color: #d1d1d1;
    color: #a5a5a5;
    box-shadow: none;
    }
`;

export {
    ButtonUI
}