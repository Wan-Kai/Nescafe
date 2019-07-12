import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react/lib/index';
import Spin from "antd/es/spin";
import {getGraphData} from "../../actions/fetchDataAction";
import {connect} from 'react-redux';

const labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
const labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : false,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
const radius = [40, 55];

class scatteredEchart extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            responseData:{},
        }
    }


    propTypes() {
    };

    getOption(responseData) {

        const option = {
            legend: {
                x : 'center',
                y : '52%',
                data:[
                    '资产负债率','流动比率','应收账款周转率','销售毛利率',
                    '现金比率', '资产报酬率', '销售收入增长率',
                    '总资产增长率', '企业规模', '运营能力','上下游企业产品依赖程度',
                    '物流企业准时交货率', '物流企业货物收发正确率','质押物价格变动'
                ]
            },
            title : {
                text: '信用信息',
                x: 'center'
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                width: '20%',
                                height: '30%',
                                itemStyle : {
                                    normal : {
                                        label : {
                                            formatter : function (params){
                                                return 'other\n' + params.value + '%\n'
                                            },
                                            textStyle: {
                                                baseline : 'middle'
                                            }
                                        }
                                    },
                                }
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    type : 'pie',
                    center : ['15%', '18%'],
                    radius : radius,
                    x: '20%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                      show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["assetsDebtRatio"], itemStyle : labelBottom},
                        {name:'资产负债率', value:responseData["assetsDebtRatio"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['40%', '18%'],
                    radius : radius,
                    x:'20%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["assetsFlowRatio"], itemStyle : labelBottom},
                        {name:'流动比率', value:responseData["assetsFlowRatio"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['65%', '18%'],
                    radius : radius,
                    x:'40%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["assetsGrowthRatio"], itemStyle : labelBottom},
                        {name:'应收账款周转率', value:responseData["assetsGrowthRatio"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['90%', '18%'],
                    radius : radius,
                    x:'60%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["assetsRevenueRatio"], itemStyle : labelBottom},
                        {name:'销售毛利率', value:responseData["assetsRevenueRatio"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['27%', '40%'],
                    radius : radius,
                    x:'80%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["assetsTurnoverRatio"], itemStyle : labelBottom},
                        {name:'现金比率', value:responseData["assetsTurnoverRatio"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['53%', '40%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x: '0%',    // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["cashRatio"], itemStyle : labelBottom},
                        {name:'资产报酬率', value:responseData["cashRatio"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['79%', '40%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'20%',    // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["comScale"], itemStyle : labelBottom},
                        {name:'销售收入增长率', value:responseData["comScale"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['15%', '72%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'40%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["goodsDependence"], itemStyle : labelBottom},
                        {name:'总资产增长率', value:responseData["goodsDependence"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['40%', '72%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'60%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["marginProfitRatio"], itemStyle : labelBottom},
                        {name:'企业规模', value:responseData["marginProfitRatio"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['65%', '72%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["operateAbility"], itemStyle : labelBottom},
                        {name:'运营能力', value:responseData["operateAbility"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['90%', '72%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["priceChange"], itemStyle : labelBottom},
                        {name:'上下游企业产品依赖程度', value:responseData["priceChange"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['27%', '92%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["profitGrowthRatio"], itemStyle : labelBottom},
                        {name:'物流企业准时交货率', value:responseData["profitGrowthRatio"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['53%', '92%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["transCorrection"], itemStyle : labelBottom},
                        {name:'物流企业货物收发正确率', value:responseData["transCorrection"],itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['79%', '92%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    label : {
                        position: 'center',
                        formatter : function (params){
                            if(params.name === 'other')
                                return 100 - params.value + '%'
                            return params.value + '%'
                        },
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine:{
                        show:false,
                    },
                    data : [
                        {name:'other', value:100-responseData["transPunctuation"], itemStyle : labelBottom},
                        {name:'质押物价格变动', value:responseData["transPunctuation"],itemStyle : labelTop}
                    ]
                }
            ]
        }
        return option;
    }

    componentWillMount(): void {
        const {dispatch} = this.props
        dispatch(getGraphData('ScatteredEchart',
            (msg)=>{
                this.setState({responseData:msg})
            }))
    }

    render() {
        const{isFetched,isFetching,} = this.props
        const {responseData} = this.state
        return (
            <div>
                <Spin spinning={isFetching&&!responseData}>
                {isFetched&&responseData? (<ReactEcharts
                    option={this.getOption(responseData)}
                    style={{height: '700px', width: '100%',background:'#FFF'}}
                    className='react_for_echarts' />)
                        :null}
                </Spin>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const {isFetching,isFetched,} = state.transport
    return{isFetching,isFetched,}
}

const ScatteredEchart = connect(mapStateToProps)(scatteredEchart)

export default ScatteredEchart;
