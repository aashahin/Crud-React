import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    document.title = "Add Product";
  },[]);
  const formSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/products/`, {
      method: "POST",
      headers: {
        "Content-Type" : "Application/json"
      },
      body: JSON.stringify({
        title,
        description ,
        price ,
        image,
      })
    }).then((res)=>res.json())
        .then(() => navigate("/products"));
  };
  return (
    <>
      <form style={{marginTop: "10px"}} onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Product title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPrice(+e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default CreateProduct;
