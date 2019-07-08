import React from 'react';
import {Layout} from 'antd';
import LineMarkerEchart from '../../Echarts/LineMarkerEchart';

class PageOne extends React.Component{
    render(){
        return(
            <Layout>
                <div style={{backgroundColor:'#FFF',width:'100%'}}>
                    <LineMarkerEchart/>
                </div>
            </Layout>
        )
    }
}

export default PageOne;
