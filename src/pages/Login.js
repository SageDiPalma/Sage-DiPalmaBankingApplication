import React, { useState } from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const {
    users,
    setTokenUser,
    setDetailUser
  } = useUserContext();

  const validate = (field, label) => {
    if (!field) {
      setStatus('Please input ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  const login = () => {
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    const detailUsers = users.filter(user => user.email === email && user.password === password);
    if (detailUsers.length === 0) {
      setStatus('Bad email or password');
      setTimeout(() => setStatus(''), 3000);
      return
    }
    if (detailUsers.length > 0) {
      setDetailUser(detailUsers[0])
    }
    setTokenUser('sage123');
    setEmail('');
    setPassword('');
    navigate("/");
  }
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Card
              title="LOGIN"
              txtcolor="black"
              status={status}
              body={<div>
                Email address<br />
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
                Password<br />
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
                <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
              </div>}
            />
          </div>
        </div>
      </div>
  )
}
