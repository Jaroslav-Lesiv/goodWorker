import styled from 'styled-components';
import { navigation, color } from '../';

const HeaderUI = styled.header`
	width: 100%;
	height: ${navigation.width}px;
	background-color: ${color.white};
	color: ${color.primary};
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 4px 0 5px 0 rgba(0, 0, 0, 0.3);
`;

const HeaderTitle = styled.h2`
	color: ${color.primary};
	font-size: 1.4em;
	font-weight: 600;
	display: flex;
	margin: 0 auto;
	text-align: center;
`;

export { HeaderUI, HeaderTitle };
