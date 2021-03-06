import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./features/router/About";
import AuthRouter from "./features/router/AuthRouter";
import DetailProfile from "./features/router/DetailProfile";
import Login from "./features/router/Login";
import Profile from "./features/router/Profile";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";

const invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];
function App() {
  const navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                {/* chuy???n m??n h??nh qua view */}
                <Link className="nav-link" to={"/profile"}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  };
  return (
    <div className="App">
      {navbar()}
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/profile"
          element={
            <AuthRouter>
              <Profile invoices={invoices} />
            </AuthRouter>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/profile/:name"
          element={
            <AuthRouter>
              <DetailProfile invoices={invoices} />
            </AuthRouter>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// chuy???n router (link, navigate)
// get data t??? router v??? s??? d???ng useParams
// authen router: kho?? l???i nh???ng router m?? khi ch??a ????ng nh???p ko ??c truy c???p (chuy???n l???i router login)
