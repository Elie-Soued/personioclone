import React, { useState } from "react";
import "./landingPage.css";
import undersurface from "../../images/undersurface.jpg";
import responsability from "../../images/responsability.jpg";
import { doRequest, URLLogin } from "../../Utils/ServiceUtils";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const response = await doRequest("post", URLLogin, {
      username,
      password,
    });

    if (response.data.code === 404) {
      alert(response.data.message);
    } else if (response.data.code === 401) {
      alert(response.data.message);
    } else {
      setTokenAndNavigate(response);
    }
  };

  const setTokenAndNavigate = (response) => {
    const token = response?.data.accessToken;
    localStorage.setItem("token", token);
    localStorage.setItem("user", username);
    navigate("/dashboard");
  };

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
                          value={username}
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
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
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
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
                          onClick={() => {
                            login();
                          }}
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
}
