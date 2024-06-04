import React from 'react'
import { useUserContext } from '../context';
import Card from '../components/Card';

export default function AllData() {
  const {
    users
  } = useUserContext()
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Card
            title="ALL DATA"
            txtcolor="black"
            body={
              <div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{border: '1px solid black', padding: '8px'}}>Name</th>
                      <th style={{border: '1px solid black', padding: '8px'}}>Email</th>
                      <th style={{border: '1px solid black', padding: '8px'}}>Password</th>
                      <th style={{border: '1px solid black', padding: '8px'}}>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={`${user.name}_${index}`}>
                        <td style={{border: '1px solid black', padding: '8px'}}>{user.name}</td>
                        <td style={{border: '1px solid black', padding: '8px'}}>{user.email}</td>
                        <td style={{border: '1px solid black', padding: '8px'}}>{user.password}</td>
                        <td style={{border: '1px solid black', padding: '8px'}}>{user.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
