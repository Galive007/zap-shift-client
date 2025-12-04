import React from 'react';

const ServiceCard = () => {
    const services = [
  {
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    img: "/live-tracking.png",
  },
  {
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: "/safe-delivery.png",
  },
  {
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: "/safe-delivery.png",
  },
];
    return (
        <div className="max-w-6xl mx-auto px-6 border-t-2 border-dashed border-primary border-b-2 py-12 space-y-8">
      {services.map((item, index) => (
        <div
          key={index}
          className="bg-[#F2F5F7] rounded-2xl p-4 md:p-8 flex items-center gap-0 md:gap-8 shadow-sm flex-col md:flex-row"
        >
          {/* Left Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-40 h-40 object-contain"
          />

          {/* Dotted Divider */}
          <div className="border-1 border-dashed h-10 md:h-32 border-gray-400 rotate-90 md:rotate-0"></div>

          {/* Text Content */}
          <div>
            <h2 className="text-xl font-semibold text-primary">
              {item.title}
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
    );
};

export default ServiceCard;