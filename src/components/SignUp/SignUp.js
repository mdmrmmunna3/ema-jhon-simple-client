import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../contexs/UserContext';
import './SignUp.css';

const SignUp = () => {

    const [error, setError] = useState(null);

    const {createUser} = useContext(AuthContext)


    const handleSubmitBtn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email, password, confirmPassword);

        if(password.length < 6) {
            setError('you must be should at least 6 character or more');
            return;
        }

        if(password !== confirmPassword) {
            setError('password does not match ');
            return;
        }

        // set email and password
        createUser(email, password)  
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch (error => console.error('error', error));

    }
    
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmitBtn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">ConfirmPassword</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p className='add'>Already have an account? <Link to='/login' className='link-color'>Login</Link></p>
            <p className='text-error'><small>{error}</small></p>
            
        </div>
    );
};

export default SignUp;