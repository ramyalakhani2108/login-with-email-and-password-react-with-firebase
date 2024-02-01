import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { app } from './firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
// import { Link } from "react-router-dom";
function SignUpForm() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Account Created")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='signup-container'>
            {/* <Link to="/signup"></Link> */}
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="email">Email</label>
                <input type="text" name="" id="" onChange={(e) => setemail(e.target.value)} />

                <label htmlFor='password'>Password</label>
                <input type="password" name="" id="" onChange={(e) => setpassword(e.target.value)} />
                <button type='submit'>sign up</button>
                <p>already have an account ?</p>
                <Link to={"/login"}>Login</Link>
            </form>
        </div>
    )
}

export default SignUpForm