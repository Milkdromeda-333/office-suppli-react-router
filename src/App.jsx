import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";

function App() {

  return (
    <>

      {/* NAV */}
      <nav className="navbar bg-dark text-light navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img src="https://img.icons8.com/emoji/96/000000/frog-emoji.png" alt="Logo" width="30" className="d-inline-block d-inline-block align-text-top" />
            OfficeSuppli
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbar">

            <div className="navbar-nav d-flex flex-col justify-content-between align-items-center gap-3">
              <Link to="/" className="nav-link text-white">Home</Link >
              <Link to="/products" className="nav-link text-white">Products</Link >
              <Link to="/about" className="nav-link text-white">About us</Link >
            </div>

          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:item" element={<Product />} />
      </Routes>

      {/* FOOTER */}
      <footer className=" bg-dark w-100 m-0 mt-5 p-0 text-light text-center position-fixed bottom-0">
        <p className=" mb-0 mt-3 p-3">Office Suppli Co &copy;</p>
      </footer>

    </>
  );
}

export default App;
