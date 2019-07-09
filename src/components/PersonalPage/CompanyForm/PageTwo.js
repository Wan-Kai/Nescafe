import React from 'react';
import {Layout} from 'antd';
import RadarEchart from '../../Echarts/RadarEchart';
import ScatteredEchart from '../../Echarts/ScatteredEchart';

class PageTwo extends React.Component{
    render(){
        return(
            <Layout>
                <div style={{backgroundColor:'#FFF',width:'100%'}}>
                    <RadarEchart/>
                    {/*<ScatteredEchart/>*/}
                </div>
            </Layout>
        )
    }
}

export default PageTwo;
