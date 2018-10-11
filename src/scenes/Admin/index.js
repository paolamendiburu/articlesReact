import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import { ContentAdmin } from './../../App/components';

import './style.css';

class Admin extends Component {

    render() {
        if(sessionStorage.getItem('isLogged') === 'false'){
            return <Redirect to='/register'/>;
        }

        return (
            <div className="admin-container">

                <div className="admin-nav">
                    <NavLink to='/admin/new-article'>Escribir un artículo</NavLink>
                    <div>
                        <NavLink to='/admin/articles'>Mis artículos</NavLink>
                        <NavLink to='/admin/favourites'>Favoritos</NavLink>
                        <NavLink to='/admin/underlines'>Subrayados</NavLink>
                        <NavLink to='/admin/notification'>Notificaciones</NavLink>
                        <NavLink to='/admin/account'>Cuenta</NavLink>
                    </div>
                </div>
                <ContentAdmin />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.user.data,
});

export default connect(mapStateToProps)(Admin);
