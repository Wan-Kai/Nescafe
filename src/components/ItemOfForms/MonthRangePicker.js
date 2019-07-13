import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const {MonthPicker} = DatePicker

class MonthRangePicker extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
        startOpen: false
    };

    disabledStartDate = (current)=> {
        // Can not select days before today and today
        const { endValue } = this.state;
        if (!current || !endValue) {
            return current.endOf('month') <= moment().endOf('month');
        }
            return   current < moment().endOf('month').add(1,'day');
    };

    disabledEndDate = current => {
        const { startValue,endValue } = this.state;
        if (!endValue && !startValue) {//先输入end时.....不允许选择
            return true;
        }else if(!endValue&&startValue){//输入了start后.....
            return current <= startValue.endOf('month');
        }
        return current <= startValue.valueOf();
    };

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = value => {
        this.onChange('startValue',value);
        this.handleStartOpenChange(false)
    };

    onEndChange = value => {
        this.onChange('endValue', value);
        this.handleEndOpenChange(false,value)
    };

    handleStartOpenChange = open => {
        const {endValue,} = this.state
        this.setState({startOpen:open})
        if (!open&&!endValue) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = (open,value) => {
        this.setState({ endOpen: open });
        if(!open){
            const { handleMonthRange } = this.props
            const {startValue} = this.state
            handleMonthRange([startValue,value])
        }
    };

    render() {
        const { startValue, endValue, endOpen, startOpen} = this.state;
        return (
            <div>
                <MonthPicker
                    disabledDate={this.disabledStartDate}
                    showTime
                    format="YYYY-MM"
                    value={startValue}
                    placeholder="Start"
                    onChange={this.onStartChange}
                    open={startOpen}
                    onOpenChange={this.handleStartOpenChange}
                    style={{width:'88%'}}
                />
                <MonthPicker
                    disabledDate={this.disabledEndDate}
                    showTime
                    format="YYYY-MM"
                    value={endValue}
                    placeholder="End"
                    onChange={this.onEndChange}
                    onOpenChange={this.handleEndOpenChange}
                    open={endOpen}
                    style={{width:'88%'}}
                />
            </div>
        );
    }
}

export default MonthRangePicker
