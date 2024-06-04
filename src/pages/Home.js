import React from 'react'
import Card from '../components/Card'
import Vault from '../vaultdoor.jpg'

export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Card
            txtcolor="black"
            title="Welcome to Security Banking Services"
            text="Trusted by the Best!"
            body={
              <img src={Vault} className="img-fluid" alt="Responsive img" />
            }
          />
        </div>
      </div>
    </div>
  )
}
