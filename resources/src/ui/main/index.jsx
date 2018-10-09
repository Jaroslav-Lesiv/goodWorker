import styled, { keyframes } from 'styled-components';
import logo from '../../logo.svg';
import { navigation } from '../variables';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const Wrapper = styled.div`
	display: flex;
	width: 500px;
	height: 600px;
	overflow: hidden;
	border: 1px solid red;
	margin: 0 auto;
	justify-content: flex-start;
	align-items: flex-start;
`;
const Main = styled.div`
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
`;

const Section = styled.div`
	display: flex;
	flex-grow: 1;
	min-height: calc(100vh - ${navigation.width}px);
	flex-direction: column;
`;

const Logo = styled.img.attrs({
	src: logo,
	alt: 'AppLogo'
})`
	width: 50px;
	height: 50px;
	animation: ${spin} infinite 20s linear;
`;

const Block = styled.div`
	display: flex;
	justify-content: ${({ justify }) => justify || 'flex-start'};
	align-items: ${({ align }) => align || 'flex-start'};
	padding: ${({ padding }) => padding || 0};
	flex-direction: ${({ direction }) => direction || 'row'};
	flex-grow: ${({ grow }) => grow || 1};
	width: ${({ width }) => width || 'auto'};
`;

const Container = styled(Block)`
	flex-grow: 1;
	box-shadow: ${({ shadow }) =>
		shadow ? '1px 1px 6px 0 rgba(0,0,0,0.2)' : 'none'};
	margin: 7.5px;
	flex-wrap: wrap;
	max-height: max-content;
`;

const TaskListWrapper = styled(Container)`
	& > :last-child {
		border-bottom: none;
	}
`;
export { Wrapper, Main, Logo, Block, Section, Container, TaskListWrapper };
