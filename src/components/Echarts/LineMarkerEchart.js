import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react/lib/index';

class LineMarkerEchart extends Component{
    propTypes() {
    };
    getOption() {
        const option = {
            title: {
                text: '过去六月交易情况',
                // subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['新增交易','完成交易']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['一月','二月','三月','四月','五月','六月']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                }
            },
            series: [
                {
                    name:'新增交易',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'完成交易',
                    type:'line',
                    data:[1, 2, 2, 5, 3, 2],
                    markPoint: {
                        data: [
                            {name: '周最低', value: 1, xAxis: 1, yAxis: 1}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
        };
        return option;
    };
    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{height: '350px', width: '100%',background:'#FFF'}}
                className='react_for_echarts' />
        );
    }
}

export default LineMarkerEchart;
