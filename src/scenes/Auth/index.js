import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContentAuth } from './../../App/components'

import './style.css';

const Auth = () => (

    <div>
        <div className="auth-nav">
            <NavLink to='/register'>Registro</NavLink>
            <NavLink to="/login">Iniciar sesión</NavLink>
        </div>
        <ContentAuth/>
    </div>
);

export default Auth;
