import React from 'react';
import { Card as NeuCard, TextField, Button } from 'ui-neumorphism';

/**
 * Register Card input.
 */
function RegisterCard() {
  return (
    <>
      <NeuCard className="register-card">
        <div className="container">
          <div className="register-card__heading"> {'REGISTER'}</div>
          <div className="register-card__input">
            <div className="input-row">
              <TextField prepend="Name" placeholder="Enter your name" className="input-field"></TextField>
            </div>
            <div className="input-row">
              <TextField prepend="Email" placeholder="Enter your email" className="input-field"></TextField>
            </div>
            <div className="input-row">
              <TextField
                prepend="Password"
                placeholder="Enter password"
                type="password"
                className="input-field"
              ></TextField>
            </div>
            <div className="input-row">
              <Button className="register-card__button">Register</Button>
            </div>
          </div>
          <div className="register-card__footer">
            Have account?{' '}
            <Button text color="var(--primary)">
              {' '}
              Sign In
            </Button>
          </div>
        </div>
      </NeuCard>
    </>
  );
}

export default RegisterCard;
