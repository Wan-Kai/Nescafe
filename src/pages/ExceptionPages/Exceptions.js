import React from 'react';
import { Result, Button } from 'antd';

const StatusMap = {
    '403': {
        title: '403',
        subTitle: 'Sorry, you are not authorized to access this page.',
        extra: <Button type="primary" href="#/login">Back Log In</Button>,
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
