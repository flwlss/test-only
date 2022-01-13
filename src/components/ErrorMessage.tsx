import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

interface IErrorMessageProps {
  mail: string
}

const ErrorMessage = (props: IErrorMessageProps) => {
  return (
    <ErrorWrapper>
      <ErrorSign>!</ErrorSign>
      <ErrorText>Пользователя {props.mail} не существует</ErrorText>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  width: 640px;
  height: 60px;
  background: #F5E9E9;
  border: 1px solid #E26F6F;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 27px;
`;

const ErrorSign = styled.div`
  width: 20px;
  height: 20px;
  background: #FFC8C8;
  border-radius: 50%;
  margin: 0 14px 0 20px;
  color: #EE6565;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  display: flex;
  justify-content: center; 
`;

const ErrorText = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 17px;
  margin: 0;
`;

export default ErrorMessage;