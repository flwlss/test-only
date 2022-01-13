import React from 'react';
import ReactDOM from 'react-dom';
import styled, { CSSProperties } from "styled-components";

interface ICustomInputProps {
  value: string
  type?: string
  onChange: (e: any) => void
  onClick?: () => void
  style?: CSSProperties;
}

const CustomInput = (props: ICustomInputProps) => {

  return (
    <Input
      style={props.style}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      onClick={props.onClick}
    />
  )
}

const Input = styled.input`
  width: 620px;
  height: 60px;
  background: #F5F5F5;
  border: none;
  outline: none;
  border-radius: 8px;
  padding-left: 20px;
  color: #232323;
  font-size: 16px;
  line-height: 19px;
  display: block;
  margin: 10px 0 20px;
`;

export default CustomInput;