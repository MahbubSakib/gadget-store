import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto rounded-3xl pt-40' style={{ background: "rgb(149, 56, 226)" }}>
                <div className='w-8/12 mx-auto space-y-6 pb-60'>
                    <h1 className='text-5xl text-center text-white'>
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h1>
                    <p className='w-8/12 mx-auto text-center text-white'>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div className='text-center'>
                        <button className='text-lg font-semibold bg-white px-5 py-2 rounded-full' style={{ color: "rgb(149, 56, 226)" }}>
                            <Link to={'/dashboard'}>Shop Now</Link> 
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-3/5 rounded-3xl mx-auto -mt-48' src="/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;