import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
      document.title = "Categories"
    fetch("http://localhost:4000/categories")
      .then((data) => data.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <>
      <Link to="/categories/new" className="btn btn-success btn-add">
        Add Category
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {categories.map((categories, i) => {
            return (
              <tr key={categories.length}>
                <th scope="row">{i + 1}</th>
                <td>{categories}</td>
                <td>
                  <button className="btn btn-danger btn-all btn-delete">
                    Delete
                  </button>
                  <button className="btn btn-dark btn-all">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Categories;
