import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import DocumentTitle from './../../documentTitle/DocumentTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const UserProfile = () => {
    const { user } = useContext(AuthContext);
    DocumentTitle('User Profile');
    useEffect(()=>{
        Aos.init({duration: 2000});

    },[]);
    return (
        <div className="flex min-h-screen items-center" data-aos = "zoom-in-down">
            <div className="w-[90%] md:w-1/2 mx-auto rounded-2xl bg-blue-100">
                <div className="grid  grid-cols-1 md:grid-cols-2 w-full rounded-2xl border-2 border-blue-500 shadow-2xl">
                    <div className="p-5">
                        <img src={user.photoURL}  className="w-full rounded-2xl mx-auto border-2 shadow-2xl border-orange-500" alt="User Image Not Found" />
                    </div>
                    <div className="flex flex-col p-5 gap-5">
                        <div className="flex-grow">
                            <h2 className=""><span className="font-bold">Name : </span> {user.displayName}</h2>
                            <h2 className=""><span className="font-bold">Email : </span> {user.email}</h2>
                        </div>
                        <div className="">
                            <Link to="/update-profile" className="btn btn-outline btn-primary shadow-2xl">Update Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;