import React, { PureComponent } from 'react';
import {Layout,Row,Col} from 'antd';
import ReactEcharts from './index';
import BackGround from "../../assets/img/back.jpg";


class UserPage extends React.Component{
    render(){
        return(
            <Layout>
                <div className="container">
                    <div className="center">
                        <Row gutter={24}>
                            <Col lg={8}>

                            </Col>
                            <Col lg={16}>

                            </Col>
                        </Row>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default UserPage;
