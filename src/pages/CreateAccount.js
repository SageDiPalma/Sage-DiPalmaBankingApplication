import React, { useState } from 'react';
import Card from '../components/Card';
import { useUserContext } from '../context';

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    setData
  } = useUserContext()

  const validate = (field, label) => {
    if (!field) {
      setStatus('Please input ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }else{
      if(label === "password"){
        if(field.length < 8){
          setStatus('Password cannot less than 8 characters');
          return false;
        }
      }
    }
    return true;
  }

  const handleCreate = () => {
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    setData({ name, email, password, balance: 100 });
    setShow(false);
  }

  const handleSetName = (e) => {
    setName(e.currentTarget.value)
  }

  const handleSetEmail = (e) => {
    setEmail(e.currentTarget.value)
  }

  const handleSetPassword = (e) => {
    setPassword(e.currentTarget.value)
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Card
            title="CREATE ACCOUNT"
            txtcolor="black"
            status={status}
            body={show ? (
              <>
                Name<br />
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={handleSetName} /><br />
                Email address<br />
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleSetEmail} /><br />
                Password<br />
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handleSetPassword} /><br />
                <button type="submit" className="btn btn-primary" disabled={!name && !email && !password} onClick={handleCreate}>Create Account</button>
              </>
            ) : (
              <>
                <h5>Successfully Created Account</h5>
                <button type="submit" className="btn btn-secondary" onClick={clearForm}>Add another account</button>
              </>
            )}
          />
        </div>
      </div>
    </div>

  )
}
