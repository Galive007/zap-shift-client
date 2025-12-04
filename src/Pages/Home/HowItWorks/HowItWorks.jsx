import React from 'react';
import { FaTruckPickup, FaMoneyBillWave, FaBuilding, FaWarehouse } from "react-icons/fa";
const HowItWorks = () => {
    const steps = [
        {
            icon: <FaTruckPickup size={40} />,
            title: "Booking Pick & Drop",
            text: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <FaMoneyBillWave size={40} />,
            title: "Cash On Delivery",
            text: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <FaWarehouse size={40} />,
            title: "Delivery Hub",
            text: "From personal packages to business shipments — we deliver on time, every time.",
        },
        {
            icon: <FaBuilding size={40} />,
            title: "Booking SME & Corporate",
            text: "From personal packages to business shipments — we deliver on time, every time.",
        },
    ];
    return (
        <div className="py-6 md:py-10 lg:py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl text-primary font-bold mb-5 md:mb-7 lg:mb-10">How it Works</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-teal-800 mb-4">{step.icon}</div>
                            <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;