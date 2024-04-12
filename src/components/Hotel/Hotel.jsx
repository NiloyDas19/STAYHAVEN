import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidArea } from "react-icons/bi";
import { PiCirclesFourBold } from "react-icons/pi";



const Hotel = ({ hotel }) => {
    const { id, image, estate_title, location, area, segment_name, price } = hotel;
    console.log(id);
    return (
        <div className='rounded-2xl border-2 text-[#1C4456]'>
            <div className=''>
                <img src={image} className='w-full rounded-t-2xl' alt="" />
            </div>
            <div className='px-5 py-4 space-y-5 flex flex-col'>
                <div className='space-y-2'>
                    <h2 className="text-3xl font-bold">{estate_title}</h2>
                    <div className='flex gap-2 items-center'>
                        <FaLocationDot></FaLocationDot>
                        <p>{location}</p>
                    </div>
                </div>
                <div className='flex justify-between flex-grow'>
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
                <div className='flex justify-between items-center'>
                    <div>
                        <button className='btn btn-primary font-bold text-white bg-[#1C4456]'>View Property</button>
                    </div>
                    <div>
                        <p className='font-medium'>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


Hotel.propTypes = {
    hotel: PropTypes.object.isRequired,
}

export default Hotel;