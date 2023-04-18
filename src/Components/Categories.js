import React, { useEffect, useState } from 'react'
import categoriesService from '../services/categoriesService';
import categories from '../styles/categories.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        categoriesService.getCategories(res => setCategories(res));
    }, []);

    console.log(categories);
    return (

        <div Name='container-fluid'>
            <div Name='row' >
                {
                    categories.map((item, index) =>
                        <div Name='col-lg-3 col-md-4 col-sm-12 categories' key={index}>
                            <div Name='mt-5'>
                                <div Name='mb-3'>
                                    <img src={item.image} alt={item.slug} height={"200px"} width={"200px"} />
                                </div>
                                <div Name='mb-2'>
                                    <h4 Name='text-center'>{item.name}</h4>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>

    )
}

export default Categories;
