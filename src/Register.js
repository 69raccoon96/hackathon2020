import "./Register.css"
import { Icon, Input } from "semantic-ui-react";
import React from "react";

function Register() {
    return (
        <div className="box">
            <div className="box-reg">
                <div className="text-reg"> Авторизация</div>
                <hr className="box-line"/>
                <div className="box-data">
                <div className="box-before-mail">
                <div className="box-mail">
                    <Icon name="mail" color="grey" />
                    <input className="input-box" value="Почта"/>
                </div>
                </div>
                <div className="box-before-mail">
                    <div className="box-mail">
                        <Icon name="key" color="grey" />
                        <input className="input-box" type="password" value="Пароль"/>
                    </div>
                </div>
                </div>
                <div className="button-login">
                <button>Войти</button>
                </div>
            </div>
        </div>
    )};
export default Register;
