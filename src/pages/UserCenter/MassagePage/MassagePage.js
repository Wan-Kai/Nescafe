import React from 'react';
import {Switch} from 'antd';
import './MassagePage.less'


class MassagePage extends React.Component{


    render(){
        return(
            <div className="user-center-mas-main" style={{display:"flex"}}>
                <div className="user-center-mas-table" style={{width:'-webkit-fill-available'}}>
                    <h2>安全设置</h2>
                    <div className="user-center-mas-table-item">
                        <div className="user-center-mas-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-mas-table-href">
                            <Switch checkedChildren="开" unCheckedChildren="关" style={{backgroundColor:'#1890ff'}} defaultChecked />
                        </div>
                    </div>
                    <div className="user-center-mas-table-item">
                        <div className="user-center-mas-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-mas-table-href">
                            <Switch checkedChildren="开" unCheckedChildren="关" style={{backgroundColor:'#1890ff'}} defaultChecked />
                        </div>
                    </div>
                    <div className="user-center-mas-table-item">
                        <div className="user-center-mas-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-mas-table-href">
                            <Switch checkedChildren="开" unCheckedChildren="关" style={{backgroundColor:'#1890ff'}} defaultChecked />
                        </div>
                    </div>
                    <div className="user-center-mas-table-item">
                        <div className="user-center-mas-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-mas-table-href">
                            <Switch checkedChildren="开" unCheckedChildren="关" style={{backgroundColor:'#1890ff'}} defaultChecked />
                        </div>
                    </div>
                    <div className="user-center-mas-table-item">
                        <div className="user-center-mas-table-text">
                            <p>账号密码</p>
                            <p>你的************</p>
                        </div>
                        <div className="user-center-mas-table-href">
                            <Switch checkedChildren="开" unCheckedChildren="关" style={{backgroundColor:'#1890ff'}} defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MassagePage;
