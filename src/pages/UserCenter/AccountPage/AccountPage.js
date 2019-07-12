import React from 'react';
import myLogo from "../../../assets/img/mlogo.png";
import './AccountPage.less'


class AccountPage extends React.Component{


    render(){
        return(
            <div className="user-center-account-main" style={{display:"flex"}}>
                <div className="user-center-account-table" style={{width:'-webkit-fill-available'}}>
                    <h2>安全设置</h2>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item">
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item">
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item">
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item">
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                    <div className="user-center-account-table-item">
                        <div className="user-center-account-table-text">
                            <div className="user-center-account-table-text-item">
                                <img src={myLogo} style={{height:50,width:50,marginBottom:5}}/>
                            </div>
                            <div className="user-center-account-table-text-item">
                                <p>账号密码</p>
                                <p>你的************</p>
                            </div>
                        </div>
                        <div className="user-center-account-table-href">
                            <a>修改</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AccountPage;
