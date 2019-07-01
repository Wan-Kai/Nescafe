import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRoute = ({ component: Component, headerText:HeaderText,layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <Layout>
                {HeaderText}
                <Component {...props} />
            </Layout>
        )}
    />
);

export default LayoutRoute;
