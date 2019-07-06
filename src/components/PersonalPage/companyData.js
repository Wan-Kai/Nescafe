import React, { PureComponent } from 'react';
import {Layout,Icon,Avatar,Menu,Card} from 'antd';
import Echart from '../Echarts/LineMarkerEchart';
import './companyData.less'

const {Header} = Layout;


class CompanyForm extends React.Component
{


    render(){
        return(
            <layout>
                <Card>
                    <Header style={{background: '#FFFFFF', padding: 0}}>
                        <div className="menu">
                            <Menu
                                theme="light" mode="horizontal"
                                defaultSelectedKeys={['pageOne']}

                            >
                                <Menu.Item key="pageOne">文章</Menu.Item>
                                <Menu.Item key="pageTwo">应用</Menu.Item>
                                <Menu.Item key="pageThree">项目</Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                    <layout>
                        <div className="content">
                            <Echart/>
                        </div>
                    </layout>

                </Card>
            </layout>
        )

    }

}

export default CompanyForm;
