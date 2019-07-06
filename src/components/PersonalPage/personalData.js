import React from 'react'
import {Row,Col,Icon,Avatar,Layout,Card} from 'antd'
import Company from '../../assets/img/mlogo.png'
import './personalData.less'


class PersonCard extends React.Component{
    render(){
        return(
            <layout>
                <Card>
                    <div className="cardLayout">
                        <div>
                            <div className="Ava">
                                <Avatar size={100} src={Company} />
                                <p style={{fontSize:20, marginBottom:2,marginTop:5}}><b>百度</b></p>
                                <p>宏彦获水</p>
                            </div>

                            <div className="text">
                                <p><Icon type="setting" style={{marginRight:12}}/>AI专家</p>
                                <p><Icon type="setting" style={{marginRight:12}}/>垃圾浏览器</p>
                                <p><Icon type="setting" style={{marginRight:12}}/>没什么卵用</p>
                            </div>

                        </div>
                        <div className="boundary"/>
                        <div>
                            <a>标签</a>
                        </div>
                    </div>

                </Card>
            </layout>
            )
    }
}

export default PersonCard;
