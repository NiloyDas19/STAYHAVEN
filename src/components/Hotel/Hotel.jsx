import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";
import { PiCirclesFourBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hotel = ({ hotel }) => {
    const { id, image, estate_title, location, area, segment_name, price } = hotel;
    useEffect(()=>{
        Aos.init({duration: 2000});

    },[]);
    console.log(id);

    return (
        <div className='rounded-2xl border-2 text-[#1C4456] flex flex-col space-y-5' data-aos = {(id & 1) ? "fade-up" : "fade-down" }>
            <div className=''>
                <img src={image} className='w-full rounded-t-2xl' alt="" />
            </div>
            <div className='space-y-2 px-5'>
                <h2 className="text-3xl font-bold">{estate_title}</h2>
                <div className='flex gap-2 items-center'>
                    <FaLocationDot></FaLocationDot>
                    <p>{location}</p>
                </div>
            </div>
            <div className='flex justify-between flex-grow  px-5'>
                <div>
                    <div className='flex items-center gap-2 font-medium'>
                        <BiSolidArea></BiSolidArea>
                        <p>{area}</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2 font-medium'>
                        <PiCirclesFourBold></PiCirclesFourBold>
                        <p>{segment_name}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center  px-5 pb-5'>
                <div>
                    <Link to={`/view-property/${id}`}>
                        <button className='btn btn-primary font-bold text-white bg-[#1C4456]'>View Property</button>
                    </Link>
                </div>
                <div>
                    <p className='font-medium'>{price}</p>
                </div>
            </div>
        </div>
    );
};


Hotel.propTypes = {
    hotel: PropTypes.object.isRequired,
}

export default Hotel;