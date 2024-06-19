import React, {useState} from 'react'
import JoblyApi from './api'

function Signup () {
//register new user; username, password, firstName, lastName, email, isAdmin

    const [signupData, setSignupData] = useState({username:'', password:'', first_name:'', last_name:'', email:''})


    function handleChange (e) {
        const {name, value} = e.target
        //#####################################({
        setSignupData(prevState => ({
            ...prevState,
            [name]: value
    }))
    }

    function handleSubmit (e) {
        e.preventDefault()
        //execute function that sends post request to api
        JoblyApi.signUp(signupData)
        setSignupData({username:'', password:'', first_name:'', last_name:'', email:''})
    }

    console.log(signupData)

    return (
        <>
        <h1>Signup page</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' name='username' value={signupData.username} onChange={handleChange}/>
            <br></br>   

            <label htmlFor='password'>Password</label>
            <input type='text' id='password' name='password' value={signupData.password} onChange={handleChange}/>
            <br></br>

            <label htmlFor='first_name'>First Name</label>
            <input type='text' id='first_name' name='first_name' value={signupData.first_name} onChange={handleChange}/>
            <br></br>

            <label htmlFor='last_name'>Last Name</label>
            <input type='text' id='last_name' name='last_name' value={signupData.last_name} onChange={handleChange}/>
            <br></br>

            <label htmlFor='email'>Email</label>
            <input type='text' id='email' name='email' value={signupData.email} onChange={handleChange}/>

            <button type='submit'>Submit</button>

        </form>
        </>

    )
}
export default Signup