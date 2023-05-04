<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import itemsService from '../services/itemsService';

const AdminViewItem = () => {
    const { id } = useParams();
    const [viewItem, setViewItem] = useState();
    console.log(id)
    useEffect(() => {
      itemsService.getItem(id).then((res) => setViewItem(res.data));
    }, []);
   
  console.log(viewItem)
    return (
        <div className='container' style={{ height: "82.5vh" }}>
        <div className="row">
        {viewItem != null ? (
          <div className="col-lg-3 col-md-9 col-sm-12 my-5">
            <div className="mx-5">
              <img
                src={viewItem.image}
                className="img-fluid"
                alt={viewItem.title}
                title={viewItem.title}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        ) : (
          console.log()
        )}
        {viewItem != null ? (
          <div className="col-lg-7 col-md-9 col-sm-12 my-5">
            <div >
                
              <h2 className="text-uppercase">{viewItem.title}</h2>
              <h3>₹ {viewItem.price}</h3>
              
              <h6>{viewItem.description}</h6>
             
              <h4 >Category : {viewItem.category_name}</h4>
            </div>
          </div>
        ) : (
          console.log()
        )}
      </div>
      </div>
       
    );
}

export default AdminViewItem
=======
import React from 'react'

const AdminViewItem = () => {
  return (
    <div>AdminViewItem</div>
  )
}

export default AdminViewItem
>>>>>>> origin/master
