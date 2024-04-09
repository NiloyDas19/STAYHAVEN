import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="hero min-h-screen bg-base-200 mx-auto">
            <div className="card w-full md:w-1/2 max-w-sm md:max-w-xl shadow-2xl bg-base-100 p-10">
                <div className="text-center mt-5">
                    <h2 className="text-2xl md:text-4xl text-blue-500 font-bold">Login Here</h2>
                </div>
                <form className="w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                            <span className="absolute bottom-4 right-3"
                             onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? 
                                    <FaEye></FaEye>
                                    :<FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </label>
                        <input type={showPassword ? "text" : "password"} placeholder="password" name = "password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="text-center flex flex-col space-y-2 mt-5">
                    <div className="border-b-2 border-orange-500"></div>
                    <button className="btn btn-outline btn-secondary w-full"><FcGoogle></FcGoogle> Login With Google</button>
                    <button className="btn btn-outline btn-primary w-full"><FaGithub></FaGithub> Login With Github</button>
                    <p>Do not have an account ? <span className="font-bold text-red-600"><Link to="/register">Register here</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;