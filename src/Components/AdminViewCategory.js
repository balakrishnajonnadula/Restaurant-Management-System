import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import categoriesService from "../services/categoriesService";

const AdminViewCategory = () => {
  const { id } = useParams();

  const [category, setCategory] = useState({});
  useEffect(() => {
    categoriesService
      .getCategoriesById(id)
      .then((res) => setCategory(res.data));
  }, []);

  return (
    <div className="container">
      <div className=""></div>
    </div>
  );
};

export default AdminViewCategory;
