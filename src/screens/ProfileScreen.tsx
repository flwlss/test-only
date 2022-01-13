import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import PATHS from '../navigations/paths'

const ProfileScreen = () => {

  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      <Header style={{ marginBottom: 342 }} />
      <p>Здравствуйте, mail</p>
      <Button onClick={() => {
        navigate(PATHS.LOGIN)
      }} value='Выйти' />
    </div>
  )
}

const Button = styled.input`
  width: 200px;
  height: 60px;
  background: #F5F5F5;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #000;
  font-size: 18px;
  line-height: 22px;
  margin: 50px 0 0;
  cursor: pointer;
  text-align: center;
`;

export { ProfileScreen };