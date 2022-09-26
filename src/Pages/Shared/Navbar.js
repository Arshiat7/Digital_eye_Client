import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const logOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  const [user, loading, error] = useAuthState(auth);
  return (
    <div  >
      <div style={{"backgroundImage":"url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1380&t=st=1664187497~exp=1664188097~hmac=96b6f21b159b165cb4ab55ec1941a455e52ccfa7d42fab4716b574e6634d49ab')"}} className="navbar bg-no-repeat bg-cover text-xl z-10 h-24   top-0 left-0 right-0   m-auto  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52">
              <li>
                < Link to="/">Home</ Link>

                <Link to='/blog'>Blog</Link>
                <Link to='/blog'>My Portfolio</Link>

                {user ? < Link to="dashboard">Dashboard</ Link> : <></>}

                {user ? <></> : <Link to='/login'>Login</Link>}
                {user ? <button onClick={logOut} class="btn btn-outline btn-primary mt-1">Log Out</button> : <Link to='/signup'>SignUp</Link>}

              </li>
            </ul>
          </div>
          <div className=' bg-amber-400 justify-items-center items-center w-80 h-26 flex'>
          <a className=" p-3 md:p-7 lg:p-full inline-block align-middle text-3xl font-bold  text-black 	">DIGITAL EYE</a>
          </div>
         
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal text-black  p-0">
            <li >
              <Link to="/">Home</ Link>
              <Link to='/blog'>Blog</Link>
              <Link to='/blog'>My Portfolio</Link>

              {user ? < Link to="dashboard">Dashboard</ Link> : <></>}
              {user ? <></> : <Link to='/login'>Login</Link>}
              {user ? <button onClick={logOut} class="btn btn-outline btn-primary mt-1">Log Out</button> : <Link to='/signup'>SignUp</Link>}

            </li>

          </ul>
        </div>
          <div className="navbar-end ">
          <div className="flex aling-center gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default Navbar;