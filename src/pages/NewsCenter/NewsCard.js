import React from 'react';
import {Layout,Card} from 'antd';
import Temp from '../../assets/img/company.jpg';
import './NewsCard.less'

class NewsCard extends React.Component{
    render(){
        return(
            <div >
               <Card hoverable
                   style={{ width: '100%',borderRadius:25}}
                   cover={<img alt="example" src={Temp} className="News-img" style={{borderTopLeftRadius:25,borderTopRightRadius:25}}/>}
               >

               </Card>
            </div>
        )
    }
}

export default NewsCard;
