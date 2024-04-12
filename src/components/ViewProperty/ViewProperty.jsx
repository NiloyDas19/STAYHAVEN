import { BiSolidArea } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { PiCirclesFourBold } from 'react-icons/pi';
import { useParams, useLoaderData } from 'react-router-dom';
import { MdOutlineSell } from "react-icons/md";


const ViewProperty = () => {
    const { id } = useParams();
    const hotels = useLoaderData();

    const hotel = hotels.find((hotel) => hotel.id === parseInt(id));

    console.log(id, hotels, hotel);

    return (
        <div className='mx-auto px-5 space-y-10 text-[#1C4456]'>
            <div className='rounded-2xl border-2 shadow-xl'>
                <img src={hotel.image} className='rounded-2xl w-full' alt="" />
            </div>
            <div className='rounded-2xl border-2 border-violet-500 p-5 space-y-10 shadow-xl'>
                <div className='text-center space-y-5 flex flex-col items-center'>
                    <h2 className="text-5xl font-bold">{hotel.estate_title}</h2>
                    <div className='flex gap-2 items-center'>
                        <FaLocationDot></FaLocationDot>
                        <p>{hotel.location}</p>
                    </div>
                    <div className='border-dashed border-2 w-full'></div>
                    <p>{hotel.description}</p>
                </div>
                <div className='flex justify-between font-medium'>
                    <div className='flex items-center gap-2'>
                        <BiSolidArea></BiSolidArea>
                        <p>{hotel.area}</p>
                    </div>
                    <div>
                        <p>{hotel.price}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 font-medium'>
                        <PiCirclesFourBold></PiCirclesFourBold>
                        <p>{hotel.segment_name}</p>
                    </div>
                    <div className='flex items-center gap-2 font-medium'>
                        <MdOutlineSell></MdOutlineSell>
                        <p>{hotel.status}</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='border-2 border-dashed w-full'></div>
                </div>
                <div className='space-y-5'>
                    <div className='text-center text-xl font-medium'>Facilities</div>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        {
                            hotel.facilities.map(facility => <div key={hotel.id} className='border rounded-2xl px-5 py-2 border-blue-500 text-center shadow-md'>{facility}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProperty;