import React, { useContext, useEffect, useState } from "react";
import "./MyAccount.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { assets } from "../../assets/assets";

const MyAccount = () => {
  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a
                className="list-group-item list-group-item-action active"
                data-toggle="list"
                href="#account-general"
              >
                General
              </a>
              <div className="card-body media align-items-center">
                <img
                  src={assets.user_icon}
                  alt=""
                  className="d-block ui-w-80"
                />
                <div className="media-body ml-4">
                  <label className="btn btn-outline-primary">
                    Upload new photo
                    <input type="file" className="account-settings-fileinput" />
                  </label>{" "}
                  &nbsp;
                  <div className="text-light small mt-1">
                    Allowed JPG, GIF or PNG. Max size of 800K
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              {/* General Tab */}
              <div className="tab-pane fade active show" id="account-general">
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control mb-1" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input type="text" className="form-control mb-1" />
                    <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.
                      <br />
                      <a href="javascript:void(0)">Resend confirmation</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
        &nbsp;
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
