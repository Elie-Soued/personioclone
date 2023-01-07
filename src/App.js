import React from "react";
import "./App.css";
import undersurface from "../src/images/undersurface.jpg";
import responsability from "../src/images/responsability.jpg";

const App = () => {
  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pb-1" id="title">
                        <span id="my">My</span> tech11
                      </h4>
                    </div>

                    <form>
                      <div>
                        <input
                          type="email"
                          id="form2Example11"
                          style={{ border: "1px solid lightgray" }}
                          className="form-control"
                          placeholder="Enter your username"
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example11"
                        ></label>
                      </div>

                      <div>
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example22"
                        ></label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg  mb-3"
                          type="button"
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="rounded-top col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div>
                    <img
                      className="w-100"
                      src={responsability}
                      style={{ borderRadius: "5px" }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <img
                className="w-100"
                src={undersurface}
                style={{ borderRadius: "5px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
