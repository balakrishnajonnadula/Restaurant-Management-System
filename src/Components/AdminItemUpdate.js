import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import itemsService from '../services/itemsService';
import { toast } from 'react-toastify';


const AdminItemUpdate = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const[status,setStatus]=useState();
  const navigate=useNavigate();

useEffect(
  ()=>{
    itemsService.getItem(id).then(res=>setItem(res.data))
  },[]
)
console.log(item)

const handleUpdate = (e) => {
  e.preventDefault();
  console.log("Items : ", item);

  itemsService.updateItem(id,item)
    .then((res) =>
      (setStatus(res.status))
    )
    .catch((err) => toast.error(err));
  if (status === 200) {
    toast.success("Update Succesfull");
    navigate("/admin/itemlist/view/"+id)
  }
  console.log("status",status)
};

  return (
    <div className="container ">
      <div>
        <h3 className="text-center">Update Items Details</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-12">
          <div className="mt-3 mb-3">
            <label className="form-label">Item Id </label>
            <input
              type="text"
              className="custom-input"
              readOnly
              value={item.id}
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Item Name : </label>
            <input
              type="text"
              className="custom-input"
              value={item.title}
              onChange={(e) => {
                setItem({ ...item, title: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Item slug : </label>
            <input
              type="text"
              className="custom-input"
              value={item.slug}
              onChange={(e) => {
                setItem({ ...item, slug: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description </label>
            <textarea
              type="text"
              className="custom-input"
              value={item.description}
              onChange={(e) => {
                setItem({ ...item, description: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price ₹ </label>
            <input
              type="text"
              className="custom-input"
              value={item.price}
              onChange={(e) => {
                setItem({ ...item, price: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Instructions </label>
            <input
              type="text"
              className="custom-input"
              value={item.instructions}
              onChange={(e) => {
                setItem({ ...item, instructions: e.target.value });
              }}
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">image </label>
            <input
              type="file"
              className="custom-input"

              onChange={(e) => {
                setItem({ ...item, image:e.target.files[0]  });
              }}
            />
         
          </div>
          <div>
            <button
              className="custom-btn bg-success my-2 w-100 py-2"
              onClick={(e)=>handleUpdate(e)}
            >
              Update
            </button>
          </div>
          <div>
            <button
              className="custom-btn bg-danger my-2 w-100 py-2"
              onClick={(e) => {
                navigate("/admin/itemslist/view/"+id);
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

export default AdminItemUpdate
