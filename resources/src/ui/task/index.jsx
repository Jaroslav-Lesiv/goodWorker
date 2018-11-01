import styled from 'styled-components';
import { Block } from '../main';

const TaskWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${process.env.COLOR.white};
	padding: 10px;
	width: 100%;
	flex-grow: 1;
	border-bottom: 1px solid ${process.env.COLOR.light};
`;

const TaskName = styled.span`
	color: ${process.env.COLOR.textColor};
	line-height: 23px;
	font-size: 15px;
	cursor: pointer;
	margin-bottom: 10px;
	text-decoration: none;
	font-weight: 600;
	&:hover {
		color: ${process.env.COLOR.primary};
		text-decoration: underline;
	}
`;

const TaskDescription = styled.p`
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    font-size: 13px;
    color: ${process.env.COLOR.textColor};
    display: flex;
    /* cursor: pointer; */
    line-height: 1.42857;
    margin-bottom: 10px;
    margin: none;
    /* &:hover {
        color: ${process.env.COLOR.primary};
    } */
`;
const TaskInfoBlock = styled(Block)`
	flex-grow: 4;
	flex-direction: column;
`;

const TaskControlBlock = styled(Block)`
	flex-grow: 1;
	flex-direction: column;
	min-width: 90px;
	height: 100%;
	align-items: flex-end;
	justify-content: space-between;
`;

const TimeUI = styled.span(props => ({
	fontWeight: 600,
	color: props.active ? process.env.COLOR.primary : 'grey'
}));

export {
	TaskWrapper,
	TaskName,
	TaskDescription,
	TaskInfoBlock,
	TaskControlBlock,
	TimeUI
};
