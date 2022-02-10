import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";
import { useNavigate } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import { Lines } from 'react-preloaders';
import { Helmet } from "react-helmet";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, forceUpdate] = useState();
    const [loading, setLoading] = useState(false)
    const validator = useRef(new SimpleReactValidator({
        messages: {

            required: "پر کردن این فیلد الزامی می باشد.",
            min: "کمتر از 5 کاراکتر نباید باشد",
            email: "ایمیل نوشته شده صحیح نمی باشد.",
        },
        element: (message) => <div style={{ color: "red" }}>{message}</div>,
    }))
    const reset = () => {
        setEmail("");
        setPassword("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email,
            password,
        };
        try {
            if (validator.current.allValid) {
                setLoading(true);
                const { data, status } = await loginUser(user);
                if (status === 200) {
                    toast.success("ورود موفقیت آمیز بود", {
                        position: "top-right",
                        closeOnClick: true,
                    });
                    console.log(data);
                    localStorage.setItem("token", data.token);
                    setLoading(false);
                    navigate("/", { replace: true });
                    reset();
                }
                else {
                    validator.current.showMessages();
                    setLoading(false);
                    forceUpdate(1);
                }
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
                    <h2> ورود به سایت </h2>
                </header>
                <Helmet><title>تاپلرن | ورود به سایت</title></Helmet>
                {/* {loading ? (
                    <Lines time={0} color="#fc03d7" customLoading = {loading}/>
                ) : null} */}
                <div className="form-layer">
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="input-group">
                            <span className="input-group-addon" id="email-address">
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                value={email}
                                name="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor("email");
                                }}
                                type="text"
                                className="form-control"
                                placeholder="ایمیل"
                                aria-describedby="email-address"

                            />
                            {validator.current.message(
                                "email",
                                email,
                                "required|email"
                            )}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                value={password}
                                name="password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    validator.current.showMessageFor("password");
                                }
                                }
                                type="password"
                                className="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                            />
                            {validator.current.message(
                                "password",
                                password,
                                "required|min:5"
                            )}
                        </div>

                        <div className="remember-me">
                            <label>
                                <input type="checkbox" name="" /> مرا بخاطر بسپار{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده
                                ام !
                            </a>
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-account"></i> عضویت در سایت{" "}
                            </a>
                        </div>

                        <button className="btn btn-success"> ورود به سایت </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
