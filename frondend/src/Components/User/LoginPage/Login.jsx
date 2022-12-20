import React, { useEffect } from 'react'
import { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { userLogin } from '../../../REDUX/Actions/userActions'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userlogin = useSelector(state => state.userLogin)
  console.log(userLogin);
  const { loading, error, userInfo } = userlogin;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(userLogin(email, password))
  }

  useEffect(() => {
    let userinfo = localStorage.getItem("userInfo")

    if (userinfo) {
      navigate("/")
    }

    console.log("HEHHEH");
    if (userInfo) {
      navigate("/")
    }

  }, [userInfo])

  console.log(userInfo);
  return (
    <>
      <div className='form mx-auto'>
        <div className='formcontainer'>
          <form action="">
            <p className='login'>Login</p>
            {
              error ? <Alert variant='danger'>
                <strong style={{ color: "red" }}>{error} </strong>
              </Alert> : ""
            }

            {
              loading ? <h2>{error}</h2> : ''
            }

            <input onChange={(e) => {
              setEmail(e.target.value)
            }} className='input1' type="email" name="email" id="" placeholder='Email' />

            <br />

            <input onChange={(e) => {
              setPassword(e.target.value)
            }} className='input' type="password" name='password' placeholder='Password...' />

            <p className='fp'>Forgot Passowrd ...?</p>
            <div className='buttons'>
              <button onClick={handlesubmit} className='button1'>Submit</button>
              <Link to={'/signup'}>
                <button className='button2 mt-2'>SignUp</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
