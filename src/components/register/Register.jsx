import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { registerUser } from "../../services/userService";
import { Helmet } from "react-helmet";
const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, forceUpdate] = useState();
  const [policy, setPolicy] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی می باشد.",
        min: "کمتر از 5 کاراکتر نباید باشد",
        email: "ایمیل نوشته شده صحیح نمی باشد.",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );
  const reset = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      fullname,
      email,
      password,
    };

    try {
      if (validator.current.allValid()) {
        const { status } = await registerUser(user);
        if (status === 201) {
          toast.success("کاربرد با موفقیت ساخته شد", {
            position: "top-right",
            closeOnClick: true,
          });
          reset();
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      console.log(ex);
      toast.error("مشکلی پیش آمده است!!", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  };

  return (
    <main className="client-page">
      <div className="container-content">
        <header>
          <h2> عضویت در سایت </h2>
        </header>
        <Helmet><title>تاپلرن | عضویت در سایت</title></Helmet>

        <div className="form-layer">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="input-group">
              <span className="input-group-addon" id="username">
                <i className="zmdi zmdi-account"></i>
              </span>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="نام و نام خانوادگی"
                aria-describedby="username"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                  validator.current.showMessageFor("fullname");
                }}
              />
              {validator.current.message(
                "fullname",
                fullname,
                "required|min:5"
              )}
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="email-address">
                <i className="zmdi zmdi-email"></i>
              </span>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="ایمیل"
                aria-describedby="email-address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
              />
              {validator.current.message("email", email, "required|email")}
            </div>

            <div className="input-group">
              <span className="input-group-addon" id="password">
                <i className="zmdi zmdi-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="رمز عبور "
                aria-describedby="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />
              {validator.current.message(
                "password",
                password,
                "required|min:5"
              )}
            </div>

            <div className="accept-rules">
              <label>
                <input
                  type="checkbox"
                  name="policy"
                  value="policy"
                  onChange={(e) => {
                    setPolicy(e.currentTarget.checked);
                    validator.current.showMessageFor("policy")
                  }}
                />{" "}
                {validator.current.message("policy", policy, "required")}
                قوانین و مقررات سایت را میپذیرم{" "}
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
