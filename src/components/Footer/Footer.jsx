import { FaFacebook, FaHome, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center p-10 bg-primary text-primary-content space-y-5 text-center">
            <div>
                <FaHome className="w-10 h-10"></FaHome>
            </div>
            <div className="space-y-2">
                <p className="font-bold">
                    <span className="text-3xl">STAYHAVEN</span>
                </p>
                <p className="font-semibold">
                The Ultimate ESTATE Destination
                </p>
                <p>Copyright © 2024 - All right reserved</p>
            </div>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a><FaFacebook></FaFacebook></a>
                    <a><FaTwitter></FaTwitter></a>
                    <a><FaInstagram></FaInstagram></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;