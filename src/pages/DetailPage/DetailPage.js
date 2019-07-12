import React from 'react';
import {Card,Steps,Descriptions,Table, Divider, Tag } from 'antd';

import './DetailPage.less';

const { Step } = Steps;

const columns = [
    {
        title: '操作类型',
        dataIndex: 'type',
        key: 'type',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: '操作人',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'geekblue';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
        ),
    },
    {
        title: '操作时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        type: '财务复审',
        time: '2019.7.12',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        type: '财务复审',
        time: '2019.7.12',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        type: '财务复审',
        time: '2019.7.12',
        tags: ['cool', 'teacher'],
    },
];

class DetailPage extends React.Component{


    render() {
        return (
           <div className="detail-page-contain">
               <Card className="detail-page-card">
                   <div className="detail-page-card-item">
                       <h1>流程进度</h1>
                   </div>
                   <div className="detail-page-card-steps">
                       <Steps current={1} status="error">
                           <Step title="begin" description="负责人：李智" />
                           <Step title="check" description="负责人：李智" />
                           <Step title="check again" description="负责人：李智" />
                           <Step title="complete" description="负责人：李智" />
                       </Steps>
                   </div>

               </Card>

               <Card className="detail-page-card">
                   <div className="detail-page-card-item">
                       <h1>用户信息</h1>
                   </div>
                   <div className="detail-page-card-steps">
                       <Descriptions>
                           <Descriptions.Item label="UserName">李智</Descriptions.Item>
                           <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                           <Descriptions.Item label="Live">湖北十堰</Descriptions.Item>
                           <Descriptions.Item label="Remark">晚睡早起多敲代码</Descriptions.Item>
                           <Descriptions.Item label="Address">
                               301 C3 武汉大学
                           </Descriptions.Item>
                       </Descriptions>
                       <Descriptions title="信息组">
                           <Descriptions.Item label="data">194</Descriptions.Item>
                           <Descriptions.Item label="studentNumber">2017302580000</Descriptions.Item>
                           <Descriptions.Item label="Live">湖北十堰</Descriptions.Item>
                           <Descriptions.Item label="Remark">晚睡早起多敲代码</Descriptions.Item>

                       </Descriptions>
                   </div>
               </Card>

               <Card className="detail-page-card">
                   <div className="detail-page-card-item">
                       <h1>操作日志</h1>
                   </div>
                   <div className="detail-page-card-steps">
                       <Table columns={columns} dataSource={data} />
                   </div>

               </Card>
           </div>
        )

    }
}

export default DetailPage;
