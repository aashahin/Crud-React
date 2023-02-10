import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    document.title = "Products";
    getAllProducts()
  }, []);
const getAllProducts = ()=>{
    fetch("http://localhost:4000/products")
        .then((data) => data.json())
        .then((data) => {
            setProducts(data);
        });
}
  const deleteProduct = (productId) => {
    Swal.fire({
        title: 'Are you sure to delete this product?',
        showCancelButton: true,
    }).then((data)=>{
        data.isConfirmed && fetch(`http://localhost:4000/products/${productId}`, {
            method: "DELETE",
        })
            .then((data) => data.json())
            .then(() => getAllProducts());
    })

  };
  return (
    <>
      <Link to="/products/new" className="btn btn-success btn-add">
        Add Product
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-all btn-delete"
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link className="btn btn-dark btn-all" to={`/products/edit/${product.id}`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
