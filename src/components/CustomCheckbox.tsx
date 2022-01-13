import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/style.css';

interface ICustomCheckboxProps {

}

const CustomCheckbox = (props: ICustomCheckboxProps) => {
  return (
    <div>
      <input type="checkbox" className="custom-checkbox" id="checkbox" name="checkbox" />
      <label htmlFor="checkbox">Запомнить пароль</label>
    </div>
  )
}


export default CustomCheckbox;