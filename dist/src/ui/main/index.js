import styled from "styled-components";
import React from "react";
import {  color, styles } from "../const";

const Flex = styled.div`
    width: 100%;
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: ${({ direction }) => direction || 'row'};
    flex-grow: ${({ grow }) => grow || '1'};
    flex-basis: ${({ basis }) => basis || '1'};
`

const FlexWrap = styled(Flex)`
    flex-wrap: ${({ wrap }) => wrap || 'wrap'};
`
const Align = styled(FlexWrap)`
    align-items: ${({ align }) => align ||  'center'};
    justify-content: ${({ justify }) => justify || 'space-around'};
`

const Block = styled(Align)`
`

const BlockFormUI  = Block.withComponent('form')
const MainUI = Block.withComponent('main')

const BlockForm = styled.form`
    height: 100%;
    width: 100%;
    flex-wrap: nowrap;
    padding: 15px 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: ${({ direction }) => direction || 'row'};
    flex-grow: ${({ grow }) => grow || '1'};
    flex-basis: ${({ basis }) => basis || '1'};
    flex-wrap: ${({ wrap }) => wrap || 'wrap'};
    align-items: ${({ align }) => align ||  'center'};
    justify-content: ${({ justify }) => justify || 'space-around'};
`

const Main = styled.main`
    height: 100%;
    width: 100%;
    flex-wrap: nowrap;
    padding: 15px 10px;
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    flex-grow: ${({ grow }) => grow || '1'};
    flex-basis: ${({ basis }) => basis || '1'};
    flex-wrap: ${({ wrap }) => wrap || 'wrap'};
    align-items: ${({ align }) => align ||  'flex-start'};
    justify-content: ${({ justify }) => justify || 'space-around'};
`

export {
    Block,
    Flex,
    FlexWrap,
    BlockForm,
    Main
}