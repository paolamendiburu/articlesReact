import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router';
import FormRegister from './view';

class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.eraseUser = this.eraseUser.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    eraseUser(){
        return fetch(process.env.REACT_APP_REST_API_LOCATION+'users/'+this.props.data[0].id,{
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "Authorization": "Token "+this.props.data[0].token
            }
        })
        .then(res => {
            return res;})
        .then(res =>{
            this.setState({ modal: !this.state.modal });
            this.setState({ redirect: true });
            sessionStorage.setItem('isLogged', false);})
        .catch(err => err);
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/register'/>;
        }

        return (

            <FormRegister text = {'Ajustes de cuenta'}
                button = {'Eliminar cuenta'}
                toggle = {this.toggle}
                modalState = {this.state.modal}
                modalTitle = {'Vas a eliminar tu cuenta y todos tus artículos'}
                modalBody = {'¿Estas seguro?'}
                eraseUser = {this.eraseUser}
                username = {this.props.data[0].username}
            />
        )
    }
};

const mapStateToProps = state => ({
    data: state.user.data,
});

export default connect(mapStateToProps)(Account);