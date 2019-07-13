import React from 'react';
import {Card,Button} from 'antd';
import invest from '../../assets/img/invest.png';
import Temp2 from '../../assets/img/card-back.png';

class InvestCard extends React.Component{
    render(){
        return(
            <div >
                <Card hoverable
                      style={{ width: '100%',borderRadius:25,border:0,height:350,textAlign:"center",marginBottom:20,backgroundColor:'#060f30'}}
                      className="card"
                      cover={<img alt="example" src={Temp2} style={{borderTopLeftRadius:25,borderTopRightRadius:25,height:200,border:0}}/>}
                >
                    <img src={invest} style={{width:'100%',height:80,textAlign:'center',marginTop:-80}}/><br/>
                    <Button type="primary" shape="round" size="large" style={{backgroundColor:'#ff6c37',border:'transparent',marginTop:20}}>
                        <b><a href="#/user/invest" style={{color:'#FFF'}}>Go For It</a></b>
                    </Button>
                </Card>
            </div>
        )
    }
}

export default InvestCard;
