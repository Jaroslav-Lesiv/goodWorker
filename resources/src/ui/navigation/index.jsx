import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
console.log(process.env);
const NavigationWrapper = styled.header`
	display: flex;
	flex-direction: column;
	padding: 0;
	background-color: ${process.env.COLOR.primary};
	height: ${process.env.APP_HEIGHT}px;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 1px 0 5px 0 rgba(0, 0, 0, 0.4);
`;

const NavigationLogo = styled.span`
	display: flex;
	width: ${process.env.NAVIGATION_HEIGHT}px;
	height: ${process.env.NAVIGATION_HEIGHT}px;
	background-color: ${process.env.COLOR.white};
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

const NavigationList = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
`;

const NavigationItemUI = styled.li`
	display: flex;
	width: ${process.env.NAVIGATION_HEIGHT}px;
	height: ${process.env.NAVIGATION_HEIGHT}px;
	padding: 0;
	margin: 0;
`;

const NavigationLink = styled(NavLink).attrs({
	activeClassName: 'active'
})`
	color: #ffffff;
	width: ${process.env.NAVIGATION_HEIGHT}px;
	height: ${process.env.NAVIGATION_HEIGHT}px;
	display: flex;
	justify-content: center;
	align-items: center;

	&.active {
		background-color: rgba(0, 0, 0, 0.5);
	}
	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

export {
	NavigationWrapper,
	NavigationItemUI,
	NavigationList,
	NavigationLogo,
	NavigationLink
};
