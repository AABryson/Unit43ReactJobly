import React, {useState} from 'react'
import JoblyApi from './api'

function Login () {
    const [loginData, setLoginData] = useState({username:'', password:''})

    function handleSubmit(e) {
        e.preventDefault()
        JoblyApi.login(loginData)


    }

    function handleChange(e) {
        const {name, value}=e.target
        setLoginData(() => ({
            ...prevState,
            [name]:value
        }))
    }
    return (
        <>
        <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlfor='username'>Username</label>
                <input type='text' id='username' name='username' value={loginData.username} onChange={handleChange}/>
                <br></br>

                <label htmlfor='password'>Password</label>
                <input type='text' id='password' name='password' value={loginData.password} onChange={handleChange}/>


            </form>
        </>

    )
}
export default Login