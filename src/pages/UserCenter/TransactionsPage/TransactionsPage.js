import React from 'react';
import {Progress} from 'antd';
import myLogo from "../../../assets/img/mlogo.png";
import './TransactionsPage.less'


class TransactionsPage extends React.Component{


    render(){
        return(
            <div className="user-center-account-main" style={{display:"flex"}}>
                <div className="user-center-account-table" style={{width:'-webkit-fill-available'}}>
                    <h2>交易列表</h2>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:200}}>
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>owner</p>
                                <p>Lee</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>开始时间</p>
                                <p>2019.7.12</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <Progress percent={30} size="small" />
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a href="#/user/detail" target='_self'>查看</a>
                        </div>
                    </div>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:200}}>
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>owner</p>
                                <p>Lee</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>开始时间</p>
                                <p>2019.7.12</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <Progress percent={30} size="small" />
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a href="#/user/detail" target='_self'>查看</a>
                        </div>
                    </div>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:200}}>
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>owner</p>
                                <p>Lee</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>开始时间</p>
                                <p>2019.7.12</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <Progress percent={30} size="small" />
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a href="#/user/detail" target='_self'>查看</a>
                        </div>
                    </div>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:200}}>
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>owner</p>
                                <p>Lee</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>开始时间</p>
                                <p>2019.7.12</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <Progress percent={30} size="small" />
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a href="#/user/detail" target='_self'>查看</a>
                        </div>
                    </div>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:200}}>
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>owner</p>
                                <p>Lee</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <p>开始时间</p>
                                <p>2019.7.12</p>
                            </div>
                            <div className="user-center-account-table-text-item" style={{width:100}}>
                                <Progress percent={30} size="small" />
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a href="#/user/detail" target='_self'>查看</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TransactionsPage;
