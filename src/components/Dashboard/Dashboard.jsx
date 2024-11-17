import React, { useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import AddToWishlist from '../AddToWishlist/AddToWishlist';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('cart');

    const activeComponent = () => {
        if (activeSection === 'wishlist') {
            return <AddToWishlist />;
        }
        return <AddToCart />;
    };

    return (
        <div>
            <Helmet>
                <title>Dashboard - Gadget Heaven</title>
                <meta name="description" content="View gadget statistics and performance." />
            </Helmet>
            <div className="pt-6 pb-32" style={{ background: "rgb(149, 56, 226)" }}>
                <div className="w-7/12 mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-white">Dashboard</h2>
                    <p className="text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                <div className="w-7/12 mx-auto text-center mt-6 space-x-4">

                    <button
                        className={`btn rounded-full px-12 font-bold 
                            ${activeSection === 'cart'
                                ? 'bg-white text-purple-500 border border-purple-500'
                                : 'bg-transparent text-white border-2 border-white hover:bg-purple-500 hover:text-white'}`}
                        onClick={() => setActiveSection('cart')}
                    >
                        Cart
                    </button>

                    <button
                        className={`btn rounded-full px-10 font-semibold 
                            ${activeSection === 'wishlist'
                                ? 'bg-white text-purple-500 borderw'
                                : 'bg-transparent text-white border-2 border-white hover:bg-purple-500 hover:text-white'}`}
                        onClick={() => setActiveSection('wishlist')}
                    >
                        Wishlist
                    </button>
                </div>
            </div>

            <div className="mt-8">
                {activeComponent()}
            </div>
        </div>
    );
};

export default Dashboard;
