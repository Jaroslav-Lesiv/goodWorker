import styled from 'styled-components';

const HeaderUI = styled.header`
	width: 100%;
	height: ${process.env.NAVIGATION_HEIGHT}px;
	background-color: ${process.env.COLOR.white};
	color: ${process.env.COLOR.primary};
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 4px 0 5px 0 rgba(0, 0, 0, 0.3);
`;

const HeaderTitle = styled.h2`
	color: ${process.env.COLOR.primary};
	font-size: 1.4em;
	font-weight: 600;
	display: flex;
	margin: 0 auto;
	text-align: center;
`;

export { HeaderUI, HeaderTitle };
