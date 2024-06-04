import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { useUserContext } from '../context';

export default function Withdraw() {
  const [withdraw, setWithdraw] = useState(1);
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

  const handleWithDraw = () => {
    if (withdraw > details.balance) {
      alert("Not enough balance");
      return
    }

    if (withdraw < 0) {
      alert("Cannot withdraw negative number");
      return
    }

    if (withdraw < 1) {
      alert("Cannot withdraw 0");
      return
    }

    let detail = detailUser
    detail.balance = Number(detailUser.balance) - Number(withdraw)

    setDetails(detail);
    setDetailUser(detail);
    const updateData = users.map(user => {
      if (user.name === detailUser.name && user.password === detailUser.password) {
        return { ...user, balance: detail.balance }
      }
      return user;
    })
    setListData(updateData);
    setWithdraw(1);
    alert("Withdrawal processed!");
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Card
            title="WITHDRAW"
            txtcolor="black"
            body={
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4>Balance</h4>
                  <h4>{details.balance}</h4>
                </div>
                <span>Withdraw Amount</span><br />
                <input type="number" className="form-control" min="1" id="withdraw" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br />
                <button type="submit" className="btn btn-primary" onClick={handleWithDraw}>Withdraw</button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
