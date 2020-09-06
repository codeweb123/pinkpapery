import React from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state= {
            Name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { Name, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value });
    };


    render() {
        const {Name, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='Name'
                        value={Name}
                        onChange={this.handleChange}
                        label='Name'
                        required
                        />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                        />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                        />
                    <FormInput
                        type='password'
                        name='confirmpassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                        />
                    <Button type='submit'> SIGN UP</Button>
                </form>
            </div>
        )
    }
}
export default SignUp;