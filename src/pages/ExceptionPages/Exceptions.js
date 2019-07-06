
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Result, Radio, Button } from 'antd';

const StatusMap = {
    '403': {
        title: '403',
        subTitle: 'Sorry, you are not authorized to access this page.',
        extra: <Button type="primary">Back Home</Button>,
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

class ResultDemo extends React.Component {
    state = {
        status: '403',
    };

    onChange = e => {
        console.log('status checked', e.target.value);
        this.setState({
            status: e.target.value,
        });
    };

    render() {
        const { status } = this.state;
        const resultProps = StatusMap[status];
        return (
            <div>
                <p>
                    <Radio.Group onChange={this.onChange} value={status}>
                        {StatusArray.map(statusItem => (
                            <Radio value={statusItem}>{statusItem}</Radio>
                        ))}
                    </Radio.Group>
                </p>
                <Result status={status} {...resultProps} />
            </div>
        );
    }
}

ReactDOM.render(<ResultDemo />, document.getElementById('container'));
