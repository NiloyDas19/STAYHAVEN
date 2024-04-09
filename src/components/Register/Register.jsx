import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {createUserWithEmailPassword, createWithGoogle, createWithFacebook} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password  = e.target.password.value;
        console.log(name, email, photoUrl, password);
        createUserWithEmailPassword(email, password)
        .then(result => {
            console.log("registration Successful", result.user);
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoUrl
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
                console.log(error.message);
              });
            result.user.displayName = name;
            result.user.photoURL = photoUrl;
            navigate("/");
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleRegisterWithGoogle = () => {
        createWithGoogle()
        .then((result) => {
            console.log(result.user);
            navigate("/");
        })
        .catch((error) => {
            console.log(error.message);
        })
    }


    const handleRegisterWithFacebook = () => {
        createWithFacebook()
        .then(result => {
            console.log(result.user);
            navigate("/");
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    return (
        <div className="hero min-h-screen bg-base-200 mx-auto">
            <div className="card w-full md:w-1/2 max-w-sm md:max-w-xl shadow-2xl bg-base-100 p-10">
                <div className="text-center mt-5">
                    <h2 className="text-2xl md:text-4xl text-blue-500 font-bold">Register Here</h2>
                </div>
                <form className="w-full" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photoUrl" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                            <span className="absolute bottom-4 right-3"
                                onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ?
                                        <FaEye></FaEye>
                                        : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </label>
                        <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className="text-center flex flex-col space-y-2 mt-5">
                    <div className="border-b-2 border-orange-500"></div>
                    <button className="btn btn-outline btn-secondary w-full" onClick={handleRegisterWithGoogle}><FcGoogle></FcGoogle> Register With Google</button>
                    <button className="btn btn-outline w-full" onClick={handleRegisterWithFacebook}><FaFacebook></FaFacebook> Register With Facebook</button>
                    <p>Already have an account ? <span className="font-bold text-blue-600"><Link to="/login">Login Here</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;