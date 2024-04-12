import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Client = ({client}) => {
    const {id, client_name, client_profession, client_image, review} = client;

    useEffect(()=>{
        Aos.init({duration: 2000});

    },[]);

    return (
        <div className='flex flex-col-reverse md:flex-col rounded-xl border-2 border-blue-500 px-5 py-5 space-y-8 shadow-xl' data-aos = {(id & 1) ? "zoom-in-down" : "zoom-in-up"}>
            <div className='flex-grow text-2xl'>
                {
                    review
                }
            </div>
            <div className='border-2 border-dashed'>

            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center'>
                <div className='rounded-full'>
                    <img src={client_image} className='rounded-full w-20 h-20' alt="" />
                </div>
                <div className='space-y-1 text-center md:text-left'>
                    <h2 className='text-2xl font-bold'>{client_name}</h2>
                    <h4 className='font-semibold'>{client_profession}</h4>
                </div>
            </div>
        </div>
    );
};

Client.propTypes = {
    client: PropTypes.object.isRequired,
}

export default Client;