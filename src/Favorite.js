import "./Favorite.css"
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
                    <div className="text-shops">Любимые места</div>
                </div>
                <div className="list">
                    <div className="list-item">
                        <div className="icon1">
                            <button className="list-button">
                                <Icon name="like" color="green"/>
                            </button>
                        </div>
                    <button className="list-button1">
                        Автотовары</button>

                    </div>
                    <hr className="box-line"/>
                    <div className="list-item">
                        <div className="icon1">
                            <button className="list-button">
                                <Icon name="like" color="green"/>
                            </button>
                        </div>
                        <button className="list-button">
                            Спорт и отдых</button>

                    </div>
                    <hr className="box-line"/>
                    <div className="list-item">
                        <div className="icon1">
                            <button className="list-button">
                                <Icon name="like" color="green"/>
                            </button>
                        </div>
                        <button className="list-button">
                            Товары для детей</button>

                    </div>
                    <hr className="box-line"/>
                    <div className="list-item">
                        <div className="icon1">
                            <button className="list-button">
                                <Icon name="like" color="green"/>
                            </button>
                        </div>
                        <button className="list-button">
                            Цветы и подарки</button>

                    </div>
                    <hr className="box-line"/>
                    <div className="list-item">
                        <div className="icon1">
                            <button className="list-button">
                                <Icon name="like" color="green"/>
                            </button>
                        </div>
                        <button className="list-button">
                            Товары для животных</button>

                    </div>
                    <hr className="box-line"/>
                    <div className="list-item">
                        <div className="icon1">
                            <button className="list-button">
                                <Icon name="like" color="green"/>
                            </button>
                        </div>
                        <button className="list-button2">
                            Книги и фильмы</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;
