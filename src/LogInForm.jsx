import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { app } from './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
// import { Link } from "react-router-dom";
function LogInForm() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert("loggedin")

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='signup-container'>
            {/* <Link to="/signup"></Link> */}
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Log in</h2>
                <label htmlFor="email">Email</label>
                <input type="text" name="" id="" onChange={(e) => setemail(e.target.value)} />

                <label htmlFor='password'>Password</label>
                <input type="password" name="" id="" onChange={(e) => setpassword(e.target.value)} />
                <button type='submit'>Login</button>

                <p>don't have an account ?</p>
                <Link to={"/signup"}>Sign Up</Link>
            </form>
        </div>
    )
}

export default LogInForm