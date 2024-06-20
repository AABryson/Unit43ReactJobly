import React, {useState, useContext} from 'react'
import ContextObject from './ContextObject'
import JoblyApi from './api'
import {Buffer} from 'buffer'

function Login () {
    const [loginData, setLoginData] = useState({username:'', password:''})
    const {token, setToken} = useContext(ContextObject)

    async function handleSubmit(e) {
        e.preventDefault()
        // let token = await JoblyApi.Login(loginData)
        // setLoginData({username:'', password:''})
        // console.log(token)
        // return token
        let token = await JoblyApi.Login(loginData)
        setLoginData({username:'', password:''})
        setToken(token)
        console.log(token)
        return {success: true}
        {/**return same token as in signup: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthY3kiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzE4ODQyOTAwfQ.MpGW5eS3dLt_1DTFHrYfTih01xFS6uATHVdHiDk4tS8 */}
    }

    function handleChange(e) {
        const {name, value}=e.target
        setLoginData(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    return (
        <>
        <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' name='username' value={loginData.username} onChange={handleChange}/>
                <br></br>

                <label htmlFor='password'>Password</label>
                <input type='text' id='password' name='password' value={loginData.password} onChange={handleChange}/>
                <button type='submit'>Submit</button>


            </form>
        </>

    )
}
export default Login