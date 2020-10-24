import React, {Component} from 'react';
import UpperRow from "./UpperRow";
import 'bootstrap/dist/css/bootstrap.min.css'

class Main extends Component{


    render(){
        return(

            <div className="container box">
                <div className="row ">
                    <UpperRow/>
                </div>
                <div className="row middle-part-startpage align-content-md-center mb-5">
                    <div className="middle-part-tet">
                        ИЩЕШЬ<br/>МАГАЗИН?
                    </div>
                    <button className="middle-part-button">
                        <div className="middle-part-text">ищу!</div></button>
                </div>
                <div className="row-cols-md-1 bottom-block mb-5">
                    <button className="bottom-button">
                        <div className="bottom-button-text">Любимые места</div>
                    </button>
                    <button className="bottom-button">
                        <div className="bottom-button-text">История посещений</div>
                    </button>
                </div>
            </div>
        )
    }
}

export default Main;