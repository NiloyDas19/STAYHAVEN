import { useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import { useEffect } from "react";
import Hotel from "../Hotel/Hotel";
import DocumentTitle from './../../documentTitle/DocumentTitle';


const Home = () => {
    const [hotels, setHotels] = useState([]);

    DocumentTitle('Home');

    const bannerHeading = <>
        <div className=" text-white">
            <h2 className="font-bold text-3xl md:text-7xl">STAY<span className="text-blue-500">HAVEN</span></h2>
            <p>Choose your destination</p>
        </div>
    </>

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHotels(data));
    }, []);

    return (
        <div className="space-y-10">

            {/* Banner section */}
            <div className="mx-auto px-5">
                <div className="carousel w-full rounded-3xl">
                    <div id="item1" className="carousel-item w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${image1})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                    <div id="item2" className="carousel-item w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${image2})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                    <div id="item3" className="carousel-item w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${image3})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                    <div id="item4" className="carousel-item w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${image4})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>

            {/* State Section */}
            <div className="mx-auto px-5">
                <div className="text-center space-y-5">
                    <h2 className="text-3xl font-bold">ESTATE</h2>
                    <p>
                        STAYHAVEN is a premier estate website dedicated to providing an unparalleled experience in the realm of hospitality. Our platform specializes in curating a diverse selection of accommodations, including hotels, motels, resorts, vacation rentals, lodges, guesthouses, and more. At STAYHAVEN, we understand that every traveler seeks a haven away from home, and our mission is to ensure that their stay is nothing short of extraordinary. Whether you are planning a luxurious resort getaway, a cozy lodge retreat, or an adventurous stay in a vacation rental, STAYHAVEN offers a comprehensive range of options to suit every preference and budget. With a commitment to excellence, personalized service, and seamless booking experiences, STAYHAVEN strives to make your journey memorable and your stay unforgettable. Welcome to your haven away from home – welcome to STAYHAVEN.
                    </p>
                </div>
            </div>

            {/* Estate section */}
            <div className="mx-auto px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
                }
            </div>
        </div>
    );
};

export default Home;