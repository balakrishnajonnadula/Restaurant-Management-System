import React, { useEffect, useState } from 'react'
import itemsService from '../services/itemsService';
import $ from 'jquery'
import { Link } from 'react-router-dom';
const AdminItemsList = () => {
    const [itemslist, setItemsList] = useState([]);
    const getItemsList = async () => {
        await itemsService.getItemsList().then((res)=>setItemsList(res.data))
        //initialize datatable
        $(document).ready(function () {
            $("#example").DataTable();
        });
    };
    console.log(itemslist)
    useEffect(() => {
        getItemsList();
    }, []);
    return (
        <div>
            <div className="container" >
                <div className="card">
                    <div className="card-header">
                        <h3>Categories List</h3>
                    </div>
                    <div className="card-body">
                        <table id="example" className="">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Item</th>
                                    <th>Price ₹</th>
                                    <th >Category Name</th>
                                    <th >Image</th>
                                    <th>View</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemslist &&
                                    itemslist.map((item, index) => (
                                        <tr key={index}>
                                            <td >{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>₹{item.price}</td>
                                            <td>{item.category_name}</td>
                                            <td> <img
                                                className="image"
                                                src={item.image}
                                                alt={item.slug}
                                                width={"70px"}
                                                height={"70px"}
                                                style={{ borderRadius: '18rem' }}
                                            /></td>
                                            <td><Link to={`/admin/viewitem/${item.id}`} style={{textDecoration:'none',borderRadius:'10px',color:'white'}} className='p-2 bg-primary'>View</Link></td>
                                            <td><Link to={`/admin/viewitem/${item.id}`} style={{textDecoration:'none',borderRadius:'10px',color:'white'}} className='p-2 bg-success'>Update</Link></td>
                                            <td><Link to={`/admin/viewitem/${item.id}`} style={{textDecoration:'none',borderRadius:'10px',color:'white'}} className='p-2 bg-danger'>Delete</Link></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminItemsList
