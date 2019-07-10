import React from 'react';
import {Layout,Card,Row,Col} from 'antd';
import Temp from '../../assets/img/company.jpg';

class NewsCardInRow extends React.Component{
    render(){
        return(
            <div >
                <Card hoverable style={{ width: '100%',border:0}}>
                    <Row gutter={24}>
                        <Col span={7}>
                            <img alt="img" src={Temp} style={{height:'auto',width:300}}/>
                        </Col>
                        <Col span={17}>
                            <h2>News Title</h2>
                            <p>News content</p>
                            <a>more</a>
                        </Col>
                    </Row>

                </Card>
            </div>
        )
    }
}

export default NewsCardInRow;
