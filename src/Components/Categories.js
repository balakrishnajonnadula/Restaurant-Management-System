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

        <div className='container-fluid'>
            <div className='row' >
                {
                    categories.map((item, index) =>
                        <div className='col-lg-3 col-md-4 col-sm-12 categories' key={index}>
                            <div className='mt-5'>
                                <div className='mb-3'>
                                    <img src={item.image} alt={item.slug} height={"200px"} width={"200px"} />
                                </div>
                                <div className='mb-2'>
                                    <h4 className='text-center'>{item.className}</h4>
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
