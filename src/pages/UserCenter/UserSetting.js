import React from 'react';
import {Card,Menu} from 'antd';
import BasicPage from './BasicPage/BasicPage';
import TransactionsPage from './TransactionsPage/TransactionsPage';
import MassagePage from './MassagePage/MassagePage';
import SafePage from './SafePage/SafePage';

import './UserSetting.less';


class UserSetting extends React.Component{

    state = {
        tabKey: 'basicPage',
    };

    renderChildrenByTabKey = (temp) => {
        if (temp === 'basicPage') {
            return <BasicPage />;
        }
        if (temp === 'safePage') {
            return <SafePage />;
        }
        if (temp === 'transactions') {
            return <TransactionsPage />;
        }
        if (temp === 'massagePage') {
            return <MassagePage />;
        }
        return null;
    };

    handleMenuItemClick = (key) => {
        if(key === 'basicPage'){
            this.setState({tabKey: key});
        }
        if(key === 'safePage'){
            this.setState({tabKey: key});
        }
        if(key === 'transactions'){
            this.setState({tabKey: key});
        }
        if(key === 'massagePage'){
            this.setState({tabKey: key});
        }
    }


    render() {
        return (
            <div className="user-center-setting-contain">
                <div>
                    <Card>
                        <div className="user-center-setting-flex">
                            <div className="user-center-setting-menu">
                                <Menu
                                    style={{ width: 200 }}
                                    defaultSelectedKeys={['1']}
                                    mode="inline"
                                >
                                    <Menu.Item key='basicPage' onClick={()=>this.handleMenuItemClick("basicPage")}>基本设置</Menu.Item>
                                    <Menu.Item key='safePage' onClick={()=>this.handleMenuItemClick("safePage")}>安全设置</Menu.Item>
                                    <Menu.Item key='transactions' onClick={()=>this.handleMenuItemClick("transactions")}>交易进度</Menu.Item>
                                    <Menu.Item key='massagePage' onClick={()=>this.handleMenuItemClick("massagePage")}>新消息通知</Menu.Item>
                                </Menu>
                            </div>

                            <div className="user-center-setting-page">
                                {this.renderChildrenByTabKey(this.state.tabKey)}
                            </div>


                        </div>

                    </Card>
                </div>
            </div>
        )

    }
}

export default UserSetting;
