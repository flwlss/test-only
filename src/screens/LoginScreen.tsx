import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomCheckbox from '../components/CustomCheckbox';
import ErrorMessage from '../components/ErrorMessage';
import PATHS from '../navigations/paths'
import Header from '../components/Header';

const LoginScreen = () => {

  const [login, setLogin] = useState("");
  const [emptyLogin, setEmptyLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      <Header />
      <form >
        {error && <ErrorMessage mail={login} />}
        <label className='labelText'>
          Логин
          <CustomInput
            style={emptyLogin ? { marginBottom: 8 } : {}}
            onClick={() => { setError(false); setEmptyLogin(false) }}
            value={login}
            onChange={e => setLogin(e.target.value)} />
        </label>
        {emptyLogin && <p className='emptyInputMessage'>Обязательное поле</p>}

        <label className='labelText'>
          Пароль
          <CustomInput value={password} type='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <CustomCheckbox />
        </div>
        <CustomButton
          onClick={(e) => {
            e.preventDefault()
            if (login.length == 0) {
              setEmptyLogin(true)
            }
            if (login != '12345' && login.length > 0) {
              setError(true)
            } else if (login == '12345') {
              navigate(PATHS.PROFILE)
            }
          }}
          value='Войти'
          type='submit' />
      </form>
    </div>
  );
}

export { LoginScreen };
