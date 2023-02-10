import "./App.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Categories from "./pages/categories";
import CreateProduct from "./pages/createProduct";
import EditProduct from "./pages/editProduct";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<><Outlet/></>}>
                <Route path="" element={<Products />} />
                <Route path="new" element={<CreateProduct />} />
                <Route path="edit/:productId" element={<EditProduct />} />
              </Route>

              <Route path="categories" element={<Categories />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
