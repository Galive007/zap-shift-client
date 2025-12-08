import React, { useState } from 'react';

const About = () => {


    const tabsData = [
        {
            id: 'story',
            label: 'Story',
            content: (
                <>
                    <p className="mb-4">
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p className="mb-4">
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                    <p>
                        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                    </p>
                </>
            ),
            activeClass: 'tab-active-story', // Custom class for the active tab color
        },
        { id: 'mission', label: 'Mission', content: <p>Our mission is to connect communities globally with seamless, rapid, and reliable logistics solutions...</p> },
        { id: 'success', label: 'Success', content: <p>Our success is measured by the satisfaction of our partners and customers...</p> },
        { id: 'team', label: 'Team & Others', content: <p>Meet the dedicated team that makes fast delivery possible...</p> },
    ];

    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const activeTabData = tabsData.find(tab => tab.id === activeTab);

    // Custom CSS for the active tab text color (matching the green in your image)
    const customActiveStyle = `
    .tab-active-story {
      color: #5B6A2E !important; /* The olive/green color from your image */
      border-color: #5B6A2E !important; /* Optional: adds a matching bottom border */
    }
  `;


    return (
        <div className='py-8'>
            <div>

                {/* // Outer Container */}
                <section className="bg-white py-12 px-4 rounded-2xl">

                    {/* Inject custom styles into the DOM (Alternative: use a separate CSS file) */}
                    <style>{customActiveStyle}</style>

                    {/* Center content and limit width */}
                    <div className="container mx-auto max-w-5xl">
                        <div className='max-w-2xl mb-3'>
                            <h1 className='text-5xl font-extrabold text-primary my-3'>About Us</h1>
                            <p className='text-[#606060]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                        {/* DaisyUI Tabs Navigation */}
                        <div className="tabs tabs-boxed bg-white mb-8 border-b border-gray-200">

                            {tabsData.map((tab) => (
                                <a
                                    key={tab.id}
                                    role="tab"
                                    className={`
                tab font-semibold text-lg md:text-xl transition-colors duration-200
                ${activeTab === tab.id ? `${tab.activeClass || 'tab-active-story'}` : 'text-gray-500'}
              `}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </a>
                            ))}
                        </div>

                        {/* Tab Content Area */}
                        <div className="py-6">
                            {/* This matches the simple body font style */}
                            <div className="text-gray-700 leading-relaxed font-light text-base md:text-lg">
                                {activeTabData ? activeTabData.content : null}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;


/*
            // name of each tab group should be unique 
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_4" className="tab hover:font-bold" aria-label="Story" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Story</div>

                <input type="radio" name="my_tabs_4" className="tab" aria-label="Mission" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Mission</div>

                <input type="radio" name="my_tabs_4" className="tab" aria-label="Success" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Success</div>

                <input type="radio" name="my_tabs_4" className="tab" aria-label="Team & Others" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Team & Others</div>

            </div>
*/