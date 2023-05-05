import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import categoriesService from '../services/categoriesService';
import { toast } from 'react-toastify';

const AdminCategoryUpdate = () => {
  const { id } = useParams();
  //   const [role, setRole] = useState(true);
  const [category, setCategory] = useState({})
  const [status, setStatus] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    categoriesService.getCategoriesById(id).then(res => setCategory(res.data))
  }, []);
  console.log("categories", category);


  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Category : ", category);

    categoriesService.updateCategories(id, category)
      .then((res) =>
        (setStatus(res.status))
      )
      .catch((err) => toast.error(err));

    if (status === 200) {
      toast.success("Update Succesfull");
      navigate("/admin/categories/view/"+id)
    }
    // console.log("status ; ", status)
  };

  //   handle cancel

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/admin/categories/view/" + id);
  };


  return (
    <div className="container " >
      <div>
        <h3 className="text-center">Update Category Details</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-12">
          <div className="mt-3 mb-3">
            <label className="form-label">Category Id </label>
            <input
              type="text"
              className="custom-input"
              readOnly
              value={category.id}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category Name : </label>
            <input
              type="text"
              className="custom-input"
              value={category.name}
              onChange={(e) => {
                setCategory({ ...category, name: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description </label>
            <textarea
              type="text"
              className="custom-input"
              value={category.description}
              onChange={(e) => {
                setCategory({ ...category, description: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">image </label>
            <input
              type="file"
              className="custom-input"

              onChange={(e) => {
                setCategory({ ...category, image: e.target.files[0] });
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
          <div>
            <button
              className="custom-btn bg-success my-2 w-100 py-2"
              onClick={(e) => {
                handleUpdate(e);
              }}
            >
              Update
            </button>
          </div>
          <div>
            <button
              className="custom-btn bg-danger my-2 w-100 py-2"
              onClick={(e) => {
                handleCancel(e);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AdminCategoryUpdate
