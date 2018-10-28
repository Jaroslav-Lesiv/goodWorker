import styled from 'styled-components';
import { color } from '..';
import React from 'react';
const Button = styled.button`
	border: none;
	padding: 15px 25px;
	background-color: ${({ status }) =>
		status === 'active' ? color.primary : color.white};
	border-radius: 2px;
	box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.2);
	&:hover {
		box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.4);
	}
	&:focus {
		box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.4);
	}
`;

const Input = styled.input`
	border: none;
	/* padding: 15px 25px; */
	height: 45px;
	border-radius: 2px;
	padding: 7.5px 15px;
	box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.2);

	background-color: ${({ active, disabled }) =>
		disabled ? color.disabled : active ? color.primary : color.white};

	box-shadow: ${({ disabled }) =>
		disabled ? 'none' : '1px 1px 6px 0 rgba(0, 0, 0, 0.2)'};
	&:hover {
		box-shadow: ${({ disabled }) =>
		disabled ? 'none' : '1px 1px 6px 0 rgba(0, 0, 0, 0.4)'};
	}
	&:focus {
		box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.4);
	}
`;

const Textarea = styled.textarea`
	border: none;
	/* padding: 15px 25px; */
	height: 45px;
	border-radius: 2px;
	padding: 7.5px 15px;
	box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.2);

	background-color: ${({ active, disabled }) =>
		disabled ? color.disabled : active ? color.primary : color.white};

	box-shadow: ${({ disabled }) =>
		disabled ? 'none' : '1px 1px 6px 0 rgba(0, 0, 0, 0.2)'};
	&:hover {
		box-shadow: ${({ disabled }) =>
		disabled ? 'none' : '1px 1px 6px 0 rgba(0, 0, 0, 0.4)'};
	}
	&:focus {
		box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.4);
	}
`;

const Icon = styled.img`
	width: ${({ size }) => size || 25}px;
	height: ${({ size }) => size || 25}px;
`;

const IconButton = styled.button`
	border: none;
	display: flex;
	cursor: pointer;
	padding: ${({ padding }) => padding || '7.5px'};
	margin: ${({ margin }) => margin || '0'};
	transition: 400ms;
	border-radius: ${({ circle }) => (circle ? '50%' : '2px')};
	background-color: ${({ active, disabled }) =>
		disabled ? color.disabled : active ? color.primary : color.white};

	color: ${({ active, disabled }) =>
		disabled ? color.disabledText : active ? color.white : color.primary};

	box-shadow: ${({ disabled }) =>
		disabled ? 'none' : '1px 1px 6px 0 rgba(0, 0, 0, 0.2)'};
	&:hover {
		box-shadow: ${({ disabled }) =>
		disabled ? 'none' : '1px 1px 6px 0 rgba(0, 0, 0, 0.4)'};
	}
	&:focus {
		box-shadow: 0 0 3px 2px ${color.outline};
		outline: none;
	}
	& > svg {
		width: ${({ size }) => size || 25}px;
		height: ${({ size }) => size || 25}px;
	}
`;

const ClickedIcon = ({ src, size, icon, ...props }) => (
	<IconButton {...props} size={size}>
		{icon ? icon : <Icon src={src} size={size} />}
	</IconButton>
);

export { Button, Input, ClickedIcon, Textarea };
