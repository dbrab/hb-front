//Form component with the main fields for register in the platform
import CrossIcon from '../../../public/assets/svg/icons/cross1.tsx'
import { UserService } from '../../services/Users';
import { Component, ChangeEvent } from "react";
import * as React from "react";
import { useEffect } from 'react';
import { useRef } from '../../store/Store';
import { LoadOpenApi } from './data';


import NavHeader from '../../components/NavHeader'

function Submit() {

  store.emit(new User());

}


export default class PopupRegister extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <>

        <div className="popup">
          <div className="popup__header">
            <header className="popup__header-content">
              <div className="popup__header-left">
                <button className="popup__header-button">
                  <div className="btn-circle__icon">
                    <CrossIcon />
                  </div>
                </button>
              </div>
              <div className="popup__header-center">
                <h1 className="popup__header-title">
                  Register
                </h1>
              </div>
              <div className="popup__header-right">
                <button className="popup__header-button">
                  <div className="btn-circle__icon">
                    <CrossIcon />
                  </div>
                </button>
              </div>
            </header>
          </div>

          <div className="popup__content">

            <div className="popup__img">
              <img src="https://dummyimage.com/550x200/#ccc/fff" alt="Register_img" className=""></img>
            </div>

            <form className="popup__section" onSubmit={this.handleSubmit}>

              <div className="form-field">
                <input type="text" className="form__input" value={this.state.value} onChange={this.handleChange} placeholder="Escribe tu mail para participar"></input>
              </div>

              <div className="form-field">
                <input type="text" className="form__input" value={this.state.value} onChange={this.handleChange} placeholder="Escribe una contraseña"></input>
              </div>

              <button className="btn-with-icon button-with-icon--offer" type="submit" value="Submit">
                <div className="btn-filter__icon">
                  <CrossIcon />
                </div>
                <div className="btn-with-icon__text">
                  ENTRAR
                </div>
              </button>

            </form>

            <div className="popup__options-v">

              <button className="popup__options-btn">Tengo cuenta</button>

            </div>

          </div>

        </div>
    </>
    );
  }
}
