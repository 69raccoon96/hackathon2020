import "./Categories.css"
import React from "react";
import {Icon} from "semantic-ui-react";
function Register() {
    return (
        <div className="box">
            <div className="after-box">
            <div className="top-element">
                <div className="image">
                <Icon name="chevron left" color="grey"/>
                </div>
                <div className="text-shops">Магазины</div>
            </div>
            <div className="list">
                <button className="list-button1">
                    Автотовары</button>
                <hr className="box-line"/>
                <button className="list-button">
                    Спорт и отдых</button>
                <hr className="box-line"/>
                <button className="list-button">
                   Товары для детей</button>
                <hr className="box-line"/>
                <button className="list-button">
                    Цветы и подарки</button>
                <hr className="box-line"/>
                <button className="list-button">
                    Товары для животных</button>
                <hr className="box-line"/>
                <button className="list-button2">
                    Книги и фильмы</button>
            </div>
            </div>
        </div>
    )
}
export default Register;
