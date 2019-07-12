import React from 'react';
import {Avatar, Button, Col, Input, Row, Select} from "antd";
import myLogo from "../../../assets/img/mlogo.png";
import './SafePage.less'

const InputGroup = Input.Group;
const { Option } = Select;
const { TextArea } = Input;

class SafePage extends React.Component{


    render(){
        return(
            <div className="user-center-safe-main" style={{display:"flex"}}>
                <div className="user-center-safe-table" style={{width:'-webkit-fill-available'}}>
                    <h2>安全设置</h2>
                    <div className="user-center-safe-table-item">
                        <div className="user-center-safe-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-safe-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                    <div className="user-center-safe-table-item">
                        <div className="user-center-safe-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-safe-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                    <div className="user-center-safe-table-item">
                        <div className="user-center-safe-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-safe-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                    <div className="user-center-safe-table-item">
                        <div className="user-center-safe-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-safe-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                    <div className="user-center-safe-table-item">
                        <div className="user-center-safe-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-safe-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SafePage;
