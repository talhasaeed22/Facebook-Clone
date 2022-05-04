import React from 'react'
import {Link} from 'react-router-dom';
const ForgetPass = () => {
    return (
        <>
            <nav className="navbar fnavbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'white' }}>
                <div className="container-fluid">
                    <Link style={{ fontWeight: 'bold', fontSize: '1.7rem', color: '#1877f2' }} className="navbar-brand" to="/">facebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='d-flex' style={{ float: 'right' }}>
                        <form className="d-flex " >
                            <input className=" logininp me-2" style={{ height: '40px' }} placeholder="Email or Phone" />
                            <input className=" logininp me-2" style={{ height: '40px' }} placeholder="Password" />
                            <button style={{ height: '40px', border: 'none', padding: '5px', borderRadius: '7px', fontSize: '1rem', width: '40%' }} id="loginbtn" >Log in</button>
                        </form>
                        <div style={{ marginTop: '4px' }} className='ms-1'>
                            <Link to="/fgtPass">Forgotten Account?</Link>
                        </div>
                    </div>

                </div>
            </nav>
            <div style={{ backgroundColor: '#e9ebee' }}>

                <div className="container d-flex justify-content-center" style={{ padding: '80px 0' }}>
                    <div style={{ boxShadow: '1px 1px 5px lightgray', backgroundColor: 'white', borderRadius: '7px', width: '38%' }}>
                        <div style={{ borderBottom: '1px solid lightgrey' }} className="header p-3">
                            <h5 style={{ fontWeight: 'bold' }}>Find Your Account</h5>
                        </div>
                        <div className="body p-3" style={{ borderBottom: '1px solid lightgrey' }}>
                            <p>Please Enter your email address or mobile number to search for your account</p>
                            <input type="text" name="faccount" id="faccount" className='logininp' placeholder='Email address or mobile number' />
                        </div>
                        <div style={{float:'right', margin:'16px 6px'}}>
                            <button style={{backgroundColor:'#e9ebee', color:'#4b4f56' , fontWeight:'bold',paddingLeft:'21px' , paddingRight:'21px', borderRadius:'7px'}} className="btn me-2">Cancel</button>
                            <button style={{backgroundColor:'#1877f2', color:'white', fontWeight:'bold',paddingLeft:'21px' , paddingRight:'21px', borderRadius:'7px'}} className="btn me-2">Search</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer" style={{paddingTop:'180px'}}>
                <div className="content d-flex justify-content-center">
                    <div className='container w-75 text-muted px-5' style={{fontSize:'0.9rem'}}>
                        <p>English (UK) اردو پښتو العربية हिन्दी বাংলা ਪੰਜਾਬੀ فارسی ગુજરાતી Deutsch Español</p>
                        <hr />
                        <p>Sign Up Log In Messenger Facebook Lite Watch Places Games Marketplace Facebook Pay Oculus Portal Instagram Bulletin Local</p>
                        <p>FundraisersServicesVoting Information Centre Groups About Create ad Create Page Developers Careers Privacy Cookies AdChoices Terms Help Settings Activity log</p>
                        <p>Meta © 2020</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetPass