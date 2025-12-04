import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';



const Coverage = () => {
    const centers=useLoaderData()
    // console.log(centers);
    
    const position=[23.7104, 90.4074]
    return (
        <div>
            <div className="bg-white my-10 p-8 rounded-2xl max-w-5xl mx-auto">
                {/* Title */}
                <h2 className="text-2xl font-bold text-teal-900 mb-6">
                    We are available in 64 districts
                </h2>

                {/* Search Bar */}
                <div className="flex items-center w-full max-w-2xl bg-gray-100 mb-5 rounded-full overflow-hidden shadow-sm">
                    {/* Input Box */}
                    <div className="flex items-center px-4 w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.64 5.64a7.5 7.5 0 0 0 10.61 10.61Z"
                            />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search here"
                            className="input bg-transparent border-none focus:outline-none w-full"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="btn rounded-full bg-secondary text-black px-8 border-none hover:bg-lime-400">
                        Search
                    </button>
                </div>

                {/* Bottom Title */}
                <h3 className="text-lg font-semibold text-teal-900 mb-4">
                    We deliver almost all over Bangladesh
                </h3>

                {/* Map Preview Box */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-300 h-[800px]">
                    <MapContainer 
                        center={position}
                        zoom={7}
                        scrollWheelZoom={false}
                        className='h-[800px]'
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        
                        {
                            centers.map((center,index)=><Marker key={index} position={[center.latitude,center.longitude]}>
                            <Popup>
                                <em>{center.city}</em>,<strong>{center.district}</strong> <br /> Covered Area: {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>)
                        }

                        

                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Coverage;