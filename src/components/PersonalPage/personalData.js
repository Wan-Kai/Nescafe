import React from 'react'
import {Icon,Avatar,Card} from 'antd'
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
                                <p style={{fontSize:20, marginBottom:2,marginTop:5}}><b>Lee</b></p>
                                <p>李智获水</p>
                            </div>

                            <div className="text">
                                <p><Icon type="setting" style={{marginRight:12}}/>AI专家</p>
                                <p><Icon type="setting" style={{marginRight:12}}/>浏览器专家</p>
                                <p><Icon type="setting" style={{marginRight:12}}/>前端专家</p>
                            </div>

                        </div>
                        <div className="boundary"/>
                        <div>
                            <a href="/">标签</a>
                        </div>
                    </div>

                </Card>
            </layout>
            )
    }
}

export default PersonCard;
