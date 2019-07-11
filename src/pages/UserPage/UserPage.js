import React, { PureComponent } from 'react';
import {Layout,Row,Col} from 'antd';
import PersonalData from '../../components/PersonalPage/personalData';
import CompanyData from '../../components/PersonalPage/companyData';
import './UserPage.less'
import ReactEcharts from './index';
import BackGround from "../../assets/img/back.jpg";


class UserPage extends React.Component{
    render(){
        return(
            <Layout>
                <div className="user-container" >
                    <div className="user-center">
                        <Row gutter={24} style={{marginTop:30}}>
                            <Col lg={5}>
                                <PersonalData affix={false}/>
                            </Col>
                            <Col lg={19}>
                                <CompanyData/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default UserPage;
