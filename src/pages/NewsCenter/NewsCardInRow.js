import React from 'react';
import {Layout,Card,Row,Col} from 'antd';
import Temp from '../../assets/img/company.jpg';

class NewsCardInRow extends React.Component{
    render(){
        return(
            <div >
                <Card hoverable
                      style={{ width: 'auto',border:0,height:240,position:'relative'}}
                >
                    <Row gutter={24}>
                        <Col span={7}>
                            <img alt="img" src={Temp} style={{height:190,width:'auto'}}/>
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
