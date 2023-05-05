import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import categoriesService from '../services/categoriesService';
import { toast } from 'react-toastify';


const AdminAddCategory = () => {
  const [name, setName] = useState();
  const [slug, setSlug] = useState();
  const [description, setDescription] = useState();

  const [isfeatured, setIsFeatured] = useState(false);
  const [image, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  // const formData = new FormData();
  // formData.append('image', image);

  const handleCategory = (e) => {
    e.preventDefault();

    let category = {
      name: name,
      slug: slug,
      description: description,
      image: image,
      is_featured: isfeatured
    }
    if (category != null) {
      // console.log(category)
      categoriesService.postCategories(category).then(res => (res.status === 201) ? (toast.success("Category added succesfully")) : (console.log())).then(res => navigate("/admin/categories")).catch(err => console.log(err));
    }
    console.log("Category : ", category);
  }
  return (
    <div className="container " style={{ height: "70.5vh" }}>
      <div>
        <h3 className="text-center">Add Category</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-12">

          <div className="mb-3">
            <label className="form-label">Category Name : </label>
            <input
              type="text"
              className="custom-input"
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Slug </label>
            <input
              type="text"
              className="custom-input"

              onChange={(e) => {
                setSlug(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description </label>
            <textarea
              type="text"
              className="custom-input"

              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image </label>
            <input
              type="file"
              className="custom-input"

              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
              }}
            />
            {/* <button
            className="custom-btn bg-primary my-2 w-100 py-2"
            onClick={() => {
              handleUpload();
            }}
          >
           Upload
          </button> */}
          </div>
          <div className="mb-3">
            <label className="form-label" for="featured">Is_Featured : </label>
            <input
              type="checkbox"
              className="form-check-input mx-2 mt-2"
              id="featured"
              checked={isfeatured}
              onChange={(e) => {
                setIsFeatured(e.target.checked);
              }}
            />
          </div>
          <div>
            <button
              className="custom-btn bg-success my-2 w-100 py-2"
           
              onClick={(e) => {
                handleCategory(e);
              }}
            >
              Add Category
            </button>

          </div>
          <div className="">
            <button
              className="custom-btn bg-danger my-2 w-100 py-2"
              
              onClick={(e) => {
                navigate("/admin/categories/");
              }}
            >
              Back
            </button>
          </div>

        </div>
      </div>


    </div>
  )
}

export default AdminAddCategory
