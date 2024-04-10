import {updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';



const UpdateProfile = () => {
    const navigate = useNavigate();

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
        <div className="hero min-h-screen bg-base-200 mx-auto">
            <div className="card w-full md:w-1/2 max-w-sm md:max-w-xl shadow-2xl bg-base-100 p-10">
                <div className="text-center mt-5">
                    <h2 className="text-2xl md:text-4xl text-blue-500 font-bold">Update Profile</h2>
                </div>
                <form className="w-full" onSubmit={handleUpdateProfile}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photoUrl" className="input input-bordered" required />
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