import React from 'react';
import {Layout,Card,Row,Col} from 'antd/lib/index';
import Temp from '../../assets/img/company.jpg';
import './NewsCardInRow.less'

class NewsCardInRow extends React.Component{
    render(){
        return(
            <div >

                <Card hoverable>
                    <div className="news-cardInRow-flex">
                        <div className="news-cardInRow-flex-component-img">
                            <img alt="img" src={Temp} style={{height:200}}/>
                        </div>
                        <div className="news-cardInRow-flex-component-text">

                            <h2>News Title</h2>
                            <p>News content</p>
                            <a>more</a>
                        </div>
                    </div>

                </Card>
            </div>
        )
    }
}

export default NewsCardInRow;
