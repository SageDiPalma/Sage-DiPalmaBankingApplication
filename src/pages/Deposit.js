import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { useUserContext } from '../context';

export default function Deposit() {
  const [deposit, setDeposit] = useState(1);
  const [details, setDetails] = useState({});

  const {
    users,
    detailUser,
    setDetailUser,
    setListData
  } = useUserContext();

  useEffect(() => {
    setDetails(detailUser)
  }, [detailUser])

  const handleAddDeposit = () => {
    if (deposit < 0) {
      alert("Cannot deposit negative number");
      return
    }

    if (deposit < 1) {
      alert("Cannot deposit 0");
      return
    }
    
    let detail = detailUser
    detail.balance = Number(detailUser.balance) + Number(deposit)

    setDetails(detail);
    setDetailUser(detail);
    const updateData = users.map(user => {
      if (user.name === detailUser.name && user.password === detailUser.password) {
        return { ...user, balance: detail.balance }
      }
      return user;
    })
    setListData(updateData);
    setDeposit(1);
    alert("Deposit received!");
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Card
            title="DEPOSIT"
            txtcolor="black"
            body={
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <h4>Balance</h4>
                  <h4>{details.balance}</h4>
                </div>
                <span>Deposit Amount</span><br />
                <input type="number" className="form-control" min="1" id="deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br />
                <button type="submit" className="btn btn-primary" onClick={handleAddDeposit}>Deposit</button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
