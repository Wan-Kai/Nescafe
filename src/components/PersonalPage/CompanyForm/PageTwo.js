import React from 'react';
import {Layout} from 'antd';
import RadarEchart from '../../Echarts/RadarEchart';

import BarEchart from '../../Echarts/BarEchart';

class PageTwo extends React.Component{
    render(){
        return(
            <Layout>
                <div style={{backgroundColor:'#FFF',width:'100%'}}>
                    <RadarEchart/>
                    <BarEchart/>

                </div>
            </Layout>
        )
    }
}

export default PageTwo;
