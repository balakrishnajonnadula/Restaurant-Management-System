import React, { useEffect, useState } from 'react'
import categoriesService from '../services/categoriesService';


const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        categoriesService.getCategories().then(res=> setCategories(res));
    }, []);

    // console.log(categories);
    return (

        <div className='container-fluid'>
            <div className='row' >
                {
                    categories.map((item, index) =>
                        <div className='col-lg-3 col-md-4 col-sm-12' key={index}>
                            <div className='m-5'>
                                <div className=' text-center'>
                                    <img src={item.image} alt={item.slug} height={"250px"} width={"250px"}/>
                                </div>
                                <div className=''>
                                    <h4 className='text-center'>{item.name}</h4>
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
