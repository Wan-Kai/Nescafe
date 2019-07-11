import React from 'react';
import {Layout,Menu,Card} from 'antd';

import PageOne from './CompanyForm/PageOne';
import PageTwo from './CompanyForm/PageTwo';
import './companyData.less'

const {Header} = Layout;

class CompanyForm extends React.Component
{
    state = {
        tabKey: 'project',
    };


    renderChildrenByTabKey = (temp) => {
        if (temp === 'project') {
            return <PageOne />;
        }
        if (temp === 'applications') {
            return <PageTwo />;
        }
        return null;
    };

    handleMenuItemClick = (key) => {
        if(key === 'project'){
            this.setState({tabKey: key});
        }
        if(key === 'applications'){
            this.setState({tabKey: key});
        }
    }

    render(){
        // const {tabKey } = this.state;
        return(
            <layout>
                <Card>
                    <Header style={{background: '#FFFFFF', padding: 0}}>
                        <div className="menu">
                            <Menu
                                theme="light" mode="horizontal"
                                defaultSelectedKeys={['articles']}
                            >
                                <Menu.Item key='project' onClick={()=>this.handleMenuItemClick("project")}>文章</Menu.Item>
                                <Menu.Item key='applications' onClick={()=>this.handleMenuItemClick("applications")}>应用</Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                    <layout>
                        <div className="content">
                            {this.renderChildrenByTabKey(this.state.tabKey)}
                        </div>
                    </layout>

                </Card>
            </layout>
        )

    }

}

export default CompanyForm;
