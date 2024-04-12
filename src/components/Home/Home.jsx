import { useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import { useEffect } from "react";
import Hotel from "../Hotel/Hotel";

const Home = () => {
    const [hotels, setHotels] = useState([]);

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
                    <div id="item2"  className="carousel-item w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${image2})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                    <div id="item3"  className="carousel-item w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${image3})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                    <div id="item4"  className="carousel-item w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${image4})` }}>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt officia atque, dolorum doloribus nihil tenetur nam amet voluptates ipsa quidem. Odit totam cumque dolore amet nostrum excepturi laboriosam mollitia!
                    Aliquam animi, corporis expedita exercitationem quasi dolorum nostrum quibusdam officiis eos quos minima sint nobis ut magni dicta mollitia, reiciendis tenetur assumenda cupiditate, maiores molestiae a ipsam repudiandae consectetur! Reprehenderit.
                    Atque, dicta? Ipsa nisi ipsam nulla, debitis natus corporis, placeat sequi, nobis hic harum aliquid error omnis ut. Dolores cumque id accusantium, facilis ad laudantium aliquam placeat ipsa earum officia.
                    Voluptatum, laborum eligendi laboriosam, quod commodi, veniam placeat minima distinctio recusandae labore nesciunt blanditiis rem architecto! Rerum, minima praesentium molestiae ullam, ipsa dignissimos nobis incidunt corrupti modi doloribus soluta ratione.
                    Aperiam ratione, esse saepe quaerat explicabo eius voluptates eos labore consequuntur sapiente. Deserunt, assumenda esse numquam, adipisci alias id saepe voluptates doloremque eum rem accusantium perspiciatis doloribus totam quam sunt!</p>
                </div>
            </div>

            {/* Estate section */}
            <div className="mx-auto px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel = {hotel}></Hotel>)
                }
            </div>
        </div>
    );
};

export default Home;