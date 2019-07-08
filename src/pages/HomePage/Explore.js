import React from 'react';
import {Layout} from 'antd';
import BackGround from '../../assets/img/back.jpg'

const backgroundStyle = {
    width: '100%',
    backgroundImage: `url(${BackGround})`
};

class Explore extends React.Component{
    render(){
        return (
            <Layout>
                <div style={backgroundStyle}>
                    <div className="container">

                    </div>
                </div>
            </Layout>
        )
    }
}

export default Explore;
