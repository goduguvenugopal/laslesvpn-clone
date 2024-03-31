import React from "react";
import "../App.css";
import { useState } from "react";

const Navbar = () => {
  const [check, setCheck] = useState(true);

  const checkFunc = () => {
    setCheck(!check);
  };

  return (
    <>
      <nav className="fixed-top navbar navbar-expand-lg shadow navbar-light bg-white">
        <div className="container">
          <div
            className="navbar-brand d-flex align-items-center bg-dange"
            href="#"
          >
            <img className="logo-img" src="/images/icon.jpg" />
            <h5 className="vpn-name">
              Lasles<span className="only-vpn">VPN</span>
            </h5>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item" id="nav-names">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item" id="nav-names">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item" id="nav-names">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item" id="nav-names">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item" id="nav-names">
                <a className="nav-link" href="#">
                  help
                </a>
              </li>
            </ul>
            <div>
              <button
                id="signin"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Sign In
              </button>
              <button
                id="signup"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* signin modal  */}
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Sign In
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="form-floating mb-4">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Password</label>
              </div>

              <button
                style={{ height: "45px" }}
                className="btn btn-danger w-100"
              >
                Sign In
              </button>
              <div className="py-3 text-center ">
                <h5 className="mb-3">or</h5>
                <div
                  className="border d-flex justify-content-center rounded-2  w-100 align-items-center"
                  style={{ height: "45px", cursor: "pointer" }}
                >
                  <span class="material-symbols-outlined text-danger ">
                    mail
                  </span>
                  <h6 className="mt-2 " style={{ marginLeft: "10px" }}>
                    Continue with Email
                  </h6>
                </div>
                <div
                  style={{ height: "45px", cursor: "pointer" }}
                  className="mt-3 border d-flex justify-content-center rounded-2  w-100 align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-google text-primary "
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>
                  <h6 className="mt-2" style={{ marginLeft: "10px" }}>
                    Sign in with Google
                  </h6>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button className="border-0 bg-white fs-6">
                New User?
                <span className="text-danger"> Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* signup modal  */}
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Sign up
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Confirm password</label>
              </div>

              <input
                value={check}
                onClick={checkFunc}
                style={{ marginRight: "5px" }}
                type="checkbox"
                className="mb-3"
              />
              <span className="" style={{ lineHeight: "1" }}>
                I agree to VPN's
                <span
                  style={{ marginLeft: "5px", marginRight: "2px" }}
                  className="text-danger"
                >
                  Terms of service . Privacy policy
                </span>
                and
                <span style={{ marginLeft: "2px" }} className="text-danger ">
                  Content Policies
                </span>
              </span>
              <button
                disabled={check === true}
                style={{ height: "45px" }}
                className=" mt-3 btn btn-primary w-100"
              >
                Sign up
              </button>
              <div className="py-3 text-center ">
                <h5 className="mb-3">or</h5>

                <div
                  style={{ height: "45px", cursor: "pointer" }}
                  className="mt-3 border d-flex justify-content-center rounded-2  w-100 align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-google text-primary "
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>
                  <h6 className="mt-2" style={{ marginLeft: "10px" }}>
                    Sign in with Google
                  </h6>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button className="border-0 bg-white">
                Already have an account?
                <span className="text-danger"> Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
