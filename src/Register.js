import "./Register.css"
import {Icon, Input} from "semantic-ui-react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {
    return (
        <div className="box">
            <div className="box-reg">
                <div className="text-reg"> АВТОРИЗАЦИЯ</div>
                <hr className="box-line"/>
                <div className="box-data">
                    <div className="box-before-mail">
                        <div className="box-mail">
                            <Icon name="mail" color="grey"/>
                            <input className="input-box" value="Почта"/>
                        </div>
                    </div>
                    <div className="box-before-mail row-1">
                        <div className="box-mail">
                            <Icon name="key" color="grey"/>
                            <input className="input-box" type="password" value="Пароль"/>
                        </div>
                    </div>
                </div>
                <div className="row-register">
                    <div className="rememberCheckbox">
                        <input type="checkbox" id="checkbox" className="checkbox-round"/>
                        <div className="text-remember">Запомнить</div>
                    </div>
                        <button className="button-login">ВОЙТИ</button>
                </div>
            </div>
        </div>
    )
}
export default Register;
