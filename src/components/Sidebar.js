import {Link} from "react-router-dom";

function Sidebar(){
    return (
        <>
        <ul className="list-sidebar">
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/categories">Categories</Link>
            </li>
        </ul>
        </>
    )
}
export default Sidebar