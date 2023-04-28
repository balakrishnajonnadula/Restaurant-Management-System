import React from 'react'
import congratsimg from '../assets/Group 197@2x.jpg'
const OrderFood = () => {
    return (

        <div className='contianer'>

            <div className='row'>
                <div className='text-center mt-5'>
                    <img className='rounded' src={congratsimg} alt='congrats image' width={"200px"} height={"200px"} />
                   <p className='mt-4 fs-4' style={{color:'#1BE40D'}}>Congratulations ! we have recieved your order.</p>
                   <p className='mt-2 fs-4'>Please wait for 15 minutes until your food is delivered to your table.</p>
                </div>

                <div className='card'>

                  <div className='card-body'>
                    <p className='fs-2'>Order for : <span>Table No-4A</span></p>
                    <p className='fs-2'>Waiting time : <span>15 minutes</span></p>
                    <p className='fs-2'>Assigned Waiter :<span> Prem Chand</span></p>

                  </div>
                </div>
            </div>


        </div>
    )
}

export default OrderFood
