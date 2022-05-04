import React from 'react'
import pp from '../images/pp.jpg'
import logo from '../images/addlogo1.png'
import {  Link } from 'react-router-dom'
const Login = () => {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div className="container " style={{ padding: '90px 120px' }}>
        <div className="row ">
          <div className=' pl-5 col-md-6 '>
            <h1 style={{ color: '#1877f2', fontWeight: 'bold' }}>facebook</h1>
            <h2 className='mb-0' style={{ fontWeight: '450', fontSize: '1.9rem', color: 'black' }}>Recent logins</h2>
            <p className='text-muted'>Click your picture or add an Account</p>
            <div className='d-flex flex-row'>

              {/* <div className="card login-card" style={{ width: '10rem', height: '170px', borderRadius: '12px', margin:'0px 12px' }}>
                <div style={{ padding: '0px', margin: 'auto' }}>
                  <img style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}} src={pp} className='img-fluid' alt="profile" />
                </div>
                <div style={{ backgroundColor: 'white', borderBottomRightRadius:'12px', borderBottomLeftRadius:'12px' , padding: '9px 0px' }} className=' w-100 login-card' >
                  <p className="card-text text-dark" style={{ textAlign: 'center' }}>Muhammad Talha</p>
                </div>
              </div>
               */}

              <div className="card login-card" style={{ width: '10rem', height: '204px', borderRadius: '9px', overflow: 'hidden', margin: '0px 12px' }}>
                <div style={{ padding: '0px' }}>
                  <img id='add-img' src={pp} className='img-fluid' alt="profile" />
                </div>
                <div style={{ backgroundColor: 'white', padding: '9px 0px' }}>
                  <p className="card-text text-dark" style={{ textAlign: 'center' }}>Add Account</p>
                </div>
              </div>

              <div className="card login-card" style={{ width: '10rem', height: '204px', borderRadius: '9px', overflow: 'hidden', margin: '0px 12px' }}>
                <div style={{ padding: '0px', margin: 'auto' }}>
                  <img id='add-img' src={logo} className='img-fluid' alt="profile" />
                </div>
                <div style={{ backgroundColor: 'white', padding: '9px 0px' }} className=' w-100'>
                  <hr />
                  <p className="card-text text-dark" style={{ textAlign: 'center' }}>Add Account</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' pl-5 col-md-5 offset-md-1 py-5'>
            <div className="box d-flex px-4 py-3 flex-column w-100" style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '2px 1px 9px lightgrey' }}>
              <div className='my-2'>
                <input className='logininp' type="text" name="email" id="email" placeholder='Email Address or Phone Number' />
              </div>
              <div className='my-2'>
                <input className='logininp' type="password" name="pass" id="pass" placeholder='Password' />
              </div>
              <div className='my-2'>
                <button className="btn" id='loginbtn'>Log In</button>
              </div>
              <div style={{ margin: 'auto' }}>
                <Link style={{ textDecoration: 'none' }} to="/fgtPass">Forgotten Password?</Link>
              </div>
              <hr />
              <div className='m-auto'>
                <button className='btn' id='signupbtn'>Create New Account</button>
              </div>
            </div>
            <p style={{ margin: '4%' }}> <strong style={{ fontWeight: 'bold' }} > <Link to="/">Create Page</Link> </strong>  for a celebrity, brand or business</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login