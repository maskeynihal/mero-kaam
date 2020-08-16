import React from 'react';
import { Card as NeuCard, TextField, Button, Alert } from 'ui-neumorphism';
import { Link } from 'react-router-dom';

import { useFormInput, useAlert, useForm } from 'Hooks';

import { GoAlert } from 'react-icons/go';

import { registerFormValidation } from 'Validators';

/**
 * Register Card input.
 */
function RegisterCard() {
  // const { values, handleOnChange } = useFormInput(INITIAL_STATE);
  // const { errors, handleError } = useAlert(ERROR_INITIAL_STATE);
  const initialValue = {
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' }
  };

  const validation = registerFormValidation;
  const onSubmitForm = (state) => {
    console.log(state, errors);
  };

  const { values, errors, dirty, handleOnChange, handleOnSubmit, disable } = useForm(
    initialValue,
    validation,
    onSubmitForm
  );

  return (
    <form onSubmit={handleOnSubmit}>
      <NeuCard className="register-card">
        <div className="container">
          <div className="register-card__heading"> {'REGISTER'}</div>
          <div className="register-card__input">
            <div className="input-row">
              <TextField
                prepend="Name"
                name="name"
                value={values.name}
                placeholder="Enter your name"
                className="input-field"
                onChange={handleOnChange}
              ></TextField>
              {errors.name && dirty.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="input-row">
              <TextField
                prepend="Email"
                name="email"
                placeholder="Enter your email"
                className="input-field"
                onChange={handleOnChange}
              ></TextField>
              {errors.email && dirty.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-row">
              <TextField
                prepend="Password"
                placeholder="Enter password"
                type="password"
                value={values.password}
                className="input-field"
                name="password"
                onChange={handleOnChange}
              ></TextField>
              {errors.password && dirty.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="input-row">
              <Button className="register-card__button" htmlType="submit" disabled={disable}>
                Register
              </Button>
            </div>
          </div>
          <div className="register-card__footer">
            Have account?{' '}
            <Link to="/">
              <Button className="submit" text color="var(--primary)" rounded>
                {' '}
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </NeuCard>
    </form>
  );
}

export default RegisterCard;
