import React from 'react';
import {Layout,Card} from 'antd/lib/index';
import Temp from '../../assets/img/company.jpg';
import './NewsCard.less'

class NewsCard extends React.Component{
    render(){
        return(
            <div >
               <Card hoverable
                   style={{ width: '100%',borderRadius:25,border:0,marginBottom:20}}
                     className="card"
                   cover={<img alt="example" src={Temp} style={{borderTopLeftRadius:25,borderTopRightRadius:25}}/>}
               >
                   <h2>News Title</h2>
                   <p>News content</p>
                   <a>more</a>
               </Card>
            </div>
        )
    }
}

export default NewsCard;
