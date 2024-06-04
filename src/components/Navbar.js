import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUserContext } from '../context';

export default function Navbar() {
  const { token, setTokenUser, setDetailUser } = useUserContext();
  const location = useLocation();

  const logout = () => {
    setTokenUser('');
    setDetailUser({});
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}
    >
      <Link className="navbar-brand" to="/">
        Bad Bank
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav pull-right">
        {!token && (
          <li className="nav-item">
            <Link className={`nav-link popup ${location.pathname === '/CreateAccount' ? 'menu-active' : ''}`} to="/CreateAccount" title="Join Bad Bank">
              Create Account
            </Link>
          </li>
        )}
          {token && (
            <li className="nav-item">
              <Link className={`nav-link popup ${location.pathname === '/deposit' ? 'menu-active' : ''}`} to="/deposit" title="Make a Deposit">
                Deposit
              </Link>
            </li>
          )}
          {token && (
            <li className="nav-item">
              <Link className={`nav-link popup ${location.pathname === '/withdraw' ? 'menu-active' : ''}`} to="/withdraw" title="Make a Withdrawal">
                Withdraw
              </Link>
            </li>
          )}
           {!token && (
          <li className="nav-item">
            <Link className={`nav-link popup ${location.pathname === '/alldata' ? 'menu-active' : ''}`} to="/alldata" title="Accounts Information">
              All Data
            </Link>
          </li>
           )}
          {!token && (
            <li className="nav-item">
              <Link className={`nav-link popup ${location.pathname === '/login' ? 'menu-active' : ''}`} to="/login" title="Enter Bank">
                Login
              </Link>
            </li>
          )}
          {token && (
            <li className="nav-item" onClick={logout}>
              <Link className="nav-link popup" to="/login" title="Exit Account">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}