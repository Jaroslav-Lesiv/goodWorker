import styled from 'styled-components';

const Label = styled.span`
	color: ${process.env.COLOR.textColor};
	line-height: 23px;
	font-size: 15px;
	cursor: pointer;
	margin-bottom: 10px;
	text-decoration: none;
	font-weight: 600;
	&:hover {
		color: ${process.env.COLOR.primary};
	}
`;

const Text = styled.p`
	overflow-wrap: break-word;
	word-wrap: break-word;
	word-break: break-word;
	font-size: 13px;
	color: ${process.env.COLOR.textColor};
	display: flex;
	line-height: 1.42857;
	margin-bottom: 10px;
	margin: none;
`;

export { Text, Label };
