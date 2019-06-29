import React from 'react';
import { Card, Col, Row } from 'reactstrap';

class AuthPage extends React.Component {


    render() {
        return (
            <Row
                style={{
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Col md={6} lg={4}>
                    <Card body>
                        <h1>Hello world</h1>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default AuthPage;
