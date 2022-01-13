import React from 'react';
import ReactDOM from 'react-dom';
import styled, { CSSProperties } from "styled-components";

interface IHeaderProps {
  style?: CSSProperties
}

const Header = (props: IHeaderProps) => {
  return (
    <Title style={props.style}>only.</Title>
  )
}

const Title = styled.p`
  color: #000;
  font-size: 64px;
  margin-top: 40px;
  margin-bottom: 253px;
  line-height: 78px;
  font-weight: bold; 
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export default Header;