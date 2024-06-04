import React from 'react'
import Card from '../components/Card'
import Bank from '../assets/bank.png'

export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <Card
            txtcolor="black"
            title="WELCOME TO THE BANK"
            text="For all your banking needs"
            body={
              <img src={Bank} className="img-fluid" alt="Responsive img" />
            }
          />
        </div>
      </div>
    </div>
  )
}
