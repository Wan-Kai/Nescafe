import React from 'react';
import {Layout,Card,Button} from 'antd';
import Temp1 from '../../assets/img/chart1.png';
import Temp2 from '../../assets/img/chart2.png';

class FinanceCard extends React.Component{
    render(){
        return(
            <div >
                <Card hoverable
                      style={{ width: '100%',borderRadius:25,border:0,height:350,textAlign:"center",marginBottom:20}}
                      className="card"
                      cover={<img alt="example" src={Temp2} style={{borderTopLeftRadius:25,borderTopRightRadius:25,height:200}}/>}
                >
                    <h2>I Want Finance</h2>
                    <Button type="primary" shape="round" size="large" style={{backgroundColor:'#ff6c37',border:'transparent',marginTop:20}}>
                        <b><a href="#/" style={{color:'#FFF'}}>Go For It</a></b>
                    </Button>
                </Card>
            </div>
        )
    }
}

export default FinanceCard;
