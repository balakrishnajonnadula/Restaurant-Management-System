import React from 'react'
import congratsimg from '../assets/Group 197@2x.jpg'
const OrderFood = () => {
    return (

        <div className='container-fluid' >
            <div className='row'>
                <div className='text-center mt-3'>
                    <img className='rounded' src={congratsimg} alt='congrats image' width={"200px"} height={"200px"} />
                    <p className='mt-4 fs-5' style={{ color: '#1BE40D' }}>Congratulations ! we have recieved your order.</p>
                    <p className='mt-2 fs-5'>Please wait for 15 minutes until your food is delivered to your table.</p>
                </div>
                <div className='row'>
                    <div className='card mx-3' >
                        <div className='card-body '>
                            <div className='d-flex justify-content-between'>
                                <p className='fs-5'>Order for : <span style={{ color: '#097ED8' }}>Table No-4A</span></p>
                                <p className='fs-5 '>Waiting time : <span style={{ color: '#097ED8' }}>15 minutes</span></p></div>
                            <p className='fs-5'>Assigned Waiter :<span style={{ color: '#097ED8' }}> Prem Chand</span></p>

                            <h5 className='fs-3 fw-bold mt-4'>Items :</h5>
                            <div className='row'>
                                <div className='col-md-4 col-lg-2 col-sm-2 mt-3'>
                                <p className='fs-4'>1.Item × 3</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default OrderFood
