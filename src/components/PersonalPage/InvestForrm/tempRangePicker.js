
import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

class TempRangePicker extends React.Component {
    state = {
        value: null,
    };

    handlePanelChange = (value) => {
        this.setState({
            value,
        });
        console.log(value,this.state.value)
    };

    handleChange = value => {
        this.setState({ value:value,isClose:true });
    };

    handleOpenChange = (status) => {
        this.setState({isClose:false})
    }

    disabledDate = (current)=>{
        // Can not select days before today and today
        return current.endOf('month')< moment().endOf('month');
    }

    // handleChange = value => {
    //     this.setState({ value });
    // };

    render() {
        const { value } = this.state;
        return (
            <RangePicker
                placeholder={['Start month', 'End month']}
                disabledDate={this.disabledDate}
                format="YYYY-MM"
                value={value}
                mode={['month','month']}
                onChange={this.handleChange}
                onPanelChange={this.handlePanelChange}
                onOpenChange={this.handleOpenChange}
                renderExtraFooter={() => 'extra footer'}
            />
        );
    }
}

export default TempRangePicker
