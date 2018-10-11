import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Form, Button, Label, Input, FormFeedback } from 'reactstrap';


const FormRegister = ({
      handleSubmit,
      handleUserChange,
      handleEmailChange,
      handlePasswordChange,
      userValidate,
      emailValidate,
      passwordValidate,
      checkValidForm,
      formState})=>(
    <div>
        <Form className="form-horizontal" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="user">Usuario</Label>
                <Input  type="text"
                       id="user"
                       required="required"
                       onChange={handleUserChange}
                        onKeyPress={checkValidForm}
                       className={userValidate ? 'valid' : 'is-invalid'}
                       placeholder="Usuario"
                        pattern="^\S+$"/>
                <FormFeedback tooltip>El usuario ya existe</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input  type="email"
                        id="email"
                        required="required"
                        onKeyPress={checkValidForm}
                        onChange={handleEmailChange}
                        className={emailValidate ? 'valid' : 'is-invalid'}
                        placeholder="Email"/>
                <FormFeedback tooltip>Escribe un email válido que no este en uso</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input  type="password"
                        id="password"
                        required="required"
                        onKeyPress={checkValidForm}
                        onChange={handlePasswordChange}
                        className={passwordValidate ? 'valid' : 'is-invalid'}
                        placeholder="6 caracteres como mínimo"/>
                <FormFeedback tooltip>6 caracteres como mínimoo</FormFeedback>
            </FormGroup>

            <Button type="submit" color="primary" disabled={!formState}>Crear cuenta</Button>
        </Form>
    </div>
);


FormRegister.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUserChange: PropTypes.func.isRequired,
    handleEmailChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    userValidate: PropTypes.bool.isRequired,
    emailValidate: PropTypes.bool.isRequired,
    passwordValidate: PropTypes.bool.isRequired,
    checkValidForm: PropTypes.bool,
    formState: PropTypes.bool.isRequired,
};

export default FormRegister;