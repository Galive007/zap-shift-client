import React from 'react';
import icon from '../../../assets/service.png'

const Services = () => {
    const services = [
        {
            title: "Express & Standard Delivery",
            desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
            highlight: false,
        },
        {
            title: "Nationwide Delivery",
            desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
            highlight: true,
        },
        {
            title: "Fulfillment Solution",
            desc: "We offer customized service with inventory management support, online order processing, packaging, and after sales support.",
            highlight: false,
        },
        {
            title: "Cash on Home Delivery",
            desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
            highlight: false,
        },
        {
            title: "Corporate Service / Contract In Logistics",
            desc: "Customized corporate services which includes warehouse and inventory management support.",
            highlight: false,
        },
        {
            title: "Parcel Return",
            desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
            highlight: false,
        },
    ];
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-primary text-white py-14 px-8 rounded-3xl">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center">Our Services</h2>
                    <p className="text-center text-sm max-w-2xl mx-auto mt-2 mb-10">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-xl shadow-md transition-all duration-300 
                                    hover:bg-secondary 
                ${service.highlight ? "bg-white text-black scale-105" : "bg-white text-gray-800"}`}
                            >
                                <img
                                    src={icon}
                                    alt="icon"
                                    className="mx-auto mb-4 p-4 icon-linear-gradient-bg rounded-full "
                                />
                                <h3 className="font-bold text-lg text-center mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-center">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;