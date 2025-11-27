import React from "react";

const Team = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="display-1 text-primary text-center">04</h1>
          <h1 className="display-4 text-uppercase text-center mb-5">
            Meet Our Team
          </h1>
          <div
            className="owl-carousel team-carousel position-relative"
            style={{ padding: "0 30px" }}
          >
            <div className="team-item">
              <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-item">
              <img className="img-fluid w-100" src="img/team-4.jpg" alt="" />
              <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square mx-1"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
