import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://toplearnapi.ghorbany.dev/api/register",
        JSON.stringify(user),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(({ data, status }) => {
        if (status === 201) {
          toast.success("کاربرد با موفقیت ساخته شد", {
            position: "top-right",
            closeOnClick: true,
          });
          console.log(data);
          reset();
        }
      })
      .catch((ex) => {
        console.log(ex);
        toast.error("مشکلی پیش آمده است!!", {position: 'top-right', closeOnClick: true})

      });
  };
  const user = {
    fullname,
    email,
    password,
  };
  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> عضویت در سایت </h2>
        </header>

        <div className="form-layer">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="input-group">
              <span className="input-group-addon" id="username">
                <i className="zmdi zmdi-account"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="نام و نام خانوادگی"
                aria-describedby="username"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="email-address">
                <i className="zmdi zmdi-email"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="ایمیل"
                aria-describedby="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="password">
                <i className="zmdi zmdi-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="رمز عبور "
                aria-describedby="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="accept-rules">
              <label>
                <input type="checkbox" name="" /> قوانین و مقررات سایت را
                میپذیرم{" "}
              </label>
            </div>

            <div className="link">
              <a href="">
                {" "}
                <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !
              </a>
              <a href="">
                {" "}
                <i className="zmdi zmdi-account"></i> ورود به سایت{" "}
              </a>
            </div>

            <button className="btn btn-success"> عضویت در سایت </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
