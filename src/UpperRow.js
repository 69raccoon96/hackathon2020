import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function UpperRow(){
    if (true) {
        return (
            <div className="row">
                <div className="not-auth-box">
                    <div className="not-auth-text">ВЫ АВТОРИЗОВАНЫ</div>

                </div>
                <button className="not-auth-button">
                    <a href={"/signup"} className="not-auth-button-text" >ИМЯ</a>
                </button>
            </div>
        );
    }
    return (
        <div className="upper-row">
            <div className="not-auth-box">
                <div className="not-auth-text">
                    ВЫ НЕ АВТОРИЗОВАНЫ
                </div>

            </div>
            <button className="not-auth-button">
                <a href={"/login"} className="not-auth-button-text">ВОЙТИ</a>
            </button>
        </div>
    );
};