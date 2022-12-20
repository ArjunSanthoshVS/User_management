import React, { useEffect } from 'react'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { userSignup } from '../../../REDUX/Actions/userActions'
import './Signup.css'


function Signup() {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Signup = useSelector(state => state.userSignup)
  const { loading, error, userInfo } = Signup;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(userSignup(firstname, lastname, email, password))
  }

  useEffect(() => {
    let userinfo = localStorage.getItem("userInfo")
    if (userinfo) {
      navigate("/")
    }
    console.log("HEHHEH");
    if (userInfo) {
      navigate("/login")
    }
  }, [userInfo])
  console.log(userInfo);

  return (
    <div>
      <>

        <div className='forms mx-auto'>

          <div className='formcontainers '>

            <form action="">
              <p className='login'>SIGNUP</p>

              {
                error ? <Alert variant='danger'>
                  <strong style={{ color: "red" }}>{error} </strong>
                </Alert> : ""
              }

              {
                loading ? <h1>Loading....</h1> : ''
              }

              <input onChange={(e) => {
                setfirstname(e.target.value)
              }} className='input' type="text" name="Firstname" id="" placeholder='Firstname' />
              <br />
              <input onChange={(e) => {
                setlastname(e.target.value)
              }} className='input1' type="text" name="email" id="" placeholder='Lastname' />
              <br />
              <input onChange={(e) => {
                setEmail(e.target.value)
              }} className='input1' type="email" name="email" id="" placeholder='Email' />
              <br />
              <input onChange={(e) => {
                setPassword(e.target.value)
              }} className='input1' type="password" name='password' placeholder='Password...' />
              <p className='fp'>Forgot Passowrd ...?</p>
              <div className='buttons'>

                <button onClick={handlesubmit} className='button1'>Submit</button>
                <Link to={'/login'}>
                  <button className='button2 mt-2'>Login</button>
                </Link>
              </div>
            </form>
          </div>

        </div>
      </>
    </div >
  )
}

export default Signup
