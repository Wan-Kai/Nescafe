
import React from 'react';
import 'antd/dist/antd.css';
import { Steps, Button, message } from 'antd';
import Step1 from './step1'
import Step2 from './step2'
import StepConfirm from './StepConfirm'
import './index.less';

const { Step } = Steps;

export const headerStepText = ()=>{
    return (
        <div className='header-margin'> </div>
    );
}

const steps = [
    {
        title: 'First',
        content: <Step1/>,
    },
    {
        title: 'Second',
        content: <Step2/>,
    },
    {
        title: 'Last',
        content: <StepConfirm/>,
    },
];

class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default StepForm;
