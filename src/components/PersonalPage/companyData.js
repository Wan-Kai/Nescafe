import React from 'react'
import {Layout,Icon,Avatar,Menu,Card} from 'antd'
import './companyData.less'

const {Header} = Layout;

class CompanyForm extends React.Component{
    render(){
        return(
            <layout>
                <Card>
                    <Header style={{background: '#FFFFFF', padding: 0}}>
                        <div className="menu">
                            <Menu
                                theme="light" mode="horizontal"
                                defaultSelectedKeys={['1']}

                            >
                                <Menu.Item key="1">文章</Menu.Item>
                                <Menu.Item key="2">应用</Menu.Item>
                                <Menu.Item key="3">项目</Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                    <layout>
                        <div className="content">
                            <p>Hellow</p>
                        </div>
                    </layout>

                </Card>
            </layout>
        )

    }
}

export default CompanyForm;
