import React from 'react'
import tableimg from '../assets/restaurant-svgrepo-com@2x.jpg'
const OrderTable = () => {
    return (

        <div className='container-fluid' >
            <div className='row'>
                <div className='text-center mt-3'>
                    <img className='rounded' src={tableimg} alt='congrats image' width={"300px"} height={"200px"} />
                    <p className='mt-4 fs-5' style={{ color: '#1BE40D' }}>Congratulations ! we have recieved your order.</p>
                    <p className='mt-2 fs-5'>Your table for 6 has been confirmed at 7:30 PM</p>
                </div>
                <div className='row'>
                    <div className='card mx-3' >
                        <div className='card-body '>
                            {/* <div className='d-flex justify-content-around'>
                                <p className='fs-5'>Reserved Table : <span style={{ color: '#097ED8' }}>Table No-4A</span></p>
                                <p className='fs-5 '>No of seats required: <span style={{ color: '#097ED8' }}>6</span></p></div>
                            <div className='d-flex justify-content-around'>
                                <p className='fs-5'>Time Reserved : <span style={{ color: '#097ED8' }}>7:30PM</span></p>
                                <p className='fs-5 '>Party size: <span style={{ color: '#097ED8' }}>6</span></p></div>
                            <div className='d-flex justify-content-around'>
                                <p className='fs-5'>Name : <span style={{ color: '#097ED8' }}>Dinesh</span></p>
                                <p className='fs-5 '>Contact Number: <span style={{ color: '#097ED8' }}>15 minutes</span></p></div> */}
                                
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default OrderTable
