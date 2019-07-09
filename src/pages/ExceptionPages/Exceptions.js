import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Result, Button } from 'antd';
import {Redirect} from "react-router-dom";

const toLogin =()=>{
    return <Redirect to path="/login"/>
}

const StatusMap = {
    '403': {
        title: '403',
        subTitle: 'Sorry, you are not authorized to access this page.',
        extra: <Button type="primary" onClick={toLogin}>Back Home</Button>,
    },
    '404': {
        title: '404',
        subTitle: 'Sorry, the page you visited does not exist.',
        extra: <Button type="primary">Back Home</Button>,
    },
    '500': {
        title: '500',
        subTitle: 'Sorry, the server is wrong.',
        extra: <Button type="primary">Back Home</Button>,
    },
};



const StatusArray = Object.keys(StatusMap);

class ExceptionsPage extends React.Component {
    render() {
        const { status } = this.props;
        const resultProps = StatusMap[status];
        return (
            <div>
                <Result status={status} {...resultProps} />
            </div>
        );
    }
}

export default ExceptionsPage
