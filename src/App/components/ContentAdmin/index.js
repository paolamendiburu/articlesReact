import React from 'react';
import { Route } from 'react-router-dom';
import { Account } from '../../../scenes';

const ContentAdmin = () => (
    <div id="page-admin">
        <Route exact path="/admin/account" component={Account}  activeClassName="active"/>
    </div>
);

export default ContentAdmin;