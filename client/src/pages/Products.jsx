import { Link } from "react-router-dom";

export default function Products() {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-3">

            <h2>Here are our products:</h2>

            {/* PRODUCT LINKS */}
            <div className="border bg-secondary w-75 text-center p-5 d-flex flex-column gap-3  justify-content-center align-items-center">

                <Link to="/products/office-chair" className="nav-item text-white rounded-pill bg-dark w-25 text-decoration-none">Office chair</Link>

                <Link to="/products/trashcan" className="nav-item text-white rounded-pill bg-dark w-25 text-decoration-none">Office trash</Link>

                <Link to="/products/office-desk" className="nav-item text-white rounded-pill w-25 bg-dark text-decoration-none">Office desk</Link>

                <Link to="/products/office-lamp" className="nav-item text-white rounded-pill w-25 bg-dark text-decoration-none">Office lamp</Link>

            </div>
        </div>
    );
}