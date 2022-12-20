import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { userHome, userlogout } from '../../../REDUX/Actions/userActions'
import './Home.css'
function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const home = useSelector(state => state.userHome)
  const { loading, error, homedata } = home;

  useEffect(() => {
    let userinfo = localStorage.getItem("userInfo")
    console.log(userinfo);
    if (userinfo != null) {
      dispatch(userHome())
    } else {
      navigate("/login")
    }
  }, [])

  const userLogout = () => {
    dispatch(userlogout())
    navigate("/login")
  }

  return (
    <div>

      <div className='maindiv mt-5'>
        <div className='homediv mt-2'>
          <Button className='btn btn-warning' onClick={userLogout}>LOGOUT</Button>
          <br />
          <br />
          <Link to={'/profile'}><img style={{ height: 100, width: 100 }} src={homedata ? homedata.photo ? homedata.photo : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' : ''} alt="" /></Link>
          <h2> Welcome {homedata ? homedata.firstname : ''} {homedata ? homedata.lastname : ''}</h2>

        </div>
      </div>
    </div>
  )
}

export default Home
