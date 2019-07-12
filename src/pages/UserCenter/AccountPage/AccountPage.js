import React from 'react';
import {Progress} from 'antd';
import myLogo from "../../../assets/img/mlogo.png";
import './AccountPage.less'
import {connect} from 'react-redux'
import Spin from "antd/es/spin";
import {getGraphData} from "../../../actions/fetchDataAction";

class accountPage extends React.Component{

    componentWillMount(): void {
        const {dispatch} = this.props
        dispatch(getGraphData('historyTrade'))
    }


    render() {
        const {isFetching, isFetched, responseData} = this.props;
        console.log("..........................",responseData)
        const handleRender = responseData.map((k, index) =>
                (<div className="user-center-account-table-item">
                    <div className="user-center-account-table-text">
                        <div className="user-center-account-table-text-item">
                            <img src={myLogo} style={{height: 50, width: 50, marginBottom: 5}}/>
                        </div>
                        <div className="user-center-account-table-text-item" style={{width: 200}}>
                            <p>{k[index]['projectName']}</p>
                            <p>{k[index]['projectDescription']}</p>
                        </div>
                        <div className="user-center-account-table-text-item" style={{width: 100}}>
                            <p>开始时间</p>
                            <p>{k[index]['startTime']}</p>
                        </div>
                        <div className="user-center-account-table-text-item" style={{width: 100}}>
                            <Progress percent={k[index]['procedure']/5*100} size="small"/>
                        </div>
                    </div>
                    <div className="user-center-account-table-href">
                        <a href="#/user/detail" target='_self'>查看</a>
                    </div>
                </div>)
            )
        return (
            <div>
                <Spin spinning={isFetching}>
                    {isFetched ?
                        (<div className="user-center-account-main" style={{display: "flex"}}>
                            <div className="user-center-account-table" style={{width: '-webkit-fill-available'}}>
                                <h2>基本列表</h2>
                                {handleRender}
                            </div>
                        </div>) : null}
                </Spin>
            </div>
        )
    }

}

function mapStateToProps(state){
    const {isFetching,isFetched,responseData} = state.transport
    return {isFetching,isFetched,responseData}
}

const AccountPage = connect(mapStateToProps)(accountPage)

export default AccountPage;
