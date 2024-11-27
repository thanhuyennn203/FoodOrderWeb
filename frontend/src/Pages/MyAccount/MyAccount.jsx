import React, { useContext, useEffect, useState } from "react";
import "./MyAccount.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const { user, logout } = useContext(StoreContext);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userId = user;

    if (user) {
      fetch("http://localhost:8801/api/myaccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      })
        .then((res) => res.json())
        .then((data) => {
          const acc = data[0];
          console.log(acc);
          setUserInfo({
            fullname: acc.full_name,
            email: acc.email,
            phone: acc.phone_number,
            company: acc.company,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]); // Đảm bảo hook này chạy khi `user` thay đổi

  const handleEditAccount = (e) => {
    e.preventDefault();
    console.log("edit: ", userInfo);
    fetch("http://localhost:8801/api/editAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInfo }),
    })
      .then((res) => res.json())
      .then((data) => { })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

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
                    <label className="form-label">Full name</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setUserInfo((prev) => ({
                          ...prev,
                          fullname: e.target.value,
                        }));
                      }}
                      value={userInfo.fullname}
                      className="form-control mb-1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      value={userInfo.email}
                      // onChange={(e) => {
                      //   setUserInfo((prev) => ({
                      //     ...prev,
                      //     email: e.target.value,
                      //   }));
                      // }}
                      readOnly
                      className="form-control"
                    />
                    <div className="alert alert-warning mt-3">
                      You can not change your email address now.
                      {/* <br /> */}
                      {/* <a href="javascript:void(0)">Resend confirmation</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button
          type="button"
          onClick={handleEditAccount}
          className="btn btn-primary"
        >
          Save changes
        </button>
        &nbsp;
        <button
          type="button"
          onClick={handleLogout}
          className="btn btn-default"
        >
          Log out
        </button>

        <button
          type="button"
          onClick={(e) => {
            navigate("/myOrder");
          }}
          className="btn btn-primary"
        >
          My order
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
