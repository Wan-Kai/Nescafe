import React from 'react';
import {Row,Col} from 'antd';
import PersonalData from './personalData';
import CompanyData from './companyData';
import './personForm.less'

class PersonForm extends React.Component{
    render(){
        return(
            <layout>
                <Row gutter={24} className="row">
                    <Col lg={6} md={24} >
                        <PersonalData/>
                    </Col>

                    <Col lg={18} md={24}>
                        <CompanyData/>
                    </Col>
                </Row>
            </layout>
        )
    }
}

export default PersonForm;
