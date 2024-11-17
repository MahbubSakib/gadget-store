import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ gadget }) => {
    const { product_image, product_title, price, product_id } = gadget
    // console.log(gadget);
    return (
        <div className=''>

            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={product_image}
                        alt="gadget"
                        className="rounded-xl h-40" />
                </figure>
                <div className="card-body">
                    <h2 className="font-semibold">{product_title}</h2>
                    <p className='text-gray-500'>Price: {price}$</p>
                    <div className="card-actions">
                        <Link to={`/gadget/${product_id}`}>
                            <button className="btn px-7 border border-lime-500 rounded-full">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;