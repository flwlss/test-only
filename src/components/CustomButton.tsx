import React from 'react';
import ReactDOM from 'react-dom';
import styled, { CSSProperties } from "styled-components";

interface ICustomButtonProps {
  value: string
  type: string
  onClick: (e: any) => void
}

const CustomButton = (props: ICustomButtonProps) => {
  return (
    <Button
      value={props.value}
      type={props.type}
      onClick={props.onClick}
    />
  )
}

const Button = styled.input`
  width: 640px;
  height: 60px;
  background: #4A67FF;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  line-height: 22px;
  margin: 40px 0 0;
  cursor: pointer;
`;

export default CustomButton;