import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom';
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
                
              <h2 className="text-uppercase">{viewItem.name}</h2>
          
              
              <h6>{viewItem.description}</h6>
             
              <h4 >Category : {viewItem.category_name}</h4>

            </div>
            <div className='mt-5'>
            <Link className="p-2 bg-success"
                          style={{ textDecoration: "none" ,color:'white',borderRadius:'1rem'}}
                          to={"/admin/itemlist/view/"}>
                          Update
                        </Link>
                        <Link
            className=" mx-5 p-2 bg-danger"
                          style={{ textDecoration: "none" ,color:'white',borderRadius:'1rem'}}
                          to={"/admin/itemlist/view/"}
                        >
                          Delete
                        </Link> 
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
