import React from 'react';
import {Progress} from 'antd';
import myLogo from "../../../assets/img/mlogo.png";
import {connect} from 'react-redux'
import Spin from "antd/es/spin";
import {getGraphData} from "../../../actions/fetchDataAction"
import './TransactionsPage.less'

class transactionsPage extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            responseData:null
        }
    }


    componentWillMount(): void {
        const {dispatch} = this.props
        dispatch(getGraphData('historyTrade',
            (msg)=>{
            this.setState({
                responseData:msg
            })
        }))
    }

    render() {
        const {isFetching, isFetched} = this.props
        const {responseData} = this.state
        console.log(responseData)
        return (
            <div>
                <Spin spinning={isFetching&&!responseData}>
                    {isFetched&&responseData ?
                        (<div className="user-center-account-main" style={{display: "flex"}}>
                            <div className="user-center-account-table" style={{width: '-webkit-fill-available'}}>
                                <h2>基本列表</h2>
                                <div className="user-center-account-table-item">
                                    <div className="user-center-account-table-text">
                                        <div className="user-center-account-table-text-item">
                                            <img src={myLogo} style={{height: 50, width: 50, marginBottom: 5}}/>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 150}}>
                                            <p>{responseData[0]['projectName']}</p>
                                            <p>{responseData[0]['projectDescription']}</p>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 150}}>
                                            <p>开始时间</p>
                                            <p>{responseData[0]['startTime']}</p>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 100}}>
                                            <Progress percent={responseData[0]['procedure'] / 5 * 100} size="small"/>
                                        </div>
                                    </div>
                                    <div className="user-center-account-table-href">
                                        <a href="#/user/detail" target='_self'>查看</a>
                                    </div>
                                </div>
                                <div className="user-center-account-table-item">
                                    <div className="user-center-account-table-text">
                                        <div className="user-center-account-table-text-item">
                                            <img src={myLogo} style={{height: 50, width: 50, marginBottom: 5}}/>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 150}}>
                                            <p>{responseData[1]['projectName']}</p>
                                            <p>{responseData[1]['projectDescription']}</p>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 150}}>
                                            <p>开始时间</p>
                                            <p>{responseData[1]['startTime']}</p>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 100}}>
                                            <Progress percent={responseData[1]['procedure'] / 5 * 100} size="small"/>
                                        </div>
                                    </div>
                                    <div className="user-center-account-table-href">
                                        <a href="#/user/detail" target='_self'>查看</a>
                                    </div>
                                </div>
                                <div className="user-center-account-table-item">
                                    <div className="user-center-account-table-text">
                                        <div className="user-center-account-table-text-item">
                                            <img src={myLogo} style={{height: 50, width: 50, marginBottom: 5}}/>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 150}}>
                                            <p>{responseData[2]['projectName']}</p>
                                            <p>{responseData[2]['projectDescription']}</p>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 150}}>
                                            <p>开始时间</p>
                                            <p>{responseData[2]['startTime']}</p>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 100}}>
                                            <Progress percent={responseData[2]['procedure'] / 5 * 100} size="small"/>
                                        </div>
                                    </div>
                                    <div className="user-center-account-table-href">
                                        <a href="#/user/detail" target='_self'>查看</a>
                                    </div>
                                </div>
                                <div className="user-center-account-table-item">
                                    <div className="user-center-account-table-text">
                                        <div className="user-center-account-table-text-item">
                                            <img src={myLogo} style={{height: 50, width: 50, marginBottom: 5}}/>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 150}}>
                                            <p>{responseData[3]['projectName']}</p>
                                            <p>{responseData[3]['projectDescription']}</p>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 150}}>
                                            <p>开始时间</p>
                                            <p>{responseData[3]['startTime']}</p>
                                        </div>
                                        <div className="user-center-account-table-text-item" style={{width: 100}}>
                                            <Progress percent={responseData[3]['procedure'] / 5 * 100} size="small"/>
                                        </div>

                                    </div>
                                    <div className="user-center-account-table-href">
                                        <a href="#/user/detail" target='_self'>查看</a>
                                    </div>
                                </div>
                            </div>
                        </div>) : null}
                </Spin>
            </div>
        )
    }

}

function mapStateToProps(state){
    const {isFetching,isFetched} = state.transport
    return {isFetching,isFetched}
}

const TransactionsPage = connect(mapStateToProps)(transactionsPage)

export default TransactionsPage;
