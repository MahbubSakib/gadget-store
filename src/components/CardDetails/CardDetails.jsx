import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addToWishlist } from "../../utilities";
import ReactStars from "react-rating-stars-component"; // Make sure to import this correctly
import { Helmet } from "react-helmet-async";

const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [gadget, setGadget] = useState({});
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

    useEffect(() => {
        const singleGadget = data.find(gadget => gadget.product_id == id);
        setGadget(singleGadget);
    }, [data, id]);

    const handleAddToCart = (gadget) => {
        addToCart(gadget);
    };

    const handleWishlist = (gadget) => {
        addToWishlist(gadget);
        setIsAddedToWishlist(true);
    };

    return (
        <div>
            <Helmet>
                <title>Gadget - Gadget Heaven</title>
                <meta name="description" content="View gadget statistics and performance." />
            </Helmet>
            <div className="pt-6 pb-32" style={{ background: "rgb(149, 56, 226)" }}>
                <div className="w-7/12 mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-white">Product Details</h2>
                    <p className="text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl w-3/5 mx-auto -mt-20 mb-6">
                <figure>
                    <img src={gadget.product_image} alt="Movie" className="pl-6" />
                </figure>
                <div className="p-10 space-y-3">
                    <h2 className="card-title">{gadget.product_title}</h2>
                    <p>Price: ${gadget.price}</p>
                    <p className="inline-block rounded-full border border-green-400 text-green-400 bg-gray-200 px-2 py-1">
                        {gadget.availability}
                    </p>
                    <p>{gadget.description}</p>
                    <ol>
                        {gadget.Specification && gadget.Specification.length > 0 ? (
                            gadget.Specification.map((spec, index) => (
                                <li key={index}>
                                    {index + 1}. {spec}
                                </li>
                            ))
                        ) : ''}
                    </ol>
                    <p>Rating: {gadget.rating} </p>
                    <ReactStars
                        count={5}
                        value={gadget.rating}
                        size={24}
                        isHalf={true}
                        activeColor="#ffd700"
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                    />
                    <div className="space-x-3 flex">
                        <button
                            onClick={() => handleAddToCart(gadget)}
                            className="btn rounded-full text-white"
                            style={{ background: "rgb(149, 56, 226)" }}
                        >
                            Add To Cart <i className="fa-solid fa-cart-shopping"></i>
                        </button>

                        <button
                            onClick={() => handleWishlist(gadget)}
                            className={`text-xl border border-gray-300 rounded-full p-3 w-12 h-12 flex items-center justify-center ${isAddedToWishlist ? 'bg-gray-300' : ''}`}
                            disabled={isAddedToWishlist}
                        >
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
