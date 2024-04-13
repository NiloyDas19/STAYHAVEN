import {updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import DocumentTitle from './../../documentTitle/DocumentTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const UpdateProfile = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    DocumentTitle('Update Profile');

    useEffect(()=>{
        Aos.init({duration: 2000});

    },[]);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        updateProfile(auth.currentUser, {
            displayName: e.target.name.value, photoURL: e.target.photoUrl.value
        }).then(() => {
            console.log("what happens !");
            swal({
                title: "Good job!",
                text: "Profile Updated Successfully!",
                icon: "success",
            })
            .then(ok => {
                if(ok)  {
                    window.location.reload();
                }
            })
            navigate("/");
        }).catch((error) => {
            // An error occurred
            // ...
            swal({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
            console.log(error);
        });
        e.target.reset();
    }


    return (
        <div className="hero min-h-screen mx-auto" data-aos = "zoom-in-down">
            <div className="card w-full md:w-1/2 max-w-sm md:max-w-xl shadow-2xl bg-base-100 p-10">
                <div className="text-center mt-5">
                    <h2 className="text-2xl md:text-4xl text-blue-500 font-bold">Update Profile</h2>
                </div>
                <form className="w-full" onSubmit={handleUpdateProfile}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder={user.displayName} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder={user.email} name="email" className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder={user.photoURL} name="photoUrl" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;