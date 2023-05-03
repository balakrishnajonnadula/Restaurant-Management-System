import React, { useEffect, useState } from 'react'
import categoriesService from '../services/categoriesService';
import $ from 'jquery'
const AdminCategories = () => {
    const [categories, setCategories] = useState([]);

    const getCategoriesList = async () => {
        await categoriesService.getCategories().then((res) => setCategories(res.data))
        //initialize datatable
        $(document).ready(function () {
            $("#example").DataTable();
        });
    };
    console.log(categories)
    useEffect(() => {
        getCategoriesList();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Categories List</h3>
                    </div>
                    <div className="card-body">
                        <table id="example" className="">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Category Name</th>
                                    <th>image</th>
                                    <th >View</th>
                                    <th >Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories &&
                                    categories.map((cat, index) => (
                                        <tr key={index}>
                                            <td >{cat.id}</td>
                                            <td>{cat.name}</td>
                                        
                                            <td> <img
                                                className="image"
                                                src={cat.image}
                                                alt={cat.slug}
                                                width={"70px"}
                                                height={"70px"}
                                                style={{ borderRadius: '18rem' }}
                                            /></td>
                                            <td>view</td>
                                            <td>update</td>
                                            <td>delete</td>
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

export default AdminCategories
